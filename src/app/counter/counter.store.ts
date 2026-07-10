import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { Dispatcher } from '@ngrx/signals/events';
 import { on, withReducer } from '@ngrx/signals/events';
import { eventGroup } from '@ngrx/signals/events'; 
import { type } from '@ngrx/signals';
import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { Events } from '@ngrx/signals/events'; // withEffects
import { mapResponse } from '@ngrx/operators';
import { inject } from '@angular/core';
import { switchMap } from 'rxjs';
// Define the shape of the state
export interface CounterState {
  count: number;
}

// Set the initial state
const initialState: CounterState = {
  count: 0,
};

// Create the SignalStore
export const CounterStore = signalStore(
  { providedIn: 'root' }, // Makes the store available app-wide
  withState(initialState), // Adds the state to the store
  
  // Adds methods to update the state
  withMethods((store) => ({
    increment() {
      // Use patchState to immutably update the state
      patchState(store, { count: store.count() + 1 });
    },
    decrement() {
      patchState(store, { count: store.count() - 1 });
    },
    reset() {
      patchState(store, initialState);
    },
  }))
);

export interface Dessert {
  id: number;
  originalName: string;
  englishName: string;
  description: string;
  price: number;
}

export const dessertDetailStoreEvents = eventGroup({
  source: 'Dessert Detail Store',
  events: {
    dessertUpdated: type<{
        dessert: Dessert
    }>(),
  },
});

// export const DessertDetailStore = signalStore(
//   [...]
//   withProps(() => ({
//     [...],
//     _dispatcher: inject(Dispatcher)
//   })),
//   withMethods((store) => ({
//     [...],
//     save(id: number, dessert: Partial<Dessert>): void {

//       [...]
//       // Trigger event
//       const event = dessertDetailStoreEvents.dessertUpdated({
//         dessert: savedDessert
//       });
//       store._dispatcher.dispatch(event);

//     },
//   })),
// )
 

// export const DessertStore = signalStore(
//   { providedIn: 'root' },
//   withState({
//     […]
//     desserts: [] as Dessert[],
//   }),
//   withReducer(
//     on(dessertDetailStoreEvents.dessertUpdated, ({ payload }) => {
//       const updated = payload.dessert;
//       return (store) => ({
//         desserts: store.desserts.map((d) =>
//           d.id === updated.id ? updated : d,
//         ),
//       });
//     }),
//   ),
//   […]
// )
// // withReducer(
// //   on(dessertDetailStoreEvents.dessertUpdated, ({ payload }) => {
// //     return updateDessert(updated);
// //   }),
// // ),
// export type DessertSlice = {
//   desserts: Dessert[];
// };

// function updateDessert(updated: Dessert) {
//   return (store: DessertSlice) => ({
//     desserts: store.desserts.map((d) => 
//           (d.id === updated.id ? updated : d)),
//   });
// }

// export const dessertEvents = eventGroup({
//   source: 'Dessert Feature',
//   events: {
//     loadDesserts: type<{
//         originalName: string,
//         englishName: string,
//     }>(),
//     loadDessertsSuccess: type<{
//         desserts: Dessert[]
//     }>(),
//     loadDessertsError: type<{
//         error: string
//     }>(),
//   },
// });

// export const DessertStore = signalStore(
//   { providedIn: 'root' },
//   withState({
//     filter: {
//       originalName: '',
//       englishName: '',
//     },
//     loading: false,
//     desserts: [] as Dessert[],
//     error: '',
//   }),
//   withReducer(
//     […],
//     on(dessertEvents.loadDesserts, ({ payload }) => {
//       return {
//         filter: payload,
//         loading: true,
//       };
//     }),
//     on(dessertEvents.loadDessertsSuccess, ({ payload }) => {
//       return {
//         desserts: payload.desserts,
//         loading: false,
//       };
//     }),
//     on(dessertEvents.loadDessertsError, ({ payload }) => {
//       return {
//         error: payload.error,
//         loading: false,
//       };
//     }),
//   ),
//   […]
// );

// export const DessertStore = signalStore(
//   […],
//   withProps(() => ({
//     _dessertService: inject(DessertService),
//     _toastService: inject(ToastService),
//     _events: inject(Events),
//   })),
//   […]
//   withEffects((store) => ({
//     loadDesserts$: store._events.on(dessertEvents.loadDesserts).pipe(
//       switchMap((e) =>
//         store._dessertService.find(e.payload).pipe(
//           mapResponse({
//             next: (desserts) => dessertEvents.loadDessertsSuccess({ desserts }),
//             error: (error) =>
//               dessertEvents.loadDessertsError({ error: String(error) }),
//           }),
//         ),
//       ),
//     ),
//   })),
// );

// this.#dispatcher.dispatch(
//   dessertEvents.loadDesserts({
//     originalName: this.originalName(),
//     englishName: this.englishName(),
//   }),
// );


