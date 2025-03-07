import * as React from 'react';
import type { AppCheck } from 'firebase/app-check';
import type { Auth } from 'firebase/auth';
import type { Analytics } from 'firebase/analytics';
import type { Database } from 'firebase/database';
import type { Firestore } from 'firebase/firestore';
import type { Functions } from 'firebase/functions';
import type { FirebasePerformance } from 'firebase/performance';
import type { FirebaseStorage } from 'firebase/storage';
import type { RemoteConfig } from 'firebase/remote-config';
import { FirebaseApp } from 'firebase/app';
import { ObservableStatus } from './useObservable';
import { ReactFireOptions } from '.';
export declare const AppCheckSdkContext: React.Context<AppCheck | undefined>;
export declare const AuthSdkContext: React.Context<Auth | undefined>;
export declare const AnalyticsSdkContext: React.Context<Analytics | undefined>;
export declare const DatabaseSdkContext: React.Context<Database | undefined>;
export declare const FirestoreSdkContext: React.Context<Firestore | undefined>;
export declare const FunctionsSdkContext: React.Context<Functions | undefined>;
export declare const StorageSdkContext: React.Context<FirebaseStorage | undefined>;
export declare const PerformanceSdkContext: React.Context<FirebasePerformance | undefined>;
export declare const RemoteConfigSdkContext: React.Context<RemoteConfig | undefined>;
declare type FirebaseSdks = Analytics | AppCheck | Auth | Database | Firestore | FirebasePerformance | FirebaseStorage | Functions | RemoteConfig;
export declare const AppCheckProvider: (props: React.PropsWithChildren<{
    sdk: AppCheck;
}>) => JSX.Element;
export declare const AuthProvider: (props: React.PropsWithChildren<{
    sdk: Auth;
}>) => JSX.Element;
export declare const AnalyticsProvider: (props: React.PropsWithChildren<{
    sdk: Analytics;
}>) => JSX.Element;
export declare const DatabaseProvider: (props: React.PropsWithChildren<{
    sdk: Database;
}>) => JSX.Element;
export declare const FirestoreProvider: (props: React.PropsWithChildren<{
    sdk: Firestore;
}>) => JSX.Element;
export declare const FunctionsProvider: (props: React.PropsWithChildren<{
    sdk: Functions;
}>) => JSX.Element;
export declare const PerformanceProvider: (props: React.PropsWithChildren<{
    sdk: FirebasePerformance;
}>) => JSX.Element;
export declare const StorageProvider: (props: React.PropsWithChildren<{
    sdk: FirebaseStorage;
}>) => JSX.Element;
export declare const RemoteConfigProvider: (props: React.PropsWithChildren<{
    sdk: RemoteConfig;
}>) => JSX.Element;
export declare const useAppCheck: () => AppCheck;
export declare const useAuth: () => Auth;
export declare const useAnalytics: () => Analytics;
export declare const useDatabase: () => Database;
export declare const useFirestore: () => Firestore;
export declare const useFunctions: () => Functions;
export declare const usePerformance: () => FirebasePerformance;
export declare const useStorage: () => FirebaseStorage;
export declare const useRemoteConfig: () => RemoteConfig;
declare type InitSdkHook<Sdk extends FirebaseSdks> = (initializer: (firebaseApp: FirebaseApp) => Promise<Sdk>, options?: ReactFireOptions<Sdk>) => ObservableStatus<Sdk>;
export declare const useInitAppCheck: InitSdkHook<AppCheck>;
export declare const useInitAuth: InitSdkHook<Auth>;
export declare const useInitAnalytics: InitSdkHook<Analytics>;
export declare const useInitDatabase: InitSdkHook<Database>;
export declare const useInitFirestore: InitSdkHook<Firestore>;
export declare const useInitFunctions: InitSdkHook<Functions>;
export declare const useInitPerformance: InitSdkHook<FirebasePerformance>;
export declare const useInitRemoteConfig: InitSdkHook<RemoteConfig>;
export declare const useInitStorage: InitSdkHook<FirebaseStorage>;
export {};
