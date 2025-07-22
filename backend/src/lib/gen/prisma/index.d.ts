
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model CryptoWallets
 * 
 */
export type CryptoWallets = $Result.DefaultSelection<Prisma.$CryptoWalletsPayload>
/**
 * Model BankAccount
 * 
 */
export type BankAccount = $Result.DefaultSelection<Prisma.$BankAccountPayload>
/**
 * Model Adverts
 * 
 */
export type Adverts = $Result.DefaultSelection<Prisma.$AdvertsPayload>
/**
 * Model Orders
 * 
 */
export type Orders = $Result.DefaultSelection<Prisma.$OrdersPayload>
/**
 * Model ExchangeRates
 * 
 */
export type ExchangeRates = $Result.DefaultSelection<Prisma.$ExchangeRatesPayload>
/**
 * Model AccessTokens
 * 
 */
export type AccessTokens = $Result.DefaultSelection<Prisma.$AccessTokensPayload>
/**
 * Model Transactions
 * 
 */
export type Transactions = $Result.DefaultSelection<Prisma.$TransactionsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MerchantStatus: {
  Online: 'Online',
  Offline: 'Offline',
  Wait: 'Wait'
};

export type MerchantStatus = (typeof MerchantStatus)[keyof typeof MerchantStatus]


export const UserRole: {
  Regular: 'Regular',
  P2pMerchant: 'P2pMerchant',
  CustomeSupport: 'CustomeSupport'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const ChainType: {
  Ethereum: 'Ethereum',
  Solana: 'Solana',
  Cosmos: 'Cosmos'
};

export type ChainType = (typeof ChainType)[keyof typeof ChainType]


export const CredentialsStatus: {
  REVIEW: 'REVIEW',
  VALID: 'VALID',
  FAILED: 'FAILED',
  NONE: 'NONE'
};

export type CredentialsStatus = (typeof CredentialsStatus)[keyof typeof CredentialsStatus]


export const TradeType: {
  BUY: 'BUY',
  SELL: 'SELL'
};

export type TradeType = (typeof TradeType)[keyof typeof TradeType]


export const CountryCode: {
  NG: 'NG',
  GH: 'GH',
  KE: 'KE',
  MW: 'MW',
  RW: 'RW',
  TZ: 'TZ',
  UG: 'UG',
  ZA: 'ZA'
};

export type CountryCode = (typeof CountryCode)[keyof typeof CountryCode]


export const AdvertStatus: {
  OPEN: 'OPEN',
  CLOSE: 'CLOSE'
};

export type AdvertStatus = (typeof AdvertStatus)[keyof typeof AdvertStatus]


export const OrderMode: {
  MARKET: 'MARKET',
  EXPRESS: 'EXPRESS'
};

export type OrderMode = (typeof OrderMode)[keyof typeof OrderMode]


export const OrderStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  CANCEL: 'CANCEL',
  APPEAL: 'APPEAL'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const OrderActions: {
  LockCrypto: 'LockCrypto',
  FaitSent: 'FaitSent',
  FaitReceived: 'FaitReceived',
  ReleaseCrypto: 'ReleaseCrypto',
  Appeal: 'Appeal',
  Cancel: 'Cancel'
};

export type OrderActions = (typeof OrderActions)[keyof typeof OrderActions]


export const CurrencyType: {
  FIAT: 'FIAT',
  CRYPTO: 'CRYPTO'
};

export type CurrencyType = (typeof CurrencyType)[keyof typeof CurrencyType]


export const AccessTokenPlatform: {
  RELOADLY: 'RELOADLY'
};

export type AccessTokenPlatform = (typeof AccessTokenPlatform)[keyof typeof AccessTokenPlatform]


export const TransactionCategory: {
  AIRTIME: 'AIRTIME',
  DATA_BUNDLE: 'DATA_BUNDLE',
  GIFT_CARD: 'GIFT_CARD',
  EXPRESS_EXCHANGE: 'EXPRESS_EXCHANGE',
  P2P_EXCHANGE: 'P2P_EXCHANGE',
  OFF_RAMPING: 'OFF_RAMPING',
  ON_RAMPING: 'ON_RAMPING',
  BETTING_WALLET: 'BETTING_WALLET',
  ELECTRICITY_BILL: 'ELECTRICITY_BILL',
  TV_BILL: 'TV_BILL',
  WATER_BILL: 'WATER_BILL',
  INTERNET_BILL: 'INTERNET_BILL'
};

export type TransactionCategory = (typeof TransactionCategory)[keyof typeof TransactionCategory]


export const TransactionsMode: {
  CREDIT: 'CREDIT',
  DEBIT: 'DEBIT'
};

export type TransactionsMode = (typeof TransactionsMode)[keyof typeof TransactionsMode]


export const TransactionStatus: {
  COMPLETED: 'COMPLETED',
  PENDING: 'PENDING'
};

export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus]

}

export type MerchantStatus = $Enums.MerchantStatus

export const MerchantStatus: typeof $Enums.MerchantStatus

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type ChainType = $Enums.ChainType

export const ChainType: typeof $Enums.ChainType

export type CredentialsStatus = $Enums.CredentialsStatus

export const CredentialsStatus: typeof $Enums.CredentialsStatus

export type TradeType = $Enums.TradeType

export const TradeType: typeof $Enums.TradeType

export type CountryCode = $Enums.CountryCode

export const CountryCode: typeof $Enums.CountryCode

export type AdvertStatus = $Enums.AdvertStatus

export const AdvertStatus: typeof $Enums.AdvertStatus

export type OrderMode = $Enums.OrderMode

export const OrderMode: typeof $Enums.OrderMode

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type OrderActions = $Enums.OrderActions

export const OrderActions: typeof $Enums.OrderActions

export type CurrencyType = $Enums.CurrencyType

export const CurrencyType: typeof $Enums.CurrencyType

export type AccessTokenPlatform = $Enums.AccessTokenPlatform

export const AccessTokenPlatform: typeof $Enums.AccessTokenPlatform

export type TransactionCategory = $Enums.TransactionCategory

export const TransactionCategory: typeof $Enums.TransactionCategory

export type TransactionsMode = $Enums.TransactionsMode

export const TransactionsMode: typeof $Enums.TransactionsMode

export type TransactionStatus = $Enums.TransactionStatus

export const TransactionStatus: typeof $Enums.TransactionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cryptoWallets`: Exposes CRUD operations for the **CryptoWallets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CryptoWallets
    * const cryptoWallets = await prisma.cryptoWallets.findMany()
    * ```
    */
  get cryptoWallets(): Prisma.CryptoWalletsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bankAccount`: Exposes CRUD operations for the **BankAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BankAccounts
    * const bankAccounts = await prisma.bankAccount.findMany()
    * ```
    */
  get bankAccount(): Prisma.BankAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adverts`: Exposes CRUD operations for the **Adverts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Adverts
    * const adverts = await prisma.adverts.findMany()
    * ```
    */
  get adverts(): Prisma.AdvertsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **Orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.OrdersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exchangeRates`: Exposes CRUD operations for the **ExchangeRates** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExchangeRates
    * const exchangeRates = await prisma.exchangeRates.findMany()
    * ```
    */
  get exchangeRates(): Prisma.ExchangeRatesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accessTokens`: Exposes CRUD operations for the **AccessTokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccessTokens
    * const accessTokens = await prisma.accessTokens.findMany()
    * ```
    */
  get accessTokens(): Prisma.AccessTokensDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactions`: Exposes CRUD operations for the **Transactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transactions.findMany()
    * ```
    */
  get transactions(): Prisma.TransactionsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    CryptoWallets: 'CryptoWallets',
    BankAccount: 'BankAccount',
    Adverts: 'Adverts',
    Orders: 'Orders',
    ExchangeRates: 'ExchangeRates',
    AccessTokens: 'AccessTokens',
    Transactions: 'Transactions'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "cryptoWallets" | "bankAccount" | "adverts" | "orders" | "exchangeRates" | "accessTokens" | "transactions"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      CryptoWallets: {
        payload: Prisma.$CryptoWalletsPayload<ExtArgs>
        fields: Prisma.CryptoWalletsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CryptoWalletsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoWalletsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CryptoWalletsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoWalletsPayload>
          }
          findFirst: {
            args: Prisma.CryptoWalletsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoWalletsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CryptoWalletsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoWalletsPayload>
          }
          findMany: {
            args: Prisma.CryptoWalletsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoWalletsPayload>[]
          }
          create: {
            args: Prisma.CryptoWalletsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoWalletsPayload>
          }
          createMany: {
            args: Prisma.CryptoWalletsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CryptoWalletsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoWalletsPayload>[]
          }
          delete: {
            args: Prisma.CryptoWalletsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoWalletsPayload>
          }
          update: {
            args: Prisma.CryptoWalletsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoWalletsPayload>
          }
          deleteMany: {
            args: Prisma.CryptoWalletsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CryptoWalletsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CryptoWalletsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoWalletsPayload>[]
          }
          upsert: {
            args: Prisma.CryptoWalletsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoWalletsPayload>
          }
          aggregate: {
            args: Prisma.CryptoWalletsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCryptoWallets>
          }
          groupBy: {
            args: Prisma.CryptoWalletsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CryptoWalletsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CryptoWalletsCountArgs<ExtArgs>
            result: $Utils.Optional<CryptoWalletsCountAggregateOutputType> | number
          }
        }
      }
      BankAccount: {
        payload: Prisma.$BankAccountPayload<ExtArgs>
        fields: Prisma.BankAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BankAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BankAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          findFirst: {
            args: Prisma.BankAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BankAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          findMany: {
            args: Prisma.BankAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>[]
          }
          create: {
            args: Prisma.BankAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          createMany: {
            args: Prisma.BankAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BankAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>[]
          }
          delete: {
            args: Prisma.BankAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          update: {
            args: Prisma.BankAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          deleteMany: {
            args: Prisma.BankAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BankAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BankAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>[]
          }
          upsert: {
            args: Prisma.BankAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          aggregate: {
            args: Prisma.BankAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBankAccount>
          }
          groupBy: {
            args: Prisma.BankAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<BankAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.BankAccountCountArgs<ExtArgs>
            result: $Utils.Optional<BankAccountCountAggregateOutputType> | number
          }
        }
      }
      Adverts: {
        payload: Prisma.$AdvertsPayload<ExtArgs>
        fields: Prisma.AdvertsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdvertsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdvertsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertsPayload>
          }
          findFirst: {
            args: Prisma.AdvertsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdvertsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertsPayload>
          }
          findMany: {
            args: Prisma.AdvertsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertsPayload>[]
          }
          create: {
            args: Prisma.AdvertsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertsPayload>
          }
          createMany: {
            args: Prisma.AdvertsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdvertsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertsPayload>[]
          }
          delete: {
            args: Prisma.AdvertsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertsPayload>
          }
          update: {
            args: Prisma.AdvertsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertsPayload>
          }
          deleteMany: {
            args: Prisma.AdvertsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdvertsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdvertsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertsPayload>[]
          }
          upsert: {
            args: Prisma.AdvertsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertsPayload>
          }
          aggregate: {
            args: Prisma.AdvertsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdverts>
          }
          groupBy: {
            args: Prisma.AdvertsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdvertsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdvertsCountArgs<ExtArgs>
            result: $Utils.Optional<AdvertsCountAggregateOutputType> | number
          }
        }
      }
      Orders: {
        payload: Prisma.$OrdersPayload<ExtArgs>
        fields: Prisma.OrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findFirst: {
            args: Prisma.OrdersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findMany: {
            args: Prisma.OrdersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          create: {
            args: Prisma.OrdersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          createMany: {
            args: Prisma.OrdersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrdersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          delete: {
            args: Prisma.OrdersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          update: {
            args: Prisma.OrdersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          deleteMany: {
            args: Prisma.OrdersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrdersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          upsert: {
            args: Prisma.OrdersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.OrdersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      ExchangeRates: {
        payload: Prisma.$ExchangeRatesPayload<ExtArgs>
        fields: Prisma.ExchangeRatesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExchangeRatesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExchangeRatesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatesPayload>
          }
          findFirst: {
            args: Prisma.ExchangeRatesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExchangeRatesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatesPayload>
          }
          findMany: {
            args: Prisma.ExchangeRatesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatesPayload>[]
          }
          create: {
            args: Prisma.ExchangeRatesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatesPayload>
          }
          createMany: {
            args: Prisma.ExchangeRatesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExchangeRatesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatesPayload>[]
          }
          delete: {
            args: Prisma.ExchangeRatesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatesPayload>
          }
          update: {
            args: Prisma.ExchangeRatesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatesPayload>
          }
          deleteMany: {
            args: Prisma.ExchangeRatesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExchangeRatesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExchangeRatesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatesPayload>[]
          }
          upsert: {
            args: Prisma.ExchangeRatesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatesPayload>
          }
          aggregate: {
            args: Prisma.ExchangeRatesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExchangeRates>
          }
          groupBy: {
            args: Prisma.ExchangeRatesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExchangeRatesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExchangeRatesCountArgs<ExtArgs>
            result: $Utils.Optional<ExchangeRatesCountAggregateOutputType> | number
          }
        }
      }
      AccessTokens: {
        payload: Prisma.$AccessTokensPayload<ExtArgs>
        fields: Prisma.AccessTokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccessTokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessTokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccessTokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessTokensPayload>
          }
          findFirst: {
            args: Prisma.AccessTokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessTokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccessTokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessTokensPayload>
          }
          findMany: {
            args: Prisma.AccessTokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessTokensPayload>[]
          }
          create: {
            args: Prisma.AccessTokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessTokensPayload>
          }
          createMany: {
            args: Prisma.AccessTokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccessTokensCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessTokensPayload>[]
          }
          delete: {
            args: Prisma.AccessTokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessTokensPayload>
          }
          update: {
            args: Prisma.AccessTokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessTokensPayload>
          }
          deleteMany: {
            args: Prisma.AccessTokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccessTokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccessTokensUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessTokensPayload>[]
          }
          upsert: {
            args: Prisma.AccessTokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessTokensPayload>
          }
          aggregate: {
            args: Prisma.AccessTokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccessTokens>
          }
          groupBy: {
            args: Prisma.AccessTokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccessTokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccessTokensCountArgs<ExtArgs>
            result: $Utils.Optional<AccessTokensCountAggregateOutputType> | number
          }
        }
      }
      Transactions: {
        payload: Prisma.$TransactionsPayload<ExtArgs>
        fields: Prisma.TransactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          findFirst: {
            args: Prisma.TransactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          findMany: {
            args: Prisma.TransactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>[]
          }
          create: {
            args: Prisma.TransactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          createMany: {
            args: Prisma.TransactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>[]
          }
          delete: {
            args: Prisma.TransactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          update: {
            args: Prisma.TransactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          deleteMany: {
            args: Prisma.TransactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>[]
          }
          upsert: {
            args: Prisma.TransactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          aggregate: {
            args: Prisma.TransactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactions>
          }
          groupBy: {
            args: Prisma.TransactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionsCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    cryptoWallets?: CryptoWalletsOmit
    bankAccount?: BankAccountOmit
    adverts?: AdvertsOmit
    orders?: OrdersOmit
    exchangeRates?: ExchangeRatesOmit
    accessTokens?: AccessTokensOmit
    transactions?: TransactionsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    crypto_wallets: number
    bank_accounts: number
    adverts: number
    orders: number
    transactions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    crypto_wallets?: boolean | UserCountOutputTypeCountCrypto_walletsArgs
    bank_accounts?: boolean | UserCountOutputTypeCountBank_accountsArgs
    adverts?: boolean | UserCountOutputTypeCountAdvertsArgs
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCrypto_walletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CryptoWalletsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBank_accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankAccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAdvertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdvertsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
  }


  /**
   * Count Type BankAccountCountOutputType
   */

  export type BankAccountCountOutputType = {
    advert: number
    Orders: number
  }

  export type BankAccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    advert?: boolean | BankAccountCountOutputTypeCountAdvertArgs
    Orders?: boolean | BankAccountCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * BankAccountCountOutputType without action
   */
  export type BankAccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccountCountOutputType
     */
    select?: BankAccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BankAccountCountOutputType without action
   */
  export type BankAccountCountOutputTypeCountAdvertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdvertsWhereInput
  }

  /**
   * BankAccountCountOutputType without action
   */
  export type BankAccountCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }


  /**
   * Count Type AdvertsCountOutputType
   */

  export type AdvertsCountOutputType = {
    bank_accounts: number
  }

  export type AdvertsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bank_accounts?: boolean | AdvertsCountOutputTypeCountBank_accountsArgs
  }

  // Custom InputTypes
  /**
   * AdvertsCountOutputType without action
   */
  export type AdvertsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvertsCountOutputType
     */
    select?: AdvertsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdvertsCountOutputType without action
   */
  export type AdvertsCountOutputTypeCountBank_accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankAccountWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    merchant_success_rate: number | null
    merchant_trade_count: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    merchant_success_rate: number | null
    merchant_trade_count: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    firstname: string | null
    lastname: string | null
    middlename: string | null
    email: string | null
    password: string | null
    transaction_pin: string | null
    telegram_id: string | null
    role: $Enums.UserRole | null
    country_code: $Enums.CountryCode | null
    created_at: Date | null
    updated_at: Date | null
    bvn: string | null
    bvn_status: $Enums.CredentialsStatus | null
    nin: string | null
    nin_status: $Enums.CredentialsStatus | null
    dob: string | null
    dob_status: $Enums.CredentialsStatus | null
    home_address: string | null
    street_address: string | null
    state: string | null
    phone: string | null
    googleId: string | null
    proof_of_address: string | null
    phone_verified: boolean | null
    merchant_success_rate: number | null
    merchant_trade_count: number | null
    merchant_nickname: string | null
    merchant_status: $Enums.MerchantStatus | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firstname: string | null
    lastname: string | null
    middlename: string | null
    email: string | null
    password: string | null
    transaction_pin: string | null
    telegram_id: string | null
    role: $Enums.UserRole | null
    country_code: $Enums.CountryCode | null
    created_at: Date | null
    updated_at: Date | null
    bvn: string | null
    bvn_status: $Enums.CredentialsStatus | null
    nin: string | null
    nin_status: $Enums.CredentialsStatus | null
    dob: string | null
    dob_status: $Enums.CredentialsStatus | null
    home_address: string | null
    street_address: string | null
    state: string | null
    phone: string | null
    googleId: string | null
    proof_of_address: string | null
    phone_verified: boolean | null
    merchant_success_rate: number | null
    merchant_trade_count: number | null
    merchant_nickname: string | null
    merchant_status: $Enums.MerchantStatus | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    middlename: number
    email: number
    password: number
    transaction_pin: number
    telegram_id: number
    role: number
    country_code: number
    created_at: number
    updated_at: number
    bvn: number
    bvn_status: number
    nin: number
    nin_status: number
    dob: number
    dob_status: number
    home_address: number
    street_address: number
    state: number
    phone: number
    googleId: number
    proof_of_address: number
    phone_verified: number
    merchant_success_rate: number
    merchant_trade_count: number
    merchant_nickname: number
    merchant_status: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    merchant_success_rate?: true
    merchant_trade_count?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    merchant_success_rate?: true
    merchant_trade_count?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    middlename?: true
    email?: true
    password?: true
    transaction_pin?: true
    telegram_id?: true
    role?: true
    country_code?: true
    created_at?: true
    updated_at?: true
    bvn?: true
    bvn_status?: true
    nin?: true
    nin_status?: true
    dob?: true
    dob_status?: true
    home_address?: true
    street_address?: true
    state?: true
    phone?: true
    googleId?: true
    proof_of_address?: true
    phone_verified?: true
    merchant_success_rate?: true
    merchant_trade_count?: true
    merchant_nickname?: true
    merchant_status?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    middlename?: true
    email?: true
    password?: true
    transaction_pin?: true
    telegram_id?: true
    role?: true
    country_code?: true
    created_at?: true
    updated_at?: true
    bvn?: true
    bvn_status?: true
    nin?: true
    nin_status?: true
    dob?: true
    dob_status?: true
    home_address?: true
    street_address?: true
    state?: true
    phone?: true
    googleId?: true
    proof_of_address?: true
    phone_verified?: true
    merchant_success_rate?: true
    merchant_trade_count?: true
    merchant_nickname?: true
    merchant_status?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    middlename?: true
    email?: true
    password?: true
    transaction_pin?: true
    telegram_id?: true
    role?: true
    country_code?: true
    created_at?: true
    updated_at?: true
    bvn?: true
    bvn_status?: true
    nin?: true
    nin_status?: true
    dob?: true
    dob_status?: true
    home_address?: true
    street_address?: true
    state?: true
    phone?: true
    googleId?: true
    proof_of_address?: true
    phone_verified?: true
    merchant_success_rate?: true
    merchant_trade_count?: true
    merchant_nickname?: true
    merchant_status?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    firstname: string | null
    lastname: string | null
    middlename: string | null
    email: string | null
    password: string | null
    transaction_pin: string | null
    telegram_id: string | null
    role: $Enums.UserRole | null
    country_code: $Enums.CountryCode | null
    created_at: Date | null
    updated_at: Date | null
    bvn: string | null
    bvn_status: $Enums.CredentialsStatus | null
    nin: string | null
    nin_status: $Enums.CredentialsStatus | null
    dob: string | null
    dob_status: $Enums.CredentialsStatus | null
    home_address: string | null
    street_address: string | null
    state: string | null
    phone: string | null
    googleId: string | null
    proof_of_address: string | null
    phone_verified: boolean | null
    merchant_success_rate: number | null
    merchant_trade_count: number | null
    merchant_nickname: string | null
    merchant_status: $Enums.MerchantStatus | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    middlename?: boolean
    email?: boolean
    password?: boolean
    transaction_pin?: boolean
    telegram_id?: boolean
    role?: boolean
    country_code?: boolean
    created_at?: boolean
    updated_at?: boolean
    bvn?: boolean
    bvn_status?: boolean
    nin?: boolean
    nin_status?: boolean
    dob?: boolean
    dob_status?: boolean
    home_address?: boolean
    street_address?: boolean
    state?: boolean
    phone?: boolean
    googleId?: boolean
    proof_of_address?: boolean
    phone_verified?: boolean
    merchant_success_rate?: boolean
    merchant_trade_count?: boolean
    merchant_nickname?: boolean
    merchant_status?: boolean
    crypto_wallets?: boolean | User$crypto_walletsArgs<ExtArgs>
    bank_accounts?: boolean | User$bank_accountsArgs<ExtArgs>
    adverts?: boolean | User$advertsArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    middlename?: boolean
    email?: boolean
    password?: boolean
    transaction_pin?: boolean
    telegram_id?: boolean
    role?: boolean
    country_code?: boolean
    created_at?: boolean
    updated_at?: boolean
    bvn?: boolean
    bvn_status?: boolean
    nin?: boolean
    nin_status?: boolean
    dob?: boolean
    dob_status?: boolean
    home_address?: boolean
    street_address?: boolean
    state?: boolean
    phone?: boolean
    googleId?: boolean
    proof_of_address?: boolean
    phone_verified?: boolean
    merchant_success_rate?: boolean
    merchant_trade_count?: boolean
    merchant_nickname?: boolean
    merchant_status?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    middlename?: boolean
    email?: boolean
    password?: boolean
    transaction_pin?: boolean
    telegram_id?: boolean
    role?: boolean
    country_code?: boolean
    created_at?: boolean
    updated_at?: boolean
    bvn?: boolean
    bvn_status?: boolean
    nin?: boolean
    nin_status?: boolean
    dob?: boolean
    dob_status?: boolean
    home_address?: boolean
    street_address?: boolean
    state?: boolean
    phone?: boolean
    googleId?: boolean
    proof_of_address?: boolean
    phone_verified?: boolean
    merchant_success_rate?: boolean
    merchant_trade_count?: boolean
    merchant_nickname?: boolean
    merchant_status?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    middlename?: boolean
    email?: boolean
    password?: boolean
    transaction_pin?: boolean
    telegram_id?: boolean
    role?: boolean
    country_code?: boolean
    created_at?: boolean
    updated_at?: boolean
    bvn?: boolean
    bvn_status?: boolean
    nin?: boolean
    nin_status?: boolean
    dob?: boolean
    dob_status?: boolean
    home_address?: boolean
    street_address?: boolean
    state?: boolean
    phone?: boolean
    googleId?: boolean
    proof_of_address?: boolean
    phone_verified?: boolean
    merchant_success_rate?: boolean
    merchant_trade_count?: boolean
    merchant_nickname?: boolean
    merchant_status?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstname" | "lastname" | "middlename" | "email" | "password" | "transaction_pin" | "telegram_id" | "role" | "country_code" | "created_at" | "updated_at" | "bvn" | "bvn_status" | "nin" | "nin_status" | "dob" | "dob_status" | "home_address" | "street_address" | "state" | "phone" | "googleId" | "proof_of_address" | "phone_verified" | "merchant_success_rate" | "merchant_trade_count" | "merchant_nickname" | "merchant_status", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    crypto_wallets?: boolean | User$crypto_walletsArgs<ExtArgs>
    bank_accounts?: boolean | User$bank_accountsArgs<ExtArgs>
    adverts?: boolean | User$advertsArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      crypto_wallets: Prisma.$CryptoWalletsPayload<ExtArgs>[]
      bank_accounts: Prisma.$BankAccountPayload<ExtArgs>[]
      adverts: Prisma.$AdvertsPayload<ExtArgs>[]
      orders: Prisma.$OrdersPayload<ExtArgs>[]
      transactions: Prisma.$TransactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstname: string | null
      lastname: string | null
      middlename: string | null
      email: string | null
      password: string | null
      transaction_pin: string | null
      telegram_id: string | null
      role: $Enums.UserRole | null
      country_code: $Enums.CountryCode | null
      created_at: Date | null
      updated_at: Date | null
      bvn: string | null
      bvn_status: $Enums.CredentialsStatus | null
      nin: string | null
      nin_status: $Enums.CredentialsStatus | null
      dob: string | null
      dob_status: $Enums.CredentialsStatus | null
      home_address: string | null
      street_address: string | null
      state: string | null
      phone: string | null
      googleId: string | null
      proof_of_address: string | null
      phone_verified: boolean | null
      merchant_success_rate: number | null
      merchant_trade_count: number | null
      merchant_nickname: string | null
      merchant_status: $Enums.MerchantStatus | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    crypto_wallets<T extends User$crypto_walletsArgs<ExtArgs> = {}>(args?: Subset<T, User$crypto_walletsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CryptoWalletsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bank_accounts<T extends User$bank_accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$bank_accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    adverts<T extends User$advertsArgs<ExtArgs> = {}>(args?: Subset<T, User$advertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvertsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly firstname: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly middlename: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly transaction_pin: FieldRef<"User", 'String'>
    readonly telegram_id: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly country_code: FieldRef<"User", 'CountryCode'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
    readonly bvn: FieldRef<"User", 'String'>
    readonly bvn_status: FieldRef<"User", 'CredentialsStatus'>
    readonly nin: FieldRef<"User", 'String'>
    readonly nin_status: FieldRef<"User", 'CredentialsStatus'>
    readonly dob: FieldRef<"User", 'String'>
    readonly dob_status: FieldRef<"User", 'CredentialsStatus'>
    readonly home_address: FieldRef<"User", 'String'>
    readonly street_address: FieldRef<"User", 'String'>
    readonly state: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly googleId: FieldRef<"User", 'String'>
    readonly proof_of_address: FieldRef<"User", 'String'>
    readonly phone_verified: FieldRef<"User", 'Boolean'>
    readonly merchant_success_rate: FieldRef<"User", 'Int'>
    readonly merchant_trade_count: FieldRef<"User", 'Int'>
    readonly merchant_nickname: FieldRef<"User", 'String'>
    readonly merchant_status: FieldRef<"User", 'MerchantStatus'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.crypto_wallets
   */
  export type User$crypto_walletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoWallets
     */
    select?: CryptoWalletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CryptoWallets
     */
    omit?: CryptoWalletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoWalletsInclude<ExtArgs> | null
    where?: CryptoWalletsWhereInput
    orderBy?: CryptoWalletsOrderByWithRelationInput | CryptoWalletsOrderByWithRelationInput[]
    cursor?: CryptoWalletsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CryptoWalletsScalarFieldEnum | CryptoWalletsScalarFieldEnum[]
  }

  /**
   * User.bank_accounts
   */
  export type User$bank_accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    where?: BankAccountWhereInput
    orderBy?: BankAccountOrderByWithRelationInput | BankAccountOrderByWithRelationInput[]
    cursor?: BankAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BankAccountScalarFieldEnum | BankAccountScalarFieldEnum[]
  }

  /**
   * User.adverts
   */
  export type User$advertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adverts
     */
    select?: AdvertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adverts
     */
    omit?: AdvertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertsInclude<ExtArgs> | null
    where?: AdvertsWhereInput
    orderBy?: AdvertsOrderByWithRelationInput | AdvertsOrderByWithRelationInput[]
    cursor?: AdvertsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdvertsScalarFieldEnum | AdvertsScalarFieldEnum[]
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    cursor?: TransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model CryptoWallets
   */

  export type AggregateCryptoWallets = {
    _count: CryptoWalletsCountAggregateOutputType | null
    _avg: CryptoWalletsAvgAggregateOutputType | null
    _sum: CryptoWalletsSumAggregateOutputType | null
    _min: CryptoWalletsMinAggregateOutputType | null
    _max: CryptoWalletsMaxAggregateOutputType | null
  }

  export type CryptoWalletsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type CryptoWalletsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type CryptoWalletsMinAggregateOutputType = {
    id: number | null
    address: string | null
    wallet_id: string | null
    chainType: $Enums.ChainType | null
    minipay: boolean | null
    created_at: Date | null
    updated_at: Date | null
    user_id: number | null
  }

  export type CryptoWalletsMaxAggregateOutputType = {
    id: number | null
    address: string | null
    wallet_id: string | null
    chainType: $Enums.ChainType | null
    minipay: boolean | null
    created_at: Date | null
    updated_at: Date | null
    user_id: number | null
  }

  export type CryptoWalletsCountAggregateOutputType = {
    id: number
    address: number
    wallet_id: number
    chainType: number
    minipay: number
    created_at: number
    updated_at: number
    user_id: number
    _all: number
  }


  export type CryptoWalletsAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type CryptoWalletsSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type CryptoWalletsMinAggregateInputType = {
    id?: true
    address?: true
    wallet_id?: true
    chainType?: true
    minipay?: true
    created_at?: true
    updated_at?: true
    user_id?: true
  }

  export type CryptoWalletsMaxAggregateInputType = {
    id?: true
    address?: true
    wallet_id?: true
    chainType?: true
    minipay?: true
    created_at?: true
    updated_at?: true
    user_id?: true
  }

  export type CryptoWalletsCountAggregateInputType = {
    id?: true
    address?: true
    wallet_id?: true
    chainType?: true
    minipay?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    _all?: true
  }

  export type CryptoWalletsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CryptoWallets to aggregate.
     */
    where?: CryptoWalletsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CryptoWallets to fetch.
     */
    orderBy?: CryptoWalletsOrderByWithRelationInput | CryptoWalletsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CryptoWalletsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CryptoWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CryptoWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CryptoWallets
    **/
    _count?: true | CryptoWalletsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CryptoWalletsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CryptoWalletsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CryptoWalletsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CryptoWalletsMaxAggregateInputType
  }

  export type GetCryptoWalletsAggregateType<T extends CryptoWalletsAggregateArgs> = {
        [P in keyof T & keyof AggregateCryptoWallets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCryptoWallets[P]>
      : GetScalarType<T[P], AggregateCryptoWallets[P]>
  }




  export type CryptoWalletsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CryptoWalletsWhereInput
    orderBy?: CryptoWalletsOrderByWithAggregationInput | CryptoWalletsOrderByWithAggregationInput[]
    by: CryptoWalletsScalarFieldEnum[] | CryptoWalletsScalarFieldEnum
    having?: CryptoWalletsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CryptoWalletsCountAggregateInputType | true
    _avg?: CryptoWalletsAvgAggregateInputType
    _sum?: CryptoWalletsSumAggregateInputType
    _min?: CryptoWalletsMinAggregateInputType
    _max?: CryptoWalletsMaxAggregateInputType
  }

  export type CryptoWalletsGroupByOutputType = {
    id: number
    address: string
    wallet_id: string | null
    chainType: $Enums.ChainType
    minipay: boolean | null
    created_at: Date | null
    updated_at: Date | null
    user_id: number | null
    _count: CryptoWalletsCountAggregateOutputType | null
    _avg: CryptoWalletsAvgAggregateOutputType | null
    _sum: CryptoWalletsSumAggregateOutputType | null
    _min: CryptoWalletsMinAggregateOutputType | null
    _max: CryptoWalletsMaxAggregateOutputType | null
  }

  type GetCryptoWalletsGroupByPayload<T extends CryptoWalletsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CryptoWalletsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CryptoWalletsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CryptoWalletsGroupByOutputType[P]>
            : GetScalarType<T[P], CryptoWalletsGroupByOutputType[P]>
        }
      >
    >


  export type CryptoWalletsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    wallet_id?: boolean
    chainType?: boolean
    minipay?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    user?: boolean | CryptoWallets$userArgs<ExtArgs>
  }, ExtArgs["result"]["cryptoWallets"]>

  export type CryptoWalletsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    wallet_id?: boolean
    chainType?: boolean
    minipay?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    user?: boolean | CryptoWallets$userArgs<ExtArgs>
  }, ExtArgs["result"]["cryptoWallets"]>

  export type CryptoWalletsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    wallet_id?: boolean
    chainType?: boolean
    minipay?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    user?: boolean | CryptoWallets$userArgs<ExtArgs>
  }, ExtArgs["result"]["cryptoWallets"]>

  export type CryptoWalletsSelectScalar = {
    id?: boolean
    address?: boolean
    wallet_id?: boolean
    chainType?: boolean
    minipay?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
  }

  export type CryptoWalletsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address" | "wallet_id" | "chainType" | "minipay" | "created_at" | "updated_at" | "user_id", ExtArgs["result"]["cryptoWallets"]>
  export type CryptoWalletsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | CryptoWallets$userArgs<ExtArgs>
  }
  export type CryptoWalletsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | CryptoWallets$userArgs<ExtArgs>
  }
  export type CryptoWalletsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | CryptoWallets$userArgs<ExtArgs>
  }

  export type $CryptoWalletsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CryptoWallets"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      address: string
      wallet_id: string | null
      chainType: $Enums.ChainType
      minipay: boolean | null
      created_at: Date | null
      updated_at: Date | null
      user_id: number | null
    }, ExtArgs["result"]["cryptoWallets"]>
    composites: {}
  }

  type CryptoWalletsGetPayload<S extends boolean | null | undefined | CryptoWalletsDefaultArgs> = $Result.GetResult<Prisma.$CryptoWalletsPayload, S>

  type CryptoWalletsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CryptoWalletsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CryptoWalletsCountAggregateInputType | true
    }

  export interface CryptoWalletsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CryptoWallets'], meta: { name: 'CryptoWallets' } }
    /**
     * Find zero or one CryptoWallets that matches the filter.
     * @param {CryptoWalletsFindUniqueArgs} args - Arguments to find a CryptoWallets
     * @example
     * // Get one CryptoWallets
     * const cryptoWallets = await prisma.cryptoWallets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CryptoWalletsFindUniqueArgs>(args: SelectSubset<T, CryptoWalletsFindUniqueArgs<ExtArgs>>): Prisma__CryptoWalletsClient<$Result.GetResult<Prisma.$CryptoWalletsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CryptoWallets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CryptoWalletsFindUniqueOrThrowArgs} args - Arguments to find a CryptoWallets
     * @example
     * // Get one CryptoWallets
     * const cryptoWallets = await prisma.cryptoWallets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CryptoWalletsFindUniqueOrThrowArgs>(args: SelectSubset<T, CryptoWalletsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CryptoWalletsClient<$Result.GetResult<Prisma.$CryptoWalletsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CryptoWallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptoWalletsFindFirstArgs} args - Arguments to find a CryptoWallets
     * @example
     * // Get one CryptoWallets
     * const cryptoWallets = await prisma.cryptoWallets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CryptoWalletsFindFirstArgs>(args?: SelectSubset<T, CryptoWalletsFindFirstArgs<ExtArgs>>): Prisma__CryptoWalletsClient<$Result.GetResult<Prisma.$CryptoWalletsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CryptoWallets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptoWalletsFindFirstOrThrowArgs} args - Arguments to find a CryptoWallets
     * @example
     * // Get one CryptoWallets
     * const cryptoWallets = await prisma.cryptoWallets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CryptoWalletsFindFirstOrThrowArgs>(args?: SelectSubset<T, CryptoWalletsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CryptoWalletsClient<$Result.GetResult<Prisma.$CryptoWalletsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CryptoWallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptoWalletsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CryptoWallets
     * const cryptoWallets = await prisma.cryptoWallets.findMany()
     * 
     * // Get first 10 CryptoWallets
     * const cryptoWallets = await prisma.cryptoWallets.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cryptoWalletsWithIdOnly = await prisma.cryptoWallets.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CryptoWalletsFindManyArgs>(args?: SelectSubset<T, CryptoWalletsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CryptoWalletsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CryptoWallets.
     * @param {CryptoWalletsCreateArgs} args - Arguments to create a CryptoWallets.
     * @example
     * // Create one CryptoWallets
     * const CryptoWallets = await prisma.cryptoWallets.create({
     *   data: {
     *     // ... data to create a CryptoWallets
     *   }
     * })
     * 
     */
    create<T extends CryptoWalletsCreateArgs>(args: SelectSubset<T, CryptoWalletsCreateArgs<ExtArgs>>): Prisma__CryptoWalletsClient<$Result.GetResult<Prisma.$CryptoWalletsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CryptoWallets.
     * @param {CryptoWalletsCreateManyArgs} args - Arguments to create many CryptoWallets.
     * @example
     * // Create many CryptoWallets
     * const cryptoWallets = await prisma.cryptoWallets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CryptoWalletsCreateManyArgs>(args?: SelectSubset<T, CryptoWalletsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CryptoWallets and returns the data saved in the database.
     * @param {CryptoWalletsCreateManyAndReturnArgs} args - Arguments to create many CryptoWallets.
     * @example
     * // Create many CryptoWallets
     * const cryptoWallets = await prisma.cryptoWallets.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CryptoWallets and only return the `id`
     * const cryptoWalletsWithIdOnly = await prisma.cryptoWallets.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CryptoWalletsCreateManyAndReturnArgs>(args?: SelectSubset<T, CryptoWalletsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CryptoWalletsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CryptoWallets.
     * @param {CryptoWalletsDeleteArgs} args - Arguments to delete one CryptoWallets.
     * @example
     * // Delete one CryptoWallets
     * const CryptoWallets = await prisma.cryptoWallets.delete({
     *   where: {
     *     // ... filter to delete one CryptoWallets
     *   }
     * })
     * 
     */
    delete<T extends CryptoWalletsDeleteArgs>(args: SelectSubset<T, CryptoWalletsDeleteArgs<ExtArgs>>): Prisma__CryptoWalletsClient<$Result.GetResult<Prisma.$CryptoWalletsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CryptoWallets.
     * @param {CryptoWalletsUpdateArgs} args - Arguments to update one CryptoWallets.
     * @example
     * // Update one CryptoWallets
     * const cryptoWallets = await prisma.cryptoWallets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CryptoWalletsUpdateArgs>(args: SelectSubset<T, CryptoWalletsUpdateArgs<ExtArgs>>): Prisma__CryptoWalletsClient<$Result.GetResult<Prisma.$CryptoWalletsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CryptoWallets.
     * @param {CryptoWalletsDeleteManyArgs} args - Arguments to filter CryptoWallets to delete.
     * @example
     * // Delete a few CryptoWallets
     * const { count } = await prisma.cryptoWallets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CryptoWalletsDeleteManyArgs>(args?: SelectSubset<T, CryptoWalletsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CryptoWallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptoWalletsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CryptoWallets
     * const cryptoWallets = await prisma.cryptoWallets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CryptoWalletsUpdateManyArgs>(args: SelectSubset<T, CryptoWalletsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CryptoWallets and returns the data updated in the database.
     * @param {CryptoWalletsUpdateManyAndReturnArgs} args - Arguments to update many CryptoWallets.
     * @example
     * // Update many CryptoWallets
     * const cryptoWallets = await prisma.cryptoWallets.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CryptoWallets and only return the `id`
     * const cryptoWalletsWithIdOnly = await prisma.cryptoWallets.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CryptoWalletsUpdateManyAndReturnArgs>(args: SelectSubset<T, CryptoWalletsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CryptoWalletsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CryptoWallets.
     * @param {CryptoWalletsUpsertArgs} args - Arguments to update or create a CryptoWallets.
     * @example
     * // Update or create a CryptoWallets
     * const cryptoWallets = await prisma.cryptoWallets.upsert({
     *   create: {
     *     // ... data to create a CryptoWallets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CryptoWallets we want to update
     *   }
     * })
     */
    upsert<T extends CryptoWalletsUpsertArgs>(args: SelectSubset<T, CryptoWalletsUpsertArgs<ExtArgs>>): Prisma__CryptoWalletsClient<$Result.GetResult<Prisma.$CryptoWalletsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CryptoWallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptoWalletsCountArgs} args - Arguments to filter CryptoWallets to count.
     * @example
     * // Count the number of CryptoWallets
     * const count = await prisma.cryptoWallets.count({
     *   where: {
     *     // ... the filter for the CryptoWallets we want to count
     *   }
     * })
    **/
    count<T extends CryptoWalletsCountArgs>(
      args?: Subset<T, CryptoWalletsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CryptoWalletsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CryptoWallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptoWalletsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CryptoWalletsAggregateArgs>(args: Subset<T, CryptoWalletsAggregateArgs>): Prisma.PrismaPromise<GetCryptoWalletsAggregateType<T>>

    /**
     * Group by CryptoWallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptoWalletsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CryptoWalletsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CryptoWalletsGroupByArgs['orderBy'] }
        : { orderBy?: CryptoWalletsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CryptoWalletsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCryptoWalletsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CryptoWallets model
   */
  readonly fields: CryptoWalletsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CryptoWallets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CryptoWalletsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends CryptoWallets$userArgs<ExtArgs> = {}>(args?: Subset<T, CryptoWallets$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CryptoWallets model
   */
  interface CryptoWalletsFieldRefs {
    readonly id: FieldRef<"CryptoWallets", 'Int'>
    readonly address: FieldRef<"CryptoWallets", 'String'>
    readonly wallet_id: FieldRef<"CryptoWallets", 'String'>
    readonly chainType: FieldRef<"CryptoWallets", 'ChainType'>
    readonly minipay: FieldRef<"CryptoWallets", 'Boolean'>
    readonly created_at: FieldRef<"CryptoWallets", 'DateTime'>
    readonly updated_at: FieldRef<"CryptoWallets", 'DateTime'>
    readonly user_id: FieldRef<"CryptoWallets", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CryptoWallets findUnique
   */
  export type CryptoWalletsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoWallets
     */
    select?: CryptoWalletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CryptoWallets
     */
    omit?: CryptoWalletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoWalletsInclude<ExtArgs> | null
    /**
     * Filter, which CryptoWallets to fetch.
     */
    where: CryptoWalletsWhereUniqueInput
  }

  /**
   * CryptoWallets findUniqueOrThrow
   */
  export type CryptoWalletsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoWallets
     */
    select?: CryptoWalletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CryptoWallets
     */
    omit?: CryptoWalletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoWalletsInclude<ExtArgs> | null
    /**
     * Filter, which CryptoWallets to fetch.
     */
    where: CryptoWalletsWhereUniqueInput
  }

  /**
   * CryptoWallets findFirst
   */
  export type CryptoWalletsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoWallets
     */
    select?: CryptoWalletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CryptoWallets
     */
    omit?: CryptoWalletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoWalletsInclude<ExtArgs> | null
    /**
     * Filter, which CryptoWallets to fetch.
     */
    where?: CryptoWalletsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CryptoWallets to fetch.
     */
    orderBy?: CryptoWalletsOrderByWithRelationInput | CryptoWalletsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CryptoWallets.
     */
    cursor?: CryptoWalletsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CryptoWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CryptoWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CryptoWallets.
     */
    distinct?: CryptoWalletsScalarFieldEnum | CryptoWalletsScalarFieldEnum[]
  }

  /**
   * CryptoWallets findFirstOrThrow
   */
  export type CryptoWalletsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoWallets
     */
    select?: CryptoWalletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CryptoWallets
     */
    omit?: CryptoWalletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoWalletsInclude<ExtArgs> | null
    /**
     * Filter, which CryptoWallets to fetch.
     */
    where?: CryptoWalletsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CryptoWallets to fetch.
     */
    orderBy?: CryptoWalletsOrderByWithRelationInput | CryptoWalletsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CryptoWallets.
     */
    cursor?: CryptoWalletsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CryptoWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CryptoWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CryptoWallets.
     */
    distinct?: CryptoWalletsScalarFieldEnum | CryptoWalletsScalarFieldEnum[]
  }

  /**
   * CryptoWallets findMany
   */
  export type CryptoWalletsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoWallets
     */
    select?: CryptoWalletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CryptoWallets
     */
    omit?: CryptoWalletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoWalletsInclude<ExtArgs> | null
    /**
     * Filter, which CryptoWallets to fetch.
     */
    where?: CryptoWalletsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CryptoWallets to fetch.
     */
    orderBy?: CryptoWalletsOrderByWithRelationInput | CryptoWalletsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CryptoWallets.
     */
    cursor?: CryptoWalletsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CryptoWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CryptoWallets.
     */
    skip?: number
    distinct?: CryptoWalletsScalarFieldEnum | CryptoWalletsScalarFieldEnum[]
  }

  /**
   * CryptoWallets create
   */
  export type CryptoWalletsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoWallets
     */
    select?: CryptoWalletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CryptoWallets
     */
    omit?: CryptoWalletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoWalletsInclude<ExtArgs> | null
    /**
     * The data needed to create a CryptoWallets.
     */
    data: XOR<CryptoWalletsCreateInput, CryptoWalletsUncheckedCreateInput>
  }

  /**
   * CryptoWallets createMany
   */
  export type CryptoWalletsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CryptoWallets.
     */
    data: CryptoWalletsCreateManyInput | CryptoWalletsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CryptoWallets createManyAndReturn
   */
  export type CryptoWalletsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoWallets
     */
    select?: CryptoWalletsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CryptoWallets
     */
    omit?: CryptoWalletsOmit<ExtArgs> | null
    /**
     * The data used to create many CryptoWallets.
     */
    data: CryptoWalletsCreateManyInput | CryptoWalletsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoWalletsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CryptoWallets update
   */
  export type CryptoWalletsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoWallets
     */
    select?: CryptoWalletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CryptoWallets
     */
    omit?: CryptoWalletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoWalletsInclude<ExtArgs> | null
    /**
     * The data needed to update a CryptoWallets.
     */
    data: XOR<CryptoWalletsUpdateInput, CryptoWalletsUncheckedUpdateInput>
    /**
     * Choose, which CryptoWallets to update.
     */
    where: CryptoWalletsWhereUniqueInput
  }

  /**
   * CryptoWallets updateMany
   */
  export type CryptoWalletsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CryptoWallets.
     */
    data: XOR<CryptoWalletsUpdateManyMutationInput, CryptoWalletsUncheckedUpdateManyInput>
    /**
     * Filter which CryptoWallets to update
     */
    where?: CryptoWalletsWhereInput
    /**
     * Limit how many CryptoWallets to update.
     */
    limit?: number
  }

  /**
   * CryptoWallets updateManyAndReturn
   */
  export type CryptoWalletsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoWallets
     */
    select?: CryptoWalletsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CryptoWallets
     */
    omit?: CryptoWalletsOmit<ExtArgs> | null
    /**
     * The data used to update CryptoWallets.
     */
    data: XOR<CryptoWalletsUpdateManyMutationInput, CryptoWalletsUncheckedUpdateManyInput>
    /**
     * Filter which CryptoWallets to update
     */
    where?: CryptoWalletsWhereInput
    /**
     * Limit how many CryptoWallets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoWalletsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CryptoWallets upsert
   */
  export type CryptoWalletsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoWallets
     */
    select?: CryptoWalletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CryptoWallets
     */
    omit?: CryptoWalletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoWalletsInclude<ExtArgs> | null
    /**
     * The filter to search for the CryptoWallets to update in case it exists.
     */
    where: CryptoWalletsWhereUniqueInput
    /**
     * In case the CryptoWallets found by the `where` argument doesn't exist, create a new CryptoWallets with this data.
     */
    create: XOR<CryptoWalletsCreateInput, CryptoWalletsUncheckedCreateInput>
    /**
     * In case the CryptoWallets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CryptoWalletsUpdateInput, CryptoWalletsUncheckedUpdateInput>
  }

  /**
   * CryptoWallets delete
   */
  export type CryptoWalletsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoWallets
     */
    select?: CryptoWalletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CryptoWallets
     */
    omit?: CryptoWalletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoWalletsInclude<ExtArgs> | null
    /**
     * Filter which CryptoWallets to delete.
     */
    where: CryptoWalletsWhereUniqueInput
  }

  /**
   * CryptoWallets deleteMany
   */
  export type CryptoWalletsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CryptoWallets to delete
     */
    where?: CryptoWalletsWhereInput
    /**
     * Limit how many CryptoWallets to delete.
     */
    limit?: number
  }

  /**
   * CryptoWallets.user
   */
  export type CryptoWallets$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * CryptoWallets without action
   */
  export type CryptoWalletsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoWallets
     */
    select?: CryptoWalletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CryptoWallets
     */
    omit?: CryptoWalletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoWalletsInclude<ExtArgs> | null
  }


  /**
   * Model BankAccount
   */

  export type AggregateBankAccount = {
    _count: BankAccountCountAggregateOutputType | null
    _avg: BankAccountAvgAggregateOutputType | null
    _sum: BankAccountSumAggregateOutputType | null
    _min: BankAccountMinAggregateOutputType | null
    _max: BankAccountMaxAggregateOutputType | null
  }

  export type BankAccountAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type BankAccountSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type BankAccountMinAggregateOutputType = {
    id: number | null
    account_name: string | null
    account_no: string | null
    soft_delete: boolean | null
    bank_name: string | null
    nuban_id: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: number | null
  }

  export type BankAccountMaxAggregateOutputType = {
    id: number | null
    account_name: string | null
    account_no: string | null
    soft_delete: boolean | null
    bank_name: string | null
    nuban_id: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: number | null
  }

  export type BankAccountCountAggregateOutputType = {
    id: number
    account_name: number
    account_no: number
    soft_delete: number
    bank_name: number
    nuban_id: number
    created_at: number
    updated_at: number
    user_id: number
    _all: number
  }


  export type BankAccountAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type BankAccountSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type BankAccountMinAggregateInputType = {
    id?: true
    account_name?: true
    account_no?: true
    soft_delete?: true
    bank_name?: true
    nuban_id?: true
    created_at?: true
    updated_at?: true
    user_id?: true
  }

  export type BankAccountMaxAggregateInputType = {
    id?: true
    account_name?: true
    account_no?: true
    soft_delete?: true
    bank_name?: true
    nuban_id?: true
    created_at?: true
    updated_at?: true
    user_id?: true
  }

  export type BankAccountCountAggregateInputType = {
    id?: true
    account_name?: true
    account_no?: true
    soft_delete?: true
    bank_name?: true
    nuban_id?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    _all?: true
  }

  export type BankAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BankAccount to aggregate.
     */
    where?: BankAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccounts to fetch.
     */
    orderBy?: BankAccountOrderByWithRelationInput | BankAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BankAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BankAccounts
    **/
    _count?: true | BankAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BankAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BankAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BankAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BankAccountMaxAggregateInputType
  }

  export type GetBankAccountAggregateType<T extends BankAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateBankAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBankAccount[P]>
      : GetScalarType<T[P], AggregateBankAccount[P]>
  }




  export type BankAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankAccountWhereInput
    orderBy?: BankAccountOrderByWithAggregationInput | BankAccountOrderByWithAggregationInput[]
    by: BankAccountScalarFieldEnum[] | BankAccountScalarFieldEnum
    having?: BankAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BankAccountCountAggregateInputType | true
    _avg?: BankAccountAvgAggregateInputType
    _sum?: BankAccountSumAggregateInputType
    _min?: BankAccountMinAggregateInputType
    _max?: BankAccountMaxAggregateInputType
  }

  export type BankAccountGroupByOutputType = {
    id: number
    account_name: string
    account_no: string
    soft_delete: boolean | null
    bank_name: string
    nuban_id: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: number
    _count: BankAccountCountAggregateOutputType | null
    _avg: BankAccountAvgAggregateOutputType | null
    _sum: BankAccountSumAggregateOutputType | null
    _min: BankAccountMinAggregateOutputType | null
    _max: BankAccountMaxAggregateOutputType | null
  }

  type GetBankAccountGroupByPayload<T extends BankAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BankAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BankAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BankAccountGroupByOutputType[P]>
            : GetScalarType<T[P], BankAccountGroupByOutputType[P]>
        }
      >
    >


  export type BankAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    account_name?: boolean
    account_no?: boolean
    soft_delete?: boolean
    bank_name?: boolean
    nuban_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    user?: boolean | BankAccount$userArgs<ExtArgs>
    advert?: boolean | BankAccount$advertArgs<ExtArgs>
    Orders?: boolean | BankAccount$OrdersArgs<ExtArgs>
    _count?: boolean | BankAccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bankAccount"]>

  export type BankAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    account_name?: boolean
    account_no?: boolean
    soft_delete?: boolean
    bank_name?: boolean
    nuban_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    user?: boolean | BankAccount$userArgs<ExtArgs>
  }, ExtArgs["result"]["bankAccount"]>

  export type BankAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    account_name?: boolean
    account_no?: boolean
    soft_delete?: boolean
    bank_name?: boolean
    nuban_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    user?: boolean | BankAccount$userArgs<ExtArgs>
  }, ExtArgs["result"]["bankAccount"]>

  export type BankAccountSelectScalar = {
    id?: boolean
    account_name?: boolean
    account_no?: boolean
    soft_delete?: boolean
    bank_name?: boolean
    nuban_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
  }

  export type BankAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "account_name" | "account_no" | "soft_delete" | "bank_name" | "nuban_id" | "created_at" | "updated_at" | "user_id", ExtArgs["result"]["bankAccount"]>
  export type BankAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | BankAccount$userArgs<ExtArgs>
    advert?: boolean | BankAccount$advertArgs<ExtArgs>
    Orders?: boolean | BankAccount$OrdersArgs<ExtArgs>
    _count?: boolean | BankAccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BankAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | BankAccount$userArgs<ExtArgs>
  }
  export type BankAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | BankAccount$userArgs<ExtArgs>
  }

  export type $BankAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BankAccount"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      advert: Prisma.$AdvertsPayload<ExtArgs>[]
      Orders: Prisma.$OrdersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      account_name: string
      account_no: string
      soft_delete: boolean | null
      bank_name: string
      nuban_id: string | null
      created_at: Date | null
      updated_at: Date | null
      user_id: number
    }, ExtArgs["result"]["bankAccount"]>
    composites: {}
  }

  type BankAccountGetPayload<S extends boolean | null | undefined | BankAccountDefaultArgs> = $Result.GetResult<Prisma.$BankAccountPayload, S>

  type BankAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BankAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BankAccountCountAggregateInputType | true
    }

  export interface BankAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BankAccount'], meta: { name: 'BankAccount' } }
    /**
     * Find zero or one BankAccount that matches the filter.
     * @param {BankAccountFindUniqueArgs} args - Arguments to find a BankAccount
     * @example
     * // Get one BankAccount
     * const bankAccount = await prisma.bankAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BankAccountFindUniqueArgs>(args: SelectSubset<T, BankAccountFindUniqueArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BankAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BankAccountFindUniqueOrThrowArgs} args - Arguments to find a BankAccount
     * @example
     * // Get one BankAccount
     * const bankAccount = await prisma.bankAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BankAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, BankAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BankAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountFindFirstArgs} args - Arguments to find a BankAccount
     * @example
     * // Get one BankAccount
     * const bankAccount = await prisma.bankAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BankAccountFindFirstArgs>(args?: SelectSubset<T, BankAccountFindFirstArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BankAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountFindFirstOrThrowArgs} args - Arguments to find a BankAccount
     * @example
     * // Get one BankAccount
     * const bankAccount = await prisma.bankAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BankAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, BankAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BankAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BankAccounts
     * const bankAccounts = await prisma.bankAccount.findMany()
     * 
     * // Get first 10 BankAccounts
     * const bankAccounts = await prisma.bankAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bankAccountWithIdOnly = await prisma.bankAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BankAccountFindManyArgs>(args?: SelectSubset<T, BankAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BankAccount.
     * @param {BankAccountCreateArgs} args - Arguments to create a BankAccount.
     * @example
     * // Create one BankAccount
     * const BankAccount = await prisma.bankAccount.create({
     *   data: {
     *     // ... data to create a BankAccount
     *   }
     * })
     * 
     */
    create<T extends BankAccountCreateArgs>(args: SelectSubset<T, BankAccountCreateArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BankAccounts.
     * @param {BankAccountCreateManyArgs} args - Arguments to create many BankAccounts.
     * @example
     * // Create many BankAccounts
     * const bankAccount = await prisma.bankAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BankAccountCreateManyArgs>(args?: SelectSubset<T, BankAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BankAccounts and returns the data saved in the database.
     * @param {BankAccountCreateManyAndReturnArgs} args - Arguments to create many BankAccounts.
     * @example
     * // Create many BankAccounts
     * const bankAccount = await prisma.bankAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BankAccounts and only return the `id`
     * const bankAccountWithIdOnly = await prisma.bankAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BankAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, BankAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BankAccount.
     * @param {BankAccountDeleteArgs} args - Arguments to delete one BankAccount.
     * @example
     * // Delete one BankAccount
     * const BankAccount = await prisma.bankAccount.delete({
     *   where: {
     *     // ... filter to delete one BankAccount
     *   }
     * })
     * 
     */
    delete<T extends BankAccountDeleteArgs>(args: SelectSubset<T, BankAccountDeleteArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BankAccount.
     * @param {BankAccountUpdateArgs} args - Arguments to update one BankAccount.
     * @example
     * // Update one BankAccount
     * const bankAccount = await prisma.bankAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BankAccountUpdateArgs>(args: SelectSubset<T, BankAccountUpdateArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BankAccounts.
     * @param {BankAccountDeleteManyArgs} args - Arguments to filter BankAccounts to delete.
     * @example
     * // Delete a few BankAccounts
     * const { count } = await prisma.bankAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BankAccountDeleteManyArgs>(args?: SelectSubset<T, BankAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BankAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BankAccounts
     * const bankAccount = await prisma.bankAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BankAccountUpdateManyArgs>(args: SelectSubset<T, BankAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BankAccounts and returns the data updated in the database.
     * @param {BankAccountUpdateManyAndReturnArgs} args - Arguments to update many BankAccounts.
     * @example
     * // Update many BankAccounts
     * const bankAccount = await prisma.bankAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BankAccounts and only return the `id`
     * const bankAccountWithIdOnly = await prisma.bankAccount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BankAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, BankAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BankAccount.
     * @param {BankAccountUpsertArgs} args - Arguments to update or create a BankAccount.
     * @example
     * // Update or create a BankAccount
     * const bankAccount = await prisma.bankAccount.upsert({
     *   create: {
     *     // ... data to create a BankAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BankAccount we want to update
     *   }
     * })
     */
    upsert<T extends BankAccountUpsertArgs>(args: SelectSubset<T, BankAccountUpsertArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BankAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountCountArgs} args - Arguments to filter BankAccounts to count.
     * @example
     * // Count the number of BankAccounts
     * const count = await prisma.bankAccount.count({
     *   where: {
     *     // ... the filter for the BankAccounts we want to count
     *   }
     * })
    **/
    count<T extends BankAccountCountArgs>(
      args?: Subset<T, BankAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BankAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BankAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BankAccountAggregateArgs>(args: Subset<T, BankAccountAggregateArgs>): Prisma.PrismaPromise<GetBankAccountAggregateType<T>>

    /**
     * Group by BankAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BankAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BankAccountGroupByArgs['orderBy'] }
        : { orderBy?: BankAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BankAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBankAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BankAccount model
   */
  readonly fields: BankAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BankAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BankAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends BankAccount$userArgs<ExtArgs> = {}>(args?: Subset<T, BankAccount$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    advert<T extends BankAccount$advertArgs<ExtArgs> = {}>(args?: Subset<T, BankAccount$advertArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvertsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Orders<T extends BankAccount$OrdersArgs<ExtArgs> = {}>(args?: Subset<T, BankAccount$OrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BankAccount model
   */
  interface BankAccountFieldRefs {
    readonly id: FieldRef<"BankAccount", 'Int'>
    readonly account_name: FieldRef<"BankAccount", 'String'>
    readonly account_no: FieldRef<"BankAccount", 'String'>
    readonly soft_delete: FieldRef<"BankAccount", 'Boolean'>
    readonly bank_name: FieldRef<"BankAccount", 'String'>
    readonly nuban_id: FieldRef<"BankAccount", 'String'>
    readonly created_at: FieldRef<"BankAccount", 'DateTime'>
    readonly updated_at: FieldRef<"BankAccount", 'DateTime'>
    readonly user_id: FieldRef<"BankAccount", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BankAccount findUnique
   */
  export type BankAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter, which BankAccount to fetch.
     */
    where: BankAccountWhereUniqueInput
  }

  /**
   * BankAccount findUniqueOrThrow
   */
  export type BankAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter, which BankAccount to fetch.
     */
    where: BankAccountWhereUniqueInput
  }

  /**
   * BankAccount findFirst
   */
  export type BankAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter, which BankAccount to fetch.
     */
    where?: BankAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccounts to fetch.
     */
    orderBy?: BankAccountOrderByWithRelationInput | BankAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BankAccounts.
     */
    cursor?: BankAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BankAccounts.
     */
    distinct?: BankAccountScalarFieldEnum | BankAccountScalarFieldEnum[]
  }

  /**
   * BankAccount findFirstOrThrow
   */
  export type BankAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter, which BankAccount to fetch.
     */
    where?: BankAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccounts to fetch.
     */
    orderBy?: BankAccountOrderByWithRelationInput | BankAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BankAccounts.
     */
    cursor?: BankAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BankAccounts.
     */
    distinct?: BankAccountScalarFieldEnum | BankAccountScalarFieldEnum[]
  }

  /**
   * BankAccount findMany
   */
  export type BankAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter, which BankAccounts to fetch.
     */
    where?: BankAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccounts to fetch.
     */
    orderBy?: BankAccountOrderByWithRelationInput | BankAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BankAccounts.
     */
    cursor?: BankAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccounts.
     */
    skip?: number
    distinct?: BankAccountScalarFieldEnum | BankAccountScalarFieldEnum[]
  }

  /**
   * BankAccount create
   */
  export type BankAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a BankAccount.
     */
    data: XOR<BankAccountCreateInput, BankAccountUncheckedCreateInput>
  }

  /**
   * BankAccount createMany
   */
  export type BankAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BankAccounts.
     */
    data: BankAccountCreateManyInput | BankAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BankAccount createManyAndReturn
   */
  export type BankAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * The data used to create many BankAccounts.
     */
    data: BankAccountCreateManyInput | BankAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BankAccount update
   */
  export type BankAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a BankAccount.
     */
    data: XOR<BankAccountUpdateInput, BankAccountUncheckedUpdateInput>
    /**
     * Choose, which BankAccount to update.
     */
    where: BankAccountWhereUniqueInput
  }

  /**
   * BankAccount updateMany
   */
  export type BankAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BankAccounts.
     */
    data: XOR<BankAccountUpdateManyMutationInput, BankAccountUncheckedUpdateManyInput>
    /**
     * Filter which BankAccounts to update
     */
    where?: BankAccountWhereInput
    /**
     * Limit how many BankAccounts to update.
     */
    limit?: number
  }

  /**
   * BankAccount updateManyAndReturn
   */
  export type BankAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * The data used to update BankAccounts.
     */
    data: XOR<BankAccountUpdateManyMutationInput, BankAccountUncheckedUpdateManyInput>
    /**
     * Filter which BankAccounts to update
     */
    where?: BankAccountWhereInput
    /**
     * Limit how many BankAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BankAccount upsert
   */
  export type BankAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the BankAccount to update in case it exists.
     */
    where: BankAccountWhereUniqueInput
    /**
     * In case the BankAccount found by the `where` argument doesn't exist, create a new BankAccount with this data.
     */
    create: XOR<BankAccountCreateInput, BankAccountUncheckedCreateInput>
    /**
     * In case the BankAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BankAccountUpdateInput, BankAccountUncheckedUpdateInput>
  }

  /**
   * BankAccount delete
   */
  export type BankAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter which BankAccount to delete.
     */
    where: BankAccountWhereUniqueInput
  }

  /**
   * BankAccount deleteMany
   */
  export type BankAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BankAccounts to delete
     */
    where?: BankAccountWhereInput
    /**
     * Limit how many BankAccounts to delete.
     */
    limit?: number
  }

  /**
   * BankAccount.user
   */
  export type BankAccount$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * BankAccount.advert
   */
  export type BankAccount$advertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adverts
     */
    select?: AdvertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adverts
     */
    omit?: AdvertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertsInclude<ExtArgs> | null
    where?: AdvertsWhereInput
    orderBy?: AdvertsOrderByWithRelationInput | AdvertsOrderByWithRelationInput[]
    cursor?: AdvertsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdvertsScalarFieldEnum | AdvertsScalarFieldEnum[]
  }

  /**
   * BankAccount.Orders
   */
  export type BankAccount$OrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * BankAccount without action
   */
  export type BankAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
  }


  /**
   * Model Adverts
   */

  export type AggregateAdverts = {
    _count: AdvertsCountAggregateOutputType | null
    _avg: AdvertsAvgAggregateOutputType | null
    _sum: AdvertsSumAggregateOutputType | null
    _min: AdvertsMinAggregateOutputType | null
    _max: AdvertsMaxAggregateOutputType | null
  }

  export type AdvertsAvgAggregateOutputType = {
    id: number | null
    rateFloat: number | null
    rateFixed: number | null
    limitUpper: number | null
    limitLower: number | null
    fiatAmountPerCrypto: number | null
    merchant_id: number | null
  }

  export type AdvertsSumAggregateOutputType = {
    id: number | null
    rateFloat: number | null
    rateFixed: number | null
    limitUpper: number | null
    limitLower: number | null
    fiatAmountPerCrypto: number | null
    merchant_id: number | null
  }

  export type AdvertsMinAggregateOutputType = {
    id: number | null
    rateFloat: number | null
    rateFixed: number | null
    isFloatRate: boolean | null
    limitUpper: number | null
    limitLower: number | null
    fiatAmountPerCrypto: number | null
    tradeType: $Enums.TradeType | null
    currency_crypto: string | null
    currency_fiat: $Enums.CountryCode | null
    instructions: string | null
    wallet_address: string | null
    status: $Enums.AdvertStatus | null
    duration: string | null
    created_at: Date | null
    updated_at: Date | null
    merchant_id: number | null
  }

  export type AdvertsMaxAggregateOutputType = {
    id: number | null
    rateFloat: number | null
    rateFixed: number | null
    isFloatRate: boolean | null
    limitUpper: number | null
    limitLower: number | null
    fiatAmountPerCrypto: number | null
    tradeType: $Enums.TradeType | null
    currency_crypto: string | null
    currency_fiat: $Enums.CountryCode | null
    instructions: string | null
    wallet_address: string | null
    status: $Enums.AdvertStatus | null
    duration: string | null
    created_at: Date | null
    updated_at: Date | null
    merchant_id: number | null
  }

  export type AdvertsCountAggregateOutputType = {
    id: number
    rateFloat: number
    rateFixed: number
    isFloatRate: number
    limitUpper: number
    limitLower: number
    fiatAmountPerCrypto: number
    tradeType: number
    currency_crypto: number
    currency_fiat: number
    instructions: number
    wallet_address: number
    status: number
    duration: number
    created_at: number
    updated_at: number
    merchant_id: number
    _all: number
  }


  export type AdvertsAvgAggregateInputType = {
    id?: true
    rateFloat?: true
    rateFixed?: true
    limitUpper?: true
    limitLower?: true
    fiatAmountPerCrypto?: true
    merchant_id?: true
  }

  export type AdvertsSumAggregateInputType = {
    id?: true
    rateFloat?: true
    rateFixed?: true
    limitUpper?: true
    limitLower?: true
    fiatAmountPerCrypto?: true
    merchant_id?: true
  }

  export type AdvertsMinAggregateInputType = {
    id?: true
    rateFloat?: true
    rateFixed?: true
    isFloatRate?: true
    limitUpper?: true
    limitLower?: true
    fiatAmountPerCrypto?: true
    tradeType?: true
    currency_crypto?: true
    currency_fiat?: true
    instructions?: true
    wallet_address?: true
    status?: true
    duration?: true
    created_at?: true
    updated_at?: true
    merchant_id?: true
  }

  export type AdvertsMaxAggregateInputType = {
    id?: true
    rateFloat?: true
    rateFixed?: true
    isFloatRate?: true
    limitUpper?: true
    limitLower?: true
    fiatAmountPerCrypto?: true
    tradeType?: true
    currency_crypto?: true
    currency_fiat?: true
    instructions?: true
    wallet_address?: true
    status?: true
    duration?: true
    created_at?: true
    updated_at?: true
    merchant_id?: true
  }

  export type AdvertsCountAggregateInputType = {
    id?: true
    rateFloat?: true
    rateFixed?: true
    isFloatRate?: true
    limitUpper?: true
    limitLower?: true
    fiatAmountPerCrypto?: true
    tradeType?: true
    currency_crypto?: true
    currency_fiat?: true
    instructions?: true
    wallet_address?: true
    status?: true
    duration?: true
    created_at?: true
    updated_at?: true
    merchant_id?: true
    _all?: true
  }

  export type AdvertsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Adverts to aggregate.
     */
    where?: AdvertsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adverts to fetch.
     */
    orderBy?: AdvertsOrderByWithRelationInput | AdvertsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdvertsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adverts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adverts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Adverts
    **/
    _count?: true | AdvertsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdvertsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdvertsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdvertsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdvertsMaxAggregateInputType
  }

  export type GetAdvertsAggregateType<T extends AdvertsAggregateArgs> = {
        [P in keyof T & keyof AggregateAdverts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdverts[P]>
      : GetScalarType<T[P], AggregateAdverts[P]>
  }




  export type AdvertsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdvertsWhereInput
    orderBy?: AdvertsOrderByWithAggregationInput | AdvertsOrderByWithAggregationInput[]
    by: AdvertsScalarFieldEnum[] | AdvertsScalarFieldEnum
    having?: AdvertsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdvertsCountAggregateInputType | true
    _avg?: AdvertsAvgAggregateInputType
    _sum?: AdvertsSumAggregateInputType
    _min?: AdvertsMinAggregateInputType
    _max?: AdvertsMaxAggregateInputType
  }

  export type AdvertsGroupByOutputType = {
    id: number
    rateFloat: number | null
    rateFixed: number | null
    isFloatRate: boolean
    limitUpper: number
    limitLower: number
    fiatAmountPerCrypto: number
    tradeType: $Enums.TradeType
    currency_crypto: string
    currency_fiat: $Enums.CountryCode
    instructions: string
    wallet_address: string
    status: $Enums.AdvertStatus | null
    duration: string
    created_at: Date | null
    updated_at: Date | null
    merchant_id: number
    _count: AdvertsCountAggregateOutputType | null
    _avg: AdvertsAvgAggregateOutputType | null
    _sum: AdvertsSumAggregateOutputType | null
    _min: AdvertsMinAggregateOutputType | null
    _max: AdvertsMaxAggregateOutputType | null
  }

  type GetAdvertsGroupByPayload<T extends AdvertsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdvertsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdvertsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdvertsGroupByOutputType[P]>
            : GetScalarType<T[P], AdvertsGroupByOutputType[P]>
        }
      >
    >


  export type AdvertsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rateFloat?: boolean
    rateFixed?: boolean
    isFloatRate?: boolean
    limitUpper?: boolean
    limitLower?: boolean
    fiatAmountPerCrypto?: boolean
    tradeType?: boolean
    currency_crypto?: boolean
    currency_fiat?: boolean
    instructions?: boolean
    wallet_address?: boolean
    status?: boolean
    duration?: boolean
    created_at?: boolean
    updated_at?: boolean
    merchant_id?: boolean
    bank_accounts?: boolean | Adverts$bank_accountsArgs<ExtArgs>
    merchant?: boolean | Adverts$merchantArgs<ExtArgs>
    _count?: boolean | AdvertsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adverts"]>

  export type AdvertsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rateFloat?: boolean
    rateFixed?: boolean
    isFloatRate?: boolean
    limitUpper?: boolean
    limitLower?: boolean
    fiatAmountPerCrypto?: boolean
    tradeType?: boolean
    currency_crypto?: boolean
    currency_fiat?: boolean
    instructions?: boolean
    wallet_address?: boolean
    status?: boolean
    duration?: boolean
    created_at?: boolean
    updated_at?: boolean
    merchant_id?: boolean
    merchant?: boolean | Adverts$merchantArgs<ExtArgs>
  }, ExtArgs["result"]["adverts"]>

  export type AdvertsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rateFloat?: boolean
    rateFixed?: boolean
    isFloatRate?: boolean
    limitUpper?: boolean
    limitLower?: boolean
    fiatAmountPerCrypto?: boolean
    tradeType?: boolean
    currency_crypto?: boolean
    currency_fiat?: boolean
    instructions?: boolean
    wallet_address?: boolean
    status?: boolean
    duration?: boolean
    created_at?: boolean
    updated_at?: boolean
    merchant_id?: boolean
    merchant?: boolean | Adverts$merchantArgs<ExtArgs>
  }, ExtArgs["result"]["adverts"]>

  export type AdvertsSelectScalar = {
    id?: boolean
    rateFloat?: boolean
    rateFixed?: boolean
    isFloatRate?: boolean
    limitUpper?: boolean
    limitLower?: boolean
    fiatAmountPerCrypto?: boolean
    tradeType?: boolean
    currency_crypto?: boolean
    currency_fiat?: boolean
    instructions?: boolean
    wallet_address?: boolean
    status?: boolean
    duration?: boolean
    created_at?: boolean
    updated_at?: boolean
    merchant_id?: boolean
  }

  export type AdvertsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rateFloat" | "rateFixed" | "isFloatRate" | "limitUpper" | "limitLower" | "fiatAmountPerCrypto" | "tradeType" | "currency_crypto" | "currency_fiat" | "instructions" | "wallet_address" | "status" | "duration" | "created_at" | "updated_at" | "merchant_id", ExtArgs["result"]["adverts"]>
  export type AdvertsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bank_accounts?: boolean | Adverts$bank_accountsArgs<ExtArgs>
    merchant?: boolean | Adverts$merchantArgs<ExtArgs>
    _count?: boolean | AdvertsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdvertsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | Adverts$merchantArgs<ExtArgs>
  }
  export type AdvertsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | Adverts$merchantArgs<ExtArgs>
  }

  export type $AdvertsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Adverts"
    objects: {
      bank_accounts: Prisma.$BankAccountPayload<ExtArgs>[]
      merchant: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rateFloat: number | null
      rateFixed: number | null
      isFloatRate: boolean
      limitUpper: number
      limitLower: number
      fiatAmountPerCrypto: number
      tradeType: $Enums.TradeType
      currency_crypto: string
      currency_fiat: $Enums.CountryCode
      instructions: string
      wallet_address: string
      status: $Enums.AdvertStatus | null
      duration: string
      created_at: Date | null
      updated_at: Date | null
      merchant_id: number
    }, ExtArgs["result"]["adverts"]>
    composites: {}
  }

  type AdvertsGetPayload<S extends boolean | null | undefined | AdvertsDefaultArgs> = $Result.GetResult<Prisma.$AdvertsPayload, S>

  type AdvertsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdvertsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdvertsCountAggregateInputType | true
    }

  export interface AdvertsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Adverts'], meta: { name: 'Adverts' } }
    /**
     * Find zero or one Adverts that matches the filter.
     * @param {AdvertsFindUniqueArgs} args - Arguments to find a Adverts
     * @example
     * // Get one Adverts
     * const adverts = await prisma.adverts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdvertsFindUniqueArgs>(args: SelectSubset<T, AdvertsFindUniqueArgs<ExtArgs>>): Prisma__AdvertsClient<$Result.GetResult<Prisma.$AdvertsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Adverts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdvertsFindUniqueOrThrowArgs} args - Arguments to find a Adverts
     * @example
     * // Get one Adverts
     * const adverts = await prisma.adverts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdvertsFindUniqueOrThrowArgs>(args: SelectSubset<T, AdvertsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdvertsClient<$Result.GetResult<Prisma.$AdvertsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adverts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertsFindFirstArgs} args - Arguments to find a Adverts
     * @example
     * // Get one Adverts
     * const adverts = await prisma.adverts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdvertsFindFirstArgs>(args?: SelectSubset<T, AdvertsFindFirstArgs<ExtArgs>>): Prisma__AdvertsClient<$Result.GetResult<Prisma.$AdvertsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adverts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertsFindFirstOrThrowArgs} args - Arguments to find a Adverts
     * @example
     * // Get one Adverts
     * const adverts = await prisma.adverts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdvertsFindFirstOrThrowArgs>(args?: SelectSubset<T, AdvertsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdvertsClient<$Result.GetResult<Prisma.$AdvertsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Adverts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Adverts
     * const adverts = await prisma.adverts.findMany()
     * 
     * // Get first 10 Adverts
     * const adverts = await prisma.adverts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const advertsWithIdOnly = await prisma.adverts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdvertsFindManyArgs>(args?: SelectSubset<T, AdvertsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvertsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Adverts.
     * @param {AdvertsCreateArgs} args - Arguments to create a Adverts.
     * @example
     * // Create one Adverts
     * const Adverts = await prisma.adverts.create({
     *   data: {
     *     // ... data to create a Adverts
     *   }
     * })
     * 
     */
    create<T extends AdvertsCreateArgs>(args: SelectSubset<T, AdvertsCreateArgs<ExtArgs>>): Prisma__AdvertsClient<$Result.GetResult<Prisma.$AdvertsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Adverts.
     * @param {AdvertsCreateManyArgs} args - Arguments to create many Adverts.
     * @example
     * // Create many Adverts
     * const adverts = await prisma.adverts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdvertsCreateManyArgs>(args?: SelectSubset<T, AdvertsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Adverts and returns the data saved in the database.
     * @param {AdvertsCreateManyAndReturnArgs} args - Arguments to create many Adverts.
     * @example
     * // Create many Adverts
     * const adverts = await prisma.adverts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Adverts and only return the `id`
     * const advertsWithIdOnly = await prisma.adverts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdvertsCreateManyAndReturnArgs>(args?: SelectSubset<T, AdvertsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvertsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Adverts.
     * @param {AdvertsDeleteArgs} args - Arguments to delete one Adverts.
     * @example
     * // Delete one Adverts
     * const Adverts = await prisma.adverts.delete({
     *   where: {
     *     // ... filter to delete one Adverts
     *   }
     * })
     * 
     */
    delete<T extends AdvertsDeleteArgs>(args: SelectSubset<T, AdvertsDeleteArgs<ExtArgs>>): Prisma__AdvertsClient<$Result.GetResult<Prisma.$AdvertsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Adverts.
     * @param {AdvertsUpdateArgs} args - Arguments to update one Adverts.
     * @example
     * // Update one Adverts
     * const adverts = await prisma.adverts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdvertsUpdateArgs>(args: SelectSubset<T, AdvertsUpdateArgs<ExtArgs>>): Prisma__AdvertsClient<$Result.GetResult<Prisma.$AdvertsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Adverts.
     * @param {AdvertsDeleteManyArgs} args - Arguments to filter Adverts to delete.
     * @example
     * // Delete a few Adverts
     * const { count } = await prisma.adverts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdvertsDeleteManyArgs>(args?: SelectSubset<T, AdvertsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adverts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Adverts
     * const adverts = await prisma.adverts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdvertsUpdateManyArgs>(args: SelectSubset<T, AdvertsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adverts and returns the data updated in the database.
     * @param {AdvertsUpdateManyAndReturnArgs} args - Arguments to update many Adverts.
     * @example
     * // Update many Adverts
     * const adverts = await prisma.adverts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Adverts and only return the `id`
     * const advertsWithIdOnly = await prisma.adverts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdvertsUpdateManyAndReturnArgs>(args: SelectSubset<T, AdvertsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvertsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Adverts.
     * @param {AdvertsUpsertArgs} args - Arguments to update or create a Adverts.
     * @example
     * // Update or create a Adverts
     * const adverts = await prisma.adverts.upsert({
     *   create: {
     *     // ... data to create a Adverts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Adverts we want to update
     *   }
     * })
     */
    upsert<T extends AdvertsUpsertArgs>(args: SelectSubset<T, AdvertsUpsertArgs<ExtArgs>>): Prisma__AdvertsClient<$Result.GetResult<Prisma.$AdvertsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Adverts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertsCountArgs} args - Arguments to filter Adverts to count.
     * @example
     * // Count the number of Adverts
     * const count = await prisma.adverts.count({
     *   where: {
     *     // ... the filter for the Adverts we want to count
     *   }
     * })
    **/
    count<T extends AdvertsCountArgs>(
      args?: Subset<T, AdvertsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdvertsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Adverts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdvertsAggregateArgs>(args: Subset<T, AdvertsAggregateArgs>): Prisma.PrismaPromise<GetAdvertsAggregateType<T>>

    /**
     * Group by Adverts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdvertsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdvertsGroupByArgs['orderBy'] }
        : { orderBy?: AdvertsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdvertsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdvertsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Adverts model
   */
  readonly fields: AdvertsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Adverts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdvertsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bank_accounts<T extends Adverts$bank_accountsArgs<ExtArgs> = {}>(args?: Subset<T, Adverts$bank_accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    merchant<T extends Adverts$merchantArgs<ExtArgs> = {}>(args?: Subset<T, Adverts$merchantArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Adverts model
   */
  interface AdvertsFieldRefs {
    readonly id: FieldRef<"Adverts", 'Int'>
    readonly rateFloat: FieldRef<"Adverts", 'Float'>
    readonly rateFixed: FieldRef<"Adverts", 'Float'>
    readonly isFloatRate: FieldRef<"Adverts", 'Boolean'>
    readonly limitUpper: FieldRef<"Adverts", 'Float'>
    readonly limitLower: FieldRef<"Adverts", 'Float'>
    readonly fiatAmountPerCrypto: FieldRef<"Adverts", 'Int'>
    readonly tradeType: FieldRef<"Adverts", 'TradeType'>
    readonly currency_crypto: FieldRef<"Adverts", 'String'>
    readonly currency_fiat: FieldRef<"Adverts", 'CountryCode'>
    readonly instructions: FieldRef<"Adverts", 'String'>
    readonly wallet_address: FieldRef<"Adverts", 'String'>
    readonly status: FieldRef<"Adverts", 'AdvertStatus'>
    readonly duration: FieldRef<"Adverts", 'String'>
    readonly created_at: FieldRef<"Adverts", 'DateTime'>
    readonly updated_at: FieldRef<"Adverts", 'DateTime'>
    readonly merchant_id: FieldRef<"Adverts", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Adverts findUnique
   */
  export type AdvertsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adverts
     */
    select?: AdvertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adverts
     */
    omit?: AdvertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertsInclude<ExtArgs> | null
    /**
     * Filter, which Adverts to fetch.
     */
    where: AdvertsWhereUniqueInput
  }

  /**
   * Adverts findUniqueOrThrow
   */
  export type AdvertsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adverts
     */
    select?: AdvertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adverts
     */
    omit?: AdvertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertsInclude<ExtArgs> | null
    /**
     * Filter, which Adverts to fetch.
     */
    where: AdvertsWhereUniqueInput
  }

  /**
   * Adverts findFirst
   */
  export type AdvertsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adverts
     */
    select?: AdvertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adverts
     */
    omit?: AdvertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertsInclude<ExtArgs> | null
    /**
     * Filter, which Adverts to fetch.
     */
    where?: AdvertsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adverts to fetch.
     */
    orderBy?: AdvertsOrderByWithRelationInput | AdvertsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Adverts.
     */
    cursor?: AdvertsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adverts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adverts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Adverts.
     */
    distinct?: AdvertsScalarFieldEnum | AdvertsScalarFieldEnum[]
  }

  /**
   * Adverts findFirstOrThrow
   */
  export type AdvertsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adverts
     */
    select?: AdvertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adverts
     */
    omit?: AdvertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertsInclude<ExtArgs> | null
    /**
     * Filter, which Adverts to fetch.
     */
    where?: AdvertsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adverts to fetch.
     */
    orderBy?: AdvertsOrderByWithRelationInput | AdvertsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Adverts.
     */
    cursor?: AdvertsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adverts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adverts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Adverts.
     */
    distinct?: AdvertsScalarFieldEnum | AdvertsScalarFieldEnum[]
  }

  /**
   * Adverts findMany
   */
  export type AdvertsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adverts
     */
    select?: AdvertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adverts
     */
    omit?: AdvertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertsInclude<ExtArgs> | null
    /**
     * Filter, which Adverts to fetch.
     */
    where?: AdvertsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adverts to fetch.
     */
    orderBy?: AdvertsOrderByWithRelationInput | AdvertsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Adverts.
     */
    cursor?: AdvertsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adverts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adverts.
     */
    skip?: number
    distinct?: AdvertsScalarFieldEnum | AdvertsScalarFieldEnum[]
  }

  /**
   * Adverts create
   */
  export type AdvertsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adverts
     */
    select?: AdvertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adverts
     */
    omit?: AdvertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertsInclude<ExtArgs> | null
    /**
     * The data needed to create a Adverts.
     */
    data: XOR<AdvertsCreateInput, AdvertsUncheckedCreateInput>
  }

  /**
   * Adverts createMany
   */
  export type AdvertsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Adverts.
     */
    data: AdvertsCreateManyInput | AdvertsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Adverts createManyAndReturn
   */
  export type AdvertsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adverts
     */
    select?: AdvertsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Adverts
     */
    omit?: AdvertsOmit<ExtArgs> | null
    /**
     * The data used to create many Adverts.
     */
    data: AdvertsCreateManyInput | AdvertsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Adverts update
   */
  export type AdvertsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adverts
     */
    select?: AdvertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adverts
     */
    omit?: AdvertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertsInclude<ExtArgs> | null
    /**
     * The data needed to update a Adverts.
     */
    data: XOR<AdvertsUpdateInput, AdvertsUncheckedUpdateInput>
    /**
     * Choose, which Adverts to update.
     */
    where: AdvertsWhereUniqueInput
  }

  /**
   * Adverts updateMany
   */
  export type AdvertsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Adverts.
     */
    data: XOR<AdvertsUpdateManyMutationInput, AdvertsUncheckedUpdateManyInput>
    /**
     * Filter which Adverts to update
     */
    where?: AdvertsWhereInput
    /**
     * Limit how many Adverts to update.
     */
    limit?: number
  }

  /**
   * Adverts updateManyAndReturn
   */
  export type AdvertsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adverts
     */
    select?: AdvertsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Adverts
     */
    omit?: AdvertsOmit<ExtArgs> | null
    /**
     * The data used to update Adverts.
     */
    data: XOR<AdvertsUpdateManyMutationInput, AdvertsUncheckedUpdateManyInput>
    /**
     * Filter which Adverts to update
     */
    where?: AdvertsWhereInput
    /**
     * Limit how many Adverts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Adverts upsert
   */
  export type AdvertsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adverts
     */
    select?: AdvertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adverts
     */
    omit?: AdvertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertsInclude<ExtArgs> | null
    /**
     * The filter to search for the Adverts to update in case it exists.
     */
    where: AdvertsWhereUniqueInput
    /**
     * In case the Adverts found by the `where` argument doesn't exist, create a new Adverts with this data.
     */
    create: XOR<AdvertsCreateInput, AdvertsUncheckedCreateInput>
    /**
     * In case the Adverts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdvertsUpdateInput, AdvertsUncheckedUpdateInput>
  }

  /**
   * Adverts delete
   */
  export type AdvertsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adverts
     */
    select?: AdvertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adverts
     */
    omit?: AdvertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertsInclude<ExtArgs> | null
    /**
     * Filter which Adverts to delete.
     */
    where: AdvertsWhereUniqueInput
  }

  /**
   * Adverts deleteMany
   */
  export type AdvertsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Adverts to delete
     */
    where?: AdvertsWhereInput
    /**
     * Limit how many Adverts to delete.
     */
    limit?: number
  }

  /**
   * Adverts.bank_accounts
   */
  export type Adverts$bank_accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    where?: BankAccountWhereInput
    orderBy?: BankAccountOrderByWithRelationInput | BankAccountOrderByWithRelationInput[]
    cursor?: BankAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BankAccountScalarFieldEnum | BankAccountScalarFieldEnum[]
  }

  /**
   * Adverts.merchant
   */
  export type Adverts$merchantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Adverts without action
   */
  export type AdvertsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adverts
     */
    select?: AdvertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adverts
     */
    omit?: AdvertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertsInclude<ExtArgs> | null
  }


  /**
   * Model Orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    id: number | null
    amount_fiat: number | null
    amount_crypto: number | null
    bank_id: number | null
    customer_id: number | null
    merchant_id: number | null
  }

  export type OrdersSumAggregateOutputType = {
    id: number | null
    amount_fiat: number | null
    amount_crypto: number | null
    bank_id: number | null
    customer_id: number | null
    merchant_id: number | null
  }

  export type OrdersMinAggregateOutputType = {
    id: number | null
    amount_fiat: number | null
    amount_crypto: number | null
    wallet_customer: string | null
    wallet_merchant: string | null
    estimated_duration: string | null
    mode: $Enums.OrderMode | null
    currency_crypto: string | null
    currency_fiat: $Enums.CountryCode | null
    trade_type: $Enums.TradeType | null
    status: $Enums.OrderStatus | null
    action_user: $Enums.OrderActions | null
    action_merchant: $Enums.OrderActions | null
    txn_hash: string | null
    sell_txn_hash_customer_lock_crypto: string | null
    sell_txn_hash_customer_release_crypto: string | null
    sell_time2_customer_lock_crypto: Date | null
    sell_time1_customer_request: Date | null
    sell_time3_merchant_send_fiat: Date | null
    sell_time4_customer_release_crypto: Date | null
    buy_time1_customer_request: Date | null
    buy_time2_merchant_lock_crypto: Date | null
    buy_time3_customer_send_fiat: Date | null
    buy_time4_merchant_release_crypto: Date | null
    buy_txn_hash_merchant_lock_crypto: string | null
    buy_txn_hash_merchant_release_crypto: string | null
    created_at: Date | null
    updated_at: Date | null
    bank_id: number | null
    customer_id: number | null
    merchant_id: number | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: number | null
    amount_fiat: number | null
    amount_crypto: number | null
    wallet_customer: string | null
    wallet_merchant: string | null
    estimated_duration: string | null
    mode: $Enums.OrderMode | null
    currency_crypto: string | null
    currency_fiat: $Enums.CountryCode | null
    trade_type: $Enums.TradeType | null
    status: $Enums.OrderStatus | null
    action_user: $Enums.OrderActions | null
    action_merchant: $Enums.OrderActions | null
    txn_hash: string | null
    sell_txn_hash_customer_lock_crypto: string | null
    sell_txn_hash_customer_release_crypto: string | null
    sell_time2_customer_lock_crypto: Date | null
    sell_time1_customer_request: Date | null
    sell_time3_merchant_send_fiat: Date | null
    sell_time4_customer_release_crypto: Date | null
    buy_time1_customer_request: Date | null
    buy_time2_merchant_lock_crypto: Date | null
    buy_time3_customer_send_fiat: Date | null
    buy_time4_merchant_release_crypto: Date | null
    buy_txn_hash_merchant_lock_crypto: string | null
    buy_txn_hash_merchant_release_crypto: string | null
    created_at: Date | null
    updated_at: Date | null
    bank_id: number | null
    customer_id: number | null
    merchant_id: number | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    amount_fiat: number
    amount_crypto: number
    wallet_customer: number
    wallet_merchant: number
    estimated_duration: number
    mode: number
    currency_crypto: number
    currency_fiat: number
    trade_type: number
    status: number
    action_user: number
    action_merchant: number
    txn_hash: number
    sell_txn_hash_customer_lock_crypto: number
    sell_txn_hash_customer_release_crypto: number
    sell_time2_customer_lock_crypto: number
    sell_time1_customer_request: number
    sell_time3_merchant_send_fiat: number
    sell_time4_customer_release_crypto: number
    buy_time1_customer_request: number
    buy_time2_merchant_lock_crypto: number
    buy_time3_customer_send_fiat: number
    buy_time4_merchant_release_crypto: number
    buy_txn_hash_merchant_lock_crypto: number
    buy_txn_hash_merchant_release_crypto: number
    created_at: number
    updated_at: number
    bank_id: number
    customer_id: number
    merchant_id: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    id?: true
    amount_fiat?: true
    amount_crypto?: true
    bank_id?: true
    customer_id?: true
    merchant_id?: true
  }

  export type OrdersSumAggregateInputType = {
    id?: true
    amount_fiat?: true
    amount_crypto?: true
    bank_id?: true
    customer_id?: true
    merchant_id?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    amount_fiat?: true
    amount_crypto?: true
    wallet_customer?: true
    wallet_merchant?: true
    estimated_duration?: true
    mode?: true
    currency_crypto?: true
    currency_fiat?: true
    trade_type?: true
    status?: true
    action_user?: true
    action_merchant?: true
    txn_hash?: true
    sell_txn_hash_customer_lock_crypto?: true
    sell_txn_hash_customer_release_crypto?: true
    sell_time2_customer_lock_crypto?: true
    sell_time1_customer_request?: true
    sell_time3_merchant_send_fiat?: true
    sell_time4_customer_release_crypto?: true
    buy_time1_customer_request?: true
    buy_time2_merchant_lock_crypto?: true
    buy_time3_customer_send_fiat?: true
    buy_time4_merchant_release_crypto?: true
    buy_txn_hash_merchant_lock_crypto?: true
    buy_txn_hash_merchant_release_crypto?: true
    created_at?: true
    updated_at?: true
    bank_id?: true
    customer_id?: true
    merchant_id?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    amount_fiat?: true
    amount_crypto?: true
    wallet_customer?: true
    wallet_merchant?: true
    estimated_duration?: true
    mode?: true
    currency_crypto?: true
    currency_fiat?: true
    trade_type?: true
    status?: true
    action_user?: true
    action_merchant?: true
    txn_hash?: true
    sell_txn_hash_customer_lock_crypto?: true
    sell_txn_hash_customer_release_crypto?: true
    sell_time2_customer_lock_crypto?: true
    sell_time1_customer_request?: true
    sell_time3_merchant_send_fiat?: true
    sell_time4_customer_release_crypto?: true
    buy_time1_customer_request?: true
    buy_time2_merchant_lock_crypto?: true
    buy_time3_customer_send_fiat?: true
    buy_time4_merchant_release_crypto?: true
    buy_txn_hash_merchant_lock_crypto?: true
    buy_txn_hash_merchant_release_crypto?: true
    created_at?: true
    updated_at?: true
    bank_id?: true
    customer_id?: true
    merchant_id?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    amount_fiat?: true
    amount_crypto?: true
    wallet_customer?: true
    wallet_merchant?: true
    estimated_duration?: true
    mode?: true
    currency_crypto?: true
    currency_fiat?: true
    trade_type?: true
    status?: true
    action_user?: true
    action_merchant?: true
    txn_hash?: true
    sell_txn_hash_customer_lock_crypto?: true
    sell_txn_hash_customer_release_crypto?: true
    sell_time2_customer_lock_crypto?: true
    sell_time1_customer_request?: true
    sell_time3_merchant_send_fiat?: true
    sell_time4_customer_release_crypto?: true
    buy_time1_customer_request?: true
    buy_time2_merchant_lock_crypto?: true
    buy_time3_customer_send_fiat?: true
    buy_time4_merchant_release_crypto?: true
    buy_txn_hash_merchant_lock_crypto?: true
    buy_txn_hash_merchant_release_crypto?: true
    created_at?: true
    updated_at?: true
    bank_id?: true
    customer_id?: true
    merchant_id?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to aggregate.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type OrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithAggregationInput | OrdersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: OrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: number
    amount_fiat: number
    amount_crypto: number
    wallet_customer: string
    wallet_merchant: string
    estimated_duration: string
    mode: $Enums.OrderMode | null
    currency_crypto: string
    currency_fiat: $Enums.CountryCode | null
    trade_type: $Enums.TradeType
    status: $Enums.OrderStatus
    action_user: $Enums.OrderActions | null
    action_merchant: $Enums.OrderActions | null
    txn_hash: string | null
    sell_txn_hash_customer_lock_crypto: string | null
    sell_txn_hash_customer_release_crypto: string | null
    sell_time2_customer_lock_crypto: Date | null
    sell_time1_customer_request: Date | null
    sell_time3_merchant_send_fiat: Date | null
    sell_time4_customer_release_crypto: Date | null
    buy_time1_customer_request: Date | null
    buy_time2_merchant_lock_crypto: Date | null
    buy_time3_customer_send_fiat: Date | null
    buy_time4_merchant_release_crypto: Date | null
    buy_txn_hash_merchant_lock_crypto: string | null
    buy_txn_hash_merchant_release_crypto: string | null
    created_at: Date | null
    updated_at: Date | null
    bank_id: number
    customer_id: number
    merchant_id: number
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type OrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount_fiat?: boolean
    amount_crypto?: boolean
    wallet_customer?: boolean
    wallet_merchant?: boolean
    estimated_duration?: boolean
    mode?: boolean
    currency_crypto?: boolean
    currency_fiat?: boolean
    trade_type?: boolean
    status?: boolean
    action_user?: boolean
    action_merchant?: boolean
    txn_hash?: boolean
    sell_txn_hash_customer_lock_crypto?: boolean
    sell_txn_hash_customer_release_crypto?: boolean
    sell_time2_customer_lock_crypto?: boolean
    sell_time1_customer_request?: boolean
    sell_time3_merchant_send_fiat?: boolean
    sell_time4_customer_release_crypto?: boolean
    buy_time1_customer_request?: boolean
    buy_time2_merchant_lock_crypto?: boolean
    buy_time3_customer_send_fiat?: boolean
    buy_time4_merchant_release_crypto?: boolean
    buy_txn_hash_merchant_lock_crypto?: boolean
    buy_txn_hash_merchant_release_crypto?: boolean
    created_at?: boolean
    updated_at?: boolean
    bank_id?: boolean
    customer_id?: boolean
    merchant_id?: boolean
    bank?: boolean | Orders$bankArgs<ExtArgs>
    customer?: boolean | Orders$customerArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount_fiat?: boolean
    amount_crypto?: boolean
    wallet_customer?: boolean
    wallet_merchant?: boolean
    estimated_duration?: boolean
    mode?: boolean
    currency_crypto?: boolean
    currency_fiat?: boolean
    trade_type?: boolean
    status?: boolean
    action_user?: boolean
    action_merchant?: boolean
    txn_hash?: boolean
    sell_txn_hash_customer_lock_crypto?: boolean
    sell_txn_hash_customer_release_crypto?: boolean
    sell_time2_customer_lock_crypto?: boolean
    sell_time1_customer_request?: boolean
    sell_time3_merchant_send_fiat?: boolean
    sell_time4_customer_release_crypto?: boolean
    buy_time1_customer_request?: boolean
    buy_time2_merchant_lock_crypto?: boolean
    buy_time3_customer_send_fiat?: boolean
    buy_time4_merchant_release_crypto?: boolean
    buy_txn_hash_merchant_lock_crypto?: boolean
    buy_txn_hash_merchant_release_crypto?: boolean
    created_at?: boolean
    updated_at?: boolean
    bank_id?: boolean
    customer_id?: boolean
    merchant_id?: boolean
    bank?: boolean | Orders$bankArgs<ExtArgs>
    customer?: boolean | Orders$customerArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount_fiat?: boolean
    amount_crypto?: boolean
    wallet_customer?: boolean
    wallet_merchant?: boolean
    estimated_duration?: boolean
    mode?: boolean
    currency_crypto?: boolean
    currency_fiat?: boolean
    trade_type?: boolean
    status?: boolean
    action_user?: boolean
    action_merchant?: boolean
    txn_hash?: boolean
    sell_txn_hash_customer_lock_crypto?: boolean
    sell_txn_hash_customer_release_crypto?: boolean
    sell_time2_customer_lock_crypto?: boolean
    sell_time1_customer_request?: boolean
    sell_time3_merchant_send_fiat?: boolean
    sell_time4_customer_release_crypto?: boolean
    buy_time1_customer_request?: boolean
    buy_time2_merchant_lock_crypto?: boolean
    buy_time3_customer_send_fiat?: boolean
    buy_time4_merchant_release_crypto?: boolean
    buy_txn_hash_merchant_lock_crypto?: boolean
    buy_txn_hash_merchant_release_crypto?: boolean
    created_at?: boolean
    updated_at?: boolean
    bank_id?: boolean
    customer_id?: boolean
    merchant_id?: boolean
    bank?: boolean | Orders$bankArgs<ExtArgs>
    customer?: boolean | Orders$customerArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectScalar = {
    id?: boolean
    amount_fiat?: boolean
    amount_crypto?: boolean
    wallet_customer?: boolean
    wallet_merchant?: boolean
    estimated_duration?: boolean
    mode?: boolean
    currency_crypto?: boolean
    currency_fiat?: boolean
    trade_type?: boolean
    status?: boolean
    action_user?: boolean
    action_merchant?: boolean
    txn_hash?: boolean
    sell_txn_hash_customer_lock_crypto?: boolean
    sell_txn_hash_customer_release_crypto?: boolean
    sell_time2_customer_lock_crypto?: boolean
    sell_time1_customer_request?: boolean
    sell_time3_merchant_send_fiat?: boolean
    sell_time4_customer_release_crypto?: boolean
    buy_time1_customer_request?: boolean
    buy_time2_merchant_lock_crypto?: boolean
    buy_time3_customer_send_fiat?: boolean
    buy_time4_merchant_release_crypto?: boolean
    buy_txn_hash_merchant_lock_crypto?: boolean
    buy_txn_hash_merchant_release_crypto?: boolean
    created_at?: boolean
    updated_at?: boolean
    bank_id?: boolean
    customer_id?: boolean
    merchant_id?: boolean
  }

  export type OrdersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount_fiat" | "amount_crypto" | "wallet_customer" | "wallet_merchant" | "estimated_duration" | "mode" | "currency_crypto" | "currency_fiat" | "trade_type" | "status" | "action_user" | "action_merchant" | "txn_hash" | "sell_txn_hash_customer_lock_crypto" | "sell_txn_hash_customer_release_crypto" | "sell_time2_customer_lock_crypto" | "sell_time1_customer_request" | "sell_time3_merchant_send_fiat" | "sell_time4_customer_release_crypto" | "buy_time1_customer_request" | "buy_time2_merchant_lock_crypto" | "buy_time3_customer_send_fiat" | "buy_time4_merchant_release_crypto" | "buy_txn_hash_merchant_lock_crypto" | "buy_txn_hash_merchant_release_crypto" | "created_at" | "updated_at" | "bank_id" | "customer_id" | "merchant_id", ExtArgs["result"]["orders"]>
  export type OrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bank?: boolean | Orders$bankArgs<ExtArgs>
    customer?: boolean | Orders$customerArgs<ExtArgs>
  }
  export type OrdersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bank?: boolean | Orders$bankArgs<ExtArgs>
    customer?: boolean | Orders$customerArgs<ExtArgs>
  }
  export type OrdersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bank?: boolean | Orders$bankArgs<ExtArgs>
    customer?: boolean | Orders$customerArgs<ExtArgs>
  }

  export type $OrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orders"
    objects: {
      bank: Prisma.$BankAccountPayload<ExtArgs> | null
      customer: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amount_fiat: number
      amount_crypto: number
      wallet_customer: string
      wallet_merchant: string
      estimated_duration: string
      mode: $Enums.OrderMode | null
      currency_crypto: string
      currency_fiat: $Enums.CountryCode | null
      trade_type: $Enums.TradeType
      status: $Enums.OrderStatus
      action_user: $Enums.OrderActions | null
      action_merchant: $Enums.OrderActions | null
      txn_hash: string | null
      sell_txn_hash_customer_lock_crypto: string | null
      sell_txn_hash_customer_release_crypto: string | null
      sell_time2_customer_lock_crypto: Date | null
      sell_time1_customer_request: Date | null
      sell_time3_merchant_send_fiat: Date | null
      sell_time4_customer_release_crypto: Date | null
      buy_time1_customer_request: Date | null
      buy_time2_merchant_lock_crypto: Date | null
      buy_time3_customer_send_fiat: Date | null
      buy_time4_merchant_release_crypto: Date | null
      buy_txn_hash_merchant_lock_crypto: string | null
      buy_txn_hash_merchant_release_crypto: string | null
      created_at: Date | null
      updated_at: Date | null
      bank_id: number
      customer_id: number
      merchant_id: number
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type OrdersGetPayload<S extends boolean | null | undefined | OrdersDefaultArgs> = $Result.GetResult<Prisma.$OrdersPayload, S>

  type OrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface OrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orders'], meta: { name: 'Orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {OrdersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdersFindUniqueArgs>(args: SelectSubset<T, OrdersFindUniqueArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdersFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdersFindFirstArgs>(args?: SelectSubset<T, OrdersFindFirstArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdersFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdersFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrdersFindManyArgs>(args?: SelectSubset<T, OrdersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {OrdersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends OrdersCreateArgs>(args: SelectSubset<T, OrdersCreateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrdersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdersCreateManyArgs>(args?: SelectSubset<T, OrdersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrdersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrdersCreateManyAndReturnArgs>(args?: SelectSubset<T, OrdersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orders.
     * @param {OrdersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends OrdersDeleteArgs>(args: SelectSubset<T, OrdersDeleteArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {OrdersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdersUpdateArgs>(args: SelectSubset<T, OrdersUpdateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrdersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdersDeleteManyArgs>(args?: SelectSubset<T, OrdersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdersUpdateManyArgs>(args: SelectSubset<T, OrdersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrdersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrdersUpdateManyAndReturnArgs>(args: SelectSubset<T, OrdersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orders.
     * @param {OrdersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends OrdersUpsertArgs>(args: SelectSubset<T, OrdersUpsertArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrdersCountArgs>(
      args?: Subset<T, OrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orders model
   */
  readonly fields: OrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bank<T extends Orders$bankArgs<ExtArgs> = {}>(args?: Subset<T, Orders$bankArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    customer<T extends Orders$customerArgs<ExtArgs> = {}>(args?: Subset<T, Orders$customerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Orders model
   */
  interface OrdersFieldRefs {
    readonly id: FieldRef<"Orders", 'Int'>
    readonly amount_fiat: FieldRef<"Orders", 'Float'>
    readonly amount_crypto: FieldRef<"Orders", 'Float'>
    readonly wallet_customer: FieldRef<"Orders", 'String'>
    readonly wallet_merchant: FieldRef<"Orders", 'String'>
    readonly estimated_duration: FieldRef<"Orders", 'String'>
    readonly mode: FieldRef<"Orders", 'OrderMode'>
    readonly currency_crypto: FieldRef<"Orders", 'String'>
    readonly currency_fiat: FieldRef<"Orders", 'CountryCode'>
    readonly trade_type: FieldRef<"Orders", 'TradeType'>
    readonly status: FieldRef<"Orders", 'OrderStatus'>
    readonly action_user: FieldRef<"Orders", 'OrderActions'>
    readonly action_merchant: FieldRef<"Orders", 'OrderActions'>
    readonly txn_hash: FieldRef<"Orders", 'String'>
    readonly sell_txn_hash_customer_lock_crypto: FieldRef<"Orders", 'String'>
    readonly sell_txn_hash_customer_release_crypto: FieldRef<"Orders", 'String'>
    readonly sell_time2_customer_lock_crypto: FieldRef<"Orders", 'DateTime'>
    readonly sell_time1_customer_request: FieldRef<"Orders", 'DateTime'>
    readonly sell_time3_merchant_send_fiat: FieldRef<"Orders", 'DateTime'>
    readonly sell_time4_customer_release_crypto: FieldRef<"Orders", 'DateTime'>
    readonly buy_time1_customer_request: FieldRef<"Orders", 'DateTime'>
    readonly buy_time2_merchant_lock_crypto: FieldRef<"Orders", 'DateTime'>
    readonly buy_time3_customer_send_fiat: FieldRef<"Orders", 'DateTime'>
    readonly buy_time4_merchant_release_crypto: FieldRef<"Orders", 'DateTime'>
    readonly buy_txn_hash_merchant_lock_crypto: FieldRef<"Orders", 'String'>
    readonly buy_txn_hash_merchant_release_crypto: FieldRef<"Orders", 'String'>
    readonly created_at: FieldRef<"Orders", 'DateTime'>
    readonly updated_at: FieldRef<"Orders", 'DateTime'>
    readonly bank_id: FieldRef<"Orders", 'Int'>
    readonly customer_id: FieldRef<"Orders", 'Int'>
    readonly merchant_id: FieldRef<"Orders", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Orders findUnique
   */
  export type OrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findUniqueOrThrow
   */
  export type OrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findFirst
   */
  export type OrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findFirstOrThrow
   */
  export type OrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findMany
   */
  export type OrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders create
   */
  export type OrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a Orders.
     */
    data: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
  }

  /**
   * Orders createMany
   */
  export type OrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orders createManyAndReturn
   */
  export type OrdersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orders update
   */
  export type OrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a Orders.
     */
    data: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
    /**
     * Choose, which Orders to update.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders updateMany
   */
  export type OrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Orders updateManyAndReturn
   */
  export type OrdersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orders upsert
   */
  export type OrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the Orders to update in case it exists.
     */
    where: OrdersWhereUniqueInput
    /**
     * In case the Orders found by the `where` argument doesn't exist, create a new Orders with this data.
     */
    create: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
    /**
     * In case the Orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
  }

  /**
   * Orders delete
   */
  export type OrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter which Orders to delete.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders deleteMany
   */
  export type OrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Orders.bank
   */
  export type Orders$bankArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    where?: BankAccountWhereInput
  }

  /**
   * Orders.customer
   */
  export type Orders$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Orders without action
   */
  export type OrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
  }


  /**
   * Model ExchangeRates
   */

  export type AggregateExchangeRates = {
    _count: ExchangeRatesCountAggregateOutputType | null
    _avg: ExchangeRatesAvgAggregateOutputType | null
    _sum: ExchangeRatesSumAggregateOutputType | null
    _min: ExchangeRatesMinAggregateOutputType | null
    _max: ExchangeRatesMaxAggregateOutputType | null
  }

  export type ExchangeRatesAvgAggregateOutputType = {
    id: number | null
  }

  export type ExchangeRatesSumAggregateOutputType = {
    id: number | null
  }

  export type ExchangeRatesMinAggregateOutputType = {
    id: number | null
    rates: string | null
    exchangeratesapi: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ExchangeRatesMaxAggregateOutputType = {
    id: number | null
    rates: string | null
    exchangeratesapi: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ExchangeRatesCountAggregateOutputType = {
    id: number
    rates: number
    exchangeratesapi: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ExchangeRatesAvgAggregateInputType = {
    id?: true
  }

  export type ExchangeRatesSumAggregateInputType = {
    id?: true
  }

  export type ExchangeRatesMinAggregateInputType = {
    id?: true
    rates?: true
    exchangeratesapi?: true
    created_at?: true
    updated_at?: true
  }

  export type ExchangeRatesMaxAggregateInputType = {
    id?: true
    rates?: true
    exchangeratesapi?: true
    created_at?: true
    updated_at?: true
  }

  export type ExchangeRatesCountAggregateInputType = {
    id?: true
    rates?: true
    exchangeratesapi?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ExchangeRatesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExchangeRates to aggregate.
     */
    where?: ExchangeRatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExchangeRates to fetch.
     */
    orderBy?: ExchangeRatesOrderByWithRelationInput | ExchangeRatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExchangeRatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExchangeRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExchangeRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExchangeRates
    **/
    _count?: true | ExchangeRatesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExchangeRatesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExchangeRatesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExchangeRatesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExchangeRatesMaxAggregateInputType
  }

  export type GetExchangeRatesAggregateType<T extends ExchangeRatesAggregateArgs> = {
        [P in keyof T & keyof AggregateExchangeRates]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExchangeRates[P]>
      : GetScalarType<T[P], AggregateExchangeRates[P]>
  }




  export type ExchangeRatesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExchangeRatesWhereInput
    orderBy?: ExchangeRatesOrderByWithAggregationInput | ExchangeRatesOrderByWithAggregationInput[]
    by: ExchangeRatesScalarFieldEnum[] | ExchangeRatesScalarFieldEnum
    having?: ExchangeRatesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExchangeRatesCountAggregateInputType | true
    _avg?: ExchangeRatesAvgAggregateInputType
    _sum?: ExchangeRatesSumAggregateInputType
    _min?: ExchangeRatesMinAggregateInputType
    _max?: ExchangeRatesMaxAggregateInputType
  }

  export type ExchangeRatesGroupByOutputType = {
    id: number
    rates: string | null
    exchangeratesapi: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: ExchangeRatesCountAggregateOutputType | null
    _avg: ExchangeRatesAvgAggregateOutputType | null
    _sum: ExchangeRatesSumAggregateOutputType | null
    _min: ExchangeRatesMinAggregateOutputType | null
    _max: ExchangeRatesMaxAggregateOutputType | null
  }

  type GetExchangeRatesGroupByPayload<T extends ExchangeRatesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExchangeRatesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExchangeRatesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExchangeRatesGroupByOutputType[P]>
            : GetScalarType<T[P], ExchangeRatesGroupByOutputType[P]>
        }
      >
    >


  export type ExchangeRatesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rates?: boolean
    exchangeratesapi?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["exchangeRates"]>

  export type ExchangeRatesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rates?: boolean
    exchangeratesapi?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["exchangeRates"]>

  export type ExchangeRatesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rates?: boolean
    exchangeratesapi?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["exchangeRates"]>

  export type ExchangeRatesSelectScalar = {
    id?: boolean
    rates?: boolean
    exchangeratesapi?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ExchangeRatesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rates" | "exchangeratesapi" | "created_at" | "updated_at", ExtArgs["result"]["exchangeRates"]>

  export type $ExchangeRatesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExchangeRates"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rates: string | null
      exchangeratesapi: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["exchangeRates"]>
    composites: {}
  }

  type ExchangeRatesGetPayload<S extends boolean | null | undefined | ExchangeRatesDefaultArgs> = $Result.GetResult<Prisma.$ExchangeRatesPayload, S>

  type ExchangeRatesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExchangeRatesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExchangeRatesCountAggregateInputType | true
    }

  export interface ExchangeRatesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExchangeRates'], meta: { name: 'ExchangeRates' } }
    /**
     * Find zero or one ExchangeRates that matches the filter.
     * @param {ExchangeRatesFindUniqueArgs} args - Arguments to find a ExchangeRates
     * @example
     * // Get one ExchangeRates
     * const exchangeRates = await prisma.exchangeRates.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExchangeRatesFindUniqueArgs>(args: SelectSubset<T, ExchangeRatesFindUniqueArgs<ExtArgs>>): Prisma__ExchangeRatesClient<$Result.GetResult<Prisma.$ExchangeRatesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExchangeRates that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExchangeRatesFindUniqueOrThrowArgs} args - Arguments to find a ExchangeRates
     * @example
     * // Get one ExchangeRates
     * const exchangeRates = await prisma.exchangeRates.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExchangeRatesFindUniqueOrThrowArgs>(args: SelectSubset<T, ExchangeRatesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExchangeRatesClient<$Result.GetResult<Prisma.$ExchangeRatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExchangeRates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeRatesFindFirstArgs} args - Arguments to find a ExchangeRates
     * @example
     * // Get one ExchangeRates
     * const exchangeRates = await prisma.exchangeRates.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExchangeRatesFindFirstArgs>(args?: SelectSubset<T, ExchangeRatesFindFirstArgs<ExtArgs>>): Prisma__ExchangeRatesClient<$Result.GetResult<Prisma.$ExchangeRatesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExchangeRates that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeRatesFindFirstOrThrowArgs} args - Arguments to find a ExchangeRates
     * @example
     * // Get one ExchangeRates
     * const exchangeRates = await prisma.exchangeRates.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExchangeRatesFindFirstOrThrowArgs>(args?: SelectSubset<T, ExchangeRatesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExchangeRatesClient<$Result.GetResult<Prisma.$ExchangeRatesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExchangeRates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeRatesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExchangeRates
     * const exchangeRates = await prisma.exchangeRates.findMany()
     * 
     * // Get first 10 ExchangeRates
     * const exchangeRates = await prisma.exchangeRates.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exchangeRatesWithIdOnly = await prisma.exchangeRates.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExchangeRatesFindManyArgs>(args?: SelectSubset<T, ExchangeRatesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExchangeRatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExchangeRates.
     * @param {ExchangeRatesCreateArgs} args - Arguments to create a ExchangeRates.
     * @example
     * // Create one ExchangeRates
     * const ExchangeRates = await prisma.exchangeRates.create({
     *   data: {
     *     // ... data to create a ExchangeRates
     *   }
     * })
     * 
     */
    create<T extends ExchangeRatesCreateArgs>(args: SelectSubset<T, ExchangeRatesCreateArgs<ExtArgs>>): Prisma__ExchangeRatesClient<$Result.GetResult<Prisma.$ExchangeRatesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExchangeRates.
     * @param {ExchangeRatesCreateManyArgs} args - Arguments to create many ExchangeRates.
     * @example
     * // Create many ExchangeRates
     * const exchangeRates = await prisma.exchangeRates.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExchangeRatesCreateManyArgs>(args?: SelectSubset<T, ExchangeRatesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExchangeRates and returns the data saved in the database.
     * @param {ExchangeRatesCreateManyAndReturnArgs} args - Arguments to create many ExchangeRates.
     * @example
     * // Create many ExchangeRates
     * const exchangeRates = await prisma.exchangeRates.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExchangeRates and only return the `id`
     * const exchangeRatesWithIdOnly = await prisma.exchangeRates.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExchangeRatesCreateManyAndReturnArgs>(args?: SelectSubset<T, ExchangeRatesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExchangeRatesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExchangeRates.
     * @param {ExchangeRatesDeleteArgs} args - Arguments to delete one ExchangeRates.
     * @example
     * // Delete one ExchangeRates
     * const ExchangeRates = await prisma.exchangeRates.delete({
     *   where: {
     *     // ... filter to delete one ExchangeRates
     *   }
     * })
     * 
     */
    delete<T extends ExchangeRatesDeleteArgs>(args: SelectSubset<T, ExchangeRatesDeleteArgs<ExtArgs>>): Prisma__ExchangeRatesClient<$Result.GetResult<Prisma.$ExchangeRatesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExchangeRates.
     * @param {ExchangeRatesUpdateArgs} args - Arguments to update one ExchangeRates.
     * @example
     * // Update one ExchangeRates
     * const exchangeRates = await prisma.exchangeRates.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExchangeRatesUpdateArgs>(args: SelectSubset<T, ExchangeRatesUpdateArgs<ExtArgs>>): Prisma__ExchangeRatesClient<$Result.GetResult<Prisma.$ExchangeRatesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExchangeRates.
     * @param {ExchangeRatesDeleteManyArgs} args - Arguments to filter ExchangeRates to delete.
     * @example
     * // Delete a few ExchangeRates
     * const { count } = await prisma.exchangeRates.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExchangeRatesDeleteManyArgs>(args?: SelectSubset<T, ExchangeRatesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExchangeRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeRatesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExchangeRates
     * const exchangeRates = await prisma.exchangeRates.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExchangeRatesUpdateManyArgs>(args: SelectSubset<T, ExchangeRatesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExchangeRates and returns the data updated in the database.
     * @param {ExchangeRatesUpdateManyAndReturnArgs} args - Arguments to update many ExchangeRates.
     * @example
     * // Update many ExchangeRates
     * const exchangeRates = await prisma.exchangeRates.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExchangeRates and only return the `id`
     * const exchangeRatesWithIdOnly = await prisma.exchangeRates.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExchangeRatesUpdateManyAndReturnArgs>(args: SelectSubset<T, ExchangeRatesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExchangeRatesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExchangeRates.
     * @param {ExchangeRatesUpsertArgs} args - Arguments to update or create a ExchangeRates.
     * @example
     * // Update or create a ExchangeRates
     * const exchangeRates = await prisma.exchangeRates.upsert({
     *   create: {
     *     // ... data to create a ExchangeRates
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExchangeRates we want to update
     *   }
     * })
     */
    upsert<T extends ExchangeRatesUpsertArgs>(args: SelectSubset<T, ExchangeRatesUpsertArgs<ExtArgs>>): Prisma__ExchangeRatesClient<$Result.GetResult<Prisma.$ExchangeRatesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExchangeRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeRatesCountArgs} args - Arguments to filter ExchangeRates to count.
     * @example
     * // Count the number of ExchangeRates
     * const count = await prisma.exchangeRates.count({
     *   where: {
     *     // ... the filter for the ExchangeRates we want to count
     *   }
     * })
    **/
    count<T extends ExchangeRatesCountArgs>(
      args?: Subset<T, ExchangeRatesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExchangeRatesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExchangeRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeRatesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExchangeRatesAggregateArgs>(args: Subset<T, ExchangeRatesAggregateArgs>): Prisma.PrismaPromise<GetExchangeRatesAggregateType<T>>

    /**
     * Group by ExchangeRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeRatesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExchangeRatesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExchangeRatesGroupByArgs['orderBy'] }
        : { orderBy?: ExchangeRatesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExchangeRatesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExchangeRatesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExchangeRates model
   */
  readonly fields: ExchangeRatesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExchangeRates.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExchangeRatesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExchangeRates model
   */
  interface ExchangeRatesFieldRefs {
    readonly id: FieldRef<"ExchangeRates", 'Int'>
    readonly rates: FieldRef<"ExchangeRates", 'String'>
    readonly exchangeratesapi: FieldRef<"ExchangeRates", 'String'>
    readonly created_at: FieldRef<"ExchangeRates", 'DateTime'>
    readonly updated_at: FieldRef<"ExchangeRates", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExchangeRates findUnique
   */
  export type ExchangeRatesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRates
     */
    select?: ExchangeRatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRates
     */
    omit?: ExchangeRatesOmit<ExtArgs> | null
    /**
     * Filter, which ExchangeRates to fetch.
     */
    where: ExchangeRatesWhereUniqueInput
  }

  /**
   * ExchangeRates findUniqueOrThrow
   */
  export type ExchangeRatesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRates
     */
    select?: ExchangeRatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRates
     */
    omit?: ExchangeRatesOmit<ExtArgs> | null
    /**
     * Filter, which ExchangeRates to fetch.
     */
    where: ExchangeRatesWhereUniqueInput
  }

  /**
   * ExchangeRates findFirst
   */
  export type ExchangeRatesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRates
     */
    select?: ExchangeRatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRates
     */
    omit?: ExchangeRatesOmit<ExtArgs> | null
    /**
     * Filter, which ExchangeRates to fetch.
     */
    where?: ExchangeRatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExchangeRates to fetch.
     */
    orderBy?: ExchangeRatesOrderByWithRelationInput | ExchangeRatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExchangeRates.
     */
    cursor?: ExchangeRatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExchangeRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExchangeRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExchangeRates.
     */
    distinct?: ExchangeRatesScalarFieldEnum | ExchangeRatesScalarFieldEnum[]
  }

  /**
   * ExchangeRates findFirstOrThrow
   */
  export type ExchangeRatesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRates
     */
    select?: ExchangeRatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRates
     */
    omit?: ExchangeRatesOmit<ExtArgs> | null
    /**
     * Filter, which ExchangeRates to fetch.
     */
    where?: ExchangeRatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExchangeRates to fetch.
     */
    orderBy?: ExchangeRatesOrderByWithRelationInput | ExchangeRatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExchangeRates.
     */
    cursor?: ExchangeRatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExchangeRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExchangeRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExchangeRates.
     */
    distinct?: ExchangeRatesScalarFieldEnum | ExchangeRatesScalarFieldEnum[]
  }

  /**
   * ExchangeRates findMany
   */
  export type ExchangeRatesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRates
     */
    select?: ExchangeRatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRates
     */
    omit?: ExchangeRatesOmit<ExtArgs> | null
    /**
     * Filter, which ExchangeRates to fetch.
     */
    where?: ExchangeRatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExchangeRates to fetch.
     */
    orderBy?: ExchangeRatesOrderByWithRelationInput | ExchangeRatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExchangeRates.
     */
    cursor?: ExchangeRatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExchangeRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExchangeRates.
     */
    skip?: number
    distinct?: ExchangeRatesScalarFieldEnum | ExchangeRatesScalarFieldEnum[]
  }

  /**
   * ExchangeRates create
   */
  export type ExchangeRatesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRates
     */
    select?: ExchangeRatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRates
     */
    omit?: ExchangeRatesOmit<ExtArgs> | null
    /**
     * The data needed to create a ExchangeRates.
     */
    data?: XOR<ExchangeRatesCreateInput, ExchangeRatesUncheckedCreateInput>
  }

  /**
   * ExchangeRates createMany
   */
  export type ExchangeRatesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExchangeRates.
     */
    data: ExchangeRatesCreateManyInput | ExchangeRatesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExchangeRates createManyAndReturn
   */
  export type ExchangeRatesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRates
     */
    select?: ExchangeRatesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRates
     */
    omit?: ExchangeRatesOmit<ExtArgs> | null
    /**
     * The data used to create many ExchangeRates.
     */
    data: ExchangeRatesCreateManyInput | ExchangeRatesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExchangeRates update
   */
  export type ExchangeRatesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRates
     */
    select?: ExchangeRatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRates
     */
    omit?: ExchangeRatesOmit<ExtArgs> | null
    /**
     * The data needed to update a ExchangeRates.
     */
    data: XOR<ExchangeRatesUpdateInput, ExchangeRatesUncheckedUpdateInput>
    /**
     * Choose, which ExchangeRates to update.
     */
    where: ExchangeRatesWhereUniqueInput
  }

  /**
   * ExchangeRates updateMany
   */
  export type ExchangeRatesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExchangeRates.
     */
    data: XOR<ExchangeRatesUpdateManyMutationInput, ExchangeRatesUncheckedUpdateManyInput>
    /**
     * Filter which ExchangeRates to update
     */
    where?: ExchangeRatesWhereInput
    /**
     * Limit how many ExchangeRates to update.
     */
    limit?: number
  }

  /**
   * ExchangeRates updateManyAndReturn
   */
  export type ExchangeRatesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRates
     */
    select?: ExchangeRatesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRates
     */
    omit?: ExchangeRatesOmit<ExtArgs> | null
    /**
     * The data used to update ExchangeRates.
     */
    data: XOR<ExchangeRatesUpdateManyMutationInput, ExchangeRatesUncheckedUpdateManyInput>
    /**
     * Filter which ExchangeRates to update
     */
    where?: ExchangeRatesWhereInput
    /**
     * Limit how many ExchangeRates to update.
     */
    limit?: number
  }

  /**
   * ExchangeRates upsert
   */
  export type ExchangeRatesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRates
     */
    select?: ExchangeRatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRates
     */
    omit?: ExchangeRatesOmit<ExtArgs> | null
    /**
     * The filter to search for the ExchangeRates to update in case it exists.
     */
    where: ExchangeRatesWhereUniqueInput
    /**
     * In case the ExchangeRates found by the `where` argument doesn't exist, create a new ExchangeRates with this data.
     */
    create: XOR<ExchangeRatesCreateInput, ExchangeRatesUncheckedCreateInput>
    /**
     * In case the ExchangeRates was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExchangeRatesUpdateInput, ExchangeRatesUncheckedUpdateInput>
  }

  /**
   * ExchangeRates delete
   */
  export type ExchangeRatesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRates
     */
    select?: ExchangeRatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRates
     */
    omit?: ExchangeRatesOmit<ExtArgs> | null
    /**
     * Filter which ExchangeRates to delete.
     */
    where: ExchangeRatesWhereUniqueInput
  }

  /**
   * ExchangeRates deleteMany
   */
  export type ExchangeRatesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExchangeRates to delete
     */
    where?: ExchangeRatesWhereInput
    /**
     * Limit how many ExchangeRates to delete.
     */
    limit?: number
  }

  /**
   * ExchangeRates without action
   */
  export type ExchangeRatesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRates
     */
    select?: ExchangeRatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRates
     */
    omit?: ExchangeRatesOmit<ExtArgs> | null
  }


  /**
   * Model AccessTokens
   */

  export type AggregateAccessTokens = {
    _count: AccessTokensCountAggregateOutputType | null
    _avg: AccessTokensAvgAggregateOutputType | null
    _sum: AccessTokensSumAggregateOutputType | null
    _min: AccessTokensMinAggregateOutputType | null
    _max: AccessTokensMaxAggregateOutputType | null
  }

  export type AccessTokensAvgAggregateOutputType = {
    id: number | null
  }

  export type AccessTokensSumAggregateOutputType = {
    id: number | null
  }

  export type AccessTokensMinAggregateOutputType = {
    id: number | null
    token: string | null
    platform: $Enums.AccessTokenPlatform | null
    purpose: string | null
    response_data: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AccessTokensMaxAggregateOutputType = {
    id: number | null
    token: string | null
    platform: $Enums.AccessTokenPlatform | null
    purpose: string | null
    response_data: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AccessTokensCountAggregateOutputType = {
    id: number
    token: number
    platform: number
    purpose: number
    response_data: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AccessTokensAvgAggregateInputType = {
    id?: true
  }

  export type AccessTokensSumAggregateInputType = {
    id?: true
  }

  export type AccessTokensMinAggregateInputType = {
    id?: true
    token?: true
    platform?: true
    purpose?: true
    response_data?: true
    created_at?: true
    updated_at?: true
  }

  export type AccessTokensMaxAggregateInputType = {
    id?: true
    token?: true
    platform?: true
    purpose?: true
    response_data?: true
    created_at?: true
    updated_at?: true
  }

  export type AccessTokensCountAggregateInputType = {
    id?: true
    token?: true
    platform?: true
    purpose?: true
    response_data?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AccessTokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccessTokens to aggregate.
     */
    where?: AccessTokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessTokens to fetch.
     */
    orderBy?: AccessTokensOrderByWithRelationInput | AccessTokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccessTokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccessTokens
    **/
    _count?: true | AccessTokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccessTokensAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccessTokensSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccessTokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccessTokensMaxAggregateInputType
  }

  export type GetAccessTokensAggregateType<T extends AccessTokensAggregateArgs> = {
        [P in keyof T & keyof AggregateAccessTokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccessTokens[P]>
      : GetScalarType<T[P], AggregateAccessTokens[P]>
  }




  export type AccessTokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessTokensWhereInput
    orderBy?: AccessTokensOrderByWithAggregationInput | AccessTokensOrderByWithAggregationInput[]
    by: AccessTokensScalarFieldEnum[] | AccessTokensScalarFieldEnum
    having?: AccessTokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccessTokensCountAggregateInputType | true
    _avg?: AccessTokensAvgAggregateInputType
    _sum?: AccessTokensSumAggregateInputType
    _min?: AccessTokensMinAggregateInputType
    _max?: AccessTokensMaxAggregateInputType
  }

  export type AccessTokensGroupByOutputType = {
    id: number
    token: string
    platform: $Enums.AccessTokenPlatform
    purpose: string | null
    response_data: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: AccessTokensCountAggregateOutputType | null
    _avg: AccessTokensAvgAggregateOutputType | null
    _sum: AccessTokensSumAggregateOutputType | null
    _min: AccessTokensMinAggregateOutputType | null
    _max: AccessTokensMaxAggregateOutputType | null
  }

  type GetAccessTokensGroupByPayload<T extends AccessTokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccessTokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccessTokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccessTokensGroupByOutputType[P]>
            : GetScalarType<T[P], AccessTokensGroupByOutputType[P]>
        }
      >
    >


  export type AccessTokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    platform?: boolean
    purpose?: boolean
    response_data?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["accessTokens"]>

  export type AccessTokensSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    platform?: boolean
    purpose?: boolean
    response_data?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["accessTokens"]>

  export type AccessTokensSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    platform?: boolean
    purpose?: boolean
    response_data?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["accessTokens"]>

  export type AccessTokensSelectScalar = {
    id?: boolean
    token?: boolean
    platform?: boolean
    purpose?: boolean
    response_data?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AccessTokensOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "platform" | "purpose" | "response_data" | "created_at" | "updated_at", ExtArgs["result"]["accessTokens"]>

  export type $AccessTokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccessTokens"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      token: string
      platform: $Enums.AccessTokenPlatform
      purpose: string | null
      response_data: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["accessTokens"]>
    composites: {}
  }

  type AccessTokensGetPayload<S extends boolean | null | undefined | AccessTokensDefaultArgs> = $Result.GetResult<Prisma.$AccessTokensPayload, S>

  type AccessTokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccessTokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccessTokensCountAggregateInputType | true
    }

  export interface AccessTokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccessTokens'], meta: { name: 'AccessTokens' } }
    /**
     * Find zero or one AccessTokens that matches the filter.
     * @param {AccessTokensFindUniqueArgs} args - Arguments to find a AccessTokens
     * @example
     * // Get one AccessTokens
     * const accessTokens = await prisma.accessTokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccessTokensFindUniqueArgs>(args: SelectSubset<T, AccessTokensFindUniqueArgs<ExtArgs>>): Prisma__AccessTokensClient<$Result.GetResult<Prisma.$AccessTokensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AccessTokens that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccessTokensFindUniqueOrThrowArgs} args - Arguments to find a AccessTokens
     * @example
     * // Get one AccessTokens
     * const accessTokens = await prisma.accessTokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccessTokensFindUniqueOrThrowArgs>(args: SelectSubset<T, AccessTokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccessTokensClient<$Result.GetResult<Prisma.$AccessTokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccessTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessTokensFindFirstArgs} args - Arguments to find a AccessTokens
     * @example
     * // Get one AccessTokens
     * const accessTokens = await prisma.accessTokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccessTokensFindFirstArgs>(args?: SelectSubset<T, AccessTokensFindFirstArgs<ExtArgs>>): Prisma__AccessTokensClient<$Result.GetResult<Prisma.$AccessTokensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccessTokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessTokensFindFirstOrThrowArgs} args - Arguments to find a AccessTokens
     * @example
     * // Get one AccessTokens
     * const accessTokens = await prisma.accessTokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccessTokensFindFirstOrThrowArgs>(args?: SelectSubset<T, AccessTokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccessTokensClient<$Result.GetResult<Prisma.$AccessTokensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AccessTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessTokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccessTokens
     * const accessTokens = await prisma.accessTokens.findMany()
     * 
     * // Get first 10 AccessTokens
     * const accessTokens = await prisma.accessTokens.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accessTokensWithIdOnly = await prisma.accessTokens.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccessTokensFindManyArgs>(args?: SelectSubset<T, AccessTokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessTokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AccessTokens.
     * @param {AccessTokensCreateArgs} args - Arguments to create a AccessTokens.
     * @example
     * // Create one AccessTokens
     * const AccessTokens = await prisma.accessTokens.create({
     *   data: {
     *     // ... data to create a AccessTokens
     *   }
     * })
     * 
     */
    create<T extends AccessTokensCreateArgs>(args: SelectSubset<T, AccessTokensCreateArgs<ExtArgs>>): Prisma__AccessTokensClient<$Result.GetResult<Prisma.$AccessTokensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AccessTokens.
     * @param {AccessTokensCreateManyArgs} args - Arguments to create many AccessTokens.
     * @example
     * // Create many AccessTokens
     * const accessTokens = await prisma.accessTokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccessTokensCreateManyArgs>(args?: SelectSubset<T, AccessTokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AccessTokens and returns the data saved in the database.
     * @param {AccessTokensCreateManyAndReturnArgs} args - Arguments to create many AccessTokens.
     * @example
     * // Create many AccessTokens
     * const accessTokens = await prisma.accessTokens.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AccessTokens and only return the `id`
     * const accessTokensWithIdOnly = await prisma.accessTokens.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccessTokensCreateManyAndReturnArgs>(args?: SelectSubset<T, AccessTokensCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessTokensPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AccessTokens.
     * @param {AccessTokensDeleteArgs} args - Arguments to delete one AccessTokens.
     * @example
     * // Delete one AccessTokens
     * const AccessTokens = await prisma.accessTokens.delete({
     *   where: {
     *     // ... filter to delete one AccessTokens
     *   }
     * })
     * 
     */
    delete<T extends AccessTokensDeleteArgs>(args: SelectSubset<T, AccessTokensDeleteArgs<ExtArgs>>): Prisma__AccessTokensClient<$Result.GetResult<Prisma.$AccessTokensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AccessTokens.
     * @param {AccessTokensUpdateArgs} args - Arguments to update one AccessTokens.
     * @example
     * // Update one AccessTokens
     * const accessTokens = await prisma.accessTokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccessTokensUpdateArgs>(args: SelectSubset<T, AccessTokensUpdateArgs<ExtArgs>>): Prisma__AccessTokensClient<$Result.GetResult<Prisma.$AccessTokensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AccessTokens.
     * @param {AccessTokensDeleteManyArgs} args - Arguments to filter AccessTokens to delete.
     * @example
     * // Delete a few AccessTokens
     * const { count } = await prisma.accessTokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccessTokensDeleteManyArgs>(args?: SelectSubset<T, AccessTokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccessTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessTokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccessTokens
     * const accessTokens = await prisma.accessTokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccessTokensUpdateManyArgs>(args: SelectSubset<T, AccessTokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccessTokens and returns the data updated in the database.
     * @param {AccessTokensUpdateManyAndReturnArgs} args - Arguments to update many AccessTokens.
     * @example
     * // Update many AccessTokens
     * const accessTokens = await prisma.accessTokens.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AccessTokens and only return the `id`
     * const accessTokensWithIdOnly = await prisma.accessTokens.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccessTokensUpdateManyAndReturnArgs>(args: SelectSubset<T, AccessTokensUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessTokensPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AccessTokens.
     * @param {AccessTokensUpsertArgs} args - Arguments to update or create a AccessTokens.
     * @example
     * // Update or create a AccessTokens
     * const accessTokens = await prisma.accessTokens.upsert({
     *   create: {
     *     // ... data to create a AccessTokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccessTokens we want to update
     *   }
     * })
     */
    upsert<T extends AccessTokensUpsertArgs>(args: SelectSubset<T, AccessTokensUpsertArgs<ExtArgs>>): Prisma__AccessTokensClient<$Result.GetResult<Prisma.$AccessTokensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AccessTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessTokensCountArgs} args - Arguments to filter AccessTokens to count.
     * @example
     * // Count the number of AccessTokens
     * const count = await prisma.accessTokens.count({
     *   where: {
     *     // ... the filter for the AccessTokens we want to count
     *   }
     * })
    **/
    count<T extends AccessTokensCountArgs>(
      args?: Subset<T, AccessTokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccessTokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccessTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessTokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccessTokensAggregateArgs>(args: Subset<T, AccessTokensAggregateArgs>): Prisma.PrismaPromise<GetAccessTokensAggregateType<T>>

    /**
     * Group by AccessTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessTokensGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccessTokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccessTokensGroupByArgs['orderBy'] }
        : { orderBy?: AccessTokensGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccessTokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccessTokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccessTokens model
   */
  readonly fields: AccessTokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccessTokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccessTokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AccessTokens model
   */
  interface AccessTokensFieldRefs {
    readonly id: FieldRef<"AccessTokens", 'Int'>
    readonly token: FieldRef<"AccessTokens", 'String'>
    readonly platform: FieldRef<"AccessTokens", 'AccessTokenPlatform'>
    readonly purpose: FieldRef<"AccessTokens", 'String'>
    readonly response_data: FieldRef<"AccessTokens", 'String'>
    readonly created_at: FieldRef<"AccessTokens", 'DateTime'>
    readonly updated_at: FieldRef<"AccessTokens", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AccessTokens findUnique
   */
  export type AccessTokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessTokens
     */
    select?: AccessTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessTokens
     */
    omit?: AccessTokensOmit<ExtArgs> | null
    /**
     * Filter, which AccessTokens to fetch.
     */
    where: AccessTokensWhereUniqueInput
  }

  /**
   * AccessTokens findUniqueOrThrow
   */
  export type AccessTokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessTokens
     */
    select?: AccessTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessTokens
     */
    omit?: AccessTokensOmit<ExtArgs> | null
    /**
     * Filter, which AccessTokens to fetch.
     */
    where: AccessTokensWhereUniqueInput
  }

  /**
   * AccessTokens findFirst
   */
  export type AccessTokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessTokens
     */
    select?: AccessTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessTokens
     */
    omit?: AccessTokensOmit<ExtArgs> | null
    /**
     * Filter, which AccessTokens to fetch.
     */
    where?: AccessTokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessTokens to fetch.
     */
    orderBy?: AccessTokensOrderByWithRelationInput | AccessTokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccessTokens.
     */
    cursor?: AccessTokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessTokens.
     */
    distinct?: AccessTokensScalarFieldEnum | AccessTokensScalarFieldEnum[]
  }

  /**
   * AccessTokens findFirstOrThrow
   */
  export type AccessTokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessTokens
     */
    select?: AccessTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessTokens
     */
    omit?: AccessTokensOmit<ExtArgs> | null
    /**
     * Filter, which AccessTokens to fetch.
     */
    where?: AccessTokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessTokens to fetch.
     */
    orderBy?: AccessTokensOrderByWithRelationInput | AccessTokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccessTokens.
     */
    cursor?: AccessTokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessTokens.
     */
    distinct?: AccessTokensScalarFieldEnum | AccessTokensScalarFieldEnum[]
  }

  /**
   * AccessTokens findMany
   */
  export type AccessTokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessTokens
     */
    select?: AccessTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessTokens
     */
    omit?: AccessTokensOmit<ExtArgs> | null
    /**
     * Filter, which AccessTokens to fetch.
     */
    where?: AccessTokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessTokens to fetch.
     */
    orderBy?: AccessTokensOrderByWithRelationInput | AccessTokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccessTokens.
     */
    cursor?: AccessTokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessTokens.
     */
    skip?: number
    distinct?: AccessTokensScalarFieldEnum | AccessTokensScalarFieldEnum[]
  }

  /**
   * AccessTokens create
   */
  export type AccessTokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessTokens
     */
    select?: AccessTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessTokens
     */
    omit?: AccessTokensOmit<ExtArgs> | null
    /**
     * The data needed to create a AccessTokens.
     */
    data: XOR<AccessTokensCreateInput, AccessTokensUncheckedCreateInput>
  }

  /**
   * AccessTokens createMany
   */
  export type AccessTokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccessTokens.
     */
    data: AccessTokensCreateManyInput | AccessTokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccessTokens createManyAndReturn
   */
  export type AccessTokensCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessTokens
     */
    select?: AccessTokensSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccessTokens
     */
    omit?: AccessTokensOmit<ExtArgs> | null
    /**
     * The data used to create many AccessTokens.
     */
    data: AccessTokensCreateManyInput | AccessTokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccessTokens update
   */
  export type AccessTokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessTokens
     */
    select?: AccessTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessTokens
     */
    omit?: AccessTokensOmit<ExtArgs> | null
    /**
     * The data needed to update a AccessTokens.
     */
    data: XOR<AccessTokensUpdateInput, AccessTokensUncheckedUpdateInput>
    /**
     * Choose, which AccessTokens to update.
     */
    where: AccessTokensWhereUniqueInput
  }

  /**
   * AccessTokens updateMany
   */
  export type AccessTokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccessTokens.
     */
    data: XOR<AccessTokensUpdateManyMutationInput, AccessTokensUncheckedUpdateManyInput>
    /**
     * Filter which AccessTokens to update
     */
    where?: AccessTokensWhereInput
    /**
     * Limit how many AccessTokens to update.
     */
    limit?: number
  }

  /**
   * AccessTokens updateManyAndReturn
   */
  export type AccessTokensUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessTokens
     */
    select?: AccessTokensSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccessTokens
     */
    omit?: AccessTokensOmit<ExtArgs> | null
    /**
     * The data used to update AccessTokens.
     */
    data: XOR<AccessTokensUpdateManyMutationInput, AccessTokensUncheckedUpdateManyInput>
    /**
     * Filter which AccessTokens to update
     */
    where?: AccessTokensWhereInput
    /**
     * Limit how many AccessTokens to update.
     */
    limit?: number
  }

  /**
   * AccessTokens upsert
   */
  export type AccessTokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessTokens
     */
    select?: AccessTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessTokens
     */
    omit?: AccessTokensOmit<ExtArgs> | null
    /**
     * The filter to search for the AccessTokens to update in case it exists.
     */
    where: AccessTokensWhereUniqueInput
    /**
     * In case the AccessTokens found by the `where` argument doesn't exist, create a new AccessTokens with this data.
     */
    create: XOR<AccessTokensCreateInput, AccessTokensUncheckedCreateInput>
    /**
     * In case the AccessTokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccessTokensUpdateInput, AccessTokensUncheckedUpdateInput>
  }

  /**
   * AccessTokens delete
   */
  export type AccessTokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessTokens
     */
    select?: AccessTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessTokens
     */
    omit?: AccessTokensOmit<ExtArgs> | null
    /**
     * Filter which AccessTokens to delete.
     */
    where: AccessTokensWhereUniqueInput
  }

  /**
   * AccessTokens deleteMany
   */
  export type AccessTokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccessTokens to delete
     */
    where?: AccessTokensWhereInput
    /**
     * Limit how many AccessTokens to delete.
     */
    limit?: number
  }

  /**
   * AccessTokens without action
   */
  export type AccessTokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessTokens
     */
    select?: AccessTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessTokens
     */
    omit?: AccessTokensOmit<ExtArgs> | null
  }


  /**
   * Model Transactions
   */

  export type AggregateTransactions = {
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  export type TransactionsAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    user_id: number | null
  }

  export type TransactionsSumAggregateOutputType = {
    id: number | null
    amount: number | null
    user_id: number | null
  }

  export type TransactionsMinAggregateOutputType = {
    id: number | null
    amount: number | null
    transaction_hash: string | null
    note: string | null
    fiat_currency: $Enums.CountryCode | null
    crypto_currency: string | null
    category: $Enums.TransactionCategory | null
    mode: $Enums.TransactionsMode | null
    status: $Enums.TransactionStatus | null
    created_at: Date | null
    updated_at: Date | null
    user_id: number | null
  }

  export type TransactionsMaxAggregateOutputType = {
    id: number | null
    amount: number | null
    transaction_hash: string | null
    note: string | null
    fiat_currency: $Enums.CountryCode | null
    crypto_currency: string | null
    category: $Enums.TransactionCategory | null
    mode: $Enums.TransactionsMode | null
    status: $Enums.TransactionStatus | null
    created_at: Date | null
    updated_at: Date | null
    user_id: number | null
  }

  export type TransactionsCountAggregateOutputType = {
    id: number
    amount: number
    transaction_hash: number
    note: number
    fiat_currency: number
    crypto_currency: number
    category: number
    mode: number
    status: number
    created_at: number
    updated_at: number
    user_id: number
    _all: number
  }


  export type TransactionsAvgAggregateInputType = {
    id?: true
    amount?: true
    user_id?: true
  }

  export type TransactionsSumAggregateInputType = {
    id?: true
    amount?: true
    user_id?: true
  }

  export type TransactionsMinAggregateInputType = {
    id?: true
    amount?: true
    transaction_hash?: true
    note?: true
    fiat_currency?: true
    crypto_currency?: true
    category?: true
    mode?: true
    status?: true
    created_at?: true
    updated_at?: true
    user_id?: true
  }

  export type TransactionsMaxAggregateInputType = {
    id?: true
    amount?: true
    transaction_hash?: true
    note?: true
    fiat_currency?: true
    crypto_currency?: true
    category?: true
    mode?: true
    status?: true
    created_at?: true
    updated_at?: true
    user_id?: true
  }

  export type TransactionsCountAggregateInputType = {
    id?: true
    amount?: true
    transaction_hash?: true
    note?: true
    fiat_currency?: true
    crypto_currency?: true
    category?: true
    mode?: true
    status?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    _all?: true
  }

  export type TransactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to aggregate.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionsMaxAggregateInputType
  }

  export type GetTransactionsAggregateType<T extends TransactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactions[P]>
      : GetScalarType<T[P], AggregateTransactions[P]>
  }




  export type TransactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithAggregationInput | TransactionsOrderByWithAggregationInput[]
    by: TransactionsScalarFieldEnum[] | TransactionsScalarFieldEnum
    having?: TransactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionsCountAggregateInputType | true
    _avg?: TransactionsAvgAggregateInputType
    _sum?: TransactionsSumAggregateInputType
    _min?: TransactionsMinAggregateInputType
    _max?: TransactionsMaxAggregateInputType
  }

  export type TransactionsGroupByOutputType = {
    id: number
    amount: number
    transaction_hash: string | null
    note: string | null
    fiat_currency: $Enums.CountryCode | null
    crypto_currency: string | null
    category: $Enums.TransactionCategory
    mode: $Enums.TransactionsMode
    status: $Enums.TransactionStatus
    created_at: Date | null
    updated_at: Date | null
    user_id: number | null
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  type GetTransactionsGroupByPayload<T extends TransactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
        }
      >
    >


  export type TransactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    transaction_hash?: boolean
    note?: boolean
    fiat_currency?: boolean
    crypto_currency?: boolean
    category?: boolean
    mode?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    user?: boolean | Transactions$userArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type TransactionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    transaction_hash?: boolean
    note?: boolean
    fiat_currency?: boolean
    crypto_currency?: boolean
    category?: boolean
    mode?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    user?: boolean | Transactions$userArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type TransactionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    transaction_hash?: boolean
    note?: boolean
    fiat_currency?: boolean
    crypto_currency?: boolean
    category?: boolean
    mode?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    user?: boolean | Transactions$userArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type TransactionsSelectScalar = {
    id?: boolean
    amount?: boolean
    transaction_hash?: boolean
    note?: boolean
    fiat_currency?: boolean
    crypto_currency?: boolean
    category?: boolean
    mode?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
  }

  export type TransactionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "transaction_hash" | "note" | "fiat_currency" | "crypto_currency" | "category" | "mode" | "status" | "created_at" | "updated_at" | "user_id", ExtArgs["result"]["transactions"]>
  export type TransactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Transactions$userArgs<ExtArgs>
  }
  export type TransactionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Transactions$userArgs<ExtArgs>
  }
  export type TransactionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Transactions$userArgs<ExtArgs>
  }

  export type $TransactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transactions"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amount: number
      transaction_hash: string | null
      note: string | null
      fiat_currency: $Enums.CountryCode | null
      crypto_currency: string | null
      category: $Enums.TransactionCategory
      mode: $Enums.TransactionsMode
      status: $Enums.TransactionStatus
      created_at: Date | null
      updated_at: Date | null
      user_id: number | null
    }, ExtArgs["result"]["transactions"]>
    composites: {}
  }

  type TransactionsGetPayload<S extends boolean | null | undefined | TransactionsDefaultArgs> = $Result.GetResult<Prisma.$TransactionsPayload, S>

  type TransactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionsCountAggregateInputType | true
    }

  export interface TransactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transactions'], meta: { name: 'Transactions' } }
    /**
     * Find zero or one Transactions that matches the filter.
     * @param {TransactionsFindUniqueArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionsFindUniqueArgs>(args: SelectSubset<T, TransactionsFindUniqueArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transactions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionsFindUniqueOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindFirstArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionsFindFirstArgs>(args?: SelectSubset<T, TransactionsFindFirstArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindFirstOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transactions.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transactions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionsWithIdOnly = await prisma.transactions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionsFindManyArgs>(args?: SelectSubset<T, TransactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transactions.
     * @param {TransactionsCreateArgs} args - Arguments to create a Transactions.
     * @example
     * // Create one Transactions
     * const Transactions = await prisma.transactions.create({
     *   data: {
     *     // ... data to create a Transactions
     *   }
     * })
     * 
     */
    create<T extends TransactionsCreateArgs>(args: SelectSubset<T, TransactionsCreateArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionsCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionsCreateManyArgs>(args?: SelectSubset<T, TransactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionsCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionsWithIdOnly = await prisma.transactions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionsCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transactions.
     * @param {TransactionsDeleteArgs} args - Arguments to delete one Transactions.
     * @example
     * // Delete one Transactions
     * const Transactions = await prisma.transactions.delete({
     *   where: {
     *     // ... filter to delete one Transactions
     *   }
     * })
     * 
     */
    delete<T extends TransactionsDeleteArgs>(args: SelectSubset<T, TransactionsDeleteArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transactions.
     * @param {TransactionsUpdateArgs} args - Arguments to update one Transactions.
     * @example
     * // Update one Transactions
     * const transactions = await prisma.transactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionsUpdateArgs>(args: SelectSubset<T, TransactionsUpdateArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionsDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionsDeleteManyArgs>(args?: SelectSubset<T, TransactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionsUpdateManyArgs>(args: SelectSubset<T, TransactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionsUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionsWithIdOnly = await prisma.transactions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionsUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transactions.
     * @param {TransactionsUpsertArgs} args - Arguments to update or create a Transactions.
     * @example
     * // Update or create a Transactions
     * const transactions = await prisma.transactions.upsert({
     *   create: {
     *     // ... data to create a Transactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transactions we want to update
     *   }
     * })
     */
    upsert<T extends TransactionsUpsertArgs>(args: SelectSubset<T, TransactionsUpsertArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transactions.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionsCountArgs>(
      args?: Subset<T, TransactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionsAggregateArgs>(args: Subset<T, TransactionsAggregateArgs>): Prisma.PrismaPromise<GetTransactionsAggregateType<T>>

    /**
     * Group by Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionsGroupByArgs['orderBy'] }
        : { orderBy?: TransactionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transactions model
   */
  readonly fields: TransactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Transactions$userArgs<ExtArgs> = {}>(args?: Subset<T, Transactions$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transactions model
   */
  interface TransactionsFieldRefs {
    readonly id: FieldRef<"Transactions", 'Int'>
    readonly amount: FieldRef<"Transactions", 'Float'>
    readonly transaction_hash: FieldRef<"Transactions", 'String'>
    readonly note: FieldRef<"Transactions", 'String'>
    readonly fiat_currency: FieldRef<"Transactions", 'CountryCode'>
    readonly crypto_currency: FieldRef<"Transactions", 'String'>
    readonly category: FieldRef<"Transactions", 'TransactionCategory'>
    readonly mode: FieldRef<"Transactions", 'TransactionsMode'>
    readonly status: FieldRef<"Transactions", 'TransactionStatus'>
    readonly created_at: FieldRef<"Transactions", 'DateTime'>
    readonly updated_at: FieldRef<"Transactions", 'DateTime'>
    readonly user_id: FieldRef<"Transactions", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Transactions findUnique
   */
  export type TransactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions findUniqueOrThrow
   */
  export type TransactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions findFirst
   */
  export type TransactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions findFirstOrThrow
   */
  export type TransactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions findMany
   */
  export type TransactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions create
   */
  export type TransactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Transactions.
     */
    data: XOR<TransactionsCreateInput, TransactionsUncheckedCreateInput>
  }

  /**
   * Transactions createMany
   */
  export type TransactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionsCreateManyInput | TransactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transactions createManyAndReturn
   */
  export type TransactionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionsCreateManyInput | TransactionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transactions update
   */
  export type TransactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Transactions.
     */
    data: XOR<TransactionsUpdateInput, TransactionsUncheckedUpdateInput>
    /**
     * Choose, which Transactions to update.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions updateMany
   */
  export type TransactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionsWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transactions updateManyAndReturn
   */
  export type TransactionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionsWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transactions upsert
   */
  export type TransactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Transactions to update in case it exists.
     */
    where: TransactionsWhereUniqueInput
    /**
     * In case the Transactions found by the `where` argument doesn't exist, create a new Transactions with this data.
     */
    create: XOR<TransactionsCreateInput, TransactionsUncheckedCreateInput>
    /**
     * In case the Transactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionsUpdateInput, TransactionsUncheckedUpdateInput>
  }

  /**
   * Transactions delete
   */
  export type TransactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter which Transactions to delete.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions deleteMany
   */
  export type TransactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionsWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transactions.user
   */
  export type Transactions$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Transactions without action
   */
  export type TransactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    middlename: 'middlename',
    email: 'email',
    password: 'password',
    transaction_pin: 'transaction_pin',
    telegram_id: 'telegram_id',
    role: 'role',
    country_code: 'country_code',
    created_at: 'created_at',
    updated_at: 'updated_at',
    bvn: 'bvn',
    bvn_status: 'bvn_status',
    nin: 'nin',
    nin_status: 'nin_status',
    dob: 'dob',
    dob_status: 'dob_status',
    home_address: 'home_address',
    street_address: 'street_address',
    state: 'state',
    phone: 'phone',
    googleId: 'googleId',
    proof_of_address: 'proof_of_address',
    phone_verified: 'phone_verified',
    merchant_success_rate: 'merchant_success_rate',
    merchant_trade_count: 'merchant_trade_count',
    merchant_nickname: 'merchant_nickname',
    merchant_status: 'merchant_status'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CryptoWalletsScalarFieldEnum: {
    id: 'id',
    address: 'address',
    wallet_id: 'wallet_id',
    chainType: 'chainType',
    minipay: 'minipay',
    created_at: 'created_at',
    updated_at: 'updated_at',
    user_id: 'user_id'
  };

  export type CryptoWalletsScalarFieldEnum = (typeof CryptoWalletsScalarFieldEnum)[keyof typeof CryptoWalletsScalarFieldEnum]


  export const BankAccountScalarFieldEnum: {
    id: 'id',
    account_name: 'account_name',
    account_no: 'account_no',
    soft_delete: 'soft_delete',
    bank_name: 'bank_name',
    nuban_id: 'nuban_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    user_id: 'user_id'
  };

  export type BankAccountScalarFieldEnum = (typeof BankAccountScalarFieldEnum)[keyof typeof BankAccountScalarFieldEnum]


  export const AdvertsScalarFieldEnum: {
    id: 'id',
    rateFloat: 'rateFloat',
    rateFixed: 'rateFixed',
    isFloatRate: 'isFloatRate',
    limitUpper: 'limitUpper',
    limitLower: 'limitLower',
    fiatAmountPerCrypto: 'fiatAmountPerCrypto',
    tradeType: 'tradeType',
    currency_crypto: 'currency_crypto',
    currency_fiat: 'currency_fiat',
    instructions: 'instructions',
    wallet_address: 'wallet_address',
    status: 'status',
    duration: 'duration',
    created_at: 'created_at',
    updated_at: 'updated_at',
    merchant_id: 'merchant_id'
  };

  export type AdvertsScalarFieldEnum = (typeof AdvertsScalarFieldEnum)[keyof typeof AdvertsScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    amount_fiat: 'amount_fiat',
    amount_crypto: 'amount_crypto',
    wallet_customer: 'wallet_customer',
    wallet_merchant: 'wallet_merchant',
    estimated_duration: 'estimated_duration',
    mode: 'mode',
    currency_crypto: 'currency_crypto',
    currency_fiat: 'currency_fiat',
    trade_type: 'trade_type',
    status: 'status',
    action_user: 'action_user',
    action_merchant: 'action_merchant',
    txn_hash: 'txn_hash',
    sell_txn_hash_customer_lock_crypto: 'sell_txn_hash_customer_lock_crypto',
    sell_txn_hash_customer_release_crypto: 'sell_txn_hash_customer_release_crypto',
    sell_time2_customer_lock_crypto: 'sell_time2_customer_lock_crypto',
    sell_time1_customer_request: 'sell_time1_customer_request',
    sell_time3_merchant_send_fiat: 'sell_time3_merchant_send_fiat',
    sell_time4_customer_release_crypto: 'sell_time4_customer_release_crypto',
    buy_time1_customer_request: 'buy_time1_customer_request',
    buy_time2_merchant_lock_crypto: 'buy_time2_merchant_lock_crypto',
    buy_time3_customer_send_fiat: 'buy_time3_customer_send_fiat',
    buy_time4_merchant_release_crypto: 'buy_time4_merchant_release_crypto',
    buy_txn_hash_merchant_lock_crypto: 'buy_txn_hash_merchant_lock_crypto',
    buy_txn_hash_merchant_release_crypto: 'buy_txn_hash_merchant_release_crypto',
    created_at: 'created_at',
    updated_at: 'updated_at',
    bank_id: 'bank_id',
    customer_id: 'customer_id',
    merchant_id: 'merchant_id'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const ExchangeRatesScalarFieldEnum: {
    id: 'id',
    rates: 'rates',
    exchangeratesapi: 'exchangeratesapi',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ExchangeRatesScalarFieldEnum = (typeof ExchangeRatesScalarFieldEnum)[keyof typeof ExchangeRatesScalarFieldEnum]


  export const AccessTokensScalarFieldEnum: {
    id: 'id',
    token: 'token',
    platform: 'platform',
    purpose: 'purpose',
    response_data: 'response_data',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AccessTokensScalarFieldEnum = (typeof AccessTokensScalarFieldEnum)[keyof typeof AccessTokensScalarFieldEnum]


  export const TransactionsScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    transaction_hash: 'transaction_hash',
    note: 'note',
    fiat_currency: 'fiat_currency',
    crypto_currency: 'crypto_currency',
    category: 'category',
    mode: 'mode',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    user_id: 'user_id'
  };

  export type TransactionsScalarFieldEnum = (typeof TransactionsScalarFieldEnum)[keyof typeof TransactionsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'CountryCode'
   */
  export type EnumCountryCodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CountryCode'>
    


  /**
   * Reference to a field of type 'CountryCode[]'
   */
  export type ListEnumCountryCodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CountryCode[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'CredentialsStatus'
   */
  export type EnumCredentialsStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CredentialsStatus'>
    


  /**
   * Reference to a field of type 'CredentialsStatus[]'
   */
  export type ListEnumCredentialsStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CredentialsStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'MerchantStatus'
   */
  export type EnumMerchantStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MerchantStatus'>
    


  /**
   * Reference to a field of type 'MerchantStatus[]'
   */
  export type ListEnumMerchantStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MerchantStatus[]'>
    


  /**
   * Reference to a field of type 'ChainType'
   */
  export type EnumChainTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChainType'>
    


  /**
   * Reference to a field of type 'ChainType[]'
   */
  export type ListEnumChainTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChainType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'TradeType'
   */
  export type EnumTradeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TradeType'>
    


  /**
   * Reference to a field of type 'TradeType[]'
   */
  export type ListEnumTradeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TradeType[]'>
    


  /**
   * Reference to a field of type 'AdvertStatus'
   */
  export type EnumAdvertStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdvertStatus'>
    


  /**
   * Reference to a field of type 'AdvertStatus[]'
   */
  export type ListEnumAdvertStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdvertStatus[]'>
    


  /**
   * Reference to a field of type 'OrderMode'
   */
  export type EnumOrderModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderMode'>
    


  /**
   * Reference to a field of type 'OrderMode[]'
   */
  export type ListEnumOrderModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderMode[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'OrderActions'
   */
  export type EnumOrderActionsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderActions'>
    


  /**
   * Reference to a field of type 'OrderActions[]'
   */
  export type ListEnumOrderActionsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderActions[]'>
    


  /**
   * Reference to a field of type 'AccessTokenPlatform'
   */
  export type EnumAccessTokenPlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccessTokenPlatform'>
    


  /**
   * Reference to a field of type 'AccessTokenPlatform[]'
   */
  export type ListEnumAccessTokenPlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccessTokenPlatform[]'>
    


  /**
   * Reference to a field of type 'TransactionCategory'
   */
  export type EnumTransactionCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionCategory'>
    


  /**
   * Reference to a field of type 'TransactionCategory[]'
   */
  export type ListEnumTransactionCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionCategory[]'>
    


  /**
   * Reference to a field of type 'TransactionsMode'
   */
  export type EnumTransactionsModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionsMode'>
    


  /**
   * Reference to a field of type 'TransactionsMode[]'
   */
  export type ListEnumTransactionsModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionsMode[]'>
    


  /**
   * Reference to a field of type 'TransactionStatus'
   */
  export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus'>
    


  /**
   * Reference to a field of type 'TransactionStatus[]'
   */
  export type ListEnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    firstname?: StringNullableFilter<"User"> | string | null
    lastname?: StringNullableFilter<"User"> | string | null
    middlename?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    transaction_pin?: StringNullableFilter<"User"> | string | null
    telegram_id?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleNullableFilter<"User"> | $Enums.UserRole | null
    country_code?: EnumCountryCodeNullableFilter<"User"> | $Enums.CountryCode | null
    created_at?: DateTimeNullableFilter<"User"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"User"> | Date | string | null
    bvn?: StringNullableFilter<"User"> | string | null
    bvn_status?: EnumCredentialsStatusNullableFilter<"User"> | $Enums.CredentialsStatus | null
    nin?: StringNullableFilter<"User"> | string | null
    nin_status?: EnumCredentialsStatusNullableFilter<"User"> | $Enums.CredentialsStatus | null
    dob?: StringNullableFilter<"User"> | string | null
    dob_status?: EnumCredentialsStatusNullableFilter<"User"> | $Enums.CredentialsStatus | null
    home_address?: StringNullableFilter<"User"> | string | null
    street_address?: StringNullableFilter<"User"> | string | null
    state?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    googleId?: StringNullableFilter<"User"> | string | null
    proof_of_address?: StringNullableFilter<"User"> | string | null
    phone_verified?: BoolNullableFilter<"User"> | boolean | null
    merchant_success_rate?: IntNullableFilter<"User"> | number | null
    merchant_trade_count?: IntNullableFilter<"User"> | number | null
    merchant_nickname?: StringNullableFilter<"User"> | string | null
    merchant_status?: EnumMerchantStatusNullableFilter<"User"> | $Enums.MerchantStatus | null
    crypto_wallets?: CryptoWalletsListRelationFilter
    bank_accounts?: BankAccountListRelationFilter
    adverts?: AdvertsListRelationFilter
    orders?: OrdersListRelationFilter
    transactions?: TransactionsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrderInput | SortOrder
    lastname?: SortOrderInput | SortOrder
    middlename?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    transaction_pin?: SortOrderInput | SortOrder
    telegram_id?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    country_code?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    bvn?: SortOrderInput | SortOrder
    bvn_status?: SortOrderInput | SortOrder
    nin?: SortOrderInput | SortOrder
    nin_status?: SortOrderInput | SortOrder
    dob?: SortOrderInput | SortOrder
    dob_status?: SortOrderInput | SortOrder
    home_address?: SortOrderInput | SortOrder
    street_address?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    proof_of_address?: SortOrderInput | SortOrder
    phone_verified?: SortOrderInput | SortOrder
    merchant_success_rate?: SortOrderInput | SortOrder
    merchant_trade_count?: SortOrderInput | SortOrder
    merchant_nickname?: SortOrderInput | SortOrder
    merchant_status?: SortOrderInput | SortOrder
    crypto_wallets?: CryptoWalletsOrderByRelationAggregateInput
    bank_accounts?: BankAccountOrderByRelationAggregateInput
    adverts?: AdvertsOrderByRelationAggregateInput
    orders?: OrdersOrderByRelationAggregateInput
    transactions?: TransactionsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    telegram_id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstname?: StringNullableFilter<"User"> | string | null
    lastname?: StringNullableFilter<"User"> | string | null
    middlename?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    transaction_pin?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleNullableFilter<"User"> | $Enums.UserRole | null
    country_code?: EnumCountryCodeNullableFilter<"User"> | $Enums.CountryCode | null
    created_at?: DateTimeNullableFilter<"User"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"User"> | Date | string | null
    bvn?: StringNullableFilter<"User"> | string | null
    bvn_status?: EnumCredentialsStatusNullableFilter<"User"> | $Enums.CredentialsStatus | null
    nin?: StringNullableFilter<"User"> | string | null
    nin_status?: EnumCredentialsStatusNullableFilter<"User"> | $Enums.CredentialsStatus | null
    dob?: StringNullableFilter<"User"> | string | null
    dob_status?: EnumCredentialsStatusNullableFilter<"User"> | $Enums.CredentialsStatus | null
    home_address?: StringNullableFilter<"User"> | string | null
    street_address?: StringNullableFilter<"User"> | string | null
    state?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    googleId?: StringNullableFilter<"User"> | string | null
    proof_of_address?: StringNullableFilter<"User"> | string | null
    phone_verified?: BoolNullableFilter<"User"> | boolean | null
    merchant_success_rate?: IntNullableFilter<"User"> | number | null
    merchant_trade_count?: IntNullableFilter<"User"> | number | null
    merchant_nickname?: StringNullableFilter<"User"> | string | null
    merchant_status?: EnumMerchantStatusNullableFilter<"User"> | $Enums.MerchantStatus | null
    crypto_wallets?: CryptoWalletsListRelationFilter
    bank_accounts?: BankAccountListRelationFilter
    adverts?: AdvertsListRelationFilter
    orders?: OrdersListRelationFilter
    transactions?: TransactionsListRelationFilter
  }, "id" | "email" | "telegram_id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrderInput | SortOrder
    lastname?: SortOrderInput | SortOrder
    middlename?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    transaction_pin?: SortOrderInput | SortOrder
    telegram_id?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    country_code?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    bvn?: SortOrderInput | SortOrder
    bvn_status?: SortOrderInput | SortOrder
    nin?: SortOrderInput | SortOrder
    nin_status?: SortOrderInput | SortOrder
    dob?: SortOrderInput | SortOrder
    dob_status?: SortOrderInput | SortOrder
    home_address?: SortOrderInput | SortOrder
    street_address?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    proof_of_address?: SortOrderInput | SortOrder
    phone_verified?: SortOrderInput | SortOrder
    merchant_success_rate?: SortOrderInput | SortOrder
    merchant_trade_count?: SortOrderInput | SortOrder
    merchant_nickname?: SortOrderInput | SortOrder
    merchant_status?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    firstname?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastname?: StringNullableWithAggregatesFilter<"User"> | string | null
    middlename?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    transaction_pin?: StringNullableWithAggregatesFilter<"User"> | string | null
    telegram_id?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleNullableWithAggregatesFilter<"User"> | $Enums.UserRole | null
    country_code?: EnumCountryCodeNullableWithAggregatesFilter<"User"> | $Enums.CountryCode | null
    created_at?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    bvn?: StringNullableWithAggregatesFilter<"User"> | string | null
    bvn_status?: EnumCredentialsStatusNullableWithAggregatesFilter<"User"> | $Enums.CredentialsStatus | null
    nin?: StringNullableWithAggregatesFilter<"User"> | string | null
    nin_status?: EnumCredentialsStatusNullableWithAggregatesFilter<"User"> | $Enums.CredentialsStatus | null
    dob?: StringNullableWithAggregatesFilter<"User"> | string | null
    dob_status?: EnumCredentialsStatusNullableWithAggregatesFilter<"User"> | $Enums.CredentialsStatus | null
    home_address?: StringNullableWithAggregatesFilter<"User"> | string | null
    street_address?: StringNullableWithAggregatesFilter<"User"> | string | null
    state?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    googleId?: StringNullableWithAggregatesFilter<"User"> | string | null
    proof_of_address?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone_verified?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    merchant_success_rate?: IntNullableWithAggregatesFilter<"User"> | number | null
    merchant_trade_count?: IntNullableWithAggregatesFilter<"User"> | number | null
    merchant_nickname?: StringNullableWithAggregatesFilter<"User"> | string | null
    merchant_status?: EnumMerchantStatusNullableWithAggregatesFilter<"User"> | $Enums.MerchantStatus | null
  }

  export type CryptoWalletsWhereInput = {
    AND?: CryptoWalletsWhereInput | CryptoWalletsWhereInput[]
    OR?: CryptoWalletsWhereInput[]
    NOT?: CryptoWalletsWhereInput | CryptoWalletsWhereInput[]
    id?: IntFilter<"CryptoWallets"> | number
    address?: StringFilter<"CryptoWallets"> | string
    wallet_id?: StringNullableFilter<"CryptoWallets"> | string | null
    chainType?: EnumChainTypeFilter<"CryptoWallets"> | $Enums.ChainType
    minipay?: BoolNullableFilter<"CryptoWallets"> | boolean | null
    created_at?: DateTimeNullableFilter<"CryptoWallets"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"CryptoWallets"> | Date | string | null
    user_id?: IntNullableFilter<"CryptoWallets"> | number | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type CryptoWalletsOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    wallet_id?: SortOrderInput | SortOrder
    chainType?: SortOrder
    minipay?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CryptoWalletsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    address?: string
    AND?: CryptoWalletsWhereInput | CryptoWalletsWhereInput[]
    OR?: CryptoWalletsWhereInput[]
    NOT?: CryptoWalletsWhereInput | CryptoWalletsWhereInput[]
    wallet_id?: StringNullableFilter<"CryptoWallets"> | string | null
    chainType?: EnumChainTypeFilter<"CryptoWallets"> | $Enums.ChainType
    minipay?: BoolNullableFilter<"CryptoWallets"> | boolean | null
    created_at?: DateTimeNullableFilter<"CryptoWallets"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"CryptoWallets"> | Date | string | null
    user_id?: IntNullableFilter<"CryptoWallets"> | number | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "address">

  export type CryptoWalletsOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    wallet_id?: SortOrderInput | SortOrder
    chainType?: SortOrder
    minipay?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    _count?: CryptoWalletsCountOrderByAggregateInput
    _avg?: CryptoWalletsAvgOrderByAggregateInput
    _max?: CryptoWalletsMaxOrderByAggregateInput
    _min?: CryptoWalletsMinOrderByAggregateInput
    _sum?: CryptoWalletsSumOrderByAggregateInput
  }

  export type CryptoWalletsScalarWhereWithAggregatesInput = {
    AND?: CryptoWalletsScalarWhereWithAggregatesInput | CryptoWalletsScalarWhereWithAggregatesInput[]
    OR?: CryptoWalletsScalarWhereWithAggregatesInput[]
    NOT?: CryptoWalletsScalarWhereWithAggregatesInput | CryptoWalletsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CryptoWallets"> | number
    address?: StringWithAggregatesFilter<"CryptoWallets"> | string
    wallet_id?: StringNullableWithAggregatesFilter<"CryptoWallets"> | string | null
    chainType?: EnumChainTypeWithAggregatesFilter<"CryptoWallets"> | $Enums.ChainType
    minipay?: BoolNullableWithAggregatesFilter<"CryptoWallets"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"CryptoWallets"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"CryptoWallets"> | Date | string | null
    user_id?: IntNullableWithAggregatesFilter<"CryptoWallets"> | number | null
  }

  export type BankAccountWhereInput = {
    AND?: BankAccountWhereInput | BankAccountWhereInput[]
    OR?: BankAccountWhereInput[]
    NOT?: BankAccountWhereInput | BankAccountWhereInput[]
    id?: IntFilter<"BankAccount"> | number
    account_name?: StringFilter<"BankAccount"> | string
    account_no?: StringFilter<"BankAccount"> | string
    soft_delete?: BoolNullableFilter<"BankAccount"> | boolean | null
    bank_name?: StringFilter<"BankAccount"> | string
    nuban_id?: StringNullableFilter<"BankAccount"> | string | null
    created_at?: DateTimeNullableFilter<"BankAccount"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"BankAccount"> | Date | string | null
    user_id?: IntFilter<"BankAccount"> | number
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    advert?: AdvertsListRelationFilter
    Orders?: OrdersListRelationFilter
  }

  export type BankAccountOrderByWithRelationInput = {
    id?: SortOrder
    account_name?: SortOrder
    account_no?: SortOrder
    soft_delete?: SortOrderInput | SortOrder
    bank_name?: SortOrder
    nuban_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
    advert?: AdvertsOrderByRelationAggregateInput
    Orders?: OrdersOrderByRelationAggregateInput
  }

  export type BankAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BankAccountWhereInput | BankAccountWhereInput[]
    OR?: BankAccountWhereInput[]
    NOT?: BankAccountWhereInput | BankAccountWhereInput[]
    account_name?: StringFilter<"BankAccount"> | string
    account_no?: StringFilter<"BankAccount"> | string
    soft_delete?: BoolNullableFilter<"BankAccount"> | boolean | null
    bank_name?: StringFilter<"BankAccount"> | string
    nuban_id?: StringNullableFilter<"BankAccount"> | string | null
    created_at?: DateTimeNullableFilter<"BankAccount"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"BankAccount"> | Date | string | null
    user_id?: IntFilter<"BankAccount"> | number
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    advert?: AdvertsListRelationFilter
    Orders?: OrdersListRelationFilter
  }, "id">

  export type BankAccountOrderByWithAggregationInput = {
    id?: SortOrder
    account_name?: SortOrder
    account_no?: SortOrder
    soft_delete?: SortOrderInput | SortOrder
    bank_name?: SortOrder
    nuban_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    user_id?: SortOrder
    _count?: BankAccountCountOrderByAggregateInput
    _avg?: BankAccountAvgOrderByAggregateInput
    _max?: BankAccountMaxOrderByAggregateInput
    _min?: BankAccountMinOrderByAggregateInput
    _sum?: BankAccountSumOrderByAggregateInput
  }

  export type BankAccountScalarWhereWithAggregatesInput = {
    AND?: BankAccountScalarWhereWithAggregatesInput | BankAccountScalarWhereWithAggregatesInput[]
    OR?: BankAccountScalarWhereWithAggregatesInput[]
    NOT?: BankAccountScalarWhereWithAggregatesInput | BankAccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BankAccount"> | number
    account_name?: StringWithAggregatesFilter<"BankAccount"> | string
    account_no?: StringWithAggregatesFilter<"BankAccount"> | string
    soft_delete?: BoolNullableWithAggregatesFilter<"BankAccount"> | boolean | null
    bank_name?: StringWithAggregatesFilter<"BankAccount"> | string
    nuban_id?: StringNullableWithAggregatesFilter<"BankAccount"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"BankAccount"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"BankAccount"> | Date | string | null
    user_id?: IntWithAggregatesFilter<"BankAccount"> | number
  }

  export type AdvertsWhereInput = {
    AND?: AdvertsWhereInput | AdvertsWhereInput[]
    OR?: AdvertsWhereInput[]
    NOT?: AdvertsWhereInput | AdvertsWhereInput[]
    id?: IntFilter<"Adverts"> | number
    rateFloat?: FloatNullableFilter<"Adverts"> | number | null
    rateFixed?: FloatNullableFilter<"Adverts"> | number | null
    isFloatRate?: BoolFilter<"Adverts"> | boolean
    limitUpper?: FloatFilter<"Adverts"> | number
    limitLower?: FloatFilter<"Adverts"> | number
    fiatAmountPerCrypto?: IntFilter<"Adverts"> | number
    tradeType?: EnumTradeTypeFilter<"Adverts"> | $Enums.TradeType
    currency_crypto?: StringFilter<"Adverts"> | string
    currency_fiat?: EnumCountryCodeFilter<"Adverts"> | $Enums.CountryCode
    instructions?: StringFilter<"Adverts"> | string
    wallet_address?: StringFilter<"Adverts"> | string
    status?: EnumAdvertStatusNullableFilter<"Adverts"> | $Enums.AdvertStatus | null
    duration?: StringFilter<"Adverts"> | string
    created_at?: DateTimeNullableFilter<"Adverts"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Adverts"> | Date | string | null
    merchant_id?: IntFilter<"Adverts"> | number
    bank_accounts?: BankAccountListRelationFilter
    merchant?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AdvertsOrderByWithRelationInput = {
    id?: SortOrder
    rateFloat?: SortOrderInput | SortOrder
    rateFixed?: SortOrderInput | SortOrder
    isFloatRate?: SortOrder
    limitUpper?: SortOrder
    limitLower?: SortOrder
    fiatAmountPerCrypto?: SortOrder
    tradeType?: SortOrder
    currency_crypto?: SortOrder
    currency_fiat?: SortOrder
    instructions?: SortOrder
    wallet_address?: SortOrder
    status?: SortOrderInput | SortOrder
    duration?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    merchant_id?: SortOrder
    bank_accounts?: BankAccountOrderByRelationAggregateInput
    merchant?: UserOrderByWithRelationInput
  }

  export type AdvertsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AdvertsWhereInput | AdvertsWhereInput[]
    OR?: AdvertsWhereInput[]
    NOT?: AdvertsWhereInput | AdvertsWhereInput[]
    rateFloat?: FloatNullableFilter<"Adverts"> | number | null
    rateFixed?: FloatNullableFilter<"Adverts"> | number | null
    isFloatRate?: BoolFilter<"Adverts"> | boolean
    limitUpper?: FloatFilter<"Adverts"> | number
    limitLower?: FloatFilter<"Adverts"> | number
    fiatAmountPerCrypto?: IntFilter<"Adverts"> | number
    tradeType?: EnumTradeTypeFilter<"Adverts"> | $Enums.TradeType
    currency_crypto?: StringFilter<"Adverts"> | string
    currency_fiat?: EnumCountryCodeFilter<"Adverts"> | $Enums.CountryCode
    instructions?: StringFilter<"Adverts"> | string
    wallet_address?: StringFilter<"Adverts"> | string
    status?: EnumAdvertStatusNullableFilter<"Adverts"> | $Enums.AdvertStatus | null
    duration?: StringFilter<"Adverts"> | string
    created_at?: DateTimeNullableFilter<"Adverts"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Adverts"> | Date | string | null
    merchant_id?: IntFilter<"Adverts"> | number
    bank_accounts?: BankAccountListRelationFilter
    merchant?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type AdvertsOrderByWithAggregationInput = {
    id?: SortOrder
    rateFloat?: SortOrderInput | SortOrder
    rateFixed?: SortOrderInput | SortOrder
    isFloatRate?: SortOrder
    limitUpper?: SortOrder
    limitLower?: SortOrder
    fiatAmountPerCrypto?: SortOrder
    tradeType?: SortOrder
    currency_crypto?: SortOrder
    currency_fiat?: SortOrder
    instructions?: SortOrder
    wallet_address?: SortOrder
    status?: SortOrderInput | SortOrder
    duration?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    merchant_id?: SortOrder
    _count?: AdvertsCountOrderByAggregateInput
    _avg?: AdvertsAvgOrderByAggregateInput
    _max?: AdvertsMaxOrderByAggregateInput
    _min?: AdvertsMinOrderByAggregateInput
    _sum?: AdvertsSumOrderByAggregateInput
  }

  export type AdvertsScalarWhereWithAggregatesInput = {
    AND?: AdvertsScalarWhereWithAggregatesInput | AdvertsScalarWhereWithAggregatesInput[]
    OR?: AdvertsScalarWhereWithAggregatesInput[]
    NOT?: AdvertsScalarWhereWithAggregatesInput | AdvertsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Adverts"> | number
    rateFloat?: FloatNullableWithAggregatesFilter<"Adverts"> | number | null
    rateFixed?: FloatNullableWithAggregatesFilter<"Adverts"> | number | null
    isFloatRate?: BoolWithAggregatesFilter<"Adverts"> | boolean
    limitUpper?: FloatWithAggregatesFilter<"Adverts"> | number
    limitLower?: FloatWithAggregatesFilter<"Adverts"> | number
    fiatAmountPerCrypto?: IntWithAggregatesFilter<"Adverts"> | number
    tradeType?: EnumTradeTypeWithAggregatesFilter<"Adverts"> | $Enums.TradeType
    currency_crypto?: StringWithAggregatesFilter<"Adverts"> | string
    currency_fiat?: EnumCountryCodeWithAggregatesFilter<"Adverts"> | $Enums.CountryCode
    instructions?: StringWithAggregatesFilter<"Adverts"> | string
    wallet_address?: StringWithAggregatesFilter<"Adverts"> | string
    status?: EnumAdvertStatusNullableWithAggregatesFilter<"Adverts"> | $Enums.AdvertStatus | null
    duration?: StringWithAggregatesFilter<"Adverts"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"Adverts"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Adverts"> | Date | string | null
    merchant_id?: IntWithAggregatesFilter<"Adverts"> | number
  }

  export type OrdersWhereInput = {
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    id?: IntFilter<"Orders"> | number
    amount_fiat?: FloatFilter<"Orders"> | number
    amount_crypto?: FloatFilter<"Orders"> | number
    wallet_customer?: StringFilter<"Orders"> | string
    wallet_merchant?: StringFilter<"Orders"> | string
    estimated_duration?: StringFilter<"Orders"> | string
    mode?: EnumOrderModeNullableFilter<"Orders"> | $Enums.OrderMode | null
    currency_crypto?: StringFilter<"Orders"> | string
    currency_fiat?: EnumCountryCodeNullableFilter<"Orders"> | $Enums.CountryCode | null
    trade_type?: EnumTradeTypeFilter<"Orders"> | $Enums.TradeType
    status?: EnumOrderStatusFilter<"Orders"> | $Enums.OrderStatus
    action_user?: EnumOrderActionsNullableFilter<"Orders"> | $Enums.OrderActions | null
    action_merchant?: EnumOrderActionsNullableFilter<"Orders"> | $Enums.OrderActions | null
    txn_hash?: StringNullableFilter<"Orders"> | string | null
    sell_txn_hash_customer_lock_crypto?: StringNullableFilter<"Orders"> | string | null
    sell_txn_hash_customer_release_crypto?: StringNullableFilter<"Orders"> | string | null
    sell_time2_customer_lock_crypto?: DateTimeNullableFilter<"Orders"> | Date | string | null
    sell_time1_customer_request?: DateTimeNullableFilter<"Orders"> | Date | string | null
    sell_time3_merchant_send_fiat?: DateTimeNullableFilter<"Orders"> | Date | string | null
    sell_time4_customer_release_crypto?: DateTimeNullableFilter<"Orders"> | Date | string | null
    buy_time1_customer_request?: DateTimeNullableFilter<"Orders"> | Date | string | null
    buy_time2_merchant_lock_crypto?: DateTimeNullableFilter<"Orders"> | Date | string | null
    buy_time3_customer_send_fiat?: DateTimeNullableFilter<"Orders"> | Date | string | null
    buy_time4_merchant_release_crypto?: DateTimeNullableFilter<"Orders"> | Date | string | null
    buy_txn_hash_merchant_lock_crypto?: StringNullableFilter<"Orders"> | string | null
    buy_txn_hash_merchant_release_crypto?: StringNullableFilter<"Orders"> | string | null
    created_at?: DateTimeNullableFilter<"Orders"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Orders"> | Date | string | null
    bank_id?: IntFilter<"Orders"> | number
    customer_id?: IntFilter<"Orders"> | number
    merchant_id?: IntFilter<"Orders"> | number
    bank?: XOR<BankAccountNullableScalarRelationFilter, BankAccountWhereInput> | null
    customer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type OrdersOrderByWithRelationInput = {
    id?: SortOrder
    amount_fiat?: SortOrder
    amount_crypto?: SortOrder
    wallet_customer?: SortOrder
    wallet_merchant?: SortOrder
    estimated_duration?: SortOrder
    mode?: SortOrderInput | SortOrder
    currency_crypto?: SortOrder
    currency_fiat?: SortOrderInput | SortOrder
    trade_type?: SortOrder
    status?: SortOrder
    action_user?: SortOrderInput | SortOrder
    action_merchant?: SortOrderInput | SortOrder
    txn_hash?: SortOrderInput | SortOrder
    sell_txn_hash_customer_lock_crypto?: SortOrderInput | SortOrder
    sell_txn_hash_customer_release_crypto?: SortOrderInput | SortOrder
    sell_time2_customer_lock_crypto?: SortOrderInput | SortOrder
    sell_time1_customer_request?: SortOrderInput | SortOrder
    sell_time3_merchant_send_fiat?: SortOrderInput | SortOrder
    sell_time4_customer_release_crypto?: SortOrderInput | SortOrder
    buy_time1_customer_request?: SortOrderInput | SortOrder
    buy_time2_merchant_lock_crypto?: SortOrderInput | SortOrder
    buy_time3_customer_send_fiat?: SortOrderInput | SortOrder
    buy_time4_merchant_release_crypto?: SortOrderInput | SortOrder
    buy_txn_hash_merchant_lock_crypto?: SortOrderInput | SortOrder
    buy_txn_hash_merchant_release_crypto?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    bank_id?: SortOrder
    customer_id?: SortOrder
    merchant_id?: SortOrder
    bank?: BankAccountOrderByWithRelationInput
    customer?: UserOrderByWithRelationInput
  }

  export type OrdersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    amount_fiat?: FloatFilter<"Orders"> | number
    amount_crypto?: FloatFilter<"Orders"> | number
    wallet_customer?: StringFilter<"Orders"> | string
    wallet_merchant?: StringFilter<"Orders"> | string
    estimated_duration?: StringFilter<"Orders"> | string
    mode?: EnumOrderModeNullableFilter<"Orders"> | $Enums.OrderMode | null
    currency_crypto?: StringFilter<"Orders"> | string
    currency_fiat?: EnumCountryCodeNullableFilter<"Orders"> | $Enums.CountryCode | null
    trade_type?: EnumTradeTypeFilter<"Orders"> | $Enums.TradeType
    status?: EnumOrderStatusFilter<"Orders"> | $Enums.OrderStatus
    action_user?: EnumOrderActionsNullableFilter<"Orders"> | $Enums.OrderActions | null
    action_merchant?: EnumOrderActionsNullableFilter<"Orders"> | $Enums.OrderActions | null
    txn_hash?: StringNullableFilter<"Orders"> | string | null
    sell_txn_hash_customer_lock_crypto?: StringNullableFilter<"Orders"> | string | null
    sell_txn_hash_customer_release_crypto?: StringNullableFilter<"Orders"> | string | null
    sell_time2_customer_lock_crypto?: DateTimeNullableFilter<"Orders"> | Date | string | null
    sell_time1_customer_request?: DateTimeNullableFilter<"Orders"> | Date | string | null
    sell_time3_merchant_send_fiat?: DateTimeNullableFilter<"Orders"> | Date | string | null
    sell_time4_customer_release_crypto?: DateTimeNullableFilter<"Orders"> | Date | string | null
    buy_time1_customer_request?: DateTimeNullableFilter<"Orders"> | Date | string | null
    buy_time2_merchant_lock_crypto?: DateTimeNullableFilter<"Orders"> | Date | string | null
    buy_time3_customer_send_fiat?: DateTimeNullableFilter<"Orders"> | Date | string | null
    buy_time4_merchant_release_crypto?: DateTimeNullableFilter<"Orders"> | Date | string | null
    buy_txn_hash_merchant_lock_crypto?: StringNullableFilter<"Orders"> | string | null
    buy_txn_hash_merchant_release_crypto?: StringNullableFilter<"Orders"> | string | null
    created_at?: DateTimeNullableFilter<"Orders"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Orders"> | Date | string | null
    bank_id?: IntFilter<"Orders"> | number
    customer_id?: IntFilter<"Orders"> | number
    merchant_id?: IntFilter<"Orders"> | number
    bank?: XOR<BankAccountNullableScalarRelationFilter, BankAccountWhereInput> | null
    customer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type OrdersOrderByWithAggregationInput = {
    id?: SortOrder
    amount_fiat?: SortOrder
    amount_crypto?: SortOrder
    wallet_customer?: SortOrder
    wallet_merchant?: SortOrder
    estimated_duration?: SortOrder
    mode?: SortOrderInput | SortOrder
    currency_crypto?: SortOrder
    currency_fiat?: SortOrderInput | SortOrder
    trade_type?: SortOrder
    status?: SortOrder
    action_user?: SortOrderInput | SortOrder
    action_merchant?: SortOrderInput | SortOrder
    txn_hash?: SortOrderInput | SortOrder
    sell_txn_hash_customer_lock_crypto?: SortOrderInput | SortOrder
    sell_txn_hash_customer_release_crypto?: SortOrderInput | SortOrder
    sell_time2_customer_lock_crypto?: SortOrderInput | SortOrder
    sell_time1_customer_request?: SortOrderInput | SortOrder
    sell_time3_merchant_send_fiat?: SortOrderInput | SortOrder
    sell_time4_customer_release_crypto?: SortOrderInput | SortOrder
    buy_time1_customer_request?: SortOrderInput | SortOrder
    buy_time2_merchant_lock_crypto?: SortOrderInput | SortOrder
    buy_time3_customer_send_fiat?: SortOrderInput | SortOrder
    buy_time4_merchant_release_crypto?: SortOrderInput | SortOrder
    buy_txn_hash_merchant_lock_crypto?: SortOrderInput | SortOrder
    buy_txn_hash_merchant_release_crypto?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    bank_id?: SortOrder
    customer_id?: SortOrder
    merchant_id?: SortOrder
    _count?: OrdersCountOrderByAggregateInput
    _avg?: OrdersAvgOrderByAggregateInput
    _max?: OrdersMaxOrderByAggregateInput
    _min?: OrdersMinOrderByAggregateInput
    _sum?: OrdersSumOrderByAggregateInput
  }

  export type OrdersScalarWhereWithAggregatesInput = {
    AND?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    OR?: OrdersScalarWhereWithAggregatesInput[]
    NOT?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Orders"> | number
    amount_fiat?: FloatWithAggregatesFilter<"Orders"> | number
    amount_crypto?: FloatWithAggregatesFilter<"Orders"> | number
    wallet_customer?: StringWithAggregatesFilter<"Orders"> | string
    wallet_merchant?: StringWithAggregatesFilter<"Orders"> | string
    estimated_duration?: StringWithAggregatesFilter<"Orders"> | string
    mode?: EnumOrderModeNullableWithAggregatesFilter<"Orders"> | $Enums.OrderMode | null
    currency_crypto?: StringWithAggregatesFilter<"Orders"> | string
    currency_fiat?: EnumCountryCodeNullableWithAggregatesFilter<"Orders"> | $Enums.CountryCode | null
    trade_type?: EnumTradeTypeWithAggregatesFilter<"Orders"> | $Enums.TradeType
    status?: EnumOrderStatusWithAggregatesFilter<"Orders"> | $Enums.OrderStatus
    action_user?: EnumOrderActionsNullableWithAggregatesFilter<"Orders"> | $Enums.OrderActions | null
    action_merchant?: EnumOrderActionsNullableWithAggregatesFilter<"Orders"> | $Enums.OrderActions | null
    txn_hash?: StringNullableWithAggregatesFilter<"Orders"> | string | null
    sell_txn_hash_customer_lock_crypto?: StringNullableWithAggregatesFilter<"Orders"> | string | null
    sell_txn_hash_customer_release_crypto?: StringNullableWithAggregatesFilter<"Orders"> | string | null
    sell_time2_customer_lock_crypto?: DateTimeNullableWithAggregatesFilter<"Orders"> | Date | string | null
    sell_time1_customer_request?: DateTimeNullableWithAggregatesFilter<"Orders"> | Date | string | null
    sell_time3_merchant_send_fiat?: DateTimeNullableWithAggregatesFilter<"Orders"> | Date | string | null
    sell_time4_customer_release_crypto?: DateTimeNullableWithAggregatesFilter<"Orders"> | Date | string | null
    buy_time1_customer_request?: DateTimeNullableWithAggregatesFilter<"Orders"> | Date | string | null
    buy_time2_merchant_lock_crypto?: DateTimeNullableWithAggregatesFilter<"Orders"> | Date | string | null
    buy_time3_customer_send_fiat?: DateTimeNullableWithAggregatesFilter<"Orders"> | Date | string | null
    buy_time4_merchant_release_crypto?: DateTimeNullableWithAggregatesFilter<"Orders"> | Date | string | null
    buy_txn_hash_merchant_lock_crypto?: StringNullableWithAggregatesFilter<"Orders"> | string | null
    buy_txn_hash_merchant_release_crypto?: StringNullableWithAggregatesFilter<"Orders"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Orders"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Orders"> | Date | string | null
    bank_id?: IntWithAggregatesFilter<"Orders"> | number
    customer_id?: IntWithAggregatesFilter<"Orders"> | number
    merchant_id?: IntWithAggregatesFilter<"Orders"> | number
  }

  export type ExchangeRatesWhereInput = {
    AND?: ExchangeRatesWhereInput | ExchangeRatesWhereInput[]
    OR?: ExchangeRatesWhereInput[]
    NOT?: ExchangeRatesWhereInput | ExchangeRatesWhereInput[]
    id?: IntFilter<"ExchangeRates"> | number
    rates?: StringNullableFilter<"ExchangeRates"> | string | null
    exchangeratesapi?: StringNullableFilter<"ExchangeRates"> | string | null
    created_at?: DateTimeNullableFilter<"ExchangeRates"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ExchangeRates"> | Date | string | null
  }

  export type ExchangeRatesOrderByWithRelationInput = {
    id?: SortOrder
    rates?: SortOrderInput | SortOrder
    exchangeratesapi?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
  }

  export type ExchangeRatesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExchangeRatesWhereInput | ExchangeRatesWhereInput[]
    OR?: ExchangeRatesWhereInput[]
    NOT?: ExchangeRatesWhereInput | ExchangeRatesWhereInput[]
    rates?: StringNullableFilter<"ExchangeRates"> | string | null
    exchangeratesapi?: StringNullableFilter<"ExchangeRates"> | string | null
    created_at?: DateTimeNullableFilter<"ExchangeRates"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ExchangeRates"> | Date | string | null
  }, "id">

  export type ExchangeRatesOrderByWithAggregationInput = {
    id?: SortOrder
    rates?: SortOrderInput | SortOrder
    exchangeratesapi?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: ExchangeRatesCountOrderByAggregateInput
    _avg?: ExchangeRatesAvgOrderByAggregateInput
    _max?: ExchangeRatesMaxOrderByAggregateInput
    _min?: ExchangeRatesMinOrderByAggregateInput
    _sum?: ExchangeRatesSumOrderByAggregateInput
  }

  export type ExchangeRatesScalarWhereWithAggregatesInput = {
    AND?: ExchangeRatesScalarWhereWithAggregatesInput | ExchangeRatesScalarWhereWithAggregatesInput[]
    OR?: ExchangeRatesScalarWhereWithAggregatesInput[]
    NOT?: ExchangeRatesScalarWhereWithAggregatesInput | ExchangeRatesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ExchangeRates"> | number
    rates?: StringNullableWithAggregatesFilter<"ExchangeRates"> | string | null
    exchangeratesapi?: StringNullableWithAggregatesFilter<"ExchangeRates"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"ExchangeRates"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"ExchangeRates"> | Date | string | null
  }

  export type AccessTokensWhereInput = {
    AND?: AccessTokensWhereInput | AccessTokensWhereInput[]
    OR?: AccessTokensWhereInput[]
    NOT?: AccessTokensWhereInput | AccessTokensWhereInput[]
    id?: IntFilter<"AccessTokens"> | number
    token?: StringFilter<"AccessTokens"> | string
    platform?: EnumAccessTokenPlatformFilter<"AccessTokens"> | $Enums.AccessTokenPlatform
    purpose?: StringNullableFilter<"AccessTokens"> | string | null
    response_data?: StringNullableFilter<"AccessTokens"> | string | null
    created_at?: DateTimeNullableFilter<"AccessTokens"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"AccessTokens"> | Date | string | null
  }

  export type AccessTokensOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    platform?: SortOrder
    purpose?: SortOrderInput | SortOrder
    response_data?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
  }

  export type AccessTokensWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AccessTokensWhereInput | AccessTokensWhereInput[]
    OR?: AccessTokensWhereInput[]
    NOT?: AccessTokensWhereInput | AccessTokensWhereInput[]
    token?: StringFilter<"AccessTokens"> | string
    platform?: EnumAccessTokenPlatformFilter<"AccessTokens"> | $Enums.AccessTokenPlatform
    purpose?: StringNullableFilter<"AccessTokens"> | string | null
    response_data?: StringNullableFilter<"AccessTokens"> | string | null
    created_at?: DateTimeNullableFilter<"AccessTokens"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"AccessTokens"> | Date | string | null
  }, "id">

  export type AccessTokensOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    platform?: SortOrder
    purpose?: SortOrderInput | SortOrder
    response_data?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: AccessTokensCountOrderByAggregateInput
    _avg?: AccessTokensAvgOrderByAggregateInput
    _max?: AccessTokensMaxOrderByAggregateInput
    _min?: AccessTokensMinOrderByAggregateInput
    _sum?: AccessTokensSumOrderByAggregateInput
  }

  export type AccessTokensScalarWhereWithAggregatesInput = {
    AND?: AccessTokensScalarWhereWithAggregatesInput | AccessTokensScalarWhereWithAggregatesInput[]
    OR?: AccessTokensScalarWhereWithAggregatesInput[]
    NOT?: AccessTokensScalarWhereWithAggregatesInput | AccessTokensScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AccessTokens"> | number
    token?: StringWithAggregatesFilter<"AccessTokens"> | string
    platform?: EnumAccessTokenPlatformWithAggregatesFilter<"AccessTokens"> | $Enums.AccessTokenPlatform
    purpose?: StringNullableWithAggregatesFilter<"AccessTokens"> | string | null
    response_data?: StringNullableWithAggregatesFilter<"AccessTokens"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"AccessTokens"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"AccessTokens"> | Date | string | null
  }

  export type TransactionsWhereInput = {
    AND?: TransactionsWhereInput | TransactionsWhereInput[]
    OR?: TransactionsWhereInput[]
    NOT?: TransactionsWhereInput | TransactionsWhereInput[]
    id?: IntFilter<"Transactions"> | number
    amount?: FloatFilter<"Transactions"> | number
    transaction_hash?: StringNullableFilter<"Transactions"> | string | null
    note?: StringNullableFilter<"Transactions"> | string | null
    fiat_currency?: EnumCountryCodeNullableFilter<"Transactions"> | $Enums.CountryCode | null
    crypto_currency?: StringNullableFilter<"Transactions"> | string | null
    category?: EnumTransactionCategoryFilter<"Transactions"> | $Enums.TransactionCategory
    mode?: EnumTransactionsModeFilter<"Transactions"> | $Enums.TransactionsMode
    status?: EnumTransactionStatusFilter<"Transactions"> | $Enums.TransactionStatus
    created_at?: DateTimeNullableFilter<"Transactions"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Transactions"> | Date | string | null
    user_id?: IntNullableFilter<"Transactions"> | number | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type TransactionsOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    transaction_hash?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    fiat_currency?: SortOrderInput | SortOrder
    crypto_currency?: SortOrderInput | SortOrder
    category?: SortOrder
    mode?: SortOrder
    status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TransactionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionsWhereInput | TransactionsWhereInput[]
    OR?: TransactionsWhereInput[]
    NOT?: TransactionsWhereInput | TransactionsWhereInput[]
    amount?: FloatFilter<"Transactions"> | number
    transaction_hash?: StringNullableFilter<"Transactions"> | string | null
    note?: StringNullableFilter<"Transactions"> | string | null
    fiat_currency?: EnumCountryCodeNullableFilter<"Transactions"> | $Enums.CountryCode | null
    crypto_currency?: StringNullableFilter<"Transactions"> | string | null
    category?: EnumTransactionCategoryFilter<"Transactions"> | $Enums.TransactionCategory
    mode?: EnumTransactionsModeFilter<"Transactions"> | $Enums.TransactionsMode
    status?: EnumTransactionStatusFilter<"Transactions"> | $Enums.TransactionStatus
    created_at?: DateTimeNullableFilter<"Transactions"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Transactions"> | Date | string | null
    user_id?: IntNullableFilter<"Transactions"> | number | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type TransactionsOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    transaction_hash?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    fiat_currency?: SortOrderInput | SortOrder
    crypto_currency?: SortOrderInput | SortOrder
    category?: SortOrder
    mode?: SortOrder
    status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    _count?: TransactionsCountOrderByAggregateInput
    _avg?: TransactionsAvgOrderByAggregateInput
    _max?: TransactionsMaxOrderByAggregateInput
    _min?: TransactionsMinOrderByAggregateInput
    _sum?: TransactionsSumOrderByAggregateInput
  }

  export type TransactionsScalarWhereWithAggregatesInput = {
    AND?: TransactionsScalarWhereWithAggregatesInput | TransactionsScalarWhereWithAggregatesInput[]
    OR?: TransactionsScalarWhereWithAggregatesInput[]
    NOT?: TransactionsScalarWhereWithAggregatesInput | TransactionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transactions"> | number
    amount?: FloatWithAggregatesFilter<"Transactions"> | number
    transaction_hash?: StringNullableWithAggregatesFilter<"Transactions"> | string | null
    note?: StringNullableWithAggregatesFilter<"Transactions"> | string | null
    fiat_currency?: EnumCountryCodeNullableWithAggregatesFilter<"Transactions"> | $Enums.CountryCode | null
    crypto_currency?: StringNullableWithAggregatesFilter<"Transactions"> | string | null
    category?: EnumTransactionCategoryWithAggregatesFilter<"Transactions"> | $Enums.TransactionCategory
    mode?: EnumTransactionsModeWithAggregatesFilter<"Transactions"> | $Enums.TransactionsMode
    status?: EnumTransactionStatusWithAggregatesFilter<"Transactions"> | $Enums.TransactionStatus
    created_at?: DateTimeNullableWithAggregatesFilter<"Transactions"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Transactions"> | Date | string | null
    user_id?: IntNullableWithAggregatesFilter<"Transactions"> | number | null
  }

  export type UserCreateInput = {
    firstname?: string | null
    lastname?: string | null
    middlename?: string | null
    email?: string | null
    password?: string | null
    transaction_pin?: string | null
    telegram_id?: string | null
    role?: $Enums.UserRole | null
    country_code?: $Enums.CountryCode | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    bvn?: string | null
    bvn_status?: $Enums.CredentialsStatus | null
    nin?: string | null
    nin_status?: $Enums.CredentialsStatus | null
    dob?: string | null
    dob_status?: $Enums.CredentialsStatus | null
    home_address?: string | null
    street_address?: string | null
    state?: string | null
    phone?: string | null
    googleId?: string | null
    proof_of_address?: string | null
    phone_verified?: boolean | null
    merchant_success_rate?: number | null
    merchant_trade_count?: number | null
    merchant_nickname?: string | null
    merchant_status?: $Enums.MerchantStatus | null
    crypto_wallets?: CryptoWalletsCreateNestedManyWithoutUserInput
    bank_accounts?: BankAccountCreateNestedManyWithoutUserInput
    adverts?: AdvertsCreateNestedManyWithoutMerchantInput
    orders?: OrdersCreateNestedManyWithoutCustomerInput
    transactions?: TransactionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    firstname?: string | null
    lastname?: string | null
    middlename?: string | null
    email?: string | null
    password?: string | null
    transaction_pin?: string | null
    telegram_id?: string | null
    role?: $Enums.UserRole | null
    country_code?: $Enums.CountryCode | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    bvn?: string | null
    bvn_status?: $Enums.CredentialsStatus | null
    nin?: string | null
    nin_status?: $Enums.CredentialsStatus | null
    dob?: string | null
    dob_status?: $Enums.CredentialsStatus | null
    home_address?: string | null
    street_address?: string | null
    state?: string | null
    phone?: string | null
    googleId?: string | null
    proof_of_address?: string | null
    phone_verified?: boolean | null
    merchant_success_rate?: number | null
    merchant_trade_count?: number | null
    merchant_nickname?: string | null
    merchant_status?: $Enums.MerchantStatus | null
    crypto_wallets?: CryptoWalletsUncheckedCreateNestedManyWithoutUserInput
    bank_accounts?: BankAccountUncheckedCreateNestedManyWithoutUserInput
    adverts?: AdvertsUncheckedCreateNestedManyWithoutMerchantInput
    orders?: OrdersUncheckedCreateNestedManyWithoutCustomerInput
    transactions?: TransactionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_pin?: NullableStringFieldUpdateOperationsInput | string | null
    telegram_id?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    country_code?: NullableEnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bvn?: NullableStringFieldUpdateOperationsInput | string | null
    bvn_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    nin?: NullableStringFieldUpdateOperationsInput | string | null
    nin_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    dob_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    home_address?: NullableStringFieldUpdateOperationsInput | string | null
    street_address?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    merchant_success_rate?: NullableIntFieldUpdateOperationsInput | number | null
    merchant_trade_count?: NullableIntFieldUpdateOperationsInput | number | null
    merchant_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    merchant_status?: NullableEnumMerchantStatusFieldUpdateOperationsInput | $Enums.MerchantStatus | null
    crypto_wallets?: CryptoWalletsUpdateManyWithoutUserNestedInput
    bank_accounts?: BankAccountUpdateManyWithoutUserNestedInput
    adverts?: AdvertsUpdateManyWithoutMerchantNestedInput
    orders?: OrdersUpdateManyWithoutCustomerNestedInput
    transactions?: TransactionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_pin?: NullableStringFieldUpdateOperationsInput | string | null
    telegram_id?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    country_code?: NullableEnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bvn?: NullableStringFieldUpdateOperationsInput | string | null
    bvn_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    nin?: NullableStringFieldUpdateOperationsInput | string | null
    nin_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    dob_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    home_address?: NullableStringFieldUpdateOperationsInput | string | null
    street_address?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    merchant_success_rate?: NullableIntFieldUpdateOperationsInput | number | null
    merchant_trade_count?: NullableIntFieldUpdateOperationsInput | number | null
    merchant_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    merchant_status?: NullableEnumMerchantStatusFieldUpdateOperationsInput | $Enums.MerchantStatus | null
    crypto_wallets?: CryptoWalletsUncheckedUpdateManyWithoutUserNestedInput
    bank_accounts?: BankAccountUncheckedUpdateManyWithoutUserNestedInput
    adverts?: AdvertsUncheckedUpdateManyWithoutMerchantNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutCustomerNestedInput
    transactions?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    firstname?: string | null
    lastname?: string | null
    middlename?: string | null
    email?: string | null
    password?: string | null
    transaction_pin?: string | null
    telegram_id?: string | null
    role?: $Enums.UserRole | null
    country_code?: $Enums.CountryCode | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    bvn?: string | null
    bvn_status?: $Enums.CredentialsStatus | null
    nin?: string | null
    nin_status?: $Enums.CredentialsStatus | null
    dob?: string | null
    dob_status?: $Enums.CredentialsStatus | null
    home_address?: string | null
    street_address?: string | null
    state?: string | null
    phone?: string | null
    googleId?: string | null
    proof_of_address?: string | null
    phone_verified?: boolean | null
    merchant_success_rate?: number | null
    merchant_trade_count?: number | null
    merchant_nickname?: string | null
    merchant_status?: $Enums.MerchantStatus | null
  }

  export type UserUpdateManyMutationInput = {
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_pin?: NullableStringFieldUpdateOperationsInput | string | null
    telegram_id?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    country_code?: NullableEnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bvn?: NullableStringFieldUpdateOperationsInput | string | null
    bvn_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    nin?: NullableStringFieldUpdateOperationsInput | string | null
    nin_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    dob_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    home_address?: NullableStringFieldUpdateOperationsInput | string | null
    street_address?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    merchant_success_rate?: NullableIntFieldUpdateOperationsInput | number | null
    merchant_trade_count?: NullableIntFieldUpdateOperationsInput | number | null
    merchant_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    merchant_status?: NullableEnumMerchantStatusFieldUpdateOperationsInput | $Enums.MerchantStatus | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_pin?: NullableStringFieldUpdateOperationsInput | string | null
    telegram_id?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    country_code?: NullableEnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bvn?: NullableStringFieldUpdateOperationsInput | string | null
    bvn_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    nin?: NullableStringFieldUpdateOperationsInput | string | null
    nin_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    dob_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    home_address?: NullableStringFieldUpdateOperationsInput | string | null
    street_address?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    merchant_success_rate?: NullableIntFieldUpdateOperationsInput | number | null
    merchant_trade_count?: NullableIntFieldUpdateOperationsInput | number | null
    merchant_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    merchant_status?: NullableEnumMerchantStatusFieldUpdateOperationsInput | $Enums.MerchantStatus | null
  }

  export type CryptoWalletsCreateInput = {
    address: string
    wallet_id?: string | null
    chainType: $Enums.ChainType
    minipay?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user?: UserCreateNestedOneWithoutCrypto_walletsInput
  }

  export type CryptoWalletsUncheckedCreateInput = {
    id?: number
    address: string
    wallet_id?: string | null
    chainType: $Enums.ChainType
    minipay?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_id?: number | null
  }

  export type CryptoWalletsUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    wallet_id?: NullableStringFieldUpdateOperationsInput | string | null
    chainType?: EnumChainTypeFieldUpdateOperationsInput | $Enums.ChainType
    minipay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneWithoutCrypto_walletsNestedInput
  }

  export type CryptoWalletsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    wallet_id?: NullableStringFieldUpdateOperationsInput | string | null
    chainType?: EnumChainTypeFieldUpdateOperationsInput | $Enums.ChainType
    minipay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CryptoWalletsCreateManyInput = {
    id?: number
    address: string
    wallet_id?: string | null
    chainType: $Enums.ChainType
    minipay?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_id?: number | null
  }

  export type CryptoWalletsUpdateManyMutationInput = {
    address?: StringFieldUpdateOperationsInput | string
    wallet_id?: NullableStringFieldUpdateOperationsInput | string | null
    chainType?: EnumChainTypeFieldUpdateOperationsInput | $Enums.ChainType
    minipay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CryptoWalletsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    wallet_id?: NullableStringFieldUpdateOperationsInput | string | null
    chainType?: EnumChainTypeFieldUpdateOperationsInput | $Enums.ChainType
    minipay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BankAccountCreateInput = {
    account_name: string
    account_no: string
    soft_delete?: boolean | null
    bank_name: string
    nuban_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user?: UserCreateNestedOneWithoutBank_accountsInput
    advert?: AdvertsCreateNestedManyWithoutBank_accountsInput
    Orders?: OrdersCreateNestedManyWithoutBankInput
  }

  export type BankAccountUncheckedCreateInput = {
    id?: number
    account_name: string
    account_no: string
    soft_delete?: boolean | null
    bank_name: string
    nuban_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_id: number
    advert?: AdvertsUncheckedCreateNestedManyWithoutBank_accountsInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutBankInput
  }

  export type BankAccountUpdateInput = {
    account_name?: StringFieldUpdateOperationsInput | string
    account_no?: StringFieldUpdateOperationsInput | string
    soft_delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bank_name?: StringFieldUpdateOperationsInput | string
    nuban_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneWithoutBank_accountsNestedInput
    advert?: AdvertsUpdateManyWithoutBank_accountsNestedInput
    Orders?: OrdersUpdateManyWithoutBankNestedInput
  }

  export type BankAccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_name?: StringFieldUpdateOperationsInput | string
    account_no?: StringFieldUpdateOperationsInput | string
    soft_delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bank_name?: StringFieldUpdateOperationsInput | string
    nuban_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    advert?: AdvertsUncheckedUpdateManyWithoutBank_accountsNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutBankNestedInput
  }

  export type BankAccountCreateManyInput = {
    id?: number
    account_name: string
    account_no: string
    soft_delete?: boolean | null
    bank_name: string
    nuban_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_id: number
  }

  export type BankAccountUpdateManyMutationInput = {
    account_name?: StringFieldUpdateOperationsInput | string
    account_no?: StringFieldUpdateOperationsInput | string
    soft_delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bank_name?: StringFieldUpdateOperationsInput | string
    nuban_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BankAccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_name?: StringFieldUpdateOperationsInput | string
    account_no?: StringFieldUpdateOperationsInput | string
    soft_delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bank_name?: StringFieldUpdateOperationsInput | string
    nuban_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type AdvertsCreateInput = {
    rateFloat?: number | null
    rateFixed?: number | null
    isFloatRate?: boolean
    limitUpper: number
    limitLower: number
    fiatAmountPerCrypto: number
    tradeType: $Enums.TradeType
    currency_crypto: string
    currency_fiat: $Enums.CountryCode
    instructions: string
    wallet_address: string
    status?: $Enums.AdvertStatus | null
    duration: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    bank_accounts?: BankAccountCreateNestedManyWithoutAdvertInput
    merchant?: UserCreateNestedOneWithoutAdvertsInput
  }

  export type AdvertsUncheckedCreateInput = {
    id?: number
    rateFloat?: number | null
    rateFixed?: number | null
    isFloatRate?: boolean
    limitUpper: number
    limitLower: number
    fiatAmountPerCrypto: number
    tradeType: $Enums.TradeType
    currency_crypto: string
    currency_fiat: $Enums.CountryCode
    instructions: string
    wallet_address: string
    status?: $Enums.AdvertStatus | null
    duration: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    merchant_id: number
    bank_accounts?: BankAccountUncheckedCreateNestedManyWithoutAdvertInput
  }

  export type AdvertsUpdateInput = {
    rateFloat?: NullableFloatFieldUpdateOperationsInput | number | null
    rateFixed?: NullableFloatFieldUpdateOperationsInput | number | null
    isFloatRate?: BoolFieldUpdateOperationsInput | boolean
    limitUpper?: FloatFieldUpdateOperationsInput | number
    limitLower?: FloatFieldUpdateOperationsInput | number
    fiatAmountPerCrypto?: IntFieldUpdateOperationsInput | number
    tradeType?: EnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType
    currency_crypto?: StringFieldUpdateOperationsInput | string
    currency_fiat?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    instructions?: StringFieldUpdateOperationsInput | string
    wallet_address?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumAdvertStatusFieldUpdateOperationsInput | $Enums.AdvertStatus | null
    duration?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bank_accounts?: BankAccountUpdateManyWithoutAdvertNestedInput
    merchant?: UserUpdateOneWithoutAdvertsNestedInput
  }

  export type AdvertsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rateFloat?: NullableFloatFieldUpdateOperationsInput | number | null
    rateFixed?: NullableFloatFieldUpdateOperationsInput | number | null
    isFloatRate?: BoolFieldUpdateOperationsInput | boolean
    limitUpper?: FloatFieldUpdateOperationsInput | number
    limitLower?: FloatFieldUpdateOperationsInput | number
    fiatAmountPerCrypto?: IntFieldUpdateOperationsInput | number
    tradeType?: EnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType
    currency_crypto?: StringFieldUpdateOperationsInput | string
    currency_fiat?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    instructions?: StringFieldUpdateOperationsInput | string
    wallet_address?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumAdvertStatusFieldUpdateOperationsInput | $Enums.AdvertStatus | null
    duration?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    merchant_id?: IntFieldUpdateOperationsInput | number
    bank_accounts?: BankAccountUncheckedUpdateManyWithoutAdvertNestedInput
  }

  export type AdvertsCreateManyInput = {
    id?: number
    rateFloat?: number | null
    rateFixed?: number | null
    isFloatRate?: boolean
    limitUpper: number
    limitLower: number
    fiatAmountPerCrypto: number
    tradeType: $Enums.TradeType
    currency_crypto: string
    currency_fiat: $Enums.CountryCode
    instructions: string
    wallet_address: string
    status?: $Enums.AdvertStatus | null
    duration: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    merchant_id: number
  }

  export type AdvertsUpdateManyMutationInput = {
    rateFloat?: NullableFloatFieldUpdateOperationsInput | number | null
    rateFixed?: NullableFloatFieldUpdateOperationsInput | number | null
    isFloatRate?: BoolFieldUpdateOperationsInput | boolean
    limitUpper?: FloatFieldUpdateOperationsInput | number
    limitLower?: FloatFieldUpdateOperationsInput | number
    fiatAmountPerCrypto?: IntFieldUpdateOperationsInput | number
    tradeType?: EnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType
    currency_crypto?: StringFieldUpdateOperationsInput | string
    currency_fiat?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    instructions?: StringFieldUpdateOperationsInput | string
    wallet_address?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumAdvertStatusFieldUpdateOperationsInput | $Enums.AdvertStatus | null
    duration?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdvertsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rateFloat?: NullableFloatFieldUpdateOperationsInput | number | null
    rateFixed?: NullableFloatFieldUpdateOperationsInput | number | null
    isFloatRate?: BoolFieldUpdateOperationsInput | boolean
    limitUpper?: FloatFieldUpdateOperationsInput | number
    limitLower?: FloatFieldUpdateOperationsInput | number
    fiatAmountPerCrypto?: IntFieldUpdateOperationsInput | number
    tradeType?: EnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType
    currency_crypto?: StringFieldUpdateOperationsInput | string
    currency_fiat?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    instructions?: StringFieldUpdateOperationsInput | string
    wallet_address?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumAdvertStatusFieldUpdateOperationsInput | $Enums.AdvertStatus | null
    duration?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    merchant_id?: IntFieldUpdateOperationsInput | number
  }

  export type OrdersCreateInput = {
    amount_fiat: number
    amount_crypto: number
    wallet_customer: string
    wallet_merchant: string
    estimated_duration: string
    mode?: $Enums.OrderMode | null
    currency_crypto: string
    currency_fiat?: $Enums.CountryCode | null
    trade_type: $Enums.TradeType
    status?: $Enums.OrderStatus
    action_user?: $Enums.OrderActions | null
    action_merchant?: $Enums.OrderActions | null
    txn_hash?: string | null
    sell_txn_hash_customer_lock_crypto?: string | null
    sell_txn_hash_customer_release_crypto?: string | null
    sell_time2_customer_lock_crypto?: Date | string | null
    sell_time1_customer_request?: Date | string | null
    sell_time3_merchant_send_fiat?: Date | string | null
    sell_time4_customer_release_crypto?: Date | string | null
    buy_time1_customer_request?: Date | string | null
    buy_time2_merchant_lock_crypto?: Date | string | null
    buy_time3_customer_send_fiat?: Date | string | null
    buy_time4_merchant_release_crypto?: Date | string | null
    buy_txn_hash_merchant_lock_crypto?: string | null
    buy_txn_hash_merchant_release_crypto?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    merchant_id: number
    bank?: BankAccountCreateNestedOneWithoutOrdersInput
    customer?: UserCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateInput = {
    id?: number
    amount_fiat: number
    amount_crypto: number
    wallet_customer: string
    wallet_merchant: string
    estimated_duration: string
    mode?: $Enums.OrderMode | null
    currency_crypto: string
    currency_fiat?: $Enums.CountryCode | null
    trade_type: $Enums.TradeType
    status?: $Enums.OrderStatus
    action_user?: $Enums.OrderActions | null
    action_merchant?: $Enums.OrderActions | null
    txn_hash?: string | null
    sell_txn_hash_customer_lock_crypto?: string | null
    sell_txn_hash_customer_release_crypto?: string | null
    sell_time2_customer_lock_crypto?: Date | string | null
    sell_time1_customer_request?: Date | string | null
    sell_time3_merchant_send_fiat?: Date | string | null
    sell_time4_customer_release_crypto?: Date | string | null
    buy_time1_customer_request?: Date | string | null
    buy_time2_merchant_lock_crypto?: Date | string | null
    buy_time3_customer_send_fiat?: Date | string | null
    buy_time4_merchant_release_crypto?: Date | string | null
    buy_txn_hash_merchant_lock_crypto?: string | null
    buy_txn_hash_merchant_release_crypto?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    bank_id: number
    customer_id: number
    merchant_id: number
  }

  export type OrdersUpdateInput = {
    amount_fiat?: FloatFieldUpdateOperationsInput | number
    amount_crypto?: FloatFieldUpdateOperationsInput | number
    wallet_customer?: StringFieldUpdateOperationsInput | string
    wallet_merchant?: StringFieldUpdateOperationsInput | string
    estimated_duration?: StringFieldUpdateOperationsInput | string
    mode?: NullableEnumOrderModeFieldUpdateOperationsInput | $Enums.OrderMode | null
    currency_crypto?: StringFieldUpdateOperationsInput | string
    currency_fiat?: NullableEnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode | null
    trade_type?: EnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    action_user?: NullableEnumOrderActionsFieldUpdateOperationsInput | $Enums.OrderActions | null
    action_merchant?: NullableEnumOrderActionsFieldUpdateOperationsInput | $Enums.OrderActions | null
    txn_hash?: NullableStringFieldUpdateOperationsInput | string | null
    sell_txn_hash_customer_lock_crypto?: NullableStringFieldUpdateOperationsInput | string | null
    sell_txn_hash_customer_release_crypto?: NullableStringFieldUpdateOperationsInput | string | null
    sell_time2_customer_lock_crypto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sell_time1_customer_request?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sell_time3_merchant_send_fiat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sell_time4_customer_release_crypto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_time1_customer_request?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_time2_merchant_lock_crypto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_time3_customer_send_fiat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_time4_merchant_release_crypto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_txn_hash_merchant_lock_crypto?: NullableStringFieldUpdateOperationsInput | string | null
    buy_txn_hash_merchant_release_crypto?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    merchant_id?: IntFieldUpdateOperationsInput | number
    bank?: BankAccountUpdateOneWithoutOrdersNestedInput
    customer?: UserUpdateOneWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount_fiat?: FloatFieldUpdateOperationsInput | number
    amount_crypto?: FloatFieldUpdateOperationsInput | number
    wallet_customer?: StringFieldUpdateOperationsInput | string
    wallet_merchant?: StringFieldUpdateOperationsInput | string
    estimated_duration?: StringFieldUpdateOperationsInput | string
    mode?: NullableEnumOrderModeFieldUpdateOperationsInput | $Enums.OrderMode | null
    currency_crypto?: StringFieldUpdateOperationsInput | string
    currency_fiat?: NullableEnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode | null
    trade_type?: EnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    action_user?: NullableEnumOrderActionsFieldUpdateOperationsInput | $Enums.OrderActions | null
    action_merchant?: NullableEnumOrderActionsFieldUpdateOperationsInput | $Enums.OrderActions | null
    txn_hash?: NullableStringFieldUpdateOperationsInput | string | null
    sell_txn_hash_customer_lock_crypto?: NullableStringFieldUpdateOperationsInput | string | null
    sell_txn_hash_customer_release_crypto?: NullableStringFieldUpdateOperationsInput | string | null
    sell_time2_customer_lock_crypto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sell_time1_customer_request?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sell_time3_merchant_send_fiat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sell_time4_customer_release_crypto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_time1_customer_request?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_time2_merchant_lock_crypto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_time3_customer_send_fiat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_time4_merchant_release_crypto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_txn_hash_merchant_lock_crypto?: NullableStringFieldUpdateOperationsInput | string | null
    buy_txn_hash_merchant_release_crypto?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bank_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    merchant_id?: IntFieldUpdateOperationsInput | number
  }

  export type OrdersCreateManyInput = {
    id?: number
    amount_fiat: number
    amount_crypto: number
    wallet_customer: string
    wallet_merchant: string
    estimated_duration: string
    mode?: $Enums.OrderMode | null
    currency_crypto: string
    currency_fiat?: $Enums.CountryCode | null
    trade_type: $Enums.TradeType
    status?: $Enums.OrderStatus
    action_user?: $Enums.OrderActions | null
    action_merchant?: $Enums.OrderActions | null
    txn_hash?: string | null
    sell_txn_hash_customer_lock_crypto?: string | null
    sell_txn_hash_customer_release_crypto?: string | null
    sell_time2_customer_lock_crypto?: Date | string | null
    sell_time1_customer_request?: Date | string | null
    sell_time3_merchant_send_fiat?: Date | string | null
    sell_time4_customer_release_crypto?: Date | string | null
    buy_time1_customer_request?: Date | string | null
    buy_time2_merchant_lock_crypto?: Date | string | null
    buy_time3_customer_send_fiat?: Date | string | null
    buy_time4_merchant_release_crypto?: Date | string | null
    buy_txn_hash_merchant_lock_crypto?: string | null
    buy_txn_hash_merchant_release_crypto?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    bank_id: number
    customer_id: number
    merchant_id: number
  }

  export type OrdersUpdateManyMutationInput = {
    amount_fiat?: FloatFieldUpdateOperationsInput | number
    amount_crypto?: FloatFieldUpdateOperationsInput | number
    wallet_customer?: StringFieldUpdateOperationsInput | string
    wallet_merchant?: StringFieldUpdateOperationsInput | string
    estimated_duration?: StringFieldUpdateOperationsInput | string
    mode?: NullableEnumOrderModeFieldUpdateOperationsInput | $Enums.OrderMode | null
    currency_crypto?: StringFieldUpdateOperationsInput | string
    currency_fiat?: NullableEnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode | null
    trade_type?: EnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    action_user?: NullableEnumOrderActionsFieldUpdateOperationsInput | $Enums.OrderActions | null
    action_merchant?: NullableEnumOrderActionsFieldUpdateOperationsInput | $Enums.OrderActions | null
    txn_hash?: NullableStringFieldUpdateOperationsInput | string | null
    sell_txn_hash_customer_lock_crypto?: NullableStringFieldUpdateOperationsInput | string | null
    sell_txn_hash_customer_release_crypto?: NullableStringFieldUpdateOperationsInput | string | null
    sell_time2_customer_lock_crypto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sell_time1_customer_request?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sell_time3_merchant_send_fiat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sell_time4_customer_release_crypto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_time1_customer_request?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_time2_merchant_lock_crypto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_time3_customer_send_fiat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_time4_merchant_release_crypto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_txn_hash_merchant_lock_crypto?: NullableStringFieldUpdateOperationsInput | string | null
    buy_txn_hash_merchant_release_crypto?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    merchant_id?: IntFieldUpdateOperationsInput | number
  }

  export type OrdersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount_fiat?: FloatFieldUpdateOperationsInput | number
    amount_crypto?: FloatFieldUpdateOperationsInput | number
    wallet_customer?: StringFieldUpdateOperationsInput | string
    wallet_merchant?: StringFieldUpdateOperationsInput | string
    estimated_duration?: StringFieldUpdateOperationsInput | string
    mode?: NullableEnumOrderModeFieldUpdateOperationsInput | $Enums.OrderMode | null
    currency_crypto?: StringFieldUpdateOperationsInput | string
    currency_fiat?: NullableEnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode | null
    trade_type?: EnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    action_user?: NullableEnumOrderActionsFieldUpdateOperationsInput | $Enums.OrderActions | null
    action_merchant?: NullableEnumOrderActionsFieldUpdateOperationsInput | $Enums.OrderActions | null
    txn_hash?: NullableStringFieldUpdateOperationsInput | string | null
    sell_txn_hash_customer_lock_crypto?: NullableStringFieldUpdateOperationsInput | string | null
    sell_txn_hash_customer_release_crypto?: NullableStringFieldUpdateOperationsInput | string | null
    sell_time2_customer_lock_crypto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sell_time1_customer_request?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sell_time3_merchant_send_fiat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sell_time4_customer_release_crypto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_time1_customer_request?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_time2_merchant_lock_crypto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_time3_customer_send_fiat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_time4_merchant_release_crypto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_txn_hash_merchant_lock_crypto?: NullableStringFieldUpdateOperationsInput | string | null
    buy_txn_hash_merchant_release_crypto?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bank_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    merchant_id?: IntFieldUpdateOperationsInput | number
  }

  export type ExchangeRatesCreateInput = {
    rates?: string | null
    exchangeratesapi?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ExchangeRatesUncheckedCreateInput = {
    id?: number
    rates?: string | null
    exchangeratesapi?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ExchangeRatesUpdateInput = {
    rates?: NullableStringFieldUpdateOperationsInput | string | null
    exchangeratesapi?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExchangeRatesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rates?: NullableStringFieldUpdateOperationsInput | string | null
    exchangeratesapi?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExchangeRatesCreateManyInput = {
    id?: number
    rates?: string | null
    exchangeratesapi?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ExchangeRatesUpdateManyMutationInput = {
    rates?: NullableStringFieldUpdateOperationsInput | string | null
    exchangeratesapi?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExchangeRatesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rates?: NullableStringFieldUpdateOperationsInput | string | null
    exchangeratesapi?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccessTokensCreateInput = {
    token: string
    platform: $Enums.AccessTokenPlatform
    purpose?: string | null
    response_data?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type AccessTokensUncheckedCreateInput = {
    id?: number
    token: string
    platform: $Enums.AccessTokenPlatform
    purpose?: string | null
    response_data?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type AccessTokensUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    platform?: EnumAccessTokenPlatformFieldUpdateOperationsInput | $Enums.AccessTokenPlatform
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    response_data?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccessTokensUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    platform?: EnumAccessTokenPlatformFieldUpdateOperationsInput | $Enums.AccessTokenPlatform
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    response_data?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccessTokensCreateManyInput = {
    id?: number
    token: string
    platform: $Enums.AccessTokenPlatform
    purpose?: string | null
    response_data?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type AccessTokensUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    platform?: EnumAccessTokenPlatformFieldUpdateOperationsInput | $Enums.AccessTokenPlatform
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    response_data?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccessTokensUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    platform?: EnumAccessTokenPlatformFieldUpdateOperationsInput | $Enums.AccessTokenPlatform
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    response_data?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionsCreateInput = {
    amount: number
    transaction_hash?: string | null
    note?: string | null
    fiat_currency?: $Enums.CountryCode | null
    crypto_currency?: string | null
    category: $Enums.TransactionCategory
    mode: $Enums.TransactionsMode
    status: $Enums.TransactionStatus
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user?: UserCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionsUncheckedCreateInput = {
    id?: number
    amount: number
    transaction_hash?: string | null
    note?: string | null
    fiat_currency?: $Enums.CountryCode | null
    crypto_currency?: string | null
    category: $Enums.TransactionCategory
    mode: $Enums.TransactionsMode
    status: $Enums.TransactionStatus
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_id?: number | null
  }

  export type TransactionsUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    transaction_hash?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    fiat_currency?: NullableEnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode | null
    crypto_currency?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumTransactionCategoryFieldUpdateOperationsInput | $Enums.TransactionCategory
    mode?: EnumTransactionsModeFieldUpdateOperationsInput | $Enums.TransactionsMode
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    transaction_hash?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    fiat_currency?: NullableEnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode | null
    crypto_currency?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumTransactionCategoryFieldUpdateOperationsInput | $Enums.TransactionCategory
    mode?: EnumTransactionsModeFieldUpdateOperationsInput | $Enums.TransactionsMode
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TransactionsCreateManyInput = {
    id?: number
    amount: number
    transaction_hash?: string | null
    note?: string | null
    fiat_currency?: $Enums.CountryCode | null
    crypto_currency?: string | null
    category: $Enums.TransactionCategory
    mode: $Enums.TransactionsMode
    status: $Enums.TransactionStatus
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_id?: number | null
  }

  export type TransactionsUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    transaction_hash?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    fiat_currency?: NullableEnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode | null
    crypto_currency?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumTransactionCategoryFieldUpdateOperationsInput | $Enums.TransactionCategory
    mode?: EnumTransactionsModeFieldUpdateOperationsInput | $Enums.TransactionsMode
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    transaction_hash?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    fiat_currency?: NullableEnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode | null
    crypto_currency?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumTransactionCategoryFieldUpdateOperationsInput | $Enums.TransactionCategory
    mode?: EnumTransactionsModeFieldUpdateOperationsInput | $Enums.TransactionsMode
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserRoleNullableFilter<$PrismaModel> | $Enums.UserRole | null
  }

  export type EnumCountryCodeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CountryCode | EnumCountryCodeFieldRefInput<$PrismaModel> | null
    in?: $Enums.CountryCode[] | ListEnumCountryCodeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CountryCode[] | ListEnumCountryCodeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCountryCodeNullableFilter<$PrismaModel> | $Enums.CountryCode | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumCredentialsStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CredentialsStatus | EnumCredentialsStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.CredentialsStatus[] | ListEnumCredentialsStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CredentialsStatus[] | ListEnumCredentialsStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCredentialsStatusNullableFilter<$PrismaModel> | $Enums.CredentialsStatus | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumMerchantStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MerchantStatus | EnumMerchantStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.MerchantStatus[] | ListEnumMerchantStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MerchantStatus[] | ListEnumMerchantStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMerchantStatusNullableFilter<$PrismaModel> | $Enums.MerchantStatus | null
  }

  export type CryptoWalletsListRelationFilter = {
    every?: CryptoWalletsWhereInput
    some?: CryptoWalletsWhereInput
    none?: CryptoWalletsWhereInput
  }

  export type BankAccountListRelationFilter = {
    every?: BankAccountWhereInput
    some?: BankAccountWhereInput
    none?: BankAccountWhereInput
  }

  export type AdvertsListRelationFilter = {
    every?: AdvertsWhereInput
    some?: AdvertsWhereInput
    none?: AdvertsWhereInput
  }

  export type OrdersListRelationFilter = {
    every?: OrdersWhereInput
    some?: OrdersWhereInput
    none?: OrdersWhereInput
  }

  export type TransactionsListRelationFilter = {
    every?: TransactionsWhereInput
    some?: TransactionsWhereInput
    none?: TransactionsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CryptoWalletsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BankAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdvertsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrdersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    middlename?: SortOrder
    email?: SortOrder
    password?: SortOrder
    transaction_pin?: SortOrder
    telegram_id?: SortOrder
    role?: SortOrder
    country_code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    bvn?: SortOrder
    bvn_status?: SortOrder
    nin?: SortOrder
    nin_status?: SortOrder
    dob?: SortOrder
    dob_status?: SortOrder
    home_address?: SortOrder
    street_address?: SortOrder
    state?: SortOrder
    phone?: SortOrder
    googleId?: SortOrder
    proof_of_address?: SortOrder
    phone_verified?: SortOrder
    merchant_success_rate?: SortOrder
    merchant_trade_count?: SortOrder
    merchant_nickname?: SortOrder
    merchant_status?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    merchant_success_rate?: SortOrder
    merchant_trade_count?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    middlename?: SortOrder
    email?: SortOrder
    password?: SortOrder
    transaction_pin?: SortOrder
    telegram_id?: SortOrder
    role?: SortOrder
    country_code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    bvn?: SortOrder
    bvn_status?: SortOrder
    nin?: SortOrder
    nin_status?: SortOrder
    dob?: SortOrder
    dob_status?: SortOrder
    home_address?: SortOrder
    street_address?: SortOrder
    state?: SortOrder
    phone?: SortOrder
    googleId?: SortOrder
    proof_of_address?: SortOrder
    phone_verified?: SortOrder
    merchant_success_rate?: SortOrder
    merchant_trade_count?: SortOrder
    merchant_nickname?: SortOrder
    merchant_status?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    middlename?: SortOrder
    email?: SortOrder
    password?: SortOrder
    transaction_pin?: SortOrder
    telegram_id?: SortOrder
    role?: SortOrder
    country_code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    bvn?: SortOrder
    bvn_status?: SortOrder
    nin?: SortOrder
    nin_status?: SortOrder
    dob?: SortOrder
    dob_status?: SortOrder
    home_address?: SortOrder
    street_address?: SortOrder
    state?: SortOrder
    phone?: SortOrder
    googleId?: SortOrder
    proof_of_address?: SortOrder
    phone_verified?: SortOrder
    merchant_success_rate?: SortOrder
    merchant_trade_count?: SortOrder
    merchant_nickname?: SortOrder
    merchant_status?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    merchant_success_rate?: SortOrder
    merchant_trade_count?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.UserRole | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUserRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumUserRoleNullableFilter<$PrismaModel>
  }

  export type EnumCountryCodeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CountryCode | EnumCountryCodeFieldRefInput<$PrismaModel> | null
    in?: $Enums.CountryCode[] | ListEnumCountryCodeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CountryCode[] | ListEnumCountryCodeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCountryCodeNullableWithAggregatesFilter<$PrismaModel> | $Enums.CountryCode | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCountryCodeNullableFilter<$PrismaModel>
    _max?: NestedEnumCountryCodeNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumCredentialsStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CredentialsStatus | EnumCredentialsStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.CredentialsStatus[] | ListEnumCredentialsStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CredentialsStatus[] | ListEnumCredentialsStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCredentialsStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.CredentialsStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCredentialsStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumCredentialsStatusNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumMerchantStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MerchantStatus | EnumMerchantStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.MerchantStatus[] | ListEnumMerchantStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MerchantStatus[] | ListEnumMerchantStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMerchantStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.MerchantStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMerchantStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumMerchantStatusNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumChainTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ChainType | EnumChainTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChainType[] | ListEnumChainTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChainType[] | ListEnumChainTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChainTypeFilter<$PrismaModel> | $Enums.ChainType
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type CryptoWalletsCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    wallet_id?: SortOrder
    chainType?: SortOrder
    minipay?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type CryptoWalletsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type CryptoWalletsMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    wallet_id?: SortOrder
    chainType?: SortOrder
    minipay?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type CryptoWalletsMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    wallet_id?: SortOrder
    chainType?: SortOrder
    minipay?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type CryptoWalletsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumChainTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChainType | EnumChainTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChainType[] | ListEnumChainTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChainType[] | ListEnumChainTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChainTypeWithAggregatesFilter<$PrismaModel> | $Enums.ChainType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChainTypeFilter<$PrismaModel>
    _max?: NestedEnumChainTypeFilter<$PrismaModel>
  }

  export type BankAccountCountOrderByAggregateInput = {
    id?: SortOrder
    account_name?: SortOrder
    account_no?: SortOrder
    soft_delete?: SortOrder
    bank_name?: SortOrder
    nuban_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type BankAccountAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type BankAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    account_name?: SortOrder
    account_no?: SortOrder
    soft_delete?: SortOrder
    bank_name?: SortOrder
    nuban_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type BankAccountMinOrderByAggregateInput = {
    id?: SortOrder
    account_name?: SortOrder
    account_no?: SortOrder
    soft_delete?: SortOrder
    bank_name?: SortOrder
    nuban_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type BankAccountSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumTradeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TradeType | EnumTradeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TradeType[] | ListEnumTradeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TradeType[] | ListEnumTradeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTradeTypeFilter<$PrismaModel> | $Enums.TradeType
  }

  export type EnumCountryCodeFilter<$PrismaModel = never> = {
    equals?: $Enums.CountryCode | EnumCountryCodeFieldRefInput<$PrismaModel>
    in?: $Enums.CountryCode[] | ListEnumCountryCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CountryCode[] | ListEnumCountryCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumCountryCodeFilter<$PrismaModel> | $Enums.CountryCode
  }

  export type EnumAdvertStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AdvertStatus | EnumAdvertStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.AdvertStatus[] | ListEnumAdvertStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AdvertStatus[] | ListEnumAdvertStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAdvertStatusNullableFilter<$PrismaModel> | $Enums.AdvertStatus | null
  }

  export type AdvertsCountOrderByAggregateInput = {
    id?: SortOrder
    rateFloat?: SortOrder
    rateFixed?: SortOrder
    isFloatRate?: SortOrder
    limitUpper?: SortOrder
    limitLower?: SortOrder
    fiatAmountPerCrypto?: SortOrder
    tradeType?: SortOrder
    currency_crypto?: SortOrder
    currency_fiat?: SortOrder
    instructions?: SortOrder
    wallet_address?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    merchant_id?: SortOrder
  }

  export type AdvertsAvgOrderByAggregateInput = {
    id?: SortOrder
    rateFloat?: SortOrder
    rateFixed?: SortOrder
    limitUpper?: SortOrder
    limitLower?: SortOrder
    fiatAmountPerCrypto?: SortOrder
    merchant_id?: SortOrder
  }

  export type AdvertsMaxOrderByAggregateInput = {
    id?: SortOrder
    rateFloat?: SortOrder
    rateFixed?: SortOrder
    isFloatRate?: SortOrder
    limitUpper?: SortOrder
    limitLower?: SortOrder
    fiatAmountPerCrypto?: SortOrder
    tradeType?: SortOrder
    currency_crypto?: SortOrder
    currency_fiat?: SortOrder
    instructions?: SortOrder
    wallet_address?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    merchant_id?: SortOrder
  }

  export type AdvertsMinOrderByAggregateInput = {
    id?: SortOrder
    rateFloat?: SortOrder
    rateFixed?: SortOrder
    isFloatRate?: SortOrder
    limitUpper?: SortOrder
    limitLower?: SortOrder
    fiatAmountPerCrypto?: SortOrder
    tradeType?: SortOrder
    currency_crypto?: SortOrder
    currency_fiat?: SortOrder
    instructions?: SortOrder
    wallet_address?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    merchant_id?: SortOrder
  }

  export type AdvertsSumOrderByAggregateInput = {
    id?: SortOrder
    rateFloat?: SortOrder
    rateFixed?: SortOrder
    limitUpper?: SortOrder
    limitLower?: SortOrder
    fiatAmountPerCrypto?: SortOrder
    merchant_id?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumTradeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TradeType | EnumTradeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TradeType[] | ListEnumTradeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TradeType[] | ListEnumTradeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTradeTypeWithAggregatesFilter<$PrismaModel> | $Enums.TradeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTradeTypeFilter<$PrismaModel>
    _max?: NestedEnumTradeTypeFilter<$PrismaModel>
  }

  export type EnumCountryCodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CountryCode | EnumCountryCodeFieldRefInput<$PrismaModel>
    in?: $Enums.CountryCode[] | ListEnumCountryCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CountryCode[] | ListEnumCountryCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumCountryCodeWithAggregatesFilter<$PrismaModel> | $Enums.CountryCode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCountryCodeFilter<$PrismaModel>
    _max?: NestedEnumCountryCodeFilter<$PrismaModel>
  }

  export type EnumAdvertStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdvertStatus | EnumAdvertStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.AdvertStatus[] | ListEnumAdvertStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AdvertStatus[] | ListEnumAdvertStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAdvertStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.AdvertStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAdvertStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumAdvertStatusNullableFilter<$PrismaModel>
  }

  export type EnumOrderModeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderMode | EnumOrderModeFieldRefInput<$PrismaModel> | null
    in?: $Enums.OrderMode[] | ListEnumOrderModeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.OrderMode[] | ListEnumOrderModeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumOrderModeNullableFilter<$PrismaModel> | $Enums.OrderMode | null
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type EnumOrderActionsNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderActions | EnumOrderActionsFieldRefInput<$PrismaModel> | null
    in?: $Enums.OrderActions[] | ListEnumOrderActionsFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.OrderActions[] | ListEnumOrderActionsFieldRefInput<$PrismaModel> | null
    not?: NestedEnumOrderActionsNullableFilter<$PrismaModel> | $Enums.OrderActions | null
  }

  export type BankAccountNullableScalarRelationFilter = {
    is?: BankAccountWhereInput | null
    isNot?: BankAccountWhereInput | null
  }

  export type OrdersCountOrderByAggregateInput = {
    id?: SortOrder
    amount_fiat?: SortOrder
    amount_crypto?: SortOrder
    wallet_customer?: SortOrder
    wallet_merchant?: SortOrder
    estimated_duration?: SortOrder
    mode?: SortOrder
    currency_crypto?: SortOrder
    currency_fiat?: SortOrder
    trade_type?: SortOrder
    status?: SortOrder
    action_user?: SortOrder
    action_merchant?: SortOrder
    txn_hash?: SortOrder
    sell_txn_hash_customer_lock_crypto?: SortOrder
    sell_txn_hash_customer_release_crypto?: SortOrder
    sell_time2_customer_lock_crypto?: SortOrder
    sell_time1_customer_request?: SortOrder
    sell_time3_merchant_send_fiat?: SortOrder
    sell_time4_customer_release_crypto?: SortOrder
    buy_time1_customer_request?: SortOrder
    buy_time2_merchant_lock_crypto?: SortOrder
    buy_time3_customer_send_fiat?: SortOrder
    buy_time4_merchant_release_crypto?: SortOrder
    buy_txn_hash_merchant_lock_crypto?: SortOrder
    buy_txn_hash_merchant_release_crypto?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    bank_id?: SortOrder
    customer_id?: SortOrder
    merchant_id?: SortOrder
  }

  export type OrdersAvgOrderByAggregateInput = {
    id?: SortOrder
    amount_fiat?: SortOrder
    amount_crypto?: SortOrder
    bank_id?: SortOrder
    customer_id?: SortOrder
    merchant_id?: SortOrder
  }

  export type OrdersMaxOrderByAggregateInput = {
    id?: SortOrder
    amount_fiat?: SortOrder
    amount_crypto?: SortOrder
    wallet_customer?: SortOrder
    wallet_merchant?: SortOrder
    estimated_duration?: SortOrder
    mode?: SortOrder
    currency_crypto?: SortOrder
    currency_fiat?: SortOrder
    trade_type?: SortOrder
    status?: SortOrder
    action_user?: SortOrder
    action_merchant?: SortOrder
    txn_hash?: SortOrder
    sell_txn_hash_customer_lock_crypto?: SortOrder
    sell_txn_hash_customer_release_crypto?: SortOrder
    sell_time2_customer_lock_crypto?: SortOrder
    sell_time1_customer_request?: SortOrder
    sell_time3_merchant_send_fiat?: SortOrder
    sell_time4_customer_release_crypto?: SortOrder
    buy_time1_customer_request?: SortOrder
    buy_time2_merchant_lock_crypto?: SortOrder
    buy_time3_customer_send_fiat?: SortOrder
    buy_time4_merchant_release_crypto?: SortOrder
    buy_txn_hash_merchant_lock_crypto?: SortOrder
    buy_txn_hash_merchant_release_crypto?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    bank_id?: SortOrder
    customer_id?: SortOrder
    merchant_id?: SortOrder
  }

  export type OrdersMinOrderByAggregateInput = {
    id?: SortOrder
    amount_fiat?: SortOrder
    amount_crypto?: SortOrder
    wallet_customer?: SortOrder
    wallet_merchant?: SortOrder
    estimated_duration?: SortOrder
    mode?: SortOrder
    currency_crypto?: SortOrder
    currency_fiat?: SortOrder
    trade_type?: SortOrder
    status?: SortOrder
    action_user?: SortOrder
    action_merchant?: SortOrder
    txn_hash?: SortOrder
    sell_txn_hash_customer_lock_crypto?: SortOrder
    sell_txn_hash_customer_release_crypto?: SortOrder
    sell_time2_customer_lock_crypto?: SortOrder
    sell_time1_customer_request?: SortOrder
    sell_time3_merchant_send_fiat?: SortOrder
    sell_time4_customer_release_crypto?: SortOrder
    buy_time1_customer_request?: SortOrder
    buy_time2_merchant_lock_crypto?: SortOrder
    buy_time3_customer_send_fiat?: SortOrder
    buy_time4_merchant_release_crypto?: SortOrder
    buy_txn_hash_merchant_lock_crypto?: SortOrder
    buy_txn_hash_merchant_release_crypto?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    bank_id?: SortOrder
    customer_id?: SortOrder
    merchant_id?: SortOrder
  }

  export type OrdersSumOrderByAggregateInput = {
    id?: SortOrder
    amount_fiat?: SortOrder
    amount_crypto?: SortOrder
    bank_id?: SortOrder
    customer_id?: SortOrder
    merchant_id?: SortOrder
  }

  export type EnumOrderModeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderMode | EnumOrderModeFieldRefInput<$PrismaModel> | null
    in?: $Enums.OrderMode[] | ListEnumOrderModeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.OrderMode[] | ListEnumOrderModeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumOrderModeNullableWithAggregatesFilter<$PrismaModel> | $Enums.OrderMode | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumOrderModeNullableFilter<$PrismaModel>
    _max?: NestedEnumOrderModeNullableFilter<$PrismaModel>
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type EnumOrderActionsNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderActions | EnumOrderActionsFieldRefInput<$PrismaModel> | null
    in?: $Enums.OrderActions[] | ListEnumOrderActionsFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.OrderActions[] | ListEnumOrderActionsFieldRefInput<$PrismaModel> | null
    not?: NestedEnumOrderActionsNullableWithAggregatesFilter<$PrismaModel> | $Enums.OrderActions | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumOrderActionsNullableFilter<$PrismaModel>
    _max?: NestedEnumOrderActionsNullableFilter<$PrismaModel>
  }

  export type ExchangeRatesCountOrderByAggregateInput = {
    id?: SortOrder
    rates?: SortOrder
    exchangeratesapi?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ExchangeRatesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ExchangeRatesMaxOrderByAggregateInput = {
    id?: SortOrder
    rates?: SortOrder
    exchangeratesapi?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ExchangeRatesMinOrderByAggregateInput = {
    id?: SortOrder
    rates?: SortOrder
    exchangeratesapi?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ExchangeRatesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumAccessTokenPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessTokenPlatform | EnumAccessTokenPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.AccessTokenPlatform[] | ListEnumAccessTokenPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccessTokenPlatform[] | ListEnumAccessTokenPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumAccessTokenPlatformFilter<$PrismaModel> | $Enums.AccessTokenPlatform
  }

  export type AccessTokensCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    platform?: SortOrder
    purpose?: SortOrder
    response_data?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AccessTokensAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AccessTokensMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    platform?: SortOrder
    purpose?: SortOrder
    response_data?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AccessTokensMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    platform?: SortOrder
    purpose?: SortOrder
    response_data?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AccessTokensSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumAccessTokenPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessTokenPlatform | EnumAccessTokenPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.AccessTokenPlatform[] | ListEnumAccessTokenPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccessTokenPlatform[] | ListEnumAccessTokenPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumAccessTokenPlatformWithAggregatesFilter<$PrismaModel> | $Enums.AccessTokenPlatform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccessTokenPlatformFilter<$PrismaModel>
    _max?: NestedEnumAccessTokenPlatformFilter<$PrismaModel>
  }

  export type EnumTransactionCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionCategory | EnumTransactionCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionCategory[] | ListEnumTransactionCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionCategory[] | ListEnumTransactionCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionCategoryFilter<$PrismaModel> | $Enums.TransactionCategory
  }

  export type EnumTransactionsModeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionsMode | EnumTransactionsModeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionsMode[] | ListEnumTransactionsModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionsMode[] | ListEnumTransactionsModeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionsModeFilter<$PrismaModel> | $Enums.TransactionsMode
  }

  export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type TransactionsCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    transaction_hash?: SortOrder
    note?: SortOrder
    fiat_currency?: SortOrder
    crypto_currency?: SortOrder
    category?: SortOrder
    mode?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type TransactionsAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    user_id?: SortOrder
  }

  export type TransactionsMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    transaction_hash?: SortOrder
    note?: SortOrder
    fiat_currency?: SortOrder
    crypto_currency?: SortOrder
    category?: SortOrder
    mode?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type TransactionsMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    transaction_hash?: SortOrder
    note?: SortOrder
    fiat_currency?: SortOrder
    crypto_currency?: SortOrder
    category?: SortOrder
    mode?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type TransactionsSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    user_id?: SortOrder
  }

  export type EnumTransactionCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionCategory | EnumTransactionCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionCategory[] | ListEnumTransactionCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionCategory[] | ListEnumTransactionCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionCategoryWithAggregatesFilter<$PrismaModel> | $Enums.TransactionCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionCategoryFilter<$PrismaModel>
    _max?: NestedEnumTransactionCategoryFilter<$PrismaModel>
  }

  export type EnumTransactionsModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionsMode | EnumTransactionsModeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionsMode[] | ListEnumTransactionsModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionsMode[] | ListEnumTransactionsModeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionsModeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionsMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionsModeFilter<$PrismaModel>
    _max?: NestedEnumTransactionsModeFilter<$PrismaModel>
  }

  export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type CryptoWalletsCreateNestedManyWithoutUserInput = {
    create?: XOR<CryptoWalletsCreateWithoutUserInput, CryptoWalletsUncheckedCreateWithoutUserInput> | CryptoWalletsCreateWithoutUserInput[] | CryptoWalletsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CryptoWalletsCreateOrConnectWithoutUserInput | CryptoWalletsCreateOrConnectWithoutUserInput[]
    createMany?: CryptoWalletsCreateManyUserInputEnvelope
    connect?: CryptoWalletsWhereUniqueInput | CryptoWalletsWhereUniqueInput[]
  }

  export type BankAccountCreateNestedManyWithoutUserInput = {
    create?: XOR<BankAccountCreateWithoutUserInput, BankAccountUncheckedCreateWithoutUserInput> | BankAccountCreateWithoutUserInput[] | BankAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BankAccountCreateOrConnectWithoutUserInput | BankAccountCreateOrConnectWithoutUserInput[]
    createMany?: BankAccountCreateManyUserInputEnvelope
    connect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
  }

  export type AdvertsCreateNestedManyWithoutMerchantInput = {
    create?: XOR<AdvertsCreateWithoutMerchantInput, AdvertsUncheckedCreateWithoutMerchantInput> | AdvertsCreateWithoutMerchantInput[] | AdvertsUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: AdvertsCreateOrConnectWithoutMerchantInput | AdvertsCreateOrConnectWithoutMerchantInput[]
    createMany?: AdvertsCreateManyMerchantInputEnvelope
    connect?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
  }

  export type OrdersCreateNestedManyWithoutCustomerInput = {
    create?: XOR<OrdersCreateWithoutCustomerInput, OrdersUncheckedCreateWithoutCustomerInput> | OrdersCreateWithoutCustomerInput[] | OrdersUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutCustomerInput | OrdersCreateOrConnectWithoutCustomerInput[]
    createMany?: OrdersCreateManyCustomerInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type TransactionsCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput> | TransactionsCreateWithoutUserInput[] | TransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutUserInput | TransactionsCreateOrConnectWithoutUserInput[]
    createMany?: TransactionsCreateManyUserInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type CryptoWalletsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CryptoWalletsCreateWithoutUserInput, CryptoWalletsUncheckedCreateWithoutUserInput> | CryptoWalletsCreateWithoutUserInput[] | CryptoWalletsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CryptoWalletsCreateOrConnectWithoutUserInput | CryptoWalletsCreateOrConnectWithoutUserInput[]
    createMany?: CryptoWalletsCreateManyUserInputEnvelope
    connect?: CryptoWalletsWhereUniqueInput | CryptoWalletsWhereUniqueInput[]
  }

  export type BankAccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BankAccountCreateWithoutUserInput, BankAccountUncheckedCreateWithoutUserInput> | BankAccountCreateWithoutUserInput[] | BankAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BankAccountCreateOrConnectWithoutUserInput | BankAccountCreateOrConnectWithoutUserInput[]
    createMany?: BankAccountCreateManyUserInputEnvelope
    connect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
  }

  export type AdvertsUncheckedCreateNestedManyWithoutMerchantInput = {
    create?: XOR<AdvertsCreateWithoutMerchantInput, AdvertsUncheckedCreateWithoutMerchantInput> | AdvertsCreateWithoutMerchantInput[] | AdvertsUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: AdvertsCreateOrConnectWithoutMerchantInput | AdvertsCreateOrConnectWithoutMerchantInput[]
    createMany?: AdvertsCreateManyMerchantInputEnvelope
    connect?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<OrdersCreateWithoutCustomerInput, OrdersUncheckedCreateWithoutCustomerInput> | OrdersCreateWithoutCustomerInput[] | OrdersUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutCustomerInput | OrdersCreateOrConnectWithoutCustomerInput[]
    createMany?: OrdersCreateManyCustomerInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type TransactionsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput> | TransactionsCreateWithoutUserInput[] | TransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutUserInput | TransactionsCreateOrConnectWithoutUserInput[]
    createMany?: TransactionsCreateManyUserInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole | null
  }

  export type NullableEnumCountryCodeFieldUpdateOperationsInput = {
    set?: $Enums.CountryCode | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableEnumCredentialsStatusFieldUpdateOperationsInput = {
    set?: $Enums.CredentialsStatus | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumMerchantStatusFieldUpdateOperationsInput = {
    set?: $Enums.MerchantStatus | null
  }

  export type CryptoWalletsUpdateManyWithoutUserNestedInput = {
    create?: XOR<CryptoWalletsCreateWithoutUserInput, CryptoWalletsUncheckedCreateWithoutUserInput> | CryptoWalletsCreateWithoutUserInput[] | CryptoWalletsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CryptoWalletsCreateOrConnectWithoutUserInput | CryptoWalletsCreateOrConnectWithoutUserInput[]
    upsert?: CryptoWalletsUpsertWithWhereUniqueWithoutUserInput | CryptoWalletsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CryptoWalletsCreateManyUserInputEnvelope
    set?: CryptoWalletsWhereUniqueInput | CryptoWalletsWhereUniqueInput[]
    disconnect?: CryptoWalletsWhereUniqueInput | CryptoWalletsWhereUniqueInput[]
    delete?: CryptoWalletsWhereUniqueInput | CryptoWalletsWhereUniqueInput[]
    connect?: CryptoWalletsWhereUniqueInput | CryptoWalletsWhereUniqueInput[]
    update?: CryptoWalletsUpdateWithWhereUniqueWithoutUserInput | CryptoWalletsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CryptoWalletsUpdateManyWithWhereWithoutUserInput | CryptoWalletsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CryptoWalletsScalarWhereInput | CryptoWalletsScalarWhereInput[]
  }

  export type BankAccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<BankAccountCreateWithoutUserInput, BankAccountUncheckedCreateWithoutUserInput> | BankAccountCreateWithoutUserInput[] | BankAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BankAccountCreateOrConnectWithoutUserInput | BankAccountCreateOrConnectWithoutUserInput[]
    upsert?: BankAccountUpsertWithWhereUniqueWithoutUserInput | BankAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BankAccountCreateManyUserInputEnvelope
    set?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    disconnect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    delete?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    connect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    update?: BankAccountUpdateWithWhereUniqueWithoutUserInput | BankAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BankAccountUpdateManyWithWhereWithoutUserInput | BankAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BankAccountScalarWhereInput | BankAccountScalarWhereInput[]
  }

  export type AdvertsUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<AdvertsCreateWithoutMerchantInput, AdvertsUncheckedCreateWithoutMerchantInput> | AdvertsCreateWithoutMerchantInput[] | AdvertsUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: AdvertsCreateOrConnectWithoutMerchantInput | AdvertsCreateOrConnectWithoutMerchantInput[]
    upsert?: AdvertsUpsertWithWhereUniqueWithoutMerchantInput | AdvertsUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: AdvertsCreateManyMerchantInputEnvelope
    set?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    disconnect?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    delete?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    connect?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    update?: AdvertsUpdateWithWhereUniqueWithoutMerchantInput | AdvertsUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: AdvertsUpdateManyWithWhereWithoutMerchantInput | AdvertsUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: AdvertsScalarWhereInput | AdvertsScalarWhereInput[]
  }

  export type OrdersUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<OrdersCreateWithoutCustomerInput, OrdersUncheckedCreateWithoutCustomerInput> | OrdersCreateWithoutCustomerInput[] | OrdersUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutCustomerInput | OrdersCreateOrConnectWithoutCustomerInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutCustomerInput | OrdersUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: OrdersCreateManyCustomerInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutCustomerInput | OrdersUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutCustomerInput | OrdersUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type TransactionsUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput> | TransactionsCreateWithoutUserInput[] | TransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutUserInput | TransactionsCreateOrConnectWithoutUserInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutUserInput | TransactionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionsCreateManyUserInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutUserInput | TransactionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutUserInput | TransactionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CryptoWalletsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CryptoWalletsCreateWithoutUserInput, CryptoWalletsUncheckedCreateWithoutUserInput> | CryptoWalletsCreateWithoutUserInput[] | CryptoWalletsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CryptoWalletsCreateOrConnectWithoutUserInput | CryptoWalletsCreateOrConnectWithoutUserInput[]
    upsert?: CryptoWalletsUpsertWithWhereUniqueWithoutUserInput | CryptoWalletsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CryptoWalletsCreateManyUserInputEnvelope
    set?: CryptoWalletsWhereUniqueInput | CryptoWalletsWhereUniqueInput[]
    disconnect?: CryptoWalletsWhereUniqueInput | CryptoWalletsWhereUniqueInput[]
    delete?: CryptoWalletsWhereUniqueInput | CryptoWalletsWhereUniqueInput[]
    connect?: CryptoWalletsWhereUniqueInput | CryptoWalletsWhereUniqueInput[]
    update?: CryptoWalletsUpdateWithWhereUniqueWithoutUserInput | CryptoWalletsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CryptoWalletsUpdateManyWithWhereWithoutUserInput | CryptoWalletsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CryptoWalletsScalarWhereInput | CryptoWalletsScalarWhereInput[]
  }

  export type BankAccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BankAccountCreateWithoutUserInput, BankAccountUncheckedCreateWithoutUserInput> | BankAccountCreateWithoutUserInput[] | BankAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BankAccountCreateOrConnectWithoutUserInput | BankAccountCreateOrConnectWithoutUserInput[]
    upsert?: BankAccountUpsertWithWhereUniqueWithoutUserInput | BankAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BankAccountCreateManyUserInputEnvelope
    set?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    disconnect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    delete?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    connect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    update?: BankAccountUpdateWithWhereUniqueWithoutUserInput | BankAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BankAccountUpdateManyWithWhereWithoutUserInput | BankAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BankAccountScalarWhereInput | BankAccountScalarWhereInput[]
  }

  export type AdvertsUncheckedUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<AdvertsCreateWithoutMerchantInput, AdvertsUncheckedCreateWithoutMerchantInput> | AdvertsCreateWithoutMerchantInput[] | AdvertsUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: AdvertsCreateOrConnectWithoutMerchantInput | AdvertsCreateOrConnectWithoutMerchantInput[]
    upsert?: AdvertsUpsertWithWhereUniqueWithoutMerchantInput | AdvertsUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: AdvertsCreateManyMerchantInputEnvelope
    set?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    disconnect?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    delete?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    connect?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    update?: AdvertsUpdateWithWhereUniqueWithoutMerchantInput | AdvertsUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: AdvertsUpdateManyWithWhereWithoutMerchantInput | AdvertsUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: AdvertsScalarWhereInput | AdvertsScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<OrdersCreateWithoutCustomerInput, OrdersUncheckedCreateWithoutCustomerInput> | OrdersCreateWithoutCustomerInput[] | OrdersUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutCustomerInput | OrdersCreateOrConnectWithoutCustomerInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutCustomerInput | OrdersUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: OrdersCreateManyCustomerInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutCustomerInput | OrdersUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutCustomerInput | OrdersUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type TransactionsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput> | TransactionsCreateWithoutUserInput[] | TransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutUserInput | TransactionsCreateOrConnectWithoutUserInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutUserInput | TransactionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionsCreateManyUserInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutUserInput | TransactionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutUserInput | TransactionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCrypto_walletsInput = {
    create?: XOR<UserCreateWithoutCrypto_walletsInput, UserUncheckedCreateWithoutCrypto_walletsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCrypto_walletsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumChainTypeFieldUpdateOperationsInput = {
    set?: $Enums.ChainType
  }

  export type UserUpdateOneWithoutCrypto_walletsNestedInput = {
    create?: XOR<UserCreateWithoutCrypto_walletsInput, UserUncheckedCreateWithoutCrypto_walletsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCrypto_walletsInput
    upsert?: UserUpsertWithoutCrypto_walletsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCrypto_walletsInput, UserUpdateWithoutCrypto_walletsInput>, UserUncheckedUpdateWithoutCrypto_walletsInput>
  }

  export type UserCreateNestedOneWithoutBank_accountsInput = {
    create?: XOR<UserCreateWithoutBank_accountsInput, UserUncheckedCreateWithoutBank_accountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBank_accountsInput
    connect?: UserWhereUniqueInput
  }

  export type AdvertsCreateNestedManyWithoutBank_accountsInput = {
    create?: XOR<AdvertsCreateWithoutBank_accountsInput, AdvertsUncheckedCreateWithoutBank_accountsInput> | AdvertsCreateWithoutBank_accountsInput[] | AdvertsUncheckedCreateWithoutBank_accountsInput[]
    connectOrCreate?: AdvertsCreateOrConnectWithoutBank_accountsInput | AdvertsCreateOrConnectWithoutBank_accountsInput[]
    connect?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
  }

  export type OrdersCreateNestedManyWithoutBankInput = {
    create?: XOR<OrdersCreateWithoutBankInput, OrdersUncheckedCreateWithoutBankInput> | OrdersCreateWithoutBankInput[] | OrdersUncheckedCreateWithoutBankInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutBankInput | OrdersCreateOrConnectWithoutBankInput[]
    createMany?: OrdersCreateManyBankInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type AdvertsUncheckedCreateNestedManyWithoutBank_accountsInput = {
    create?: XOR<AdvertsCreateWithoutBank_accountsInput, AdvertsUncheckedCreateWithoutBank_accountsInput> | AdvertsCreateWithoutBank_accountsInput[] | AdvertsUncheckedCreateWithoutBank_accountsInput[]
    connectOrCreate?: AdvertsCreateOrConnectWithoutBank_accountsInput | AdvertsCreateOrConnectWithoutBank_accountsInput[]
    connect?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutBankInput = {
    create?: XOR<OrdersCreateWithoutBankInput, OrdersUncheckedCreateWithoutBankInput> | OrdersCreateWithoutBankInput[] | OrdersUncheckedCreateWithoutBankInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutBankInput | OrdersCreateOrConnectWithoutBankInput[]
    createMany?: OrdersCreateManyBankInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutBank_accountsNestedInput = {
    create?: XOR<UserCreateWithoutBank_accountsInput, UserUncheckedCreateWithoutBank_accountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBank_accountsInput
    upsert?: UserUpsertWithoutBank_accountsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBank_accountsInput, UserUpdateWithoutBank_accountsInput>, UserUncheckedUpdateWithoutBank_accountsInput>
  }

  export type AdvertsUpdateManyWithoutBank_accountsNestedInput = {
    create?: XOR<AdvertsCreateWithoutBank_accountsInput, AdvertsUncheckedCreateWithoutBank_accountsInput> | AdvertsCreateWithoutBank_accountsInput[] | AdvertsUncheckedCreateWithoutBank_accountsInput[]
    connectOrCreate?: AdvertsCreateOrConnectWithoutBank_accountsInput | AdvertsCreateOrConnectWithoutBank_accountsInput[]
    upsert?: AdvertsUpsertWithWhereUniqueWithoutBank_accountsInput | AdvertsUpsertWithWhereUniqueWithoutBank_accountsInput[]
    set?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    disconnect?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    delete?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    connect?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    update?: AdvertsUpdateWithWhereUniqueWithoutBank_accountsInput | AdvertsUpdateWithWhereUniqueWithoutBank_accountsInput[]
    updateMany?: AdvertsUpdateManyWithWhereWithoutBank_accountsInput | AdvertsUpdateManyWithWhereWithoutBank_accountsInput[]
    deleteMany?: AdvertsScalarWhereInput | AdvertsScalarWhereInput[]
  }

  export type OrdersUpdateManyWithoutBankNestedInput = {
    create?: XOR<OrdersCreateWithoutBankInput, OrdersUncheckedCreateWithoutBankInput> | OrdersCreateWithoutBankInput[] | OrdersUncheckedCreateWithoutBankInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutBankInput | OrdersCreateOrConnectWithoutBankInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutBankInput | OrdersUpsertWithWhereUniqueWithoutBankInput[]
    createMany?: OrdersCreateManyBankInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutBankInput | OrdersUpdateWithWhereUniqueWithoutBankInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutBankInput | OrdersUpdateManyWithWhereWithoutBankInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type AdvertsUncheckedUpdateManyWithoutBank_accountsNestedInput = {
    create?: XOR<AdvertsCreateWithoutBank_accountsInput, AdvertsUncheckedCreateWithoutBank_accountsInput> | AdvertsCreateWithoutBank_accountsInput[] | AdvertsUncheckedCreateWithoutBank_accountsInput[]
    connectOrCreate?: AdvertsCreateOrConnectWithoutBank_accountsInput | AdvertsCreateOrConnectWithoutBank_accountsInput[]
    upsert?: AdvertsUpsertWithWhereUniqueWithoutBank_accountsInput | AdvertsUpsertWithWhereUniqueWithoutBank_accountsInput[]
    set?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    disconnect?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    delete?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    connect?: AdvertsWhereUniqueInput | AdvertsWhereUniqueInput[]
    update?: AdvertsUpdateWithWhereUniqueWithoutBank_accountsInput | AdvertsUpdateWithWhereUniqueWithoutBank_accountsInput[]
    updateMany?: AdvertsUpdateManyWithWhereWithoutBank_accountsInput | AdvertsUpdateManyWithWhereWithoutBank_accountsInput[]
    deleteMany?: AdvertsScalarWhereInput | AdvertsScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutBankNestedInput = {
    create?: XOR<OrdersCreateWithoutBankInput, OrdersUncheckedCreateWithoutBankInput> | OrdersCreateWithoutBankInput[] | OrdersUncheckedCreateWithoutBankInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutBankInput | OrdersCreateOrConnectWithoutBankInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutBankInput | OrdersUpsertWithWhereUniqueWithoutBankInput[]
    createMany?: OrdersCreateManyBankInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutBankInput | OrdersUpdateWithWhereUniqueWithoutBankInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutBankInput | OrdersUpdateManyWithWhereWithoutBankInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type BankAccountCreateNestedManyWithoutAdvertInput = {
    create?: XOR<BankAccountCreateWithoutAdvertInput, BankAccountUncheckedCreateWithoutAdvertInput> | BankAccountCreateWithoutAdvertInput[] | BankAccountUncheckedCreateWithoutAdvertInput[]
    connectOrCreate?: BankAccountCreateOrConnectWithoutAdvertInput | BankAccountCreateOrConnectWithoutAdvertInput[]
    connect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutAdvertsInput = {
    create?: XOR<UserCreateWithoutAdvertsInput, UserUncheckedCreateWithoutAdvertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdvertsInput
    connect?: UserWhereUniqueInput
  }

  export type BankAccountUncheckedCreateNestedManyWithoutAdvertInput = {
    create?: XOR<BankAccountCreateWithoutAdvertInput, BankAccountUncheckedCreateWithoutAdvertInput> | BankAccountCreateWithoutAdvertInput[] | BankAccountUncheckedCreateWithoutAdvertInput[]
    connectOrCreate?: BankAccountCreateOrConnectWithoutAdvertInput | BankAccountCreateOrConnectWithoutAdvertInput[]
    connect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumTradeTypeFieldUpdateOperationsInput = {
    set?: $Enums.TradeType
  }

  export type EnumCountryCodeFieldUpdateOperationsInput = {
    set?: $Enums.CountryCode
  }

  export type NullableEnumAdvertStatusFieldUpdateOperationsInput = {
    set?: $Enums.AdvertStatus | null
  }

  export type BankAccountUpdateManyWithoutAdvertNestedInput = {
    create?: XOR<BankAccountCreateWithoutAdvertInput, BankAccountUncheckedCreateWithoutAdvertInput> | BankAccountCreateWithoutAdvertInput[] | BankAccountUncheckedCreateWithoutAdvertInput[]
    connectOrCreate?: BankAccountCreateOrConnectWithoutAdvertInput | BankAccountCreateOrConnectWithoutAdvertInput[]
    upsert?: BankAccountUpsertWithWhereUniqueWithoutAdvertInput | BankAccountUpsertWithWhereUniqueWithoutAdvertInput[]
    set?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    disconnect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    delete?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    connect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    update?: BankAccountUpdateWithWhereUniqueWithoutAdvertInput | BankAccountUpdateWithWhereUniqueWithoutAdvertInput[]
    updateMany?: BankAccountUpdateManyWithWhereWithoutAdvertInput | BankAccountUpdateManyWithWhereWithoutAdvertInput[]
    deleteMany?: BankAccountScalarWhereInput | BankAccountScalarWhereInput[]
  }

  export type UserUpdateOneWithoutAdvertsNestedInput = {
    create?: XOR<UserCreateWithoutAdvertsInput, UserUncheckedCreateWithoutAdvertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdvertsInput
    upsert?: UserUpsertWithoutAdvertsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdvertsInput, UserUpdateWithoutAdvertsInput>, UserUncheckedUpdateWithoutAdvertsInput>
  }

  export type BankAccountUncheckedUpdateManyWithoutAdvertNestedInput = {
    create?: XOR<BankAccountCreateWithoutAdvertInput, BankAccountUncheckedCreateWithoutAdvertInput> | BankAccountCreateWithoutAdvertInput[] | BankAccountUncheckedCreateWithoutAdvertInput[]
    connectOrCreate?: BankAccountCreateOrConnectWithoutAdvertInput | BankAccountCreateOrConnectWithoutAdvertInput[]
    upsert?: BankAccountUpsertWithWhereUniqueWithoutAdvertInput | BankAccountUpsertWithWhereUniqueWithoutAdvertInput[]
    set?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    disconnect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    delete?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    connect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    update?: BankAccountUpdateWithWhereUniqueWithoutAdvertInput | BankAccountUpdateWithWhereUniqueWithoutAdvertInput[]
    updateMany?: BankAccountUpdateManyWithWhereWithoutAdvertInput | BankAccountUpdateManyWithWhereWithoutAdvertInput[]
    deleteMany?: BankAccountScalarWhereInput | BankAccountScalarWhereInput[]
  }

  export type BankAccountCreateNestedOneWithoutOrdersInput = {
    create?: XOR<BankAccountCreateWithoutOrdersInput, BankAccountUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: BankAccountCreateOrConnectWithoutOrdersInput
    connect?: BankAccountWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type NullableEnumOrderModeFieldUpdateOperationsInput = {
    set?: $Enums.OrderMode | null
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type NullableEnumOrderActionsFieldUpdateOperationsInput = {
    set?: $Enums.OrderActions | null
  }

  export type BankAccountUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<BankAccountCreateWithoutOrdersInput, BankAccountUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: BankAccountCreateOrConnectWithoutOrdersInput
    upsert?: BankAccountUpsertWithoutOrdersInput
    disconnect?: BankAccountWhereInput | boolean
    delete?: BankAccountWhereInput | boolean
    connect?: BankAccountWhereUniqueInput
    update?: XOR<XOR<BankAccountUpdateToOneWithWhereWithoutOrdersInput, BankAccountUpdateWithoutOrdersInput>, BankAccountUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type EnumAccessTokenPlatformFieldUpdateOperationsInput = {
    set?: $Enums.AccessTokenPlatform
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTransactionCategoryFieldUpdateOperationsInput = {
    set?: $Enums.TransactionCategory
  }

  export type EnumTransactionsModeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionsMode
  }

  export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus
  }

  export type UserUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserRoleNullableFilter<$PrismaModel> | $Enums.UserRole | null
  }

  export type NestedEnumCountryCodeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CountryCode | EnumCountryCodeFieldRefInput<$PrismaModel> | null
    in?: $Enums.CountryCode[] | ListEnumCountryCodeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CountryCode[] | ListEnumCountryCodeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCountryCodeNullableFilter<$PrismaModel> | $Enums.CountryCode | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumCredentialsStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CredentialsStatus | EnumCredentialsStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.CredentialsStatus[] | ListEnumCredentialsStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CredentialsStatus[] | ListEnumCredentialsStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCredentialsStatusNullableFilter<$PrismaModel> | $Enums.CredentialsStatus | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumMerchantStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MerchantStatus | EnumMerchantStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.MerchantStatus[] | ListEnumMerchantStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MerchantStatus[] | ListEnumMerchantStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMerchantStatusNullableFilter<$PrismaModel> | $Enums.MerchantStatus | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.UserRole | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUserRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumUserRoleNullableFilter<$PrismaModel>
  }

  export type NestedEnumCountryCodeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CountryCode | EnumCountryCodeFieldRefInput<$PrismaModel> | null
    in?: $Enums.CountryCode[] | ListEnumCountryCodeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CountryCode[] | ListEnumCountryCodeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCountryCodeNullableWithAggregatesFilter<$PrismaModel> | $Enums.CountryCode | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCountryCodeNullableFilter<$PrismaModel>
    _max?: NestedEnumCountryCodeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumCredentialsStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CredentialsStatus | EnumCredentialsStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.CredentialsStatus[] | ListEnumCredentialsStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CredentialsStatus[] | ListEnumCredentialsStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCredentialsStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.CredentialsStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCredentialsStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumCredentialsStatusNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumMerchantStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MerchantStatus | EnumMerchantStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.MerchantStatus[] | ListEnumMerchantStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MerchantStatus[] | ListEnumMerchantStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMerchantStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.MerchantStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMerchantStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumMerchantStatusNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumChainTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ChainType | EnumChainTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChainType[] | ListEnumChainTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChainType[] | ListEnumChainTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChainTypeFilter<$PrismaModel> | $Enums.ChainType
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumChainTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChainType | EnumChainTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChainType[] | ListEnumChainTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChainType[] | ListEnumChainTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChainTypeWithAggregatesFilter<$PrismaModel> | $Enums.ChainType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChainTypeFilter<$PrismaModel>
    _max?: NestedEnumChainTypeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumTradeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TradeType | EnumTradeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TradeType[] | ListEnumTradeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TradeType[] | ListEnumTradeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTradeTypeFilter<$PrismaModel> | $Enums.TradeType
  }

  export type NestedEnumCountryCodeFilter<$PrismaModel = never> = {
    equals?: $Enums.CountryCode | EnumCountryCodeFieldRefInput<$PrismaModel>
    in?: $Enums.CountryCode[] | ListEnumCountryCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CountryCode[] | ListEnumCountryCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumCountryCodeFilter<$PrismaModel> | $Enums.CountryCode
  }

  export type NestedEnumAdvertStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AdvertStatus | EnumAdvertStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.AdvertStatus[] | ListEnumAdvertStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AdvertStatus[] | ListEnumAdvertStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAdvertStatusNullableFilter<$PrismaModel> | $Enums.AdvertStatus | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumTradeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TradeType | EnumTradeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TradeType[] | ListEnumTradeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TradeType[] | ListEnumTradeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTradeTypeWithAggregatesFilter<$PrismaModel> | $Enums.TradeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTradeTypeFilter<$PrismaModel>
    _max?: NestedEnumTradeTypeFilter<$PrismaModel>
  }

  export type NestedEnumCountryCodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CountryCode | EnumCountryCodeFieldRefInput<$PrismaModel>
    in?: $Enums.CountryCode[] | ListEnumCountryCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CountryCode[] | ListEnumCountryCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumCountryCodeWithAggregatesFilter<$PrismaModel> | $Enums.CountryCode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCountryCodeFilter<$PrismaModel>
    _max?: NestedEnumCountryCodeFilter<$PrismaModel>
  }

  export type NestedEnumAdvertStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdvertStatus | EnumAdvertStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.AdvertStatus[] | ListEnumAdvertStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AdvertStatus[] | ListEnumAdvertStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAdvertStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.AdvertStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAdvertStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumAdvertStatusNullableFilter<$PrismaModel>
  }

  export type NestedEnumOrderModeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderMode | EnumOrderModeFieldRefInput<$PrismaModel> | null
    in?: $Enums.OrderMode[] | ListEnumOrderModeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.OrderMode[] | ListEnumOrderModeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumOrderModeNullableFilter<$PrismaModel> | $Enums.OrderMode | null
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumOrderActionsNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderActions | EnumOrderActionsFieldRefInput<$PrismaModel> | null
    in?: $Enums.OrderActions[] | ListEnumOrderActionsFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.OrderActions[] | ListEnumOrderActionsFieldRefInput<$PrismaModel> | null
    not?: NestedEnumOrderActionsNullableFilter<$PrismaModel> | $Enums.OrderActions | null
  }

  export type NestedEnumOrderModeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderMode | EnumOrderModeFieldRefInput<$PrismaModel> | null
    in?: $Enums.OrderMode[] | ListEnumOrderModeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.OrderMode[] | ListEnumOrderModeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumOrderModeNullableWithAggregatesFilter<$PrismaModel> | $Enums.OrderMode | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumOrderModeNullableFilter<$PrismaModel>
    _max?: NestedEnumOrderModeNullableFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedEnumOrderActionsNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderActions | EnumOrderActionsFieldRefInput<$PrismaModel> | null
    in?: $Enums.OrderActions[] | ListEnumOrderActionsFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.OrderActions[] | ListEnumOrderActionsFieldRefInput<$PrismaModel> | null
    not?: NestedEnumOrderActionsNullableWithAggregatesFilter<$PrismaModel> | $Enums.OrderActions | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumOrderActionsNullableFilter<$PrismaModel>
    _max?: NestedEnumOrderActionsNullableFilter<$PrismaModel>
  }

  export type NestedEnumAccessTokenPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessTokenPlatform | EnumAccessTokenPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.AccessTokenPlatform[] | ListEnumAccessTokenPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccessTokenPlatform[] | ListEnumAccessTokenPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumAccessTokenPlatformFilter<$PrismaModel> | $Enums.AccessTokenPlatform
  }

  export type NestedEnumAccessTokenPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccessTokenPlatform | EnumAccessTokenPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.AccessTokenPlatform[] | ListEnumAccessTokenPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccessTokenPlatform[] | ListEnumAccessTokenPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumAccessTokenPlatformWithAggregatesFilter<$PrismaModel> | $Enums.AccessTokenPlatform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccessTokenPlatformFilter<$PrismaModel>
    _max?: NestedEnumAccessTokenPlatformFilter<$PrismaModel>
  }

  export type NestedEnumTransactionCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionCategory | EnumTransactionCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionCategory[] | ListEnumTransactionCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionCategory[] | ListEnumTransactionCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionCategoryFilter<$PrismaModel> | $Enums.TransactionCategory
  }

  export type NestedEnumTransactionsModeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionsMode | EnumTransactionsModeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionsMode[] | ListEnumTransactionsModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionsMode[] | ListEnumTransactionsModeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionsModeFilter<$PrismaModel> | $Enums.TransactionsMode
  }

  export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type NestedEnumTransactionCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionCategory | EnumTransactionCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionCategory[] | ListEnumTransactionCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionCategory[] | ListEnumTransactionCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionCategoryWithAggregatesFilter<$PrismaModel> | $Enums.TransactionCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionCategoryFilter<$PrismaModel>
    _max?: NestedEnumTransactionCategoryFilter<$PrismaModel>
  }

  export type NestedEnumTransactionsModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionsMode | EnumTransactionsModeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionsMode[] | ListEnumTransactionsModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionsMode[] | ListEnumTransactionsModeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionsModeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionsMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionsModeFilter<$PrismaModel>
    _max?: NestedEnumTransactionsModeFilter<$PrismaModel>
  }

  export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type CryptoWalletsCreateWithoutUserInput = {
    address: string
    wallet_id?: string | null
    chainType: $Enums.ChainType
    minipay?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type CryptoWalletsUncheckedCreateWithoutUserInput = {
    id?: number
    address: string
    wallet_id?: string | null
    chainType: $Enums.ChainType
    minipay?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type CryptoWalletsCreateOrConnectWithoutUserInput = {
    where: CryptoWalletsWhereUniqueInput
    create: XOR<CryptoWalletsCreateWithoutUserInput, CryptoWalletsUncheckedCreateWithoutUserInput>
  }

  export type CryptoWalletsCreateManyUserInputEnvelope = {
    data: CryptoWalletsCreateManyUserInput | CryptoWalletsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BankAccountCreateWithoutUserInput = {
    account_name: string
    account_no: string
    soft_delete?: boolean | null
    bank_name: string
    nuban_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    advert?: AdvertsCreateNestedManyWithoutBank_accountsInput
    Orders?: OrdersCreateNestedManyWithoutBankInput
  }

  export type BankAccountUncheckedCreateWithoutUserInput = {
    id?: number
    account_name: string
    account_no: string
    soft_delete?: boolean | null
    bank_name: string
    nuban_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    advert?: AdvertsUncheckedCreateNestedManyWithoutBank_accountsInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutBankInput
  }

  export type BankAccountCreateOrConnectWithoutUserInput = {
    where: BankAccountWhereUniqueInput
    create: XOR<BankAccountCreateWithoutUserInput, BankAccountUncheckedCreateWithoutUserInput>
  }

  export type BankAccountCreateManyUserInputEnvelope = {
    data: BankAccountCreateManyUserInput | BankAccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AdvertsCreateWithoutMerchantInput = {
    rateFloat?: number | null
    rateFixed?: number | null
    isFloatRate?: boolean
    limitUpper: number
    limitLower: number
    fiatAmountPerCrypto: number
    tradeType: $Enums.TradeType
    currency_crypto: string
    currency_fiat: $Enums.CountryCode
    instructions: string
    wallet_address: string
    status?: $Enums.AdvertStatus | null
    duration: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    bank_accounts?: BankAccountCreateNestedManyWithoutAdvertInput
  }

  export type AdvertsUncheckedCreateWithoutMerchantInput = {
    id?: number
    rateFloat?: number | null
    rateFixed?: number | null
    isFloatRate?: boolean
    limitUpper: number
    limitLower: number
    fiatAmountPerCrypto: number
    tradeType: $Enums.TradeType
    currency_crypto: string
    currency_fiat: $Enums.CountryCode
    instructions: string
    wallet_address: string
    status?: $Enums.AdvertStatus | null
    duration: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    bank_accounts?: BankAccountUncheckedCreateNestedManyWithoutAdvertInput
  }

  export type AdvertsCreateOrConnectWithoutMerchantInput = {
    where: AdvertsWhereUniqueInput
    create: XOR<AdvertsCreateWithoutMerchantInput, AdvertsUncheckedCreateWithoutMerchantInput>
  }

  export type AdvertsCreateManyMerchantInputEnvelope = {
    data: AdvertsCreateManyMerchantInput | AdvertsCreateManyMerchantInput[]
    skipDuplicates?: boolean
  }

  export type OrdersCreateWithoutCustomerInput = {
    amount_fiat: number
    amount_crypto: number
    wallet_customer: string
    wallet_merchant: string
    estimated_duration: string
    mode?: $Enums.OrderMode | null
    currency_crypto: string
    currency_fiat?: $Enums.CountryCode | null
    trade_type: $Enums.TradeType
    status?: $Enums.OrderStatus
    action_user?: $Enums.OrderActions | null
    action_merchant?: $Enums.OrderActions | null
    txn_hash?: string | null
    sell_txn_hash_customer_lock_crypto?: string | null
    sell_txn_hash_customer_release_crypto?: string | null
    sell_time2_customer_lock_crypto?: Date | string | null
    sell_time1_customer_request?: Date | string | null
    sell_time3_merchant_send_fiat?: Date | string | null
    sell_time4_customer_release_crypto?: Date | string | null
    buy_time1_customer_request?: Date | string | null
    buy_time2_merchant_lock_crypto?: Date | string | null
    buy_time3_customer_send_fiat?: Date | string | null
    buy_time4_merchant_release_crypto?: Date | string | null
    buy_txn_hash_merchant_lock_crypto?: string | null
    buy_txn_hash_merchant_release_crypto?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    merchant_id: number
    bank?: BankAccountCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutCustomerInput = {
    id?: number
    amount_fiat: number
    amount_crypto: number
    wallet_customer: string
    wallet_merchant: string
    estimated_duration: string
    mode?: $Enums.OrderMode | null
    currency_crypto: string
    currency_fiat?: $Enums.CountryCode | null
    trade_type: $Enums.TradeType
    status?: $Enums.OrderStatus
    action_user?: $Enums.OrderActions | null
    action_merchant?: $Enums.OrderActions | null
    txn_hash?: string | null
    sell_txn_hash_customer_lock_crypto?: string | null
    sell_txn_hash_customer_release_crypto?: string | null
    sell_time2_customer_lock_crypto?: Date | string | null
    sell_time1_customer_request?: Date | string | null
    sell_time3_merchant_send_fiat?: Date | string | null
    sell_time4_customer_release_crypto?: Date | string | null
    buy_time1_customer_request?: Date | string | null
    buy_time2_merchant_lock_crypto?: Date | string | null
    buy_time3_customer_send_fiat?: Date | string | null
    buy_time4_merchant_release_crypto?: Date | string | null
    buy_txn_hash_merchant_lock_crypto?: string | null
    buy_txn_hash_merchant_release_crypto?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    bank_id: number
    merchant_id: number
  }

  export type OrdersCreateOrConnectWithoutCustomerInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutCustomerInput, OrdersUncheckedCreateWithoutCustomerInput>
  }

  export type OrdersCreateManyCustomerInputEnvelope = {
    data: OrdersCreateManyCustomerInput | OrdersCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type TransactionsCreateWithoutUserInput = {
    amount: number
    transaction_hash?: string | null
    note?: string | null
    fiat_currency?: $Enums.CountryCode | null
    crypto_currency?: string | null
    category: $Enums.TransactionCategory
    mode: $Enums.TransactionsMode
    status: $Enums.TransactionStatus
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type TransactionsUncheckedCreateWithoutUserInput = {
    id?: number
    amount: number
    transaction_hash?: string | null
    note?: string | null
    fiat_currency?: $Enums.CountryCode | null
    crypto_currency?: string | null
    category: $Enums.TransactionCategory
    mode: $Enums.TransactionsMode
    status: $Enums.TransactionStatus
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type TransactionsCreateOrConnectWithoutUserInput = {
    where: TransactionsWhereUniqueInput
    create: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput>
  }

  export type TransactionsCreateManyUserInputEnvelope = {
    data: TransactionsCreateManyUserInput | TransactionsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CryptoWalletsUpsertWithWhereUniqueWithoutUserInput = {
    where: CryptoWalletsWhereUniqueInput
    update: XOR<CryptoWalletsUpdateWithoutUserInput, CryptoWalletsUncheckedUpdateWithoutUserInput>
    create: XOR<CryptoWalletsCreateWithoutUserInput, CryptoWalletsUncheckedCreateWithoutUserInput>
  }

  export type CryptoWalletsUpdateWithWhereUniqueWithoutUserInput = {
    where: CryptoWalletsWhereUniqueInput
    data: XOR<CryptoWalletsUpdateWithoutUserInput, CryptoWalletsUncheckedUpdateWithoutUserInput>
  }

  export type CryptoWalletsUpdateManyWithWhereWithoutUserInput = {
    where: CryptoWalletsScalarWhereInput
    data: XOR<CryptoWalletsUpdateManyMutationInput, CryptoWalletsUncheckedUpdateManyWithoutUserInput>
  }

  export type CryptoWalletsScalarWhereInput = {
    AND?: CryptoWalletsScalarWhereInput | CryptoWalletsScalarWhereInput[]
    OR?: CryptoWalletsScalarWhereInput[]
    NOT?: CryptoWalletsScalarWhereInput | CryptoWalletsScalarWhereInput[]
    id?: IntFilter<"CryptoWallets"> | number
    address?: StringFilter<"CryptoWallets"> | string
    wallet_id?: StringNullableFilter<"CryptoWallets"> | string | null
    chainType?: EnumChainTypeFilter<"CryptoWallets"> | $Enums.ChainType
    minipay?: BoolNullableFilter<"CryptoWallets"> | boolean | null
    created_at?: DateTimeNullableFilter<"CryptoWallets"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"CryptoWallets"> | Date | string | null
    user_id?: IntNullableFilter<"CryptoWallets"> | number | null
  }

  export type BankAccountUpsertWithWhereUniqueWithoutUserInput = {
    where: BankAccountWhereUniqueInput
    update: XOR<BankAccountUpdateWithoutUserInput, BankAccountUncheckedUpdateWithoutUserInput>
    create: XOR<BankAccountCreateWithoutUserInput, BankAccountUncheckedCreateWithoutUserInput>
  }

  export type BankAccountUpdateWithWhereUniqueWithoutUserInput = {
    where: BankAccountWhereUniqueInput
    data: XOR<BankAccountUpdateWithoutUserInput, BankAccountUncheckedUpdateWithoutUserInput>
  }

  export type BankAccountUpdateManyWithWhereWithoutUserInput = {
    where: BankAccountScalarWhereInput
    data: XOR<BankAccountUpdateManyMutationInput, BankAccountUncheckedUpdateManyWithoutUserInput>
  }

  export type BankAccountScalarWhereInput = {
    AND?: BankAccountScalarWhereInput | BankAccountScalarWhereInput[]
    OR?: BankAccountScalarWhereInput[]
    NOT?: BankAccountScalarWhereInput | BankAccountScalarWhereInput[]
    id?: IntFilter<"BankAccount"> | number
    account_name?: StringFilter<"BankAccount"> | string
    account_no?: StringFilter<"BankAccount"> | string
    soft_delete?: BoolNullableFilter<"BankAccount"> | boolean | null
    bank_name?: StringFilter<"BankAccount"> | string
    nuban_id?: StringNullableFilter<"BankAccount"> | string | null
    created_at?: DateTimeNullableFilter<"BankAccount"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"BankAccount"> | Date | string | null
    user_id?: IntFilter<"BankAccount"> | number
  }

  export type AdvertsUpsertWithWhereUniqueWithoutMerchantInput = {
    where: AdvertsWhereUniqueInput
    update: XOR<AdvertsUpdateWithoutMerchantInput, AdvertsUncheckedUpdateWithoutMerchantInput>
    create: XOR<AdvertsCreateWithoutMerchantInput, AdvertsUncheckedCreateWithoutMerchantInput>
  }

  export type AdvertsUpdateWithWhereUniqueWithoutMerchantInput = {
    where: AdvertsWhereUniqueInput
    data: XOR<AdvertsUpdateWithoutMerchantInput, AdvertsUncheckedUpdateWithoutMerchantInput>
  }

  export type AdvertsUpdateManyWithWhereWithoutMerchantInput = {
    where: AdvertsScalarWhereInput
    data: XOR<AdvertsUpdateManyMutationInput, AdvertsUncheckedUpdateManyWithoutMerchantInput>
  }

  export type AdvertsScalarWhereInput = {
    AND?: AdvertsScalarWhereInput | AdvertsScalarWhereInput[]
    OR?: AdvertsScalarWhereInput[]
    NOT?: AdvertsScalarWhereInput | AdvertsScalarWhereInput[]
    id?: IntFilter<"Adverts"> | number
    rateFloat?: FloatNullableFilter<"Adverts"> | number | null
    rateFixed?: FloatNullableFilter<"Adverts"> | number | null
    isFloatRate?: BoolFilter<"Adverts"> | boolean
    limitUpper?: FloatFilter<"Adverts"> | number
    limitLower?: FloatFilter<"Adverts"> | number
    fiatAmountPerCrypto?: IntFilter<"Adverts"> | number
    tradeType?: EnumTradeTypeFilter<"Adverts"> | $Enums.TradeType
    currency_crypto?: StringFilter<"Adverts"> | string
    currency_fiat?: EnumCountryCodeFilter<"Adverts"> | $Enums.CountryCode
    instructions?: StringFilter<"Adverts"> | string
    wallet_address?: StringFilter<"Adverts"> | string
    status?: EnumAdvertStatusNullableFilter<"Adverts"> | $Enums.AdvertStatus | null
    duration?: StringFilter<"Adverts"> | string
    created_at?: DateTimeNullableFilter<"Adverts"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Adverts"> | Date | string | null
    merchant_id?: IntFilter<"Adverts"> | number
  }

  export type OrdersUpsertWithWhereUniqueWithoutCustomerInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutCustomerInput, OrdersUncheckedUpdateWithoutCustomerInput>
    create: XOR<OrdersCreateWithoutCustomerInput, OrdersUncheckedCreateWithoutCustomerInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutCustomerInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutCustomerInput, OrdersUncheckedUpdateWithoutCustomerInput>
  }

  export type OrdersUpdateManyWithWhereWithoutCustomerInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutCustomerInput>
  }

  export type OrdersScalarWhereInput = {
    AND?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    OR?: OrdersScalarWhereInput[]
    NOT?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    id?: IntFilter<"Orders"> | number
    amount_fiat?: FloatFilter<"Orders"> | number
    amount_crypto?: FloatFilter<"Orders"> | number
    wallet_customer?: StringFilter<"Orders"> | string
    wallet_merchant?: StringFilter<"Orders"> | string
    estimated_duration?: StringFilter<"Orders"> | string
    mode?: EnumOrderModeNullableFilter<"Orders"> | $Enums.OrderMode | null
    currency_crypto?: StringFilter<"Orders"> | string
    currency_fiat?: EnumCountryCodeNullableFilter<"Orders"> | $Enums.CountryCode | null
    trade_type?: EnumTradeTypeFilter<"Orders"> | $Enums.TradeType
    status?: EnumOrderStatusFilter<"Orders"> | $Enums.OrderStatus
    action_user?: EnumOrderActionsNullableFilter<"Orders"> | $Enums.OrderActions | null
    action_merchant?: EnumOrderActionsNullableFilter<"Orders"> | $Enums.OrderActions | null
    txn_hash?: StringNullableFilter<"Orders"> | string | null
    sell_txn_hash_customer_lock_crypto?: StringNullableFilter<"Orders"> | string | null
    sell_txn_hash_customer_release_crypto?: StringNullableFilter<"Orders"> | string | null
    sell_time2_customer_lock_crypto?: DateTimeNullableFilter<"Orders"> | Date | string | null
    sell_time1_customer_request?: DateTimeNullableFilter<"Orders"> | Date | string | null
    sell_time3_merchant_send_fiat?: DateTimeNullableFilter<"Orders"> | Date | string | null
    sell_time4_customer_release_crypto?: DateTimeNullableFilter<"Orders"> | Date | string | null
    buy_time1_customer_request?: DateTimeNullableFilter<"Orders"> | Date | string | null
    buy_time2_merchant_lock_crypto?: DateTimeNullableFilter<"Orders"> | Date | string | null
    buy_time3_customer_send_fiat?: DateTimeNullableFilter<"Orders"> | Date | string | null
    buy_time4_merchant_release_crypto?: DateTimeNullableFilter<"Orders"> | Date | string | null
    buy_txn_hash_merchant_lock_crypto?: StringNullableFilter<"Orders"> | string | null
    buy_txn_hash_merchant_release_crypto?: StringNullableFilter<"Orders"> | string | null
    created_at?: DateTimeNullableFilter<"Orders"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Orders"> | Date | string | null
    bank_id?: IntFilter<"Orders"> | number
    customer_id?: IntFilter<"Orders"> | number
    merchant_id?: IntFilter<"Orders"> | number
  }

  export type TransactionsUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionsWhereUniqueInput
    update: XOR<TransactionsUpdateWithoutUserInput, TransactionsUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput>
  }

  export type TransactionsUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionsWhereUniqueInput
    data: XOR<TransactionsUpdateWithoutUserInput, TransactionsUncheckedUpdateWithoutUserInput>
  }

  export type TransactionsUpdateManyWithWhereWithoutUserInput = {
    where: TransactionsScalarWhereInput
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionsScalarWhereInput = {
    AND?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
    OR?: TransactionsScalarWhereInput[]
    NOT?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
    id?: IntFilter<"Transactions"> | number
    amount?: FloatFilter<"Transactions"> | number
    transaction_hash?: StringNullableFilter<"Transactions"> | string | null
    note?: StringNullableFilter<"Transactions"> | string | null
    fiat_currency?: EnumCountryCodeNullableFilter<"Transactions"> | $Enums.CountryCode | null
    crypto_currency?: StringNullableFilter<"Transactions"> | string | null
    category?: EnumTransactionCategoryFilter<"Transactions"> | $Enums.TransactionCategory
    mode?: EnumTransactionsModeFilter<"Transactions"> | $Enums.TransactionsMode
    status?: EnumTransactionStatusFilter<"Transactions"> | $Enums.TransactionStatus
    created_at?: DateTimeNullableFilter<"Transactions"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Transactions"> | Date | string | null
    user_id?: IntNullableFilter<"Transactions"> | number | null
  }

  export type UserCreateWithoutCrypto_walletsInput = {
    firstname?: string | null
    lastname?: string | null
    middlename?: string | null
    email?: string | null
    password?: string | null
    transaction_pin?: string | null
    telegram_id?: string | null
    role?: $Enums.UserRole | null
    country_code?: $Enums.CountryCode | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    bvn?: string | null
    bvn_status?: $Enums.CredentialsStatus | null
    nin?: string | null
    nin_status?: $Enums.CredentialsStatus | null
    dob?: string | null
    dob_status?: $Enums.CredentialsStatus | null
    home_address?: string | null
    street_address?: string | null
    state?: string | null
    phone?: string | null
    googleId?: string | null
    proof_of_address?: string | null
    phone_verified?: boolean | null
    merchant_success_rate?: number | null
    merchant_trade_count?: number | null
    merchant_nickname?: string | null
    merchant_status?: $Enums.MerchantStatus | null
    bank_accounts?: BankAccountCreateNestedManyWithoutUserInput
    adverts?: AdvertsCreateNestedManyWithoutMerchantInput
    orders?: OrdersCreateNestedManyWithoutCustomerInput
    transactions?: TransactionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCrypto_walletsInput = {
    id?: number
    firstname?: string | null
    lastname?: string | null
    middlename?: string | null
    email?: string | null
    password?: string | null
    transaction_pin?: string | null
    telegram_id?: string | null
    role?: $Enums.UserRole | null
    country_code?: $Enums.CountryCode | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    bvn?: string | null
    bvn_status?: $Enums.CredentialsStatus | null
    nin?: string | null
    nin_status?: $Enums.CredentialsStatus | null
    dob?: string | null
    dob_status?: $Enums.CredentialsStatus | null
    home_address?: string | null
    street_address?: string | null
    state?: string | null
    phone?: string | null
    googleId?: string | null
    proof_of_address?: string | null
    phone_verified?: boolean | null
    merchant_success_rate?: number | null
    merchant_trade_count?: number | null
    merchant_nickname?: string | null
    merchant_status?: $Enums.MerchantStatus | null
    bank_accounts?: BankAccountUncheckedCreateNestedManyWithoutUserInput
    adverts?: AdvertsUncheckedCreateNestedManyWithoutMerchantInput
    orders?: OrdersUncheckedCreateNestedManyWithoutCustomerInput
    transactions?: TransactionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCrypto_walletsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCrypto_walletsInput, UserUncheckedCreateWithoutCrypto_walletsInput>
  }

  export type UserUpsertWithoutCrypto_walletsInput = {
    update: XOR<UserUpdateWithoutCrypto_walletsInput, UserUncheckedUpdateWithoutCrypto_walletsInput>
    create: XOR<UserCreateWithoutCrypto_walletsInput, UserUncheckedCreateWithoutCrypto_walletsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCrypto_walletsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCrypto_walletsInput, UserUncheckedUpdateWithoutCrypto_walletsInput>
  }

  export type UserUpdateWithoutCrypto_walletsInput = {
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_pin?: NullableStringFieldUpdateOperationsInput | string | null
    telegram_id?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    country_code?: NullableEnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bvn?: NullableStringFieldUpdateOperationsInput | string | null
    bvn_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    nin?: NullableStringFieldUpdateOperationsInput | string | null
    nin_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    dob_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    home_address?: NullableStringFieldUpdateOperationsInput | string | null
    street_address?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    merchant_success_rate?: NullableIntFieldUpdateOperationsInput | number | null
    merchant_trade_count?: NullableIntFieldUpdateOperationsInput | number | null
    merchant_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    merchant_status?: NullableEnumMerchantStatusFieldUpdateOperationsInput | $Enums.MerchantStatus | null
    bank_accounts?: BankAccountUpdateManyWithoutUserNestedInput
    adverts?: AdvertsUpdateManyWithoutMerchantNestedInput
    orders?: OrdersUpdateManyWithoutCustomerNestedInput
    transactions?: TransactionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCrypto_walletsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_pin?: NullableStringFieldUpdateOperationsInput | string | null
    telegram_id?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    country_code?: NullableEnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bvn?: NullableStringFieldUpdateOperationsInput | string | null
    bvn_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    nin?: NullableStringFieldUpdateOperationsInput | string | null
    nin_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    dob_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    home_address?: NullableStringFieldUpdateOperationsInput | string | null
    street_address?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    merchant_success_rate?: NullableIntFieldUpdateOperationsInput | number | null
    merchant_trade_count?: NullableIntFieldUpdateOperationsInput | number | null
    merchant_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    merchant_status?: NullableEnumMerchantStatusFieldUpdateOperationsInput | $Enums.MerchantStatus | null
    bank_accounts?: BankAccountUncheckedUpdateManyWithoutUserNestedInput
    adverts?: AdvertsUncheckedUpdateManyWithoutMerchantNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutCustomerNestedInput
    transactions?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutBank_accountsInput = {
    firstname?: string | null
    lastname?: string | null
    middlename?: string | null
    email?: string | null
    password?: string | null
    transaction_pin?: string | null
    telegram_id?: string | null
    role?: $Enums.UserRole | null
    country_code?: $Enums.CountryCode | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    bvn?: string | null
    bvn_status?: $Enums.CredentialsStatus | null
    nin?: string | null
    nin_status?: $Enums.CredentialsStatus | null
    dob?: string | null
    dob_status?: $Enums.CredentialsStatus | null
    home_address?: string | null
    street_address?: string | null
    state?: string | null
    phone?: string | null
    googleId?: string | null
    proof_of_address?: string | null
    phone_verified?: boolean | null
    merchant_success_rate?: number | null
    merchant_trade_count?: number | null
    merchant_nickname?: string | null
    merchant_status?: $Enums.MerchantStatus | null
    crypto_wallets?: CryptoWalletsCreateNestedManyWithoutUserInput
    adverts?: AdvertsCreateNestedManyWithoutMerchantInput
    orders?: OrdersCreateNestedManyWithoutCustomerInput
    transactions?: TransactionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBank_accountsInput = {
    id?: number
    firstname?: string | null
    lastname?: string | null
    middlename?: string | null
    email?: string | null
    password?: string | null
    transaction_pin?: string | null
    telegram_id?: string | null
    role?: $Enums.UserRole | null
    country_code?: $Enums.CountryCode | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    bvn?: string | null
    bvn_status?: $Enums.CredentialsStatus | null
    nin?: string | null
    nin_status?: $Enums.CredentialsStatus | null
    dob?: string | null
    dob_status?: $Enums.CredentialsStatus | null
    home_address?: string | null
    street_address?: string | null
    state?: string | null
    phone?: string | null
    googleId?: string | null
    proof_of_address?: string | null
    phone_verified?: boolean | null
    merchant_success_rate?: number | null
    merchant_trade_count?: number | null
    merchant_nickname?: string | null
    merchant_status?: $Enums.MerchantStatus | null
    crypto_wallets?: CryptoWalletsUncheckedCreateNestedManyWithoutUserInput
    adverts?: AdvertsUncheckedCreateNestedManyWithoutMerchantInput
    orders?: OrdersUncheckedCreateNestedManyWithoutCustomerInput
    transactions?: TransactionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBank_accountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBank_accountsInput, UserUncheckedCreateWithoutBank_accountsInput>
  }

  export type AdvertsCreateWithoutBank_accountsInput = {
    rateFloat?: number | null
    rateFixed?: number | null
    isFloatRate?: boolean
    limitUpper: number
    limitLower: number
    fiatAmountPerCrypto: number
    tradeType: $Enums.TradeType
    currency_crypto: string
    currency_fiat: $Enums.CountryCode
    instructions: string
    wallet_address: string
    status?: $Enums.AdvertStatus | null
    duration: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    merchant?: UserCreateNestedOneWithoutAdvertsInput
  }

  export type AdvertsUncheckedCreateWithoutBank_accountsInput = {
    id?: number
    rateFloat?: number | null
    rateFixed?: number | null
    isFloatRate?: boolean
    limitUpper: number
    limitLower: number
    fiatAmountPerCrypto: number
    tradeType: $Enums.TradeType
    currency_crypto: string
    currency_fiat: $Enums.CountryCode
    instructions: string
    wallet_address: string
    status?: $Enums.AdvertStatus | null
    duration: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    merchant_id: number
  }

  export type AdvertsCreateOrConnectWithoutBank_accountsInput = {
    where: AdvertsWhereUniqueInput
    create: XOR<AdvertsCreateWithoutBank_accountsInput, AdvertsUncheckedCreateWithoutBank_accountsInput>
  }

  export type OrdersCreateWithoutBankInput = {
    amount_fiat: number
    amount_crypto: number
    wallet_customer: string
    wallet_merchant: string
    estimated_duration: string
    mode?: $Enums.OrderMode | null
    currency_crypto: string
    currency_fiat?: $Enums.CountryCode | null
    trade_type: $Enums.TradeType
    status?: $Enums.OrderStatus
    action_user?: $Enums.OrderActions | null
    action_merchant?: $Enums.OrderActions | null
    txn_hash?: string | null
    sell_txn_hash_customer_lock_crypto?: string | null
    sell_txn_hash_customer_release_crypto?: string | null
    sell_time2_customer_lock_crypto?: Date | string | null
    sell_time1_customer_request?: Date | string | null
    sell_time3_merchant_send_fiat?: Date | string | null
    sell_time4_customer_release_crypto?: Date | string | null
    buy_time1_customer_request?: Date | string | null
    buy_time2_merchant_lock_crypto?: Date | string | null
    buy_time3_customer_send_fiat?: Date | string | null
    buy_time4_merchant_release_crypto?: Date | string | null
    buy_txn_hash_merchant_lock_crypto?: string | null
    buy_txn_hash_merchant_release_crypto?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    merchant_id: number
    customer?: UserCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutBankInput = {
    id?: number
    amount_fiat: number
    amount_crypto: number
    wallet_customer: string
    wallet_merchant: string
    estimated_duration: string
    mode?: $Enums.OrderMode | null
    currency_crypto: string
    currency_fiat?: $Enums.CountryCode | null
    trade_type: $Enums.TradeType
    status?: $Enums.OrderStatus
    action_user?: $Enums.OrderActions | null
    action_merchant?: $Enums.OrderActions | null
    txn_hash?: string | null
    sell_txn_hash_customer_lock_crypto?: string | null
    sell_txn_hash_customer_release_crypto?: string | null
    sell_time2_customer_lock_crypto?: Date | string | null
    sell_time1_customer_request?: Date | string | null
    sell_time3_merchant_send_fiat?: Date | string | null
    sell_time4_customer_release_crypto?: Date | string | null
    buy_time1_customer_request?: Date | string | null
    buy_time2_merchant_lock_crypto?: Date | string | null
    buy_time3_customer_send_fiat?: Date | string | null
    buy_time4_merchant_release_crypto?: Date | string | null
    buy_txn_hash_merchant_lock_crypto?: string | null
    buy_txn_hash_merchant_release_crypto?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    customer_id: number
    merchant_id: number
  }

  export type OrdersCreateOrConnectWithoutBankInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutBankInput, OrdersUncheckedCreateWithoutBankInput>
  }

  export type OrdersCreateManyBankInputEnvelope = {
    data: OrdersCreateManyBankInput | OrdersCreateManyBankInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBank_accountsInput = {
    update: XOR<UserUpdateWithoutBank_accountsInput, UserUncheckedUpdateWithoutBank_accountsInput>
    create: XOR<UserCreateWithoutBank_accountsInput, UserUncheckedCreateWithoutBank_accountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBank_accountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBank_accountsInput, UserUncheckedUpdateWithoutBank_accountsInput>
  }

  export type UserUpdateWithoutBank_accountsInput = {
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_pin?: NullableStringFieldUpdateOperationsInput | string | null
    telegram_id?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    country_code?: NullableEnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bvn?: NullableStringFieldUpdateOperationsInput | string | null
    bvn_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    nin?: NullableStringFieldUpdateOperationsInput | string | null
    nin_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    dob_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    home_address?: NullableStringFieldUpdateOperationsInput | string | null
    street_address?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    merchant_success_rate?: NullableIntFieldUpdateOperationsInput | number | null
    merchant_trade_count?: NullableIntFieldUpdateOperationsInput | number | null
    merchant_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    merchant_status?: NullableEnumMerchantStatusFieldUpdateOperationsInput | $Enums.MerchantStatus | null
    crypto_wallets?: CryptoWalletsUpdateManyWithoutUserNestedInput
    adverts?: AdvertsUpdateManyWithoutMerchantNestedInput
    orders?: OrdersUpdateManyWithoutCustomerNestedInput
    transactions?: TransactionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBank_accountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_pin?: NullableStringFieldUpdateOperationsInput | string | null
    telegram_id?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    country_code?: NullableEnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bvn?: NullableStringFieldUpdateOperationsInput | string | null
    bvn_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    nin?: NullableStringFieldUpdateOperationsInput | string | null
    nin_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    dob_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    home_address?: NullableStringFieldUpdateOperationsInput | string | null
    street_address?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    merchant_success_rate?: NullableIntFieldUpdateOperationsInput | number | null
    merchant_trade_count?: NullableIntFieldUpdateOperationsInput | number | null
    merchant_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    merchant_status?: NullableEnumMerchantStatusFieldUpdateOperationsInput | $Enums.MerchantStatus | null
    crypto_wallets?: CryptoWalletsUncheckedUpdateManyWithoutUserNestedInput
    adverts?: AdvertsUncheckedUpdateManyWithoutMerchantNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutCustomerNestedInput
    transactions?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AdvertsUpsertWithWhereUniqueWithoutBank_accountsInput = {
    where: AdvertsWhereUniqueInput
    update: XOR<AdvertsUpdateWithoutBank_accountsInput, AdvertsUncheckedUpdateWithoutBank_accountsInput>
    create: XOR<AdvertsCreateWithoutBank_accountsInput, AdvertsUncheckedCreateWithoutBank_accountsInput>
  }

  export type AdvertsUpdateWithWhereUniqueWithoutBank_accountsInput = {
    where: AdvertsWhereUniqueInput
    data: XOR<AdvertsUpdateWithoutBank_accountsInput, AdvertsUncheckedUpdateWithoutBank_accountsInput>
  }

  export type AdvertsUpdateManyWithWhereWithoutBank_accountsInput = {
    where: AdvertsScalarWhereInput
    data: XOR<AdvertsUpdateManyMutationInput, AdvertsUncheckedUpdateManyWithoutBank_accountsInput>
  }

  export type OrdersUpsertWithWhereUniqueWithoutBankInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutBankInput, OrdersUncheckedUpdateWithoutBankInput>
    create: XOR<OrdersCreateWithoutBankInput, OrdersUncheckedCreateWithoutBankInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutBankInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutBankInput, OrdersUncheckedUpdateWithoutBankInput>
  }

  export type OrdersUpdateManyWithWhereWithoutBankInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutBankInput>
  }

  export type BankAccountCreateWithoutAdvertInput = {
    account_name: string
    account_no: string
    soft_delete?: boolean | null
    bank_name: string
    nuban_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user?: UserCreateNestedOneWithoutBank_accountsInput
    Orders?: OrdersCreateNestedManyWithoutBankInput
  }

  export type BankAccountUncheckedCreateWithoutAdvertInput = {
    id?: number
    account_name: string
    account_no: string
    soft_delete?: boolean | null
    bank_name: string
    nuban_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_id: number
    Orders?: OrdersUncheckedCreateNestedManyWithoutBankInput
  }

  export type BankAccountCreateOrConnectWithoutAdvertInput = {
    where: BankAccountWhereUniqueInput
    create: XOR<BankAccountCreateWithoutAdvertInput, BankAccountUncheckedCreateWithoutAdvertInput>
  }

  export type UserCreateWithoutAdvertsInput = {
    firstname?: string | null
    lastname?: string | null
    middlename?: string | null
    email?: string | null
    password?: string | null
    transaction_pin?: string | null
    telegram_id?: string | null
    role?: $Enums.UserRole | null
    country_code?: $Enums.CountryCode | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    bvn?: string | null
    bvn_status?: $Enums.CredentialsStatus | null
    nin?: string | null
    nin_status?: $Enums.CredentialsStatus | null
    dob?: string | null
    dob_status?: $Enums.CredentialsStatus | null
    home_address?: string | null
    street_address?: string | null
    state?: string | null
    phone?: string | null
    googleId?: string | null
    proof_of_address?: string | null
    phone_verified?: boolean | null
    merchant_success_rate?: number | null
    merchant_trade_count?: number | null
    merchant_nickname?: string | null
    merchant_status?: $Enums.MerchantStatus | null
    crypto_wallets?: CryptoWalletsCreateNestedManyWithoutUserInput
    bank_accounts?: BankAccountCreateNestedManyWithoutUserInput
    orders?: OrdersCreateNestedManyWithoutCustomerInput
    transactions?: TransactionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdvertsInput = {
    id?: number
    firstname?: string | null
    lastname?: string | null
    middlename?: string | null
    email?: string | null
    password?: string | null
    transaction_pin?: string | null
    telegram_id?: string | null
    role?: $Enums.UserRole | null
    country_code?: $Enums.CountryCode | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    bvn?: string | null
    bvn_status?: $Enums.CredentialsStatus | null
    nin?: string | null
    nin_status?: $Enums.CredentialsStatus | null
    dob?: string | null
    dob_status?: $Enums.CredentialsStatus | null
    home_address?: string | null
    street_address?: string | null
    state?: string | null
    phone?: string | null
    googleId?: string | null
    proof_of_address?: string | null
    phone_verified?: boolean | null
    merchant_success_rate?: number | null
    merchant_trade_count?: number | null
    merchant_nickname?: string | null
    merchant_status?: $Enums.MerchantStatus | null
    crypto_wallets?: CryptoWalletsUncheckedCreateNestedManyWithoutUserInput
    bank_accounts?: BankAccountUncheckedCreateNestedManyWithoutUserInput
    orders?: OrdersUncheckedCreateNestedManyWithoutCustomerInput
    transactions?: TransactionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdvertsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdvertsInput, UserUncheckedCreateWithoutAdvertsInput>
  }

  export type BankAccountUpsertWithWhereUniqueWithoutAdvertInput = {
    where: BankAccountWhereUniqueInput
    update: XOR<BankAccountUpdateWithoutAdvertInput, BankAccountUncheckedUpdateWithoutAdvertInput>
    create: XOR<BankAccountCreateWithoutAdvertInput, BankAccountUncheckedCreateWithoutAdvertInput>
  }

  export type BankAccountUpdateWithWhereUniqueWithoutAdvertInput = {
    where: BankAccountWhereUniqueInput
    data: XOR<BankAccountUpdateWithoutAdvertInput, BankAccountUncheckedUpdateWithoutAdvertInput>
  }

  export type BankAccountUpdateManyWithWhereWithoutAdvertInput = {
    where: BankAccountScalarWhereInput
    data: XOR<BankAccountUpdateManyMutationInput, BankAccountUncheckedUpdateManyWithoutAdvertInput>
  }

  export type UserUpsertWithoutAdvertsInput = {
    update: XOR<UserUpdateWithoutAdvertsInput, UserUncheckedUpdateWithoutAdvertsInput>
    create: XOR<UserCreateWithoutAdvertsInput, UserUncheckedCreateWithoutAdvertsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdvertsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdvertsInput, UserUncheckedUpdateWithoutAdvertsInput>
  }

  export type UserUpdateWithoutAdvertsInput = {
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_pin?: NullableStringFieldUpdateOperationsInput | string | null
    telegram_id?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    country_code?: NullableEnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bvn?: NullableStringFieldUpdateOperationsInput | string | null
    bvn_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    nin?: NullableStringFieldUpdateOperationsInput | string | null
    nin_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    dob_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    home_address?: NullableStringFieldUpdateOperationsInput | string | null
    street_address?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    merchant_success_rate?: NullableIntFieldUpdateOperationsInput | number | null
    merchant_trade_count?: NullableIntFieldUpdateOperationsInput | number | null
    merchant_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    merchant_status?: NullableEnumMerchantStatusFieldUpdateOperationsInput | $Enums.MerchantStatus | null
    crypto_wallets?: CryptoWalletsUpdateManyWithoutUserNestedInput
    bank_accounts?: BankAccountUpdateManyWithoutUserNestedInput
    orders?: OrdersUpdateManyWithoutCustomerNestedInput
    transactions?: TransactionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdvertsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_pin?: NullableStringFieldUpdateOperationsInput | string | null
    telegram_id?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    country_code?: NullableEnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bvn?: NullableStringFieldUpdateOperationsInput | string | null
    bvn_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    nin?: NullableStringFieldUpdateOperationsInput | string | null
    nin_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    dob_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    home_address?: NullableStringFieldUpdateOperationsInput | string | null
    street_address?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    merchant_success_rate?: NullableIntFieldUpdateOperationsInput | number | null
    merchant_trade_count?: NullableIntFieldUpdateOperationsInput | number | null
    merchant_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    merchant_status?: NullableEnumMerchantStatusFieldUpdateOperationsInput | $Enums.MerchantStatus | null
    crypto_wallets?: CryptoWalletsUncheckedUpdateManyWithoutUserNestedInput
    bank_accounts?: BankAccountUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutCustomerNestedInput
    transactions?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BankAccountCreateWithoutOrdersInput = {
    account_name: string
    account_no: string
    soft_delete?: boolean | null
    bank_name: string
    nuban_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user?: UserCreateNestedOneWithoutBank_accountsInput
    advert?: AdvertsCreateNestedManyWithoutBank_accountsInput
  }

  export type BankAccountUncheckedCreateWithoutOrdersInput = {
    id?: number
    account_name: string
    account_no: string
    soft_delete?: boolean | null
    bank_name: string
    nuban_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_id: number
    advert?: AdvertsUncheckedCreateNestedManyWithoutBank_accountsInput
  }

  export type BankAccountCreateOrConnectWithoutOrdersInput = {
    where: BankAccountWhereUniqueInput
    create: XOR<BankAccountCreateWithoutOrdersInput, BankAccountUncheckedCreateWithoutOrdersInput>
  }

  export type UserCreateWithoutOrdersInput = {
    firstname?: string | null
    lastname?: string | null
    middlename?: string | null
    email?: string | null
    password?: string | null
    transaction_pin?: string | null
    telegram_id?: string | null
    role?: $Enums.UserRole | null
    country_code?: $Enums.CountryCode | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    bvn?: string | null
    bvn_status?: $Enums.CredentialsStatus | null
    nin?: string | null
    nin_status?: $Enums.CredentialsStatus | null
    dob?: string | null
    dob_status?: $Enums.CredentialsStatus | null
    home_address?: string | null
    street_address?: string | null
    state?: string | null
    phone?: string | null
    googleId?: string | null
    proof_of_address?: string | null
    phone_verified?: boolean | null
    merchant_success_rate?: number | null
    merchant_trade_count?: number | null
    merchant_nickname?: string | null
    merchant_status?: $Enums.MerchantStatus | null
    crypto_wallets?: CryptoWalletsCreateNestedManyWithoutUserInput
    bank_accounts?: BankAccountCreateNestedManyWithoutUserInput
    adverts?: AdvertsCreateNestedManyWithoutMerchantInput
    transactions?: TransactionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: number
    firstname?: string | null
    lastname?: string | null
    middlename?: string | null
    email?: string | null
    password?: string | null
    transaction_pin?: string | null
    telegram_id?: string | null
    role?: $Enums.UserRole | null
    country_code?: $Enums.CountryCode | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    bvn?: string | null
    bvn_status?: $Enums.CredentialsStatus | null
    nin?: string | null
    nin_status?: $Enums.CredentialsStatus | null
    dob?: string | null
    dob_status?: $Enums.CredentialsStatus | null
    home_address?: string | null
    street_address?: string | null
    state?: string | null
    phone?: string | null
    googleId?: string | null
    proof_of_address?: string | null
    phone_verified?: boolean | null
    merchant_success_rate?: number | null
    merchant_trade_count?: number | null
    merchant_nickname?: string | null
    merchant_status?: $Enums.MerchantStatus | null
    crypto_wallets?: CryptoWalletsUncheckedCreateNestedManyWithoutUserInput
    bank_accounts?: BankAccountUncheckedCreateNestedManyWithoutUserInput
    adverts?: AdvertsUncheckedCreateNestedManyWithoutMerchantInput
    transactions?: TransactionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type BankAccountUpsertWithoutOrdersInput = {
    update: XOR<BankAccountUpdateWithoutOrdersInput, BankAccountUncheckedUpdateWithoutOrdersInput>
    create: XOR<BankAccountCreateWithoutOrdersInput, BankAccountUncheckedCreateWithoutOrdersInput>
    where?: BankAccountWhereInput
  }

  export type BankAccountUpdateToOneWithWhereWithoutOrdersInput = {
    where?: BankAccountWhereInput
    data: XOR<BankAccountUpdateWithoutOrdersInput, BankAccountUncheckedUpdateWithoutOrdersInput>
  }

  export type BankAccountUpdateWithoutOrdersInput = {
    account_name?: StringFieldUpdateOperationsInput | string
    account_no?: StringFieldUpdateOperationsInput | string
    soft_delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bank_name?: StringFieldUpdateOperationsInput | string
    nuban_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneWithoutBank_accountsNestedInput
    advert?: AdvertsUpdateManyWithoutBank_accountsNestedInput
  }

  export type BankAccountUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_name?: StringFieldUpdateOperationsInput | string
    account_no?: StringFieldUpdateOperationsInput | string
    soft_delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bank_name?: StringFieldUpdateOperationsInput | string
    nuban_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    advert?: AdvertsUncheckedUpdateManyWithoutBank_accountsNestedInput
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_pin?: NullableStringFieldUpdateOperationsInput | string | null
    telegram_id?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    country_code?: NullableEnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bvn?: NullableStringFieldUpdateOperationsInput | string | null
    bvn_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    nin?: NullableStringFieldUpdateOperationsInput | string | null
    nin_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    dob_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    home_address?: NullableStringFieldUpdateOperationsInput | string | null
    street_address?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    merchant_success_rate?: NullableIntFieldUpdateOperationsInput | number | null
    merchant_trade_count?: NullableIntFieldUpdateOperationsInput | number | null
    merchant_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    merchant_status?: NullableEnumMerchantStatusFieldUpdateOperationsInput | $Enums.MerchantStatus | null
    crypto_wallets?: CryptoWalletsUpdateManyWithoutUserNestedInput
    bank_accounts?: BankAccountUpdateManyWithoutUserNestedInput
    adverts?: AdvertsUpdateManyWithoutMerchantNestedInput
    transactions?: TransactionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_pin?: NullableStringFieldUpdateOperationsInput | string | null
    telegram_id?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    country_code?: NullableEnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bvn?: NullableStringFieldUpdateOperationsInput | string | null
    bvn_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    nin?: NullableStringFieldUpdateOperationsInput | string | null
    nin_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    dob_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    home_address?: NullableStringFieldUpdateOperationsInput | string | null
    street_address?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    merchant_success_rate?: NullableIntFieldUpdateOperationsInput | number | null
    merchant_trade_count?: NullableIntFieldUpdateOperationsInput | number | null
    merchant_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    merchant_status?: NullableEnumMerchantStatusFieldUpdateOperationsInput | $Enums.MerchantStatus | null
    crypto_wallets?: CryptoWalletsUncheckedUpdateManyWithoutUserNestedInput
    bank_accounts?: BankAccountUncheckedUpdateManyWithoutUserNestedInput
    adverts?: AdvertsUncheckedUpdateManyWithoutMerchantNestedInput
    transactions?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTransactionsInput = {
    firstname?: string | null
    lastname?: string | null
    middlename?: string | null
    email?: string | null
    password?: string | null
    transaction_pin?: string | null
    telegram_id?: string | null
    role?: $Enums.UserRole | null
    country_code?: $Enums.CountryCode | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    bvn?: string | null
    bvn_status?: $Enums.CredentialsStatus | null
    nin?: string | null
    nin_status?: $Enums.CredentialsStatus | null
    dob?: string | null
    dob_status?: $Enums.CredentialsStatus | null
    home_address?: string | null
    street_address?: string | null
    state?: string | null
    phone?: string | null
    googleId?: string | null
    proof_of_address?: string | null
    phone_verified?: boolean | null
    merchant_success_rate?: number | null
    merchant_trade_count?: number | null
    merchant_nickname?: string | null
    merchant_status?: $Enums.MerchantStatus | null
    crypto_wallets?: CryptoWalletsCreateNestedManyWithoutUserInput
    bank_accounts?: BankAccountCreateNestedManyWithoutUserInput
    adverts?: AdvertsCreateNestedManyWithoutMerchantInput
    orders?: OrdersCreateNestedManyWithoutCustomerInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: number
    firstname?: string | null
    lastname?: string | null
    middlename?: string | null
    email?: string | null
    password?: string | null
    transaction_pin?: string | null
    telegram_id?: string | null
    role?: $Enums.UserRole | null
    country_code?: $Enums.CountryCode | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    bvn?: string | null
    bvn_status?: $Enums.CredentialsStatus | null
    nin?: string | null
    nin_status?: $Enums.CredentialsStatus | null
    dob?: string | null
    dob_status?: $Enums.CredentialsStatus | null
    home_address?: string | null
    street_address?: string | null
    state?: string | null
    phone?: string | null
    googleId?: string | null
    proof_of_address?: string | null
    phone_verified?: boolean | null
    merchant_success_rate?: number | null
    merchant_trade_count?: number | null
    merchant_nickname?: string | null
    merchant_status?: $Enums.MerchantStatus | null
    crypto_wallets?: CryptoWalletsUncheckedCreateNestedManyWithoutUserInput
    bank_accounts?: BankAccountUncheckedCreateNestedManyWithoutUserInput
    adverts?: AdvertsUncheckedCreateNestedManyWithoutMerchantInput
    orders?: OrdersUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_pin?: NullableStringFieldUpdateOperationsInput | string | null
    telegram_id?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    country_code?: NullableEnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bvn?: NullableStringFieldUpdateOperationsInput | string | null
    bvn_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    nin?: NullableStringFieldUpdateOperationsInput | string | null
    nin_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    dob_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    home_address?: NullableStringFieldUpdateOperationsInput | string | null
    street_address?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    merchant_success_rate?: NullableIntFieldUpdateOperationsInput | number | null
    merchant_trade_count?: NullableIntFieldUpdateOperationsInput | number | null
    merchant_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    merchant_status?: NullableEnumMerchantStatusFieldUpdateOperationsInput | $Enums.MerchantStatus | null
    crypto_wallets?: CryptoWalletsUpdateManyWithoutUserNestedInput
    bank_accounts?: BankAccountUpdateManyWithoutUserNestedInput
    adverts?: AdvertsUpdateManyWithoutMerchantNestedInput
    orders?: OrdersUpdateManyWithoutCustomerNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    transaction_pin?: NullableStringFieldUpdateOperationsInput | string | null
    telegram_id?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    country_code?: NullableEnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bvn?: NullableStringFieldUpdateOperationsInput | string | null
    bvn_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    nin?: NullableStringFieldUpdateOperationsInput | string | null
    nin_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    dob_status?: NullableEnumCredentialsStatusFieldUpdateOperationsInput | $Enums.CredentialsStatus | null
    home_address?: NullableStringFieldUpdateOperationsInput | string | null
    street_address?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    proof_of_address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    merchant_success_rate?: NullableIntFieldUpdateOperationsInput | number | null
    merchant_trade_count?: NullableIntFieldUpdateOperationsInput | number | null
    merchant_nickname?: NullableStringFieldUpdateOperationsInput | string | null
    merchant_status?: NullableEnumMerchantStatusFieldUpdateOperationsInput | $Enums.MerchantStatus | null
    crypto_wallets?: CryptoWalletsUncheckedUpdateManyWithoutUserNestedInput
    bank_accounts?: BankAccountUncheckedUpdateManyWithoutUserNestedInput
    adverts?: AdvertsUncheckedUpdateManyWithoutMerchantNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CryptoWalletsCreateManyUserInput = {
    id?: number
    address: string
    wallet_id?: string | null
    chainType: $Enums.ChainType
    minipay?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type BankAccountCreateManyUserInput = {
    id?: number
    account_name: string
    account_no: string
    soft_delete?: boolean | null
    bank_name: string
    nuban_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type AdvertsCreateManyMerchantInput = {
    id?: number
    rateFloat?: number | null
    rateFixed?: number | null
    isFloatRate?: boolean
    limitUpper: number
    limitLower: number
    fiatAmountPerCrypto: number
    tradeType: $Enums.TradeType
    currency_crypto: string
    currency_fiat: $Enums.CountryCode
    instructions: string
    wallet_address: string
    status?: $Enums.AdvertStatus | null
    duration: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type OrdersCreateManyCustomerInput = {
    id?: number
    amount_fiat: number
    amount_crypto: number
    wallet_customer: string
    wallet_merchant: string
    estimated_duration: string
    mode?: $Enums.OrderMode | null
    currency_crypto: string
    currency_fiat?: $Enums.CountryCode | null
    trade_type: $Enums.TradeType
    status?: $Enums.OrderStatus
    action_user?: $Enums.OrderActions | null
    action_merchant?: $Enums.OrderActions | null
    txn_hash?: string | null
    sell_txn_hash_customer_lock_crypto?: string | null
    sell_txn_hash_customer_release_crypto?: string | null
    sell_time2_customer_lock_crypto?: Date | string | null
    sell_time1_customer_request?: Date | string | null
    sell_time3_merchant_send_fiat?: Date | string | null
    sell_time4_customer_release_crypto?: Date | string | null
    buy_time1_customer_request?: Date | string | null
    buy_time2_merchant_lock_crypto?: Date | string | null
    buy_time3_customer_send_fiat?: Date | string | null
    buy_time4_merchant_release_crypto?: Date | string | null
    buy_txn_hash_merchant_lock_crypto?: string | null
    buy_txn_hash_merchant_release_crypto?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    bank_id: number
    merchant_id: number
  }

  export type TransactionsCreateManyUserInput = {
    id?: number
    amount: number
    transaction_hash?: string | null
    note?: string | null
    fiat_currency?: $Enums.CountryCode | null
    crypto_currency?: string | null
    category: $Enums.TransactionCategory
    mode: $Enums.TransactionsMode
    status: $Enums.TransactionStatus
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type CryptoWalletsUpdateWithoutUserInput = {
    address?: StringFieldUpdateOperationsInput | string
    wallet_id?: NullableStringFieldUpdateOperationsInput | string | null
    chainType?: EnumChainTypeFieldUpdateOperationsInput | $Enums.ChainType
    minipay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CryptoWalletsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    wallet_id?: NullableStringFieldUpdateOperationsInput | string | null
    chainType?: EnumChainTypeFieldUpdateOperationsInput | $Enums.ChainType
    minipay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CryptoWalletsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    wallet_id?: NullableStringFieldUpdateOperationsInput | string | null
    chainType?: EnumChainTypeFieldUpdateOperationsInput | $Enums.ChainType
    minipay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BankAccountUpdateWithoutUserInput = {
    account_name?: StringFieldUpdateOperationsInput | string
    account_no?: StringFieldUpdateOperationsInput | string
    soft_delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bank_name?: StringFieldUpdateOperationsInput | string
    nuban_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    advert?: AdvertsUpdateManyWithoutBank_accountsNestedInput
    Orders?: OrdersUpdateManyWithoutBankNestedInput
  }

  export type BankAccountUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_name?: StringFieldUpdateOperationsInput | string
    account_no?: StringFieldUpdateOperationsInput | string
    soft_delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bank_name?: StringFieldUpdateOperationsInput | string
    nuban_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    advert?: AdvertsUncheckedUpdateManyWithoutBank_accountsNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutBankNestedInput
  }

  export type BankAccountUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_name?: StringFieldUpdateOperationsInput | string
    account_no?: StringFieldUpdateOperationsInput | string
    soft_delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bank_name?: StringFieldUpdateOperationsInput | string
    nuban_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdvertsUpdateWithoutMerchantInput = {
    rateFloat?: NullableFloatFieldUpdateOperationsInput | number | null
    rateFixed?: NullableFloatFieldUpdateOperationsInput | number | null
    isFloatRate?: BoolFieldUpdateOperationsInput | boolean
    limitUpper?: FloatFieldUpdateOperationsInput | number
    limitLower?: FloatFieldUpdateOperationsInput | number
    fiatAmountPerCrypto?: IntFieldUpdateOperationsInput | number
    tradeType?: EnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType
    currency_crypto?: StringFieldUpdateOperationsInput | string
    currency_fiat?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    instructions?: StringFieldUpdateOperationsInput | string
    wallet_address?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumAdvertStatusFieldUpdateOperationsInput | $Enums.AdvertStatus | null
    duration?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bank_accounts?: BankAccountUpdateManyWithoutAdvertNestedInput
  }

  export type AdvertsUncheckedUpdateWithoutMerchantInput = {
    id?: IntFieldUpdateOperationsInput | number
    rateFloat?: NullableFloatFieldUpdateOperationsInput | number | null
    rateFixed?: NullableFloatFieldUpdateOperationsInput | number | null
    isFloatRate?: BoolFieldUpdateOperationsInput | boolean
    limitUpper?: FloatFieldUpdateOperationsInput | number
    limitLower?: FloatFieldUpdateOperationsInput | number
    fiatAmountPerCrypto?: IntFieldUpdateOperationsInput | number
    tradeType?: EnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType
    currency_crypto?: StringFieldUpdateOperationsInput | string
    currency_fiat?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    instructions?: StringFieldUpdateOperationsInput | string
    wallet_address?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumAdvertStatusFieldUpdateOperationsInput | $Enums.AdvertStatus | null
    duration?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bank_accounts?: BankAccountUncheckedUpdateManyWithoutAdvertNestedInput
  }

  export type AdvertsUncheckedUpdateManyWithoutMerchantInput = {
    id?: IntFieldUpdateOperationsInput | number
    rateFloat?: NullableFloatFieldUpdateOperationsInput | number | null
    rateFixed?: NullableFloatFieldUpdateOperationsInput | number | null
    isFloatRate?: BoolFieldUpdateOperationsInput | boolean
    limitUpper?: FloatFieldUpdateOperationsInput | number
    limitLower?: FloatFieldUpdateOperationsInput | number
    fiatAmountPerCrypto?: IntFieldUpdateOperationsInput | number
    tradeType?: EnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType
    currency_crypto?: StringFieldUpdateOperationsInput | string
    currency_fiat?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    instructions?: StringFieldUpdateOperationsInput | string
    wallet_address?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumAdvertStatusFieldUpdateOperationsInput | $Enums.AdvertStatus | null
    duration?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrdersUpdateWithoutCustomerInput = {
    amount_fiat?: FloatFieldUpdateOperationsInput | number
    amount_crypto?: FloatFieldUpdateOperationsInput | number
    wallet_customer?: StringFieldUpdateOperationsInput | string
    wallet_merchant?: StringFieldUpdateOperationsInput | string
    estimated_duration?: StringFieldUpdateOperationsInput | string
    mode?: NullableEnumOrderModeFieldUpdateOperationsInput | $Enums.OrderMode | null
    currency_crypto?: StringFieldUpdateOperationsInput | string
    currency_fiat?: NullableEnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode | null
    trade_type?: EnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    action_user?: NullableEnumOrderActionsFieldUpdateOperationsInput | $Enums.OrderActions | null
    action_merchant?: NullableEnumOrderActionsFieldUpdateOperationsInput | $Enums.OrderActions | null
    txn_hash?: NullableStringFieldUpdateOperationsInput | string | null
    sell_txn_hash_customer_lock_crypto?: NullableStringFieldUpdateOperationsInput | string | null
    sell_txn_hash_customer_release_crypto?: NullableStringFieldUpdateOperationsInput | string | null
    sell_time2_customer_lock_crypto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sell_time1_customer_request?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sell_time3_merchant_send_fiat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sell_time4_customer_release_crypto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_time1_customer_request?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_time2_merchant_lock_crypto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_time3_customer_send_fiat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_time4_merchant_release_crypto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_txn_hash_merchant_lock_crypto?: NullableStringFieldUpdateOperationsInput | string | null
    buy_txn_hash_merchant_release_crypto?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    merchant_id?: IntFieldUpdateOperationsInput | number
    bank?: BankAccountUpdateOneWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount_fiat?: FloatFieldUpdateOperationsInput | number
    amount_crypto?: FloatFieldUpdateOperationsInput | number
    wallet_customer?: StringFieldUpdateOperationsInput | string
    wallet_merchant?: StringFieldUpdateOperationsInput | string
    estimated_duration?: StringFieldUpdateOperationsInput | string
    mode?: NullableEnumOrderModeFieldUpdateOperationsInput | $Enums.OrderMode | null
    currency_crypto?: StringFieldUpdateOperationsInput | string
    currency_fiat?: NullableEnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode | null
    trade_type?: EnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    action_user?: NullableEnumOrderActionsFieldUpdateOperationsInput | $Enums.OrderActions | null
    action_merchant?: NullableEnumOrderActionsFieldUpdateOperationsInput | $Enums.OrderActions | null
    txn_hash?: NullableStringFieldUpdateOperationsInput | string | null
    sell_txn_hash_customer_lock_crypto?: NullableStringFieldUpdateOperationsInput | string | null
    sell_txn_hash_customer_release_crypto?: NullableStringFieldUpdateOperationsInput | string | null
    sell_time2_customer_lock_crypto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sell_time1_customer_request?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sell_time3_merchant_send_fiat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sell_time4_customer_release_crypto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_time1_customer_request?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_time2_merchant_lock_crypto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_time3_customer_send_fiat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_time4_merchant_release_crypto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_txn_hash_merchant_lock_crypto?: NullableStringFieldUpdateOperationsInput | string | null
    buy_txn_hash_merchant_release_crypto?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bank_id?: IntFieldUpdateOperationsInput | number
    merchant_id?: IntFieldUpdateOperationsInput | number
  }

  export type OrdersUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount_fiat?: FloatFieldUpdateOperationsInput | number
    amount_crypto?: FloatFieldUpdateOperationsInput | number
    wallet_customer?: StringFieldUpdateOperationsInput | string
    wallet_merchant?: StringFieldUpdateOperationsInput | string
    estimated_duration?: StringFieldUpdateOperationsInput | string
    mode?: NullableEnumOrderModeFieldUpdateOperationsInput | $Enums.OrderMode | null
    currency_crypto?: StringFieldUpdateOperationsInput | string
    currency_fiat?: NullableEnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode | null
    trade_type?: EnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    action_user?: NullableEnumOrderActionsFieldUpdateOperationsInput | $Enums.OrderActions | null
    action_merchant?: NullableEnumOrderActionsFieldUpdateOperationsInput | $Enums.OrderActions | null
    txn_hash?: NullableStringFieldUpdateOperationsInput | string | null
    sell_txn_hash_customer_lock_crypto?: NullableStringFieldUpdateOperationsInput | string | null
    sell_txn_hash_customer_release_crypto?: NullableStringFieldUpdateOperationsInput | string | null
    sell_time2_customer_lock_crypto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sell_time1_customer_request?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sell_time3_merchant_send_fiat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sell_time4_customer_release_crypto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_time1_customer_request?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_time2_merchant_lock_crypto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_time3_customer_send_fiat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_time4_merchant_release_crypto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_txn_hash_merchant_lock_crypto?: NullableStringFieldUpdateOperationsInput | string | null
    buy_txn_hash_merchant_release_crypto?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bank_id?: IntFieldUpdateOperationsInput | number
    merchant_id?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionsUpdateWithoutUserInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    transaction_hash?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    fiat_currency?: NullableEnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode | null
    crypto_currency?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumTransactionCategoryFieldUpdateOperationsInput | $Enums.TransactionCategory
    mode?: EnumTransactionsModeFieldUpdateOperationsInput | $Enums.TransactionsMode
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    transaction_hash?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    fiat_currency?: NullableEnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode | null
    crypto_currency?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumTransactionCategoryFieldUpdateOperationsInput | $Enums.TransactionCategory
    mode?: EnumTransactionsModeFieldUpdateOperationsInput | $Enums.TransactionsMode
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    transaction_hash?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    fiat_currency?: NullableEnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode | null
    crypto_currency?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumTransactionCategoryFieldUpdateOperationsInput | $Enums.TransactionCategory
    mode?: EnumTransactionsModeFieldUpdateOperationsInput | $Enums.TransactionsMode
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrdersCreateManyBankInput = {
    id?: number
    amount_fiat: number
    amount_crypto: number
    wallet_customer: string
    wallet_merchant: string
    estimated_duration: string
    mode?: $Enums.OrderMode | null
    currency_crypto: string
    currency_fiat?: $Enums.CountryCode | null
    trade_type: $Enums.TradeType
    status?: $Enums.OrderStatus
    action_user?: $Enums.OrderActions | null
    action_merchant?: $Enums.OrderActions | null
    txn_hash?: string | null
    sell_txn_hash_customer_lock_crypto?: string | null
    sell_txn_hash_customer_release_crypto?: string | null
    sell_time2_customer_lock_crypto?: Date | string | null
    sell_time1_customer_request?: Date | string | null
    sell_time3_merchant_send_fiat?: Date | string | null
    sell_time4_customer_release_crypto?: Date | string | null
    buy_time1_customer_request?: Date | string | null
    buy_time2_merchant_lock_crypto?: Date | string | null
    buy_time3_customer_send_fiat?: Date | string | null
    buy_time4_merchant_release_crypto?: Date | string | null
    buy_txn_hash_merchant_lock_crypto?: string | null
    buy_txn_hash_merchant_release_crypto?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    customer_id: number
    merchant_id: number
  }

  export type AdvertsUpdateWithoutBank_accountsInput = {
    rateFloat?: NullableFloatFieldUpdateOperationsInput | number | null
    rateFixed?: NullableFloatFieldUpdateOperationsInput | number | null
    isFloatRate?: BoolFieldUpdateOperationsInput | boolean
    limitUpper?: FloatFieldUpdateOperationsInput | number
    limitLower?: FloatFieldUpdateOperationsInput | number
    fiatAmountPerCrypto?: IntFieldUpdateOperationsInput | number
    tradeType?: EnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType
    currency_crypto?: StringFieldUpdateOperationsInput | string
    currency_fiat?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    instructions?: StringFieldUpdateOperationsInput | string
    wallet_address?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumAdvertStatusFieldUpdateOperationsInput | $Enums.AdvertStatus | null
    duration?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    merchant?: UserUpdateOneWithoutAdvertsNestedInput
  }

  export type AdvertsUncheckedUpdateWithoutBank_accountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    rateFloat?: NullableFloatFieldUpdateOperationsInput | number | null
    rateFixed?: NullableFloatFieldUpdateOperationsInput | number | null
    isFloatRate?: BoolFieldUpdateOperationsInput | boolean
    limitUpper?: FloatFieldUpdateOperationsInput | number
    limitLower?: FloatFieldUpdateOperationsInput | number
    fiatAmountPerCrypto?: IntFieldUpdateOperationsInput | number
    tradeType?: EnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType
    currency_crypto?: StringFieldUpdateOperationsInput | string
    currency_fiat?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    instructions?: StringFieldUpdateOperationsInput | string
    wallet_address?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumAdvertStatusFieldUpdateOperationsInput | $Enums.AdvertStatus | null
    duration?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    merchant_id?: IntFieldUpdateOperationsInput | number
  }

  export type AdvertsUncheckedUpdateManyWithoutBank_accountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    rateFloat?: NullableFloatFieldUpdateOperationsInput | number | null
    rateFixed?: NullableFloatFieldUpdateOperationsInput | number | null
    isFloatRate?: BoolFieldUpdateOperationsInput | boolean
    limitUpper?: FloatFieldUpdateOperationsInput | number
    limitLower?: FloatFieldUpdateOperationsInput | number
    fiatAmountPerCrypto?: IntFieldUpdateOperationsInput | number
    tradeType?: EnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType
    currency_crypto?: StringFieldUpdateOperationsInput | string
    currency_fiat?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    instructions?: StringFieldUpdateOperationsInput | string
    wallet_address?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumAdvertStatusFieldUpdateOperationsInput | $Enums.AdvertStatus | null
    duration?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    merchant_id?: IntFieldUpdateOperationsInput | number
  }

  export type OrdersUpdateWithoutBankInput = {
    amount_fiat?: FloatFieldUpdateOperationsInput | number
    amount_crypto?: FloatFieldUpdateOperationsInput | number
    wallet_customer?: StringFieldUpdateOperationsInput | string
    wallet_merchant?: StringFieldUpdateOperationsInput | string
    estimated_duration?: StringFieldUpdateOperationsInput | string
    mode?: NullableEnumOrderModeFieldUpdateOperationsInput | $Enums.OrderMode | null
    currency_crypto?: StringFieldUpdateOperationsInput | string
    currency_fiat?: NullableEnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode | null
    trade_type?: EnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    action_user?: NullableEnumOrderActionsFieldUpdateOperationsInput | $Enums.OrderActions | null
    action_merchant?: NullableEnumOrderActionsFieldUpdateOperationsInput | $Enums.OrderActions | null
    txn_hash?: NullableStringFieldUpdateOperationsInput | string | null
    sell_txn_hash_customer_lock_crypto?: NullableStringFieldUpdateOperationsInput | string | null
    sell_txn_hash_customer_release_crypto?: NullableStringFieldUpdateOperationsInput | string | null
    sell_time2_customer_lock_crypto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sell_time1_customer_request?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sell_time3_merchant_send_fiat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sell_time4_customer_release_crypto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_time1_customer_request?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_time2_merchant_lock_crypto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_time3_customer_send_fiat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_time4_merchant_release_crypto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_txn_hash_merchant_lock_crypto?: NullableStringFieldUpdateOperationsInput | string | null
    buy_txn_hash_merchant_release_crypto?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    merchant_id?: IntFieldUpdateOperationsInput | number
    customer?: UserUpdateOneWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutBankInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount_fiat?: FloatFieldUpdateOperationsInput | number
    amount_crypto?: FloatFieldUpdateOperationsInput | number
    wallet_customer?: StringFieldUpdateOperationsInput | string
    wallet_merchant?: StringFieldUpdateOperationsInput | string
    estimated_duration?: StringFieldUpdateOperationsInput | string
    mode?: NullableEnumOrderModeFieldUpdateOperationsInput | $Enums.OrderMode | null
    currency_crypto?: StringFieldUpdateOperationsInput | string
    currency_fiat?: NullableEnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode | null
    trade_type?: EnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    action_user?: NullableEnumOrderActionsFieldUpdateOperationsInput | $Enums.OrderActions | null
    action_merchant?: NullableEnumOrderActionsFieldUpdateOperationsInput | $Enums.OrderActions | null
    txn_hash?: NullableStringFieldUpdateOperationsInput | string | null
    sell_txn_hash_customer_lock_crypto?: NullableStringFieldUpdateOperationsInput | string | null
    sell_txn_hash_customer_release_crypto?: NullableStringFieldUpdateOperationsInput | string | null
    sell_time2_customer_lock_crypto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sell_time1_customer_request?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sell_time3_merchant_send_fiat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sell_time4_customer_release_crypto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_time1_customer_request?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_time2_merchant_lock_crypto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_time3_customer_send_fiat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_time4_merchant_release_crypto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_txn_hash_merchant_lock_crypto?: NullableStringFieldUpdateOperationsInput | string | null
    buy_txn_hash_merchant_release_crypto?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer_id?: IntFieldUpdateOperationsInput | number
    merchant_id?: IntFieldUpdateOperationsInput | number
  }

  export type OrdersUncheckedUpdateManyWithoutBankInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount_fiat?: FloatFieldUpdateOperationsInput | number
    amount_crypto?: FloatFieldUpdateOperationsInput | number
    wallet_customer?: StringFieldUpdateOperationsInput | string
    wallet_merchant?: StringFieldUpdateOperationsInput | string
    estimated_duration?: StringFieldUpdateOperationsInput | string
    mode?: NullableEnumOrderModeFieldUpdateOperationsInput | $Enums.OrderMode | null
    currency_crypto?: StringFieldUpdateOperationsInput | string
    currency_fiat?: NullableEnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode | null
    trade_type?: EnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    action_user?: NullableEnumOrderActionsFieldUpdateOperationsInput | $Enums.OrderActions | null
    action_merchant?: NullableEnumOrderActionsFieldUpdateOperationsInput | $Enums.OrderActions | null
    txn_hash?: NullableStringFieldUpdateOperationsInput | string | null
    sell_txn_hash_customer_lock_crypto?: NullableStringFieldUpdateOperationsInput | string | null
    sell_txn_hash_customer_release_crypto?: NullableStringFieldUpdateOperationsInput | string | null
    sell_time2_customer_lock_crypto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sell_time1_customer_request?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sell_time3_merchant_send_fiat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sell_time4_customer_release_crypto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_time1_customer_request?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_time2_merchant_lock_crypto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_time3_customer_send_fiat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_time4_merchant_release_crypto?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buy_txn_hash_merchant_lock_crypto?: NullableStringFieldUpdateOperationsInput | string | null
    buy_txn_hash_merchant_release_crypto?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer_id?: IntFieldUpdateOperationsInput | number
    merchant_id?: IntFieldUpdateOperationsInput | number
  }

  export type BankAccountUpdateWithoutAdvertInput = {
    account_name?: StringFieldUpdateOperationsInput | string
    account_no?: StringFieldUpdateOperationsInput | string
    soft_delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bank_name?: StringFieldUpdateOperationsInput | string
    nuban_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneWithoutBank_accountsNestedInput
    Orders?: OrdersUpdateManyWithoutBankNestedInput
  }

  export type BankAccountUncheckedUpdateWithoutAdvertInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_name?: StringFieldUpdateOperationsInput | string
    account_no?: StringFieldUpdateOperationsInput | string
    soft_delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bank_name?: StringFieldUpdateOperationsInput | string
    nuban_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    Orders?: OrdersUncheckedUpdateManyWithoutBankNestedInput
  }

  export type BankAccountUncheckedUpdateManyWithoutAdvertInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_name?: StringFieldUpdateOperationsInput | string
    account_no?: StringFieldUpdateOperationsInput | string
    soft_delete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bank_name?: StringFieldUpdateOperationsInput | string
    nuban_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}