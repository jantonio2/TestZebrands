import {describe, expect, test} from '@jest/globals';
import { usersReducer } from '../../../context/users/usersReducer';

describe('Test on usersReducer', () => {
  test('should return default state', () => {

    const state = usersReducer({ isLoading: false, users: [] }, { type: 'setUsers', payload: [] });
    expect( state ).toEqual({ isLoading: false, users: [] });
    
  })
})