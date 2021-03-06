import type { User } from './user/types';
import type { IUserContext } from './user/user-context';

export const userMock: User = {
    name: 'Some name',
    favoritePokemonType: 'fire'
};
export const userContextMock: IUserContext = {
    user: null,
    getUser: async function () {
        this.user = { ...userMock };
        this.alreadyFetchedUser = true;
    },
    saveUser: async function () {
        this.alreadyFetchedUser = true;
    },
    alreadyFetchedUser: true
};
