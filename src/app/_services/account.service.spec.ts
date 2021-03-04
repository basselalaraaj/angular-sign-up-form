import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AccountService } from './account.service';
import { defer, Observable } from 'rxjs';
import { User } from '@app/_models';

export function asyncData<T>(data: T): Observable<T> {
  return defer(() => Promise.resolve(data));
}

describe('AccountService', () => {
  let service: AccountService;
  let httpClientSpy: { post: jasmine.Spy };

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
  );

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new AccountService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return register data of user', () => {
    const user: User = {
      firstName: 'Peter',
      lastName: 'John',
      email: 'test@example.nl',
      password: 'Pa$$word!',
    };
    const expectedUsers = [
      { firstName: 'John', lastName: 'Doe', email: 'johndoe@gmail.com' },
    ];

    httpClientSpy.post.and.returnValue(asyncData(expectedUsers));
    service.register(user).subscribe((users) => {
      return expect(users).toEqual(expectedUsers, 'expected users');
    }, fail);
    expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
  });
});
