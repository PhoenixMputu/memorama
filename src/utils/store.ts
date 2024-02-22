import { create } from 'zustand';
import { StoreApi, UseBoundStore } from 'zustand'

interface User {
	token: string;
	id: number;
	name: string;
	firstName: string;
	email: string;
}

interface AppStore {
	user: User;

	setUser: (user: User) => void;
}


type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never

const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S,
) => {
  let store = _store as WithSelectors<typeof _store>
  store.use = {}
  for (let k of Object.keys(store.getState())) {
    ;(store.use as any)[k] = () => store((s) => s[k as keyof typeof s])
  }

  return store
}

const useAppStoreBase = create<AppStore>()((set) => ({
	user: {
        token: '',
        id: 0,
        name: '',
        firstName: '',
        email: ''
    },

	setUser: (user) => {
        set((state) => ({
			user: {
				...state.user,
				token: user.token,
				id: user.id,
				name: user.name,
				firstName: user.firstName,
				email: user.email
			}
		}));
    },
}));

export const useAppStore = createSelectors(useAppStoreBase);
