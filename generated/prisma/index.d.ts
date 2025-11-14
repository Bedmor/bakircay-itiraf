
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
 * Model Confession
 * 
 */
export type Confession = $Result.DefaultSelection<Prisma.$ConfessionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Confessions
 * const confessions = await prisma.confession.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Confessions
   * const confessions = await prisma.confession.findMany()
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
   * `prisma.confession`: Exposes CRUD operations for the **Confession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Confessions
    * const confessions = await prisma.confession.findMany()
    * ```
    */
  get confession(): Prisma.ConfessionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Confession: 'Confession'
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
      modelProps: "confession"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Confession: {
        payload: Prisma.$ConfessionPayload<ExtArgs>
        fields: Prisma.ConfessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConfessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConfessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfessionPayload>
          }
          findFirst: {
            args: Prisma.ConfessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConfessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfessionPayload>
          }
          findMany: {
            args: Prisma.ConfessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfessionPayload>[]
          }
          create: {
            args: Prisma.ConfessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfessionPayload>
          }
          createMany: {
            args: Prisma.ConfessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConfessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfessionPayload>[]
          }
          delete: {
            args: Prisma.ConfessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfessionPayload>
          }
          update: {
            args: Prisma.ConfessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfessionPayload>
          }
          deleteMany: {
            args: Prisma.ConfessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConfessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConfessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfessionPayload>[]
          }
          upsert: {
            args: Prisma.ConfessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfessionPayload>
          }
          aggregate: {
            args: Prisma.ConfessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfession>
          }
          groupBy: {
            args: Prisma.ConfessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConfessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConfessionCountArgs<ExtArgs>
            result: $Utils.Optional<ConfessionCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    confession?: ConfessionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Models
   */

  /**
   * Model Confession
   */

  export type AggregateConfession = {
    _count: ConfessionCountAggregateOutputType | null
    _min: ConfessionMinAggregateOutputType | null
    _max: ConfessionMaxAggregateOutputType | null
  }

  export type ConfessionMinAggregateOutputType = {
    id: string | null
    content: string | null
    isApproved: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConfessionMaxAggregateOutputType = {
    id: string | null
    content: string | null
    isApproved: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConfessionCountAggregateOutputType = {
    id: number
    content: number
    isApproved: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConfessionMinAggregateInputType = {
    id?: true
    content?: true
    isApproved?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConfessionMaxAggregateInputType = {
    id?: true
    content?: true
    isApproved?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConfessionCountAggregateInputType = {
    id?: true
    content?: true
    isApproved?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConfessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Confession to aggregate.
     */
    where?: ConfessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Confessions to fetch.
     */
    orderBy?: ConfessionOrderByWithRelationInput | ConfessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConfessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Confessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Confessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Confessions
    **/
    _count?: true | ConfessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfessionMaxAggregateInputType
  }

  export type GetConfessionAggregateType<T extends ConfessionAggregateArgs> = {
        [P in keyof T & keyof AggregateConfession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfession[P]>
      : GetScalarType<T[P], AggregateConfession[P]>
  }




  export type ConfessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConfessionWhereInput
    orderBy?: ConfessionOrderByWithAggregationInput | ConfessionOrderByWithAggregationInput[]
    by: ConfessionScalarFieldEnum[] | ConfessionScalarFieldEnum
    having?: ConfessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfessionCountAggregateInputType | true
    _min?: ConfessionMinAggregateInputType
    _max?: ConfessionMaxAggregateInputType
  }

  export type ConfessionGroupByOutputType = {
    id: string
    content: string
    isApproved: boolean
    createdAt: Date
    updatedAt: Date
    _count: ConfessionCountAggregateOutputType | null
    _min: ConfessionMinAggregateOutputType | null
    _max: ConfessionMaxAggregateOutputType | null
  }

  type GetConfessionGroupByPayload<T extends ConfessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConfessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfessionGroupByOutputType[P]>
            : GetScalarType<T[P], ConfessionGroupByOutputType[P]>
        }
      >
    >


  export type ConfessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    isApproved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["confession"]>

  export type ConfessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    isApproved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["confession"]>

  export type ConfessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    isApproved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["confession"]>

  export type ConfessionSelectScalar = {
    id?: boolean
    content?: boolean
    isApproved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConfessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "isApproved" | "createdAt" | "updatedAt", ExtArgs["result"]["confession"]>

  export type $ConfessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Confession"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      isApproved: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["confession"]>
    composites: {}
  }

  type ConfessionGetPayload<S extends boolean | null | undefined | ConfessionDefaultArgs> = $Result.GetResult<Prisma.$ConfessionPayload, S>

  type ConfessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConfessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConfessionCountAggregateInputType | true
    }

  export interface ConfessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Confession'], meta: { name: 'Confession' } }
    /**
     * Find zero or one Confession that matches the filter.
     * @param {ConfessionFindUniqueArgs} args - Arguments to find a Confession
     * @example
     * // Get one Confession
     * const confession = await prisma.confession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConfessionFindUniqueArgs>(args: SelectSubset<T, ConfessionFindUniqueArgs<ExtArgs>>): Prisma__ConfessionClient<$Result.GetResult<Prisma.$ConfessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Confession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConfessionFindUniqueOrThrowArgs} args - Arguments to find a Confession
     * @example
     * // Get one Confession
     * const confession = await prisma.confession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConfessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ConfessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConfessionClient<$Result.GetResult<Prisma.$ConfessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Confession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfessionFindFirstArgs} args - Arguments to find a Confession
     * @example
     * // Get one Confession
     * const confession = await prisma.confession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConfessionFindFirstArgs>(args?: SelectSubset<T, ConfessionFindFirstArgs<ExtArgs>>): Prisma__ConfessionClient<$Result.GetResult<Prisma.$ConfessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Confession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfessionFindFirstOrThrowArgs} args - Arguments to find a Confession
     * @example
     * // Get one Confession
     * const confession = await prisma.confession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConfessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ConfessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConfessionClient<$Result.GetResult<Prisma.$ConfessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Confessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Confessions
     * const confessions = await prisma.confession.findMany()
     * 
     * // Get first 10 Confessions
     * const confessions = await prisma.confession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const confessionWithIdOnly = await prisma.confession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConfessionFindManyArgs>(args?: SelectSubset<T, ConfessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Confession.
     * @param {ConfessionCreateArgs} args - Arguments to create a Confession.
     * @example
     * // Create one Confession
     * const Confession = await prisma.confession.create({
     *   data: {
     *     // ... data to create a Confession
     *   }
     * })
     * 
     */
    create<T extends ConfessionCreateArgs>(args: SelectSubset<T, ConfessionCreateArgs<ExtArgs>>): Prisma__ConfessionClient<$Result.GetResult<Prisma.$ConfessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Confessions.
     * @param {ConfessionCreateManyArgs} args - Arguments to create many Confessions.
     * @example
     * // Create many Confessions
     * const confession = await prisma.confession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConfessionCreateManyArgs>(args?: SelectSubset<T, ConfessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Confessions and returns the data saved in the database.
     * @param {ConfessionCreateManyAndReturnArgs} args - Arguments to create many Confessions.
     * @example
     * // Create many Confessions
     * const confession = await prisma.confession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Confessions and only return the `id`
     * const confessionWithIdOnly = await prisma.confession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConfessionCreateManyAndReturnArgs>(args?: SelectSubset<T, ConfessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Confession.
     * @param {ConfessionDeleteArgs} args - Arguments to delete one Confession.
     * @example
     * // Delete one Confession
     * const Confession = await prisma.confession.delete({
     *   where: {
     *     // ... filter to delete one Confession
     *   }
     * })
     * 
     */
    delete<T extends ConfessionDeleteArgs>(args: SelectSubset<T, ConfessionDeleteArgs<ExtArgs>>): Prisma__ConfessionClient<$Result.GetResult<Prisma.$ConfessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Confession.
     * @param {ConfessionUpdateArgs} args - Arguments to update one Confession.
     * @example
     * // Update one Confession
     * const confession = await prisma.confession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConfessionUpdateArgs>(args: SelectSubset<T, ConfessionUpdateArgs<ExtArgs>>): Prisma__ConfessionClient<$Result.GetResult<Prisma.$ConfessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Confessions.
     * @param {ConfessionDeleteManyArgs} args - Arguments to filter Confessions to delete.
     * @example
     * // Delete a few Confessions
     * const { count } = await prisma.confession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConfessionDeleteManyArgs>(args?: SelectSubset<T, ConfessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Confessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Confessions
     * const confession = await prisma.confession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConfessionUpdateManyArgs>(args: SelectSubset<T, ConfessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Confessions and returns the data updated in the database.
     * @param {ConfessionUpdateManyAndReturnArgs} args - Arguments to update many Confessions.
     * @example
     * // Update many Confessions
     * const confession = await prisma.confession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Confessions and only return the `id`
     * const confessionWithIdOnly = await prisma.confession.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConfessionUpdateManyAndReturnArgs>(args: SelectSubset<T, ConfessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Confession.
     * @param {ConfessionUpsertArgs} args - Arguments to update or create a Confession.
     * @example
     * // Update or create a Confession
     * const confession = await prisma.confession.upsert({
     *   create: {
     *     // ... data to create a Confession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Confession we want to update
     *   }
     * })
     */
    upsert<T extends ConfessionUpsertArgs>(args: SelectSubset<T, ConfessionUpsertArgs<ExtArgs>>): Prisma__ConfessionClient<$Result.GetResult<Prisma.$ConfessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Confessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfessionCountArgs} args - Arguments to filter Confessions to count.
     * @example
     * // Count the number of Confessions
     * const count = await prisma.confession.count({
     *   where: {
     *     // ... the filter for the Confessions we want to count
     *   }
     * })
    **/
    count<T extends ConfessionCountArgs>(
      args?: Subset<T, ConfessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Confession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConfessionAggregateArgs>(args: Subset<T, ConfessionAggregateArgs>): Prisma.PrismaPromise<GetConfessionAggregateType<T>>

    /**
     * Group by Confession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfessionGroupByArgs} args - Group by arguments.
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
      T extends ConfessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConfessionGroupByArgs['orderBy'] }
        : { orderBy?: ConfessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConfessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Confession model
   */
  readonly fields: ConfessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Confession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConfessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Confession model
   */
  interface ConfessionFieldRefs {
    readonly id: FieldRef<"Confession", 'String'>
    readonly content: FieldRef<"Confession", 'String'>
    readonly isApproved: FieldRef<"Confession", 'Boolean'>
    readonly createdAt: FieldRef<"Confession", 'DateTime'>
    readonly updatedAt: FieldRef<"Confession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Confession findUnique
   */
  export type ConfessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Confession
     */
    select?: ConfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Confession
     */
    omit?: ConfessionOmit<ExtArgs> | null
    /**
     * Filter, which Confession to fetch.
     */
    where: ConfessionWhereUniqueInput
  }

  /**
   * Confession findUniqueOrThrow
   */
  export type ConfessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Confession
     */
    select?: ConfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Confession
     */
    omit?: ConfessionOmit<ExtArgs> | null
    /**
     * Filter, which Confession to fetch.
     */
    where: ConfessionWhereUniqueInput
  }

  /**
   * Confession findFirst
   */
  export type ConfessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Confession
     */
    select?: ConfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Confession
     */
    omit?: ConfessionOmit<ExtArgs> | null
    /**
     * Filter, which Confession to fetch.
     */
    where?: ConfessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Confessions to fetch.
     */
    orderBy?: ConfessionOrderByWithRelationInput | ConfessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Confessions.
     */
    cursor?: ConfessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Confessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Confessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Confessions.
     */
    distinct?: ConfessionScalarFieldEnum | ConfessionScalarFieldEnum[]
  }

  /**
   * Confession findFirstOrThrow
   */
  export type ConfessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Confession
     */
    select?: ConfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Confession
     */
    omit?: ConfessionOmit<ExtArgs> | null
    /**
     * Filter, which Confession to fetch.
     */
    where?: ConfessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Confessions to fetch.
     */
    orderBy?: ConfessionOrderByWithRelationInput | ConfessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Confessions.
     */
    cursor?: ConfessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Confessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Confessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Confessions.
     */
    distinct?: ConfessionScalarFieldEnum | ConfessionScalarFieldEnum[]
  }

  /**
   * Confession findMany
   */
  export type ConfessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Confession
     */
    select?: ConfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Confession
     */
    omit?: ConfessionOmit<ExtArgs> | null
    /**
     * Filter, which Confessions to fetch.
     */
    where?: ConfessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Confessions to fetch.
     */
    orderBy?: ConfessionOrderByWithRelationInput | ConfessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Confessions.
     */
    cursor?: ConfessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Confessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Confessions.
     */
    skip?: number
    distinct?: ConfessionScalarFieldEnum | ConfessionScalarFieldEnum[]
  }

  /**
   * Confession create
   */
  export type ConfessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Confession
     */
    select?: ConfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Confession
     */
    omit?: ConfessionOmit<ExtArgs> | null
    /**
     * The data needed to create a Confession.
     */
    data: XOR<ConfessionCreateInput, ConfessionUncheckedCreateInput>
  }

  /**
   * Confession createMany
   */
  export type ConfessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Confessions.
     */
    data: ConfessionCreateManyInput | ConfessionCreateManyInput[]
  }

  /**
   * Confession createManyAndReturn
   */
  export type ConfessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Confession
     */
    select?: ConfessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Confession
     */
    omit?: ConfessionOmit<ExtArgs> | null
    /**
     * The data used to create many Confessions.
     */
    data: ConfessionCreateManyInput | ConfessionCreateManyInput[]
  }

  /**
   * Confession update
   */
  export type ConfessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Confession
     */
    select?: ConfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Confession
     */
    omit?: ConfessionOmit<ExtArgs> | null
    /**
     * The data needed to update a Confession.
     */
    data: XOR<ConfessionUpdateInput, ConfessionUncheckedUpdateInput>
    /**
     * Choose, which Confession to update.
     */
    where: ConfessionWhereUniqueInput
  }

  /**
   * Confession updateMany
   */
  export type ConfessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Confessions.
     */
    data: XOR<ConfessionUpdateManyMutationInput, ConfessionUncheckedUpdateManyInput>
    /**
     * Filter which Confessions to update
     */
    where?: ConfessionWhereInput
    /**
     * Limit how many Confessions to update.
     */
    limit?: number
  }

  /**
   * Confession updateManyAndReturn
   */
  export type ConfessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Confession
     */
    select?: ConfessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Confession
     */
    omit?: ConfessionOmit<ExtArgs> | null
    /**
     * The data used to update Confessions.
     */
    data: XOR<ConfessionUpdateManyMutationInput, ConfessionUncheckedUpdateManyInput>
    /**
     * Filter which Confessions to update
     */
    where?: ConfessionWhereInput
    /**
     * Limit how many Confessions to update.
     */
    limit?: number
  }

  /**
   * Confession upsert
   */
  export type ConfessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Confession
     */
    select?: ConfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Confession
     */
    omit?: ConfessionOmit<ExtArgs> | null
    /**
     * The filter to search for the Confession to update in case it exists.
     */
    where: ConfessionWhereUniqueInput
    /**
     * In case the Confession found by the `where` argument doesn't exist, create a new Confession with this data.
     */
    create: XOR<ConfessionCreateInput, ConfessionUncheckedCreateInput>
    /**
     * In case the Confession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConfessionUpdateInput, ConfessionUncheckedUpdateInput>
  }

  /**
   * Confession delete
   */
  export type ConfessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Confession
     */
    select?: ConfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Confession
     */
    omit?: ConfessionOmit<ExtArgs> | null
    /**
     * Filter which Confession to delete.
     */
    where: ConfessionWhereUniqueInput
  }

  /**
   * Confession deleteMany
   */
  export type ConfessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Confessions to delete
     */
    where?: ConfessionWhereInput
    /**
     * Limit how many Confessions to delete.
     */
    limit?: number
  }

  /**
   * Confession without action
   */
  export type ConfessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Confession
     */
    select?: ConfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Confession
     */
    omit?: ConfessionOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ConfessionScalarFieldEnum: {
    id: 'id',
    content: 'content',
    isApproved: 'isApproved',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConfessionScalarFieldEnum = (typeof ConfessionScalarFieldEnum)[keyof typeof ConfessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type ConfessionWhereInput = {
    AND?: ConfessionWhereInput | ConfessionWhereInput[]
    OR?: ConfessionWhereInput[]
    NOT?: ConfessionWhereInput | ConfessionWhereInput[]
    id?: StringFilter<"Confession"> | string
    content?: StringFilter<"Confession"> | string
    isApproved?: BoolFilter<"Confession"> | boolean
    createdAt?: DateTimeFilter<"Confession"> | Date | string
    updatedAt?: DateTimeFilter<"Confession"> | Date | string
  }

  export type ConfessionOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConfessionWhereInput | ConfessionWhereInput[]
    OR?: ConfessionWhereInput[]
    NOT?: ConfessionWhereInput | ConfessionWhereInput[]
    content?: StringFilter<"Confession"> | string
    isApproved?: BoolFilter<"Confession"> | boolean
    createdAt?: DateTimeFilter<"Confession"> | Date | string
    updatedAt?: DateTimeFilter<"Confession"> | Date | string
  }, "id">

  export type ConfessionOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConfessionCountOrderByAggregateInput
    _max?: ConfessionMaxOrderByAggregateInput
    _min?: ConfessionMinOrderByAggregateInput
  }

  export type ConfessionScalarWhereWithAggregatesInput = {
    AND?: ConfessionScalarWhereWithAggregatesInput | ConfessionScalarWhereWithAggregatesInput[]
    OR?: ConfessionScalarWhereWithAggregatesInput[]
    NOT?: ConfessionScalarWhereWithAggregatesInput | ConfessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Confession"> | string
    content?: StringWithAggregatesFilter<"Confession"> | string
    isApproved?: BoolWithAggregatesFilter<"Confession"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Confession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Confession"> | Date | string
  }

  export type ConfessionCreateInput = {
    id?: string
    content: string
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConfessionUncheckedCreateInput = {
    id?: string
    content: string
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConfessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfessionCreateManyInput = {
    id?: string
    content: string
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConfessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ConfessionCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfessionMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfessionMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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