// export const DessertStore = signalStore(
//   […]
//   withDevtools('DessertStore')
// );
// // ---------------
//  readonly #events = inject(Events);
//  constructor() {
//       this.#events
//         .on(/* The event we want */)
//         .pipe(takeUntilDestroyed())
//         .subscribe(() => /* Process */ );
//  }

//  export interface SettingsState {
//   theme: "light" | "dark" | "system";
//   notifications: boolean;
//   language: string;
//   lastUpdated: string | null;
//   errorMessage: string | null;
// }

// export const initialState: SettingsState = {
//   theme: "light",
//   notifications: false,
//   language: "en",
//   lastUpdated: null,
//   errorMessage: null,
// };

// export const settingsEvents = eventGroup({
//   source: "Settings",
//   events: {
//     themeChanged: type<{ theme: "light" | "dark" | "system" }>(),
//     notificationsChanged: type<{ notificationsEnabled: boolean }>(),
//     languageChanged: type<{ language: string }>(),
//     loadSettings: type<void>(),
//     saveSettings: type<void>(),
//   },
// });

// export const settingsApiEvents = eventGroup({
//   source: "SettingsApi",
//   events: {
//     settingsLoadFailed: type<{ error: string }>(),
//     settingsSaved: type<{ settings: Omit<SettingsState, "errorMessage"> }>(),
//     settingsLoaded: type<{ settings: Omit<SettingsState, "errorMessage"> }>(),
//   },
// });

// export const SettingsStore = signalStore(
//   withState<SettingsState>(initialState),
//   withSettingsReducer(),
//   withThemeFeature(),
//   withSettingsPersistenceFeature(),
//   withHooks({
//     onInit: () => {
//       const dispatch = injectDispatch(settingsEvents);
//       dispatch.loadSettings();
//     },
//   })
// );


// export function withSettingsReducer() {
//   return signalStoreFeature(
//     withReducer(
//       on(settingsEvents.themeChanged, ({ payload }) => ({
//         theme: payload.theme,
//       })),
//       on(settingsEvents.notificationsChanged, ({ payload }) => ({
//         notifications: payload.notificationsEnabled,
//       })),
//       on(settingsEvents.languageChanged, ({ payload }) => ({
//         language: payload.language,
//       })),
//       on(settingsApiEvents.settingsSaved, () => ({
//         lastUpdated: new Date().toISOString(),
//       })),
//       on(settingsApiEvents.settingsLoadFailed, ({ payload }) => ({
//         errorMessage: payload.error,
//       })),
//       on(settingsApiEvents.settingsLoaded, ({ payload }) => payload.settings)
//     )
//   );
// }


// export function withThemeFeature() {
//   return signalStoreFeature(
//     withEffects(
//       (store, events = inject(Events)) => ({
//         loadTheme$: events.on(
//           settingsApiEvents.settingsSaved,
//           settingsApiEvents.settingsLoaded).pipe(
//           tap(({ payload }) => document.documentElement.setAttribute(
//                                                           'data-theme', 
//                                                                     payload.settings.theme))
//         ),
//       })
//     )
//   )
// }

// export class SettingsComponent {
//   protected readonly store = inject(SettingsStore);
//   protected readonly dispatch = injectDispatch(settingsEvents);

//   onThemeChange(theme: 'light' | 'dark' | 'system') {
//     this.dispatch.themeChanged({ theme });
//   }

//   onNotificationsChange(notifications: boolean) {
//     this.dispatch.notificationsChanged({ notificationsEnabled: notifications });
//   }

//   onLanguageChange(language: string) {
//     this.dispatch.languageChanged({ language });
//   }

//   onSave() {
//     this.dispatch.saveSettings();
//   }
// }
// // https://stackblitz.com/~/github.com/wolfmanfx/signal-events
// // https://dev.to/ngrx/announcing-events-plugin-for-ngrx-signalstore-a-modern-take-on-flux-architecture-4dhn
// export type StoreType<T> = {
//     [K in keyof T]: Signal<T[K]>;
// }

// export function withMetaReducer<T>(metaReducer: (ev: EventInstance<string, unknown>, store: T) => void) {
//   return signalStoreFeature(
//     withMethods((store) => ({
//       metaReducer: rxMethod<EventInstance<string, unknown>>((c$) =>
//         c$.pipe(
//           tap((ev) => {
//             metaReducer(ev, store as T);
//           })
//         )
//       ),
//     })),
//     withHooks({
//       onInit: ({ metaReducer }) => {
//         metaReducer(inject(Events).on());
//       },
//     })
//   );
// }

//  withMetaReducer<StoreType<SettingsState>>((*ev*, *store*) => {    
//       console.log(MetaReducer: ${*ev*.type});    
//       console.log(*store*.theme());  
//     })