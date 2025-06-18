
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
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model ExpenseRequest
 * 
 */
export type ExpenseRequest = $Result.DefaultSelection<Prisma.$ExpenseRequestPayload>
/**
 * Model SystemLog
 * 
 */
export type SystemLog = $Result.DefaultSelection<Prisma.$SystemLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  EMPLOYEE: 'EMPLOYEE',
  MANAGER: 'MANAGER',
  FINANCE: 'FINANCE'
};

export type Role = (typeof Role)[keyof typeof Role]


export const RequestStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  FINAL_APPROVED: 'FINAL_APPROVED',
  WRAPPED: 'WRAPPED'
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type RequestStatus = $Enums.RequestStatus

export const RequestStatus: typeof $Enums.RequestStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Employees
 * const employees = await prisma.employee.findMany()
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
   * // Fetch zero or more Employees
   * const employees = await prisma.employee.findMany()
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
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expenseRequest`: Exposes CRUD operations for the **ExpenseRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExpenseRequests
    * const expenseRequests = await prisma.expenseRequest.findMany()
    * ```
    */
  get expenseRequest(): Prisma.ExpenseRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.systemLog`: Exposes CRUD operations for the **SystemLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemLogs
    * const systemLogs = await prisma.systemLog.findMany()
    * ```
    */
  get systemLog(): Prisma.SystemLogDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.0
   * Query Engine version: aee10d5a411e4360c6d3445ce4810ca65adbf3e8
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
    Employee: 'Employee',
    ExpenseRequest: 'ExpenseRequest',
    SystemLog: 'SystemLog'
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
      modelProps: "employee" | "expenseRequest" | "systemLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      ExpenseRequest: {
        payload: Prisma.$ExpenseRequestPayload<ExtArgs>
        fields: Prisma.ExpenseRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseRequestPayload>
          }
          findFirst: {
            args: Prisma.ExpenseRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseRequestPayload>
          }
          findMany: {
            args: Prisma.ExpenseRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseRequestPayload>[]
          }
          create: {
            args: Prisma.ExpenseRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseRequestPayload>
          }
          createMany: {
            args: Prisma.ExpenseRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ExpenseRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseRequestPayload>
          }
          update: {
            args: Prisma.ExpenseRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseRequestPayload>
          }
          deleteMany: {
            args: Prisma.ExpenseRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExpenseRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseRequestPayload>
          }
          aggregate: {
            args: Prisma.ExpenseRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpenseRequest>
          }
          groupBy: {
            args: Prisma.ExpenseRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenseRequestCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseRequestCountAggregateOutputType> | number
          }
        }
      }
      SystemLog: {
        payload: Prisma.$SystemLogPayload<ExtArgs>
        fields: Prisma.SystemLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>
          }
          findFirst: {
            args: Prisma.SystemLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>
          }
          findMany: {
            args: Prisma.SystemLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>[]
          }
          create: {
            args: Prisma.SystemLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>
          }
          createMany: {
            args: Prisma.SystemLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SystemLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>
          }
          update: {
            args: Prisma.SystemLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>
          }
          deleteMany: {
            args: Prisma.SystemLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SystemLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>
          }
          aggregate: {
            args: Prisma.SystemLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemLog>
          }
          groupBy: {
            args: Prisma.SystemLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemLogCountArgs<ExtArgs>
            result: $Utils.Optional<SystemLogCountAggregateOutputType> | number
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
    employee?: EmployeeOmit
    expenseRequest?: ExpenseRequestOmit
    systemLog?: SystemLogOmit
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
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    requests: number
    managerApprovals: number
    financeApprovals: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | EmployeeCountOutputTypeCountRequestsArgs
    managerApprovals?: boolean | EmployeeCountOutputTypeCountManagerApprovalsArgs
    financeApprovals?: boolean | EmployeeCountOutputTypeCountFinanceApprovalsArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseRequestWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountManagerApprovalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseRequestWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountFinanceApprovalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseRequestWhereInput
  }


  /**
   * Count Type ExpenseRequestCountOutputType
   */

  export type ExpenseRequestCountOutputType = {
    logs: number
  }

  export type ExpenseRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | ExpenseRequestCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * ExpenseRequestCountOutputType without action
   */
  export type ExpenseRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseRequestCountOutputType
     */
    select?: ExpenseRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExpenseRequestCountOutputType without action
   */
  export type ExpenseRequestCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    id: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    id: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: number | null
    name: string | null
    department: string | null
    role: $Enums.Role | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    department: string | null
    role: $Enums.Role | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    name: number
    department: number
    role: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    id?: true
  }

  export type EmployeeSumAggregateInputType = {
    id?: true
  }

  export type EmployeeMinAggregateInputType = {
    id?: true
    name?: true
    department?: true
    role?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    name?: true
    department?: true
    role?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    name?: true
    department?: true
    role?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: number
    name: string
    department: string
    role: $Enums.Role
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    department?: boolean
    role?: boolean
    requests?: boolean | Employee$requestsArgs<ExtArgs>
    managerApprovals?: boolean | Employee$managerApprovalsArgs<ExtArgs>
    financeApprovals?: boolean | Employee$financeApprovalsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>



  export type EmployeeSelectScalar = {
    id?: boolean
    name?: boolean
    department?: boolean
    role?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "department" | "role", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | Employee$requestsArgs<ExtArgs>
    managerApprovals?: boolean | Employee$managerApprovalsArgs<ExtArgs>
    financeApprovals?: boolean | Employee$financeApprovalsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      requests: Prisma.$ExpenseRequestPayload<ExtArgs>[]
      managerApprovals: Prisma.$ExpenseRequestPayload<ExtArgs>[]
      financeApprovals: Prisma.$ExpenseRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      department: string
      role: $Enums.Role
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
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
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requests<T extends Employee$requestsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    managerApprovals<T extends Employee$managerApprovalsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$managerApprovalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    financeApprovals<T extends Employee$financeApprovalsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$financeApprovalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'Int'>
    readonly name: FieldRef<"Employee", 'String'>
    readonly department: FieldRef<"Employee", 'String'>
    readonly role: FieldRef<"Employee", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.requests
   */
  export type Employee$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseRequest
     */
    select?: ExpenseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseRequest
     */
    omit?: ExpenseRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseRequestInclude<ExtArgs> | null
    where?: ExpenseRequestWhereInput
    orderBy?: ExpenseRequestOrderByWithRelationInput | ExpenseRequestOrderByWithRelationInput[]
    cursor?: ExpenseRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseRequestScalarFieldEnum | ExpenseRequestScalarFieldEnum[]
  }

  /**
   * Employee.managerApprovals
   */
  export type Employee$managerApprovalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseRequest
     */
    select?: ExpenseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseRequest
     */
    omit?: ExpenseRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseRequestInclude<ExtArgs> | null
    where?: ExpenseRequestWhereInput
    orderBy?: ExpenseRequestOrderByWithRelationInput | ExpenseRequestOrderByWithRelationInput[]
    cursor?: ExpenseRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseRequestScalarFieldEnum | ExpenseRequestScalarFieldEnum[]
  }

  /**
   * Employee.financeApprovals
   */
  export type Employee$financeApprovalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseRequest
     */
    select?: ExpenseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseRequest
     */
    omit?: ExpenseRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseRequestInclude<ExtArgs> | null
    where?: ExpenseRequestWhereInput
    orderBy?: ExpenseRequestOrderByWithRelationInput | ExpenseRequestOrderByWithRelationInput[]
    cursor?: ExpenseRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseRequestScalarFieldEnum | ExpenseRequestScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model ExpenseRequest
   */

  export type AggregateExpenseRequest = {
    _count: ExpenseRequestCountAggregateOutputType | null
    _avg: ExpenseRequestAvgAggregateOutputType | null
    _sum: ExpenseRequestSumAggregateOutputType | null
    _min: ExpenseRequestMinAggregateOutputType | null
    _max: ExpenseRequestMaxAggregateOutputType | null
  }

  export type ExpenseRequestAvgAggregateOutputType = {
    id: number | null
    employeeId: number | null
    amount: number | null
    approvedById: number | null
    finalApprovedById: number | null
  }

  export type ExpenseRequestSumAggregateOutputType = {
    id: number | null
    employeeId: number | null
    amount: number | null
    approvedById: number | null
    finalApprovedById: number | null
  }

  export type ExpenseRequestMinAggregateOutputType = {
    id: number | null
    employeeId: number | null
    description: string | null
    amount: number | null
    status: $Enums.RequestStatus | null
    imageUrl: string | null
    createdAt: Date | null
    approvedById: number | null
    rejectedReason: string | null
    finalApprovedById: number | null
  }

  export type ExpenseRequestMaxAggregateOutputType = {
    id: number | null
    employeeId: number | null
    description: string | null
    amount: number | null
    status: $Enums.RequestStatus | null
    imageUrl: string | null
    createdAt: Date | null
    approvedById: number | null
    rejectedReason: string | null
    finalApprovedById: number | null
  }

  export type ExpenseRequestCountAggregateOutputType = {
    id: number
    employeeId: number
    description: number
    amount: number
    status: number
    imageUrl: number
    createdAt: number
    approvedById: number
    rejectedReason: number
    finalApprovedById: number
    _all: number
  }


  export type ExpenseRequestAvgAggregateInputType = {
    id?: true
    employeeId?: true
    amount?: true
    approvedById?: true
    finalApprovedById?: true
  }

  export type ExpenseRequestSumAggregateInputType = {
    id?: true
    employeeId?: true
    amount?: true
    approvedById?: true
    finalApprovedById?: true
  }

  export type ExpenseRequestMinAggregateInputType = {
    id?: true
    employeeId?: true
    description?: true
    amount?: true
    status?: true
    imageUrl?: true
    createdAt?: true
    approvedById?: true
    rejectedReason?: true
    finalApprovedById?: true
  }

  export type ExpenseRequestMaxAggregateInputType = {
    id?: true
    employeeId?: true
    description?: true
    amount?: true
    status?: true
    imageUrl?: true
    createdAt?: true
    approvedById?: true
    rejectedReason?: true
    finalApprovedById?: true
  }

  export type ExpenseRequestCountAggregateInputType = {
    id?: true
    employeeId?: true
    description?: true
    amount?: true
    status?: true
    imageUrl?: true
    createdAt?: true
    approvedById?: true
    rejectedReason?: true
    finalApprovedById?: true
    _all?: true
  }

  export type ExpenseRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpenseRequest to aggregate.
     */
    where?: ExpenseRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseRequests to fetch.
     */
    orderBy?: ExpenseRequestOrderByWithRelationInput | ExpenseRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExpenseRequests
    **/
    _count?: true | ExpenseRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseRequestMaxAggregateInputType
  }

  export type GetExpenseRequestAggregateType<T extends ExpenseRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateExpenseRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpenseRequest[P]>
      : GetScalarType<T[P], AggregateExpenseRequest[P]>
  }




  export type ExpenseRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseRequestWhereInput
    orderBy?: ExpenseRequestOrderByWithAggregationInput | ExpenseRequestOrderByWithAggregationInput[]
    by: ExpenseRequestScalarFieldEnum[] | ExpenseRequestScalarFieldEnum
    having?: ExpenseRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseRequestCountAggregateInputType | true
    _avg?: ExpenseRequestAvgAggregateInputType
    _sum?: ExpenseRequestSumAggregateInputType
    _min?: ExpenseRequestMinAggregateInputType
    _max?: ExpenseRequestMaxAggregateInputType
  }

  export type ExpenseRequestGroupByOutputType = {
    id: number
    employeeId: number
    description: string
    amount: number
    status: $Enums.RequestStatus
    imageUrl: string | null
    createdAt: Date
    approvedById: number | null
    rejectedReason: string | null
    finalApprovedById: number | null
    _count: ExpenseRequestCountAggregateOutputType | null
    _avg: ExpenseRequestAvgAggregateOutputType | null
    _sum: ExpenseRequestSumAggregateOutputType | null
    _min: ExpenseRequestMinAggregateOutputType | null
    _max: ExpenseRequestMaxAggregateOutputType | null
  }

  type GetExpenseRequestGroupByPayload<T extends ExpenseRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseRequestGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseRequestGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    description?: boolean
    amount?: boolean
    status?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    approvedById?: boolean
    rejectedReason?: boolean
    finalApprovedById?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    approvedBy?: boolean | ExpenseRequest$approvedByArgs<ExtArgs>
    finalApprovedBy?: boolean | ExpenseRequest$finalApprovedByArgs<ExtArgs>
    logs?: boolean | ExpenseRequest$logsArgs<ExtArgs>
    _count?: boolean | ExpenseRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenseRequest"]>



  export type ExpenseRequestSelectScalar = {
    id?: boolean
    employeeId?: boolean
    description?: boolean
    amount?: boolean
    status?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    approvedById?: boolean
    rejectedReason?: boolean
    finalApprovedById?: boolean
  }

  export type ExpenseRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "description" | "amount" | "status" | "imageUrl" | "createdAt" | "approvedById" | "rejectedReason" | "finalApprovedById", ExtArgs["result"]["expenseRequest"]>
  export type ExpenseRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    approvedBy?: boolean | ExpenseRequest$approvedByArgs<ExtArgs>
    finalApprovedBy?: boolean | ExpenseRequest$finalApprovedByArgs<ExtArgs>
    logs?: boolean | ExpenseRequest$logsArgs<ExtArgs>
    _count?: boolean | ExpenseRequestCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ExpenseRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExpenseRequest"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
      approvedBy: Prisma.$EmployeePayload<ExtArgs> | null
      finalApprovedBy: Prisma.$EmployeePayload<ExtArgs> | null
      logs: Prisma.$SystemLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      employeeId: number
      description: string
      amount: number
      status: $Enums.RequestStatus
      imageUrl: string | null
      createdAt: Date
      approvedById: number | null
      rejectedReason: string | null
      finalApprovedById: number | null
    }, ExtArgs["result"]["expenseRequest"]>
    composites: {}
  }

  type ExpenseRequestGetPayload<S extends boolean | null | undefined | ExpenseRequestDefaultArgs> = $Result.GetResult<Prisma.$ExpenseRequestPayload, S>

  type ExpenseRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpenseRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpenseRequestCountAggregateInputType | true
    }

  export interface ExpenseRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExpenseRequest'], meta: { name: 'ExpenseRequest' } }
    /**
     * Find zero or one ExpenseRequest that matches the filter.
     * @param {ExpenseRequestFindUniqueArgs} args - Arguments to find a ExpenseRequest
     * @example
     * // Get one ExpenseRequest
     * const expenseRequest = await prisma.expenseRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseRequestFindUniqueArgs>(args: SelectSubset<T, ExpenseRequestFindUniqueArgs<ExtArgs>>): Prisma__ExpenseRequestClient<$Result.GetResult<Prisma.$ExpenseRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExpenseRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpenseRequestFindUniqueOrThrowArgs} args - Arguments to find a ExpenseRequest
     * @example
     * // Get one ExpenseRequest
     * const expenseRequest = await prisma.expenseRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseRequestClient<$Result.GetResult<Prisma.$ExpenseRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpenseRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseRequestFindFirstArgs} args - Arguments to find a ExpenseRequest
     * @example
     * // Get one ExpenseRequest
     * const expenseRequest = await prisma.expenseRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseRequestFindFirstArgs>(args?: SelectSubset<T, ExpenseRequestFindFirstArgs<ExtArgs>>): Prisma__ExpenseRequestClient<$Result.GetResult<Prisma.$ExpenseRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpenseRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseRequestFindFirstOrThrowArgs} args - Arguments to find a ExpenseRequest
     * @example
     * // Get one ExpenseRequest
     * const expenseRequest = await prisma.expenseRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseRequestClient<$Result.GetResult<Prisma.$ExpenseRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExpenseRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExpenseRequests
     * const expenseRequests = await prisma.expenseRequest.findMany()
     * 
     * // Get first 10 ExpenseRequests
     * const expenseRequests = await prisma.expenseRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseRequestWithIdOnly = await prisma.expenseRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpenseRequestFindManyArgs>(args?: SelectSubset<T, ExpenseRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExpenseRequest.
     * @param {ExpenseRequestCreateArgs} args - Arguments to create a ExpenseRequest.
     * @example
     * // Create one ExpenseRequest
     * const ExpenseRequest = await prisma.expenseRequest.create({
     *   data: {
     *     // ... data to create a ExpenseRequest
     *   }
     * })
     * 
     */
    create<T extends ExpenseRequestCreateArgs>(args: SelectSubset<T, ExpenseRequestCreateArgs<ExtArgs>>): Prisma__ExpenseRequestClient<$Result.GetResult<Prisma.$ExpenseRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExpenseRequests.
     * @param {ExpenseRequestCreateManyArgs} args - Arguments to create many ExpenseRequests.
     * @example
     * // Create many ExpenseRequests
     * const expenseRequest = await prisma.expenseRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseRequestCreateManyArgs>(args?: SelectSubset<T, ExpenseRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ExpenseRequest.
     * @param {ExpenseRequestDeleteArgs} args - Arguments to delete one ExpenseRequest.
     * @example
     * // Delete one ExpenseRequest
     * const ExpenseRequest = await prisma.expenseRequest.delete({
     *   where: {
     *     // ... filter to delete one ExpenseRequest
     *   }
     * })
     * 
     */
    delete<T extends ExpenseRequestDeleteArgs>(args: SelectSubset<T, ExpenseRequestDeleteArgs<ExtArgs>>): Prisma__ExpenseRequestClient<$Result.GetResult<Prisma.$ExpenseRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExpenseRequest.
     * @param {ExpenseRequestUpdateArgs} args - Arguments to update one ExpenseRequest.
     * @example
     * // Update one ExpenseRequest
     * const expenseRequest = await prisma.expenseRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseRequestUpdateArgs>(args: SelectSubset<T, ExpenseRequestUpdateArgs<ExtArgs>>): Prisma__ExpenseRequestClient<$Result.GetResult<Prisma.$ExpenseRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExpenseRequests.
     * @param {ExpenseRequestDeleteManyArgs} args - Arguments to filter ExpenseRequests to delete.
     * @example
     * // Delete a few ExpenseRequests
     * const { count } = await prisma.expenseRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseRequestDeleteManyArgs>(args?: SelectSubset<T, ExpenseRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpenseRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExpenseRequests
     * const expenseRequest = await prisma.expenseRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseRequestUpdateManyArgs>(args: SelectSubset<T, ExpenseRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExpenseRequest.
     * @param {ExpenseRequestUpsertArgs} args - Arguments to update or create a ExpenseRequest.
     * @example
     * // Update or create a ExpenseRequest
     * const expenseRequest = await prisma.expenseRequest.upsert({
     *   create: {
     *     // ... data to create a ExpenseRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExpenseRequest we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseRequestUpsertArgs>(args: SelectSubset<T, ExpenseRequestUpsertArgs<ExtArgs>>): Prisma__ExpenseRequestClient<$Result.GetResult<Prisma.$ExpenseRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExpenseRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseRequestCountArgs} args - Arguments to filter ExpenseRequests to count.
     * @example
     * // Count the number of ExpenseRequests
     * const count = await prisma.expenseRequest.count({
     *   where: {
     *     // ... the filter for the ExpenseRequests we want to count
     *   }
     * })
    **/
    count<T extends ExpenseRequestCountArgs>(
      args?: Subset<T, ExpenseRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExpenseRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExpenseRequestAggregateArgs>(args: Subset<T, ExpenseRequestAggregateArgs>): Prisma.PrismaPromise<GetExpenseRequestAggregateType<T>>

    /**
     * Group by ExpenseRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseRequestGroupByArgs} args - Group by arguments.
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
      T extends ExpenseRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseRequestGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExpenseRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExpenseRequest model
   */
  readonly fields: ExpenseRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExpenseRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    approvedBy<T extends ExpenseRequest$approvedByArgs<ExtArgs> = {}>(args?: Subset<T, ExpenseRequest$approvedByArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    finalApprovedBy<T extends ExpenseRequest$finalApprovedByArgs<ExtArgs> = {}>(args?: Subset<T, ExpenseRequest$finalApprovedByArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    logs<T extends ExpenseRequest$logsArgs<ExtArgs> = {}>(args?: Subset<T, ExpenseRequest$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ExpenseRequest model
   */
  interface ExpenseRequestFieldRefs {
    readonly id: FieldRef<"ExpenseRequest", 'Int'>
    readonly employeeId: FieldRef<"ExpenseRequest", 'Int'>
    readonly description: FieldRef<"ExpenseRequest", 'String'>
    readonly amount: FieldRef<"ExpenseRequest", 'Float'>
    readonly status: FieldRef<"ExpenseRequest", 'RequestStatus'>
    readonly imageUrl: FieldRef<"ExpenseRequest", 'String'>
    readonly createdAt: FieldRef<"ExpenseRequest", 'DateTime'>
    readonly approvedById: FieldRef<"ExpenseRequest", 'Int'>
    readonly rejectedReason: FieldRef<"ExpenseRequest", 'String'>
    readonly finalApprovedById: FieldRef<"ExpenseRequest", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ExpenseRequest findUnique
   */
  export type ExpenseRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseRequest
     */
    select?: ExpenseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseRequest
     */
    omit?: ExpenseRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseRequestInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseRequest to fetch.
     */
    where: ExpenseRequestWhereUniqueInput
  }

  /**
   * ExpenseRequest findUniqueOrThrow
   */
  export type ExpenseRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseRequest
     */
    select?: ExpenseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseRequest
     */
    omit?: ExpenseRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseRequestInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseRequest to fetch.
     */
    where: ExpenseRequestWhereUniqueInput
  }

  /**
   * ExpenseRequest findFirst
   */
  export type ExpenseRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseRequest
     */
    select?: ExpenseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseRequest
     */
    omit?: ExpenseRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseRequestInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseRequest to fetch.
     */
    where?: ExpenseRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseRequests to fetch.
     */
    orderBy?: ExpenseRequestOrderByWithRelationInput | ExpenseRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpenseRequests.
     */
    cursor?: ExpenseRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpenseRequests.
     */
    distinct?: ExpenseRequestScalarFieldEnum | ExpenseRequestScalarFieldEnum[]
  }

  /**
   * ExpenseRequest findFirstOrThrow
   */
  export type ExpenseRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseRequest
     */
    select?: ExpenseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseRequest
     */
    omit?: ExpenseRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseRequestInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseRequest to fetch.
     */
    where?: ExpenseRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseRequests to fetch.
     */
    orderBy?: ExpenseRequestOrderByWithRelationInput | ExpenseRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpenseRequests.
     */
    cursor?: ExpenseRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpenseRequests.
     */
    distinct?: ExpenseRequestScalarFieldEnum | ExpenseRequestScalarFieldEnum[]
  }

  /**
   * ExpenseRequest findMany
   */
  export type ExpenseRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseRequest
     */
    select?: ExpenseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseRequest
     */
    omit?: ExpenseRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseRequestInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseRequests to fetch.
     */
    where?: ExpenseRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseRequests to fetch.
     */
    orderBy?: ExpenseRequestOrderByWithRelationInput | ExpenseRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExpenseRequests.
     */
    cursor?: ExpenseRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseRequests.
     */
    skip?: number
    distinct?: ExpenseRequestScalarFieldEnum | ExpenseRequestScalarFieldEnum[]
  }

  /**
   * ExpenseRequest create
   */
  export type ExpenseRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseRequest
     */
    select?: ExpenseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseRequest
     */
    omit?: ExpenseRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a ExpenseRequest.
     */
    data: XOR<ExpenseRequestCreateInput, ExpenseRequestUncheckedCreateInput>
  }

  /**
   * ExpenseRequest createMany
   */
  export type ExpenseRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExpenseRequests.
     */
    data: ExpenseRequestCreateManyInput | ExpenseRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExpenseRequest update
   */
  export type ExpenseRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseRequest
     */
    select?: ExpenseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseRequest
     */
    omit?: ExpenseRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a ExpenseRequest.
     */
    data: XOR<ExpenseRequestUpdateInput, ExpenseRequestUncheckedUpdateInput>
    /**
     * Choose, which ExpenseRequest to update.
     */
    where: ExpenseRequestWhereUniqueInput
  }

  /**
   * ExpenseRequest updateMany
   */
  export type ExpenseRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExpenseRequests.
     */
    data: XOR<ExpenseRequestUpdateManyMutationInput, ExpenseRequestUncheckedUpdateManyInput>
    /**
     * Filter which ExpenseRequests to update
     */
    where?: ExpenseRequestWhereInput
    /**
     * Limit how many ExpenseRequests to update.
     */
    limit?: number
  }

  /**
   * ExpenseRequest upsert
   */
  export type ExpenseRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseRequest
     */
    select?: ExpenseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseRequest
     */
    omit?: ExpenseRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the ExpenseRequest to update in case it exists.
     */
    where: ExpenseRequestWhereUniqueInput
    /**
     * In case the ExpenseRequest found by the `where` argument doesn't exist, create a new ExpenseRequest with this data.
     */
    create: XOR<ExpenseRequestCreateInput, ExpenseRequestUncheckedCreateInput>
    /**
     * In case the ExpenseRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseRequestUpdateInput, ExpenseRequestUncheckedUpdateInput>
  }

  /**
   * ExpenseRequest delete
   */
  export type ExpenseRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseRequest
     */
    select?: ExpenseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseRequest
     */
    omit?: ExpenseRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseRequestInclude<ExtArgs> | null
    /**
     * Filter which ExpenseRequest to delete.
     */
    where: ExpenseRequestWhereUniqueInput
  }

  /**
   * ExpenseRequest deleteMany
   */
  export type ExpenseRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpenseRequests to delete
     */
    where?: ExpenseRequestWhereInput
    /**
     * Limit how many ExpenseRequests to delete.
     */
    limit?: number
  }

  /**
   * ExpenseRequest.approvedBy
   */
  export type ExpenseRequest$approvedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * ExpenseRequest.finalApprovedBy
   */
  export type ExpenseRequest$finalApprovedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * ExpenseRequest.logs
   */
  export type ExpenseRequest$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemLog
     */
    omit?: SystemLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogInclude<ExtArgs> | null
    where?: SystemLogWhereInput
    orderBy?: SystemLogOrderByWithRelationInput | SystemLogOrderByWithRelationInput[]
    cursor?: SystemLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SystemLogScalarFieldEnum | SystemLogScalarFieldEnum[]
  }

  /**
   * ExpenseRequest without action
   */
  export type ExpenseRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseRequest
     */
    select?: ExpenseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseRequest
     */
    omit?: ExpenseRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseRequestInclude<ExtArgs> | null
  }


  /**
   * Model SystemLog
   */

  export type AggregateSystemLog = {
    _count: SystemLogCountAggregateOutputType | null
    _avg: SystemLogAvgAggregateOutputType | null
    _sum: SystemLogSumAggregateOutputType | null
    _min: SystemLogMinAggregateOutputType | null
    _max: SystemLogMaxAggregateOutputType | null
  }

  export type SystemLogAvgAggregateOutputType = {
    id: number | null
    requestId: number | null
  }

  export type SystemLogSumAggregateOutputType = {
    id: number | null
    requestId: number | null
  }

  export type SystemLogMinAggregateOutputType = {
    id: number | null
    action: string | null
    timestamp: Date | null
    requestId: number | null
  }

  export type SystemLogMaxAggregateOutputType = {
    id: number | null
    action: string | null
    timestamp: Date | null
    requestId: number | null
  }

  export type SystemLogCountAggregateOutputType = {
    id: number
    action: number
    timestamp: number
    requestId: number
    _all: number
  }


  export type SystemLogAvgAggregateInputType = {
    id?: true
    requestId?: true
  }

  export type SystemLogSumAggregateInputType = {
    id?: true
    requestId?: true
  }

  export type SystemLogMinAggregateInputType = {
    id?: true
    action?: true
    timestamp?: true
    requestId?: true
  }

  export type SystemLogMaxAggregateInputType = {
    id?: true
    action?: true
    timestamp?: true
    requestId?: true
  }

  export type SystemLogCountAggregateInputType = {
    id?: true
    action?: true
    timestamp?: true
    requestId?: true
    _all?: true
  }

  export type SystemLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemLog to aggregate.
     */
    where?: SystemLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemLogs to fetch.
     */
    orderBy?: SystemLogOrderByWithRelationInput | SystemLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemLogs
    **/
    _count?: true | SystemLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SystemLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SystemLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemLogMaxAggregateInputType
  }

  export type GetSystemLogAggregateType<T extends SystemLogAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemLog[P]>
      : GetScalarType<T[P], AggregateSystemLog[P]>
  }




  export type SystemLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemLogWhereInput
    orderBy?: SystemLogOrderByWithAggregationInput | SystemLogOrderByWithAggregationInput[]
    by: SystemLogScalarFieldEnum[] | SystemLogScalarFieldEnum
    having?: SystemLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemLogCountAggregateInputType | true
    _avg?: SystemLogAvgAggregateInputType
    _sum?: SystemLogSumAggregateInputType
    _min?: SystemLogMinAggregateInputType
    _max?: SystemLogMaxAggregateInputType
  }

  export type SystemLogGroupByOutputType = {
    id: number
    action: string
    timestamp: Date
    requestId: number
    _count: SystemLogCountAggregateOutputType | null
    _avg: SystemLogAvgAggregateOutputType | null
    _sum: SystemLogSumAggregateOutputType | null
    _min: SystemLogMinAggregateOutputType | null
    _max: SystemLogMaxAggregateOutputType | null
  }

  type GetSystemLogGroupByPayload<T extends SystemLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemLogGroupByOutputType[P]>
            : GetScalarType<T[P], SystemLogGroupByOutputType[P]>
        }
      >
    >


  export type SystemLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    timestamp?: boolean
    requestId?: boolean
    request?: boolean | ExpenseRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["systemLog"]>



  export type SystemLogSelectScalar = {
    id?: boolean
    action?: boolean
    timestamp?: boolean
    requestId?: boolean
  }

  export type SystemLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action" | "timestamp" | "requestId", ExtArgs["result"]["systemLog"]>
  export type SystemLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | ExpenseRequestDefaultArgs<ExtArgs>
  }

  export type $SystemLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemLog"
    objects: {
      request: Prisma.$ExpenseRequestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      action: string
      timestamp: Date
      requestId: number
    }, ExtArgs["result"]["systemLog"]>
    composites: {}
  }

  type SystemLogGetPayload<S extends boolean | null | undefined | SystemLogDefaultArgs> = $Result.GetResult<Prisma.$SystemLogPayload, S>

  type SystemLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemLogCountAggregateInputType | true
    }

  export interface SystemLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemLog'], meta: { name: 'SystemLog' } }
    /**
     * Find zero or one SystemLog that matches the filter.
     * @param {SystemLogFindUniqueArgs} args - Arguments to find a SystemLog
     * @example
     * // Get one SystemLog
     * const systemLog = await prisma.systemLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemLogFindUniqueArgs>(args: SelectSubset<T, SystemLogFindUniqueArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SystemLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemLogFindUniqueOrThrowArgs} args - Arguments to find a SystemLog
     * @example
     * // Get one SystemLog
     * const systemLog = await prisma.systemLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemLogFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogFindFirstArgs} args - Arguments to find a SystemLog
     * @example
     * // Get one SystemLog
     * const systemLog = await prisma.systemLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemLogFindFirstArgs>(args?: SelectSubset<T, SystemLogFindFirstArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogFindFirstOrThrowArgs} args - Arguments to find a SystemLog
     * @example
     * // Get one SystemLog
     * const systemLog = await prisma.systemLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemLogFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SystemLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemLogs
     * const systemLogs = await prisma.systemLog.findMany()
     * 
     * // Get first 10 SystemLogs
     * const systemLogs = await prisma.systemLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemLogWithIdOnly = await prisma.systemLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemLogFindManyArgs>(args?: SelectSubset<T, SystemLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SystemLog.
     * @param {SystemLogCreateArgs} args - Arguments to create a SystemLog.
     * @example
     * // Create one SystemLog
     * const SystemLog = await prisma.systemLog.create({
     *   data: {
     *     // ... data to create a SystemLog
     *   }
     * })
     * 
     */
    create<T extends SystemLogCreateArgs>(args: SelectSubset<T, SystemLogCreateArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SystemLogs.
     * @param {SystemLogCreateManyArgs} args - Arguments to create many SystemLogs.
     * @example
     * // Create many SystemLogs
     * const systemLog = await prisma.systemLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemLogCreateManyArgs>(args?: SelectSubset<T, SystemLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SystemLog.
     * @param {SystemLogDeleteArgs} args - Arguments to delete one SystemLog.
     * @example
     * // Delete one SystemLog
     * const SystemLog = await prisma.systemLog.delete({
     *   where: {
     *     // ... filter to delete one SystemLog
     *   }
     * })
     * 
     */
    delete<T extends SystemLogDeleteArgs>(args: SelectSubset<T, SystemLogDeleteArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SystemLog.
     * @param {SystemLogUpdateArgs} args - Arguments to update one SystemLog.
     * @example
     * // Update one SystemLog
     * const systemLog = await prisma.systemLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemLogUpdateArgs>(args: SelectSubset<T, SystemLogUpdateArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SystemLogs.
     * @param {SystemLogDeleteManyArgs} args - Arguments to filter SystemLogs to delete.
     * @example
     * // Delete a few SystemLogs
     * const { count } = await prisma.systemLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemLogDeleteManyArgs>(args?: SelectSubset<T, SystemLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemLogs
     * const systemLog = await prisma.systemLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemLogUpdateManyArgs>(args: SelectSubset<T, SystemLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SystemLog.
     * @param {SystemLogUpsertArgs} args - Arguments to update or create a SystemLog.
     * @example
     * // Update or create a SystemLog
     * const systemLog = await prisma.systemLog.upsert({
     *   create: {
     *     // ... data to create a SystemLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemLog we want to update
     *   }
     * })
     */
    upsert<T extends SystemLogUpsertArgs>(args: SelectSubset<T, SystemLogUpsertArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SystemLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogCountArgs} args - Arguments to filter SystemLogs to count.
     * @example
     * // Count the number of SystemLogs
     * const count = await prisma.systemLog.count({
     *   where: {
     *     // ... the filter for the SystemLogs we want to count
     *   }
     * })
    **/
    count<T extends SystemLogCountArgs>(
      args?: Subset<T, SystemLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SystemLogAggregateArgs>(args: Subset<T, SystemLogAggregateArgs>): Prisma.PrismaPromise<GetSystemLogAggregateType<T>>

    /**
     * Group by SystemLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogGroupByArgs} args - Group by arguments.
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
      T extends SystemLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemLogGroupByArgs['orderBy'] }
        : { orderBy?: SystemLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SystemLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemLog model
   */
  readonly fields: SystemLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    request<T extends ExpenseRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExpenseRequestDefaultArgs<ExtArgs>>): Prisma__ExpenseRequestClient<$Result.GetResult<Prisma.$ExpenseRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SystemLog model
   */
  interface SystemLogFieldRefs {
    readonly id: FieldRef<"SystemLog", 'Int'>
    readonly action: FieldRef<"SystemLog", 'String'>
    readonly timestamp: FieldRef<"SystemLog", 'DateTime'>
    readonly requestId: FieldRef<"SystemLog", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SystemLog findUnique
   */
  export type SystemLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemLog
     */
    omit?: SystemLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogInclude<ExtArgs> | null
    /**
     * Filter, which SystemLog to fetch.
     */
    where: SystemLogWhereUniqueInput
  }

  /**
   * SystemLog findUniqueOrThrow
   */
  export type SystemLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemLog
     */
    omit?: SystemLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogInclude<ExtArgs> | null
    /**
     * Filter, which SystemLog to fetch.
     */
    where: SystemLogWhereUniqueInput
  }

  /**
   * SystemLog findFirst
   */
  export type SystemLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemLog
     */
    omit?: SystemLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogInclude<ExtArgs> | null
    /**
     * Filter, which SystemLog to fetch.
     */
    where?: SystemLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemLogs to fetch.
     */
    orderBy?: SystemLogOrderByWithRelationInput | SystemLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemLogs.
     */
    cursor?: SystemLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemLogs.
     */
    distinct?: SystemLogScalarFieldEnum | SystemLogScalarFieldEnum[]
  }

  /**
   * SystemLog findFirstOrThrow
   */
  export type SystemLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemLog
     */
    omit?: SystemLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogInclude<ExtArgs> | null
    /**
     * Filter, which SystemLog to fetch.
     */
    where?: SystemLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemLogs to fetch.
     */
    orderBy?: SystemLogOrderByWithRelationInput | SystemLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemLogs.
     */
    cursor?: SystemLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemLogs.
     */
    distinct?: SystemLogScalarFieldEnum | SystemLogScalarFieldEnum[]
  }

  /**
   * SystemLog findMany
   */
  export type SystemLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemLog
     */
    omit?: SystemLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogInclude<ExtArgs> | null
    /**
     * Filter, which SystemLogs to fetch.
     */
    where?: SystemLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemLogs to fetch.
     */
    orderBy?: SystemLogOrderByWithRelationInput | SystemLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemLogs.
     */
    cursor?: SystemLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemLogs.
     */
    skip?: number
    distinct?: SystemLogScalarFieldEnum | SystemLogScalarFieldEnum[]
  }

  /**
   * SystemLog create
   */
  export type SystemLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemLog
     */
    omit?: SystemLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogInclude<ExtArgs> | null
    /**
     * The data needed to create a SystemLog.
     */
    data: XOR<SystemLogCreateInput, SystemLogUncheckedCreateInput>
  }

  /**
   * SystemLog createMany
   */
  export type SystemLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemLogs.
     */
    data: SystemLogCreateManyInput | SystemLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemLog update
   */
  export type SystemLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemLog
     */
    omit?: SystemLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogInclude<ExtArgs> | null
    /**
     * The data needed to update a SystemLog.
     */
    data: XOR<SystemLogUpdateInput, SystemLogUncheckedUpdateInput>
    /**
     * Choose, which SystemLog to update.
     */
    where: SystemLogWhereUniqueInput
  }

  /**
   * SystemLog updateMany
   */
  export type SystemLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemLogs.
     */
    data: XOR<SystemLogUpdateManyMutationInput, SystemLogUncheckedUpdateManyInput>
    /**
     * Filter which SystemLogs to update
     */
    where?: SystemLogWhereInput
    /**
     * Limit how many SystemLogs to update.
     */
    limit?: number
  }

  /**
   * SystemLog upsert
   */
  export type SystemLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemLog
     */
    omit?: SystemLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogInclude<ExtArgs> | null
    /**
     * The filter to search for the SystemLog to update in case it exists.
     */
    where: SystemLogWhereUniqueInput
    /**
     * In case the SystemLog found by the `where` argument doesn't exist, create a new SystemLog with this data.
     */
    create: XOR<SystemLogCreateInput, SystemLogUncheckedCreateInput>
    /**
     * In case the SystemLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemLogUpdateInput, SystemLogUncheckedUpdateInput>
  }

  /**
   * SystemLog delete
   */
  export type SystemLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemLog
     */
    omit?: SystemLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogInclude<ExtArgs> | null
    /**
     * Filter which SystemLog to delete.
     */
    where: SystemLogWhereUniqueInput
  }

  /**
   * SystemLog deleteMany
   */
  export type SystemLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemLogs to delete
     */
    where?: SystemLogWhereInput
    /**
     * Limit how many SystemLogs to delete.
     */
    limit?: number
  }

  /**
   * SystemLog without action
   */
  export type SystemLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemLog
     */
    omit?: SystemLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogInclude<ExtArgs> | null
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


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    department: 'department',
    role: 'role'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const ExpenseRequestScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    description: 'description',
    amount: 'amount',
    status: 'status',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    approvedById: 'approvedById',
    rejectedReason: 'rejectedReason',
    finalApprovedById: 'finalApprovedById'
  };

  export type ExpenseRequestScalarFieldEnum = (typeof ExpenseRequestScalarFieldEnum)[keyof typeof ExpenseRequestScalarFieldEnum]


  export const SystemLogScalarFieldEnum: {
    id: 'id',
    action: 'action',
    timestamp: 'timestamp',
    requestId: 'requestId'
  };

  export type SystemLogScalarFieldEnum = (typeof SystemLogScalarFieldEnum)[keyof typeof SystemLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const EmployeeOrderByRelevanceFieldEnum: {
    name: 'name',
    department: 'department'
  };

  export type EmployeeOrderByRelevanceFieldEnum = (typeof EmployeeOrderByRelevanceFieldEnum)[keyof typeof EmployeeOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ExpenseRequestOrderByRelevanceFieldEnum: {
    description: 'description',
    imageUrl: 'imageUrl',
    rejectedReason: 'rejectedReason'
  };

  export type ExpenseRequestOrderByRelevanceFieldEnum = (typeof ExpenseRequestOrderByRelevanceFieldEnum)[keyof typeof ExpenseRequestOrderByRelevanceFieldEnum]


  export const SystemLogOrderByRelevanceFieldEnum: {
    action: 'action'
  };

  export type SystemLogOrderByRelevanceFieldEnum = (typeof SystemLogOrderByRelevanceFieldEnum)[keyof typeof SystemLogOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'RequestStatus'
   */
  export type EnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    
  /**
   * Deep Input Types
   */


  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: IntFilter<"Employee"> | number
    name?: StringFilter<"Employee"> | string
    department?: StringFilter<"Employee"> | string
    role?: EnumRoleFilter<"Employee"> | $Enums.Role
    requests?: ExpenseRequestListRelationFilter
    managerApprovals?: ExpenseRequestListRelationFilter
    financeApprovals?: ExpenseRequestListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    department?: SortOrder
    role?: SortOrder
    requests?: ExpenseRequestOrderByRelationAggregateInput
    managerApprovals?: ExpenseRequestOrderByRelationAggregateInput
    financeApprovals?: ExpenseRequestOrderByRelationAggregateInput
    _relevance?: EmployeeOrderByRelevanceInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    name?: StringFilter<"Employee"> | string
    department?: StringFilter<"Employee"> | string
    role?: EnumRoleFilter<"Employee"> | $Enums.Role
    requests?: ExpenseRequestListRelationFilter
    managerApprovals?: ExpenseRequestListRelationFilter
    financeApprovals?: ExpenseRequestListRelationFilter
  }, "id">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    department?: SortOrder
    role?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Employee"> | number
    name?: StringWithAggregatesFilter<"Employee"> | string
    department?: StringWithAggregatesFilter<"Employee"> | string
    role?: EnumRoleWithAggregatesFilter<"Employee"> | $Enums.Role
  }

  export type ExpenseRequestWhereInput = {
    AND?: ExpenseRequestWhereInput | ExpenseRequestWhereInput[]
    OR?: ExpenseRequestWhereInput[]
    NOT?: ExpenseRequestWhereInput | ExpenseRequestWhereInput[]
    id?: IntFilter<"ExpenseRequest"> | number
    employeeId?: IntFilter<"ExpenseRequest"> | number
    description?: StringFilter<"ExpenseRequest"> | string
    amount?: FloatFilter<"ExpenseRequest"> | number
    status?: EnumRequestStatusFilter<"ExpenseRequest"> | $Enums.RequestStatus
    imageUrl?: StringNullableFilter<"ExpenseRequest"> | string | null
    createdAt?: DateTimeFilter<"ExpenseRequest"> | Date | string
    approvedById?: IntNullableFilter<"ExpenseRequest"> | number | null
    rejectedReason?: StringNullableFilter<"ExpenseRequest"> | string | null
    finalApprovedById?: IntNullableFilter<"ExpenseRequest"> | number | null
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    approvedBy?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    finalApprovedBy?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    logs?: SystemLogListRelationFilter
  }

  export type ExpenseRequestOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    approvedById?: SortOrderInput | SortOrder
    rejectedReason?: SortOrderInput | SortOrder
    finalApprovedById?: SortOrderInput | SortOrder
    employee?: EmployeeOrderByWithRelationInput
    approvedBy?: EmployeeOrderByWithRelationInput
    finalApprovedBy?: EmployeeOrderByWithRelationInput
    logs?: SystemLogOrderByRelationAggregateInput
    _relevance?: ExpenseRequestOrderByRelevanceInput
  }

  export type ExpenseRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExpenseRequestWhereInput | ExpenseRequestWhereInput[]
    OR?: ExpenseRequestWhereInput[]
    NOT?: ExpenseRequestWhereInput | ExpenseRequestWhereInput[]
    employeeId?: IntFilter<"ExpenseRequest"> | number
    description?: StringFilter<"ExpenseRequest"> | string
    amount?: FloatFilter<"ExpenseRequest"> | number
    status?: EnumRequestStatusFilter<"ExpenseRequest"> | $Enums.RequestStatus
    imageUrl?: StringNullableFilter<"ExpenseRequest"> | string | null
    createdAt?: DateTimeFilter<"ExpenseRequest"> | Date | string
    approvedById?: IntNullableFilter<"ExpenseRequest"> | number | null
    rejectedReason?: StringNullableFilter<"ExpenseRequest"> | string | null
    finalApprovedById?: IntNullableFilter<"ExpenseRequest"> | number | null
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    approvedBy?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    finalApprovedBy?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    logs?: SystemLogListRelationFilter
  }, "id">

  export type ExpenseRequestOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    approvedById?: SortOrderInput | SortOrder
    rejectedReason?: SortOrderInput | SortOrder
    finalApprovedById?: SortOrderInput | SortOrder
    _count?: ExpenseRequestCountOrderByAggregateInput
    _avg?: ExpenseRequestAvgOrderByAggregateInput
    _max?: ExpenseRequestMaxOrderByAggregateInput
    _min?: ExpenseRequestMinOrderByAggregateInput
    _sum?: ExpenseRequestSumOrderByAggregateInput
  }

  export type ExpenseRequestScalarWhereWithAggregatesInput = {
    AND?: ExpenseRequestScalarWhereWithAggregatesInput | ExpenseRequestScalarWhereWithAggregatesInput[]
    OR?: ExpenseRequestScalarWhereWithAggregatesInput[]
    NOT?: ExpenseRequestScalarWhereWithAggregatesInput | ExpenseRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ExpenseRequest"> | number
    employeeId?: IntWithAggregatesFilter<"ExpenseRequest"> | number
    description?: StringWithAggregatesFilter<"ExpenseRequest"> | string
    amount?: FloatWithAggregatesFilter<"ExpenseRequest"> | number
    status?: EnumRequestStatusWithAggregatesFilter<"ExpenseRequest"> | $Enums.RequestStatus
    imageUrl?: StringNullableWithAggregatesFilter<"ExpenseRequest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ExpenseRequest"> | Date | string
    approvedById?: IntNullableWithAggregatesFilter<"ExpenseRequest"> | number | null
    rejectedReason?: StringNullableWithAggregatesFilter<"ExpenseRequest"> | string | null
    finalApprovedById?: IntNullableWithAggregatesFilter<"ExpenseRequest"> | number | null
  }

  export type SystemLogWhereInput = {
    AND?: SystemLogWhereInput | SystemLogWhereInput[]
    OR?: SystemLogWhereInput[]
    NOT?: SystemLogWhereInput | SystemLogWhereInput[]
    id?: IntFilter<"SystemLog"> | number
    action?: StringFilter<"SystemLog"> | string
    timestamp?: DateTimeFilter<"SystemLog"> | Date | string
    requestId?: IntFilter<"SystemLog"> | number
    request?: XOR<ExpenseRequestScalarRelationFilter, ExpenseRequestWhereInput>
  }

  export type SystemLogOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    timestamp?: SortOrder
    requestId?: SortOrder
    request?: ExpenseRequestOrderByWithRelationInput
    _relevance?: SystemLogOrderByRelevanceInput
  }

  export type SystemLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SystemLogWhereInput | SystemLogWhereInput[]
    OR?: SystemLogWhereInput[]
    NOT?: SystemLogWhereInput | SystemLogWhereInput[]
    action?: StringFilter<"SystemLog"> | string
    timestamp?: DateTimeFilter<"SystemLog"> | Date | string
    requestId?: IntFilter<"SystemLog"> | number
    request?: XOR<ExpenseRequestScalarRelationFilter, ExpenseRequestWhereInput>
  }, "id">

  export type SystemLogOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    timestamp?: SortOrder
    requestId?: SortOrder
    _count?: SystemLogCountOrderByAggregateInput
    _avg?: SystemLogAvgOrderByAggregateInput
    _max?: SystemLogMaxOrderByAggregateInput
    _min?: SystemLogMinOrderByAggregateInput
    _sum?: SystemLogSumOrderByAggregateInput
  }

  export type SystemLogScalarWhereWithAggregatesInput = {
    AND?: SystemLogScalarWhereWithAggregatesInput | SystemLogScalarWhereWithAggregatesInput[]
    OR?: SystemLogScalarWhereWithAggregatesInput[]
    NOT?: SystemLogScalarWhereWithAggregatesInput | SystemLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SystemLog"> | number
    action?: StringWithAggregatesFilter<"SystemLog"> | string
    timestamp?: DateTimeWithAggregatesFilter<"SystemLog"> | Date | string
    requestId?: IntWithAggregatesFilter<"SystemLog"> | number
  }

  export type EmployeeCreateInput = {
    name: string
    department: string
    role?: $Enums.Role
    requests?: ExpenseRequestCreateNestedManyWithoutEmployeeInput
    managerApprovals?: ExpenseRequestCreateNestedManyWithoutApprovedByInput
    financeApprovals?: ExpenseRequestCreateNestedManyWithoutFinalApprovedByInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: number
    name: string
    department: string
    role?: $Enums.Role
    requests?: ExpenseRequestUncheckedCreateNestedManyWithoutEmployeeInput
    managerApprovals?: ExpenseRequestUncheckedCreateNestedManyWithoutApprovedByInput
    financeApprovals?: ExpenseRequestUncheckedCreateNestedManyWithoutFinalApprovedByInput
  }

  export type EmployeeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    requests?: ExpenseRequestUpdateManyWithoutEmployeeNestedInput
    managerApprovals?: ExpenseRequestUpdateManyWithoutApprovedByNestedInput
    financeApprovals?: ExpenseRequestUpdateManyWithoutFinalApprovedByNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    requests?: ExpenseRequestUncheckedUpdateManyWithoutEmployeeNestedInput
    managerApprovals?: ExpenseRequestUncheckedUpdateManyWithoutApprovedByNestedInput
    financeApprovals?: ExpenseRequestUncheckedUpdateManyWithoutFinalApprovedByNestedInput
  }

  export type EmployeeCreateManyInput = {
    id?: number
    name: string
    department: string
    role?: $Enums.Role
  }

  export type EmployeeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type ExpenseRequestCreateInput = {
    description: string
    amount: number
    status?: $Enums.RequestStatus
    imageUrl?: string | null
    createdAt?: Date | string
    rejectedReason?: string | null
    employee: EmployeeCreateNestedOneWithoutRequestsInput
    approvedBy?: EmployeeCreateNestedOneWithoutManagerApprovalsInput
    finalApprovedBy?: EmployeeCreateNestedOneWithoutFinanceApprovalsInput
    logs?: SystemLogCreateNestedManyWithoutRequestInput
  }

  export type ExpenseRequestUncheckedCreateInput = {
    id?: number
    employeeId: number
    description: string
    amount: number
    status?: $Enums.RequestStatus
    imageUrl?: string | null
    createdAt?: Date | string
    approvedById?: number | null
    rejectedReason?: string | null
    finalApprovedById?: number | null
    logs?: SystemLogUncheckedCreateNestedManyWithoutRequestInput
  }

  export type ExpenseRequestUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    employee?: EmployeeUpdateOneRequiredWithoutRequestsNestedInput
    approvedBy?: EmployeeUpdateOneWithoutManagerApprovalsNestedInput
    finalApprovedBy?: EmployeeUpdateOneWithoutFinanceApprovalsNestedInput
    logs?: SystemLogUpdateManyWithoutRequestNestedInput
  }

  export type ExpenseRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedById?: NullableIntFieldUpdateOperationsInput | number | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    finalApprovedById?: NullableIntFieldUpdateOperationsInput | number | null
    logs?: SystemLogUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type ExpenseRequestCreateManyInput = {
    id?: number
    employeeId: number
    description: string
    amount: number
    status?: $Enums.RequestStatus
    imageUrl?: string | null
    createdAt?: Date | string
    approvedById?: number | null
    rejectedReason?: string | null
    finalApprovedById?: number | null
  }

  export type ExpenseRequestUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExpenseRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedById?: NullableIntFieldUpdateOperationsInput | number | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    finalApprovedById?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SystemLogCreateInput = {
    action: string
    timestamp?: Date | string
    request: ExpenseRequestCreateNestedOneWithoutLogsInput
  }

  export type SystemLogUncheckedCreateInput = {
    id?: number
    action: string
    timestamp?: Date | string
    requestId: number
  }

  export type SystemLogUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: ExpenseRequestUpdateOneRequiredWithoutLogsNestedInput
  }

  export type SystemLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    requestId?: IntFieldUpdateOperationsInput | number
  }

  export type SystemLogCreateManyInput = {
    id?: number
    action: string
    timestamp?: Date | string
    requestId: number
  }

  export type SystemLogUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    requestId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type ExpenseRequestListRelationFilter = {
    every?: ExpenseRequestWhereInput
    some?: ExpenseRequestWhereInput
    none?: ExpenseRequestWhereInput
  }

  export type ExpenseRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeOrderByRelevanceInput = {
    fields: EmployeeOrderByRelevanceFieldEnum | EmployeeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    department?: SortOrder
    role?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    department?: SortOrder
    role?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    department?: SortOrder
    role?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[]
    notIn?: $Enums.RequestStatus[]
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EmployeeScalarRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type EmployeeNullableScalarRelationFilter = {
    is?: EmployeeWhereInput | null
    isNot?: EmployeeWhereInput | null
  }

  export type SystemLogListRelationFilter = {
    every?: SystemLogWhereInput
    some?: SystemLogWhereInput
    none?: SystemLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SystemLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpenseRequestOrderByRelevanceInput = {
    fields: ExpenseRequestOrderByRelevanceFieldEnum | ExpenseRequestOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ExpenseRequestCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    approvedById?: SortOrder
    rejectedReason?: SortOrder
    finalApprovedById?: SortOrder
  }

  export type ExpenseRequestAvgOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    amount?: SortOrder
    approvedById?: SortOrder
    finalApprovedById?: SortOrder
  }

  export type ExpenseRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    approvedById?: SortOrder
    rejectedReason?: SortOrder
    finalApprovedById?: SortOrder
  }

  export type ExpenseRequestMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    approvedById?: SortOrder
    rejectedReason?: SortOrder
    finalApprovedById?: SortOrder
  }

  export type ExpenseRequestSumOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    amount?: SortOrder
    approvedById?: SortOrder
    finalApprovedById?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type EnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[]
    notIn?: $Enums.RequestStatus[]
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type ExpenseRequestScalarRelationFilter = {
    is?: ExpenseRequestWhereInput
    isNot?: ExpenseRequestWhereInput
  }

  export type SystemLogOrderByRelevanceInput = {
    fields: SystemLogOrderByRelevanceFieldEnum | SystemLogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SystemLogCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    timestamp?: SortOrder
    requestId?: SortOrder
  }

  export type SystemLogAvgOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
  }

  export type SystemLogMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    timestamp?: SortOrder
    requestId?: SortOrder
  }

  export type SystemLogMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    timestamp?: SortOrder
    requestId?: SortOrder
  }

  export type SystemLogSumOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
  }

  export type ExpenseRequestCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<ExpenseRequestCreateWithoutEmployeeInput, ExpenseRequestUncheckedCreateWithoutEmployeeInput> | ExpenseRequestCreateWithoutEmployeeInput[] | ExpenseRequestUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ExpenseRequestCreateOrConnectWithoutEmployeeInput | ExpenseRequestCreateOrConnectWithoutEmployeeInput[]
    createMany?: ExpenseRequestCreateManyEmployeeInputEnvelope
    connect?: ExpenseRequestWhereUniqueInput | ExpenseRequestWhereUniqueInput[]
  }

  export type ExpenseRequestCreateNestedManyWithoutApprovedByInput = {
    create?: XOR<ExpenseRequestCreateWithoutApprovedByInput, ExpenseRequestUncheckedCreateWithoutApprovedByInput> | ExpenseRequestCreateWithoutApprovedByInput[] | ExpenseRequestUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: ExpenseRequestCreateOrConnectWithoutApprovedByInput | ExpenseRequestCreateOrConnectWithoutApprovedByInput[]
    createMany?: ExpenseRequestCreateManyApprovedByInputEnvelope
    connect?: ExpenseRequestWhereUniqueInput | ExpenseRequestWhereUniqueInput[]
  }

  export type ExpenseRequestCreateNestedManyWithoutFinalApprovedByInput = {
    create?: XOR<ExpenseRequestCreateWithoutFinalApprovedByInput, ExpenseRequestUncheckedCreateWithoutFinalApprovedByInput> | ExpenseRequestCreateWithoutFinalApprovedByInput[] | ExpenseRequestUncheckedCreateWithoutFinalApprovedByInput[]
    connectOrCreate?: ExpenseRequestCreateOrConnectWithoutFinalApprovedByInput | ExpenseRequestCreateOrConnectWithoutFinalApprovedByInput[]
    createMany?: ExpenseRequestCreateManyFinalApprovedByInputEnvelope
    connect?: ExpenseRequestWhereUniqueInput | ExpenseRequestWhereUniqueInput[]
  }

  export type ExpenseRequestUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<ExpenseRequestCreateWithoutEmployeeInput, ExpenseRequestUncheckedCreateWithoutEmployeeInput> | ExpenseRequestCreateWithoutEmployeeInput[] | ExpenseRequestUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ExpenseRequestCreateOrConnectWithoutEmployeeInput | ExpenseRequestCreateOrConnectWithoutEmployeeInput[]
    createMany?: ExpenseRequestCreateManyEmployeeInputEnvelope
    connect?: ExpenseRequestWhereUniqueInput | ExpenseRequestWhereUniqueInput[]
  }

  export type ExpenseRequestUncheckedCreateNestedManyWithoutApprovedByInput = {
    create?: XOR<ExpenseRequestCreateWithoutApprovedByInput, ExpenseRequestUncheckedCreateWithoutApprovedByInput> | ExpenseRequestCreateWithoutApprovedByInput[] | ExpenseRequestUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: ExpenseRequestCreateOrConnectWithoutApprovedByInput | ExpenseRequestCreateOrConnectWithoutApprovedByInput[]
    createMany?: ExpenseRequestCreateManyApprovedByInputEnvelope
    connect?: ExpenseRequestWhereUniqueInput | ExpenseRequestWhereUniqueInput[]
  }

  export type ExpenseRequestUncheckedCreateNestedManyWithoutFinalApprovedByInput = {
    create?: XOR<ExpenseRequestCreateWithoutFinalApprovedByInput, ExpenseRequestUncheckedCreateWithoutFinalApprovedByInput> | ExpenseRequestCreateWithoutFinalApprovedByInput[] | ExpenseRequestUncheckedCreateWithoutFinalApprovedByInput[]
    connectOrCreate?: ExpenseRequestCreateOrConnectWithoutFinalApprovedByInput | ExpenseRequestCreateOrConnectWithoutFinalApprovedByInput[]
    createMany?: ExpenseRequestCreateManyFinalApprovedByInputEnvelope
    connect?: ExpenseRequestWhereUniqueInput | ExpenseRequestWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type ExpenseRequestUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<ExpenseRequestCreateWithoutEmployeeInput, ExpenseRequestUncheckedCreateWithoutEmployeeInput> | ExpenseRequestCreateWithoutEmployeeInput[] | ExpenseRequestUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ExpenseRequestCreateOrConnectWithoutEmployeeInput | ExpenseRequestCreateOrConnectWithoutEmployeeInput[]
    upsert?: ExpenseRequestUpsertWithWhereUniqueWithoutEmployeeInput | ExpenseRequestUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: ExpenseRequestCreateManyEmployeeInputEnvelope
    set?: ExpenseRequestWhereUniqueInput | ExpenseRequestWhereUniqueInput[]
    disconnect?: ExpenseRequestWhereUniqueInput | ExpenseRequestWhereUniqueInput[]
    delete?: ExpenseRequestWhereUniqueInput | ExpenseRequestWhereUniqueInput[]
    connect?: ExpenseRequestWhereUniqueInput | ExpenseRequestWhereUniqueInput[]
    update?: ExpenseRequestUpdateWithWhereUniqueWithoutEmployeeInput | ExpenseRequestUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: ExpenseRequestUpdateManyWithWhereWithoutEmployeeInput | ExpenseRequestUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: ExpenseRequestScalarWhereInput | ExpenseRequestScalarWhereInput[]
  }

  export type ExpenseRequestUpdateManyWithoutApprovedByNestedInput = {
    create?: XOR<ExpenseRequestCreateWithoutApprovedByInput, ExpenseRequestUncheckedCreateWithoutApprovedByInput> | ExpenseRequestCreateWithoutApprovedByInput[] | ExpenseRequestUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: ExpenseRequestCreateOrConnectWithoutApprovedByInput | ExpenseRequestCreateOrConnectWithoutApprovedByInput[]
    upsert?: ExpenseRequestUpsertWithWhereUniqueWithoutApprovedByInput | ExpenseRequestUpsertWithWhereUniqueWithoutApprovedByInput[]
    createMany?: ExpenseRequestCreateManyApprovedByInputEnvelope
    set?: ExpenseRequestWhereUniqueInput | ExpenseRequestWhereUniqueInput[]
    disconnect?: ExpenseRequestWhereUniqueInput | ExpenseRequestWhereUniqueInput[]
    delete?: ExpenseRequestWhereUniqueInput | ExpenseRequestWhereUniqueInput[]
    connect?: ExpenseRequestWhereUniqueInput | ExpenseRequestWhereUniqueInput[]
    update?: ExpenseRequestUpdateWithWhereUniqueWithoutApprovedByInput | ExpenseRequestUpdateWithWhereUniqueWithoutApprovedByInput[]
    updateMany?: ExpenseRequestUpdateManyWithWhereWithoutApprovedByInput | ExpenseRequestUpdateManyWithWhereWithoutApprovedByInput[]
    deleteMany?: ExpenseRequestScalarWhereInput | ExpenseRequestScalarWhereInput[]
  }

  export type ExpenseRequestUpdateManyWithoutFinalApprovedByNestedInput = {
    create?: XOR<ExpenseRequestCreateWithoutFinalApprovedByInput, ExpenseRequestUncheckedCreateWithoutFinalApprovedByInput> | ExpenseRequestCreateWithoutFinalApprovedByInput[] | ExpenseRequestUncheckedCreateWithoutFinalApprovedByInput[]
    connectOrCreate?: ExpenseRequestCreateOrConnectWithoutFinalApprovedByInput | ExpenseRequestCreateOrConnectWithoutFinalApprovedByInput[]
    upsert?: ExpenseRequestUpsertWithWhereUniqueWithoutFinalApprovedByInput | ExpenseRequestUpsertWithWhereUniqueWithoutFinalApprovedByInput[]
    createMany?: ExpenseRequestCreateManyFinalApprovedByInputEnvelope
    set?: ExpenseRequestWhereUniqueInput | ExpenseRequestWhereUniqueInput[]
    disconnect?: ExpenseRequestWhereUniqueInput | ExpenseRequestWhereUniqueInput[]
    delete?: ExpenseRequestWhereUniqueInput | ExpenseRequestWhereUniqueInput[]
    connect?: ExpenseRequestWhereUniqueInput | ExpenseRequestWhereUniqueInput[]
    update?: ExpenseRequestUpdateWithWhereUniqueWithoutFinalApprovedByInput | ExpenseRequestUpdateWithWhereUniqueWithoutFinalApprovedByInput[]
    updateMany?: ExpenseRequestUpdateManyWithWhereWithoutFinalApprovedByInput | ExpenseRequestUpdateManyWithWhereWithoutFinalApprovedByInput[]
    deleteMany?: ExpenseRequestScalarWhereInput | ExpenseRequestScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ExpenseRequestUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<ExpenseRequestCreateWithoutEmployeeInput, ExpenseRequestUncheckedCreateWithoutEmployeeInput> | ExpenseRequestCreateWithoutEmployeeInput[] | ExpenseRequestUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ExpenseRequestCreateOrConnectWithoutEmployeeInput | ExpenseRequestCreateOrConnectWithoutEmployeeInput[]
    upsert?: ExpenseRequestUpsertWithWhereUniqueWithoutEmployeeInput | ExpenseRequestUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: ExpenseRequestCreateManyEmployeeInputEnvelope
    set?: ExpenseRequestWhereUniqueInput | ExpenseRequestWhereUniqueInput[]
    disconnect?: ExpenseRequestWhereUniqueInput | ExpenseRequestWhereUniqueInput[]
    delete?: ExpenseRequestWhereUniqueInput | ExpenseRequestWhereUniqueInput[]
    connect?: ExpenseRequestWhereUniqueInput | ExpenseRequestWhereUniqueInput[]
    update?: ExpenseRequestUpdateWithWhereUniqueWithoutEmployeeInput | ExpenseRequestUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: ExpenseRequestUpdateManyWithWhereWithoutEmployeeInput | ExpenseRequestUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: ExpenseRequestScalarWhereInput | ExpenseRequestScalarWhereInput[]
  }

  export type ExpenseRequestUncheckedUpdateManyWithoutApprovedByNestedInput = {
    create?: XOR<ExpenseRequestCreateWithoutApprovedByInput, ExpenseRequestUncheckedCreateWithoutApprovedByInput> | ExpenseRequestCreateWithoutApprovedByInput[] | ExpenseRequestUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: ExpenseRequestCreateOrConnectWithoutApprovedByInput | ExpenseRequestCreateOrConnectWithoutApprovedByInput[]
    upsert?: ExpenseRequestUpsertWithWhereUniqueWithoutApprovedByInput | ExpenseRequestUpsertWithWhereUniqueWithoutApprovedByInput[]
    createMany?: ExpenseRequestCreateManyApprovedByInputEnvelope
    set?: ExpenseRequestWhereUniqueInput | ExpenseRequestWhereUniqueInput[]
    disconnect?: ExpenseRequestWhereUniqueInput | ExpenseRequestWhereUniqueInput[]
    delete?: ExpenseRequestWhereUniqueInput | ExpenseRequestWhereUniqueInput[]
    connect?: ExpenseRequestWhereUniqueInput | ExpenseRequestWhereUniqueInput[]
    update?: ExpenseRequestUpdateWithWhereUniqueWithoutApprovedByInput | ExpenseRequestUpdateWithWhereUniqueWithoutApprovedByInput[]
    updateMany?: ExpenseRequestUpdateManyWithWhereWithoutApprovedByInput | ExpenseRequestUpdateManyWithWhereWithoutApprovedByInput[]
    deleteMany?: ExpenseRequestScalarWhereInput | ExpenseRequestScalarWhereInput[]
  }

  export type ExpenseRequestUncheckedUpdateManyWithoutFinalApprovedByNestedInput = {
    create?: XOR<ExpenseRequestCreateWithoutFinalApprovedByInput, ExpenseRequestUncheckedCreateWithoutFinalApprovedByInput> | ExpenseRequestCreateWithoutFinalApprovedByInput[] | ExpenseRequestUncheckedCreateWithoutFinalApprovedByInput[]
    connectOrCreate?: ExpenseRequestCreateOrConnectWithoutFinalApprovedByInput | ExpenseRequestCreateOrConnectWithoutFinalApprovedByInput[]
    upsert?: ExpenseRequestUpsertWithWhereUniqueWithoutFinalApprovedByInput | ExpenseRequestUpsertWithWhereUniqueWithoutFinalApprovedByInput[]
    createMany?: ExpenseRequestCreateManyFinalApprovedByInputEnvelope
    set?: ExpenseRequestWhereUniqueInput | ExpenseRequestWhereUniqueInput[]
    disconnect?: ExpenseRequestWhereUniqueInput | ExpenseRequestWhereUniqueInput[]
    delete?: ExpenseRequestWhereUniqueInput | ExpenseRequestWhereUniqueInput[]
    connect?: ExpenseRequestWhereUniqueInput | ExpenseRequestWhereUniqueInput[]
    update?: ExpenseRequestUpdateWithWhereUniqueWithoutFinalApprovedByInput | ExpenseRequestUpdateWithWhereUniqueWithoutFinalApprovedByInput[]
    updateMany?: ExpenseRequestUpdateManyWithWhereWithoutFinalApprovedByInput | ExpenseRequestUpdateManyWithWhereWithoutFinalApprovedByInput[]
    deleteMany?: ExpenseRequestScalarWhereInput | ExpenseRequestScalarWhereInput[]
  }

  export type EmployeeCreateNestedOneWithoutRequestsInput = {
    create?: XOR<EmployeeCreateWithoutRequestsInput, EmployeeUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutRequestsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutManagerApprovalsInput = {
    create?: XOR<EmployeeCreateWithoutManagerApprovalsInput, EmployeeUncheckedCreateWithoutManagerApprovalsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutManagerApprovalsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutFinanceApprovalsInput = {
    create?: XOR<EmployeeCreateWithoutFinanceApprovalsInput, EmployeeUncheckedCreateWithoutFinanceApprovalsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutFinanceApprovalsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type SystemLogCreateNestedManyWithoutRequestInput = {
    create?: XOR<SystemLogCreateWithoutRequestInput, SystemLogUncheckedCreateWithoutRequestInput> | SystemLogCreateWithoutRequestInput[] | SystemLogUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: SystemLogCreateOrConnectWithoutRequestInput | SystemLogCreateOrConnectWithoutRequestInput[]
    createMany?: SystemLogCreateManyRequestInputEnvelope
    connect?: SystemLogWhereUniqueInput | SystemLogWhereUniqueInput[]
  }

  export type SystemLogUncheckedCreateNestedManyWithoutRequestInput = {
    create?: XOR<SystemLogCreateWithoutRequestInput, SystemLogUncheckedCreateWithoutRequestInput> | SystemLogCreateWithoutRequestInput[] | SystemLogUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: SystemLogCreateOrConnectWithoutRequestInput | SystemLogCreateOrConnectWithoutRequestInput[]
    createMany?: SystemLogCreateManyRequestInputEnvelope
    connect?: SystemLogWhereUniqueInput | SystemLogWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequestStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EmployeeUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<EmployeeCreateWithoutRequestsInput, EmployeeUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutRequestsInput
    upsert?: EmployeeUpsertWithoutRequestsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutRequestsInput, EmployeeUpdateWithoutRequestsInput>, EmployeeUncheckedUpdateWithoutRequestsInput>
  }

  export type EmployeeUpdateOneWithoutManagerApprovalsNestedInput = {
    create?: XOR<EmployeeCreateWithoutManagerApprovalsInput, EmployeeUncheckedCreateWithoutManagerApprovalsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutManagerApprovalsInput
    upsert?: EmployeeUpsertWithoutManagerApprovalsInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutManagerApprovalsInput, EmployeeUpdateWithoutManagerApprovalsInput>, EmployeeUncheckedUpdateWithoutManagerApprovalsInput>
  }

  export type EmployeeUpdateOneWithoutFinanceApprovalsNestedInput = {
    create?: XOR<EmployeeCreateWithoutFinanceApprovalsInput, EmployeeUncheckedCreateWithoutFinanceApprovalsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutFinanceApprovalsInput
    upsert?: EmployeeUpsertWithoutFinanceApprovalsInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutFinanceApprovalsInput, EmployeeUpdateWithoutFinanceApprovalsInput>, EmployeeUncheckedUpdateWithoutFinanceApprovalsInput>
  }

  export type SystemLogUpdateManyWithoutRequestNestedInput = {
    create?: XOR<SystemLogCreateWithoutRequestInput, SystemLogUncheckedCreateWithoutRequestInput> | SystemLogCreateWithoutRequestInput[] | SystemLogUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: SystemLogCreateOrConnectWithoutRequestInput | SystemLogCreateOrConnectWithoutRequestInput[]
    upsert?: SystemLogUpsertWithWhereUniqueWithoutRequestInput | SystemLogUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: SystemLogCreateManyRequestInputEnvelope
    set?: SystemLogWhereUniqueInput | SystemLogWhereUniqueInput[]
    disconnect?: SystemLogWhereUniqueInput | SystemLogWhereUniqueInput[]
    delete?: SystemLogWhereUniqueInput | SystemLogWhereUniqueInput[]
    connect?: SystemLogWhereUniqueInput | SystemLogWhereUniqueInput[]
    update?: SystemLogUpdateWithWhereUniqueWithoutRequestInput | SystemLogUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: SystemLogUpdateManyWithWhereWithoutRequestInput | SystemLogUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: SystemLogScalarWhereInput | SystemLogScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SystemLogUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: XOR<SystemLogCreateWithoutRequestInput, SystemLogUncheckedCreateWithoutRequestInput> | SystemLogCreateWithoutRequestInput[] | SystemLogUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: SystemLogCreateOrConnectWithoutRequestInput | SystemLogCreateOrConnectWithoutRequestInput[]
    upsert?: SystemLogUpsertWithWhereUniqueWithoutRequestInput | SystemLogUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: SystemLogCreateManyRequestInputEnvelope
    set?: SystemLogWhereUniqueInput | SystemLogWhereUniqueInput[]
    disconnect?: SystemLogWhereUniqueInput | SystemLogWhereUniqueInput[]
    delete?: SystemLogWhereUniqueInput | SystemLogWhereUniqueInput[]
    connect?: SystemLogWhereUniqueInput | SystemLogWhereUniqueInput[]
    update?: SystemLogUpdateWithWhereUniqueWithoutRequestInput | SystemLogUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: SystemLogUpdateManyWithWhereWithoutRequestInput | SystemLogUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: SystemLogScalarWhereInput | SystemLogScalarWhereInput[]
  }

  export type ExpenseRequestCreateNestedOneWithoutLogsInput = {
    create?: XOR<ExpenseRequestCreateWithoutLogsInput, ExpenseRequestUncheckedCreateWithoutLogsInput>
    connectOrCreate?: ExpenseRequestCreateOrConnectWithoutLogsInput
    connect?: ExpenseRequestWhereUniqueInput
  }

  export type ExpenseRequestUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<ExpenseRequestCreateWithoutLogsInput, ExpenseRequestUncheckedCreateWithoutLogsInput>
    connectOrCreate?: ExpenseRequestCreateOrConnectWithoutLogsInput
    upsert?: ExpenseRequestUpsertWithoutLogsInput
    connect?: ExpenseRequestWhereUniqueInput
    update?: XOR<XOR<ExpenseRequestUpdateToOneWithWhereWithoutLogsInput, ExpenseRequestUpdateWithoutLogsInput>, ExpenseRequestUncheckedUpdateWithoutLogsInput>
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[]
    notIn?: $Enums.RequestStatus[]
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[]
    notIn?: $Enums.RequestStatus[]
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ExpenseRequestCreateWithoutEmployeeInput = {
    description: string
    amount: number
    status?: $Enums.RequestStatus
    imageUrl?: string | null
    createdAt?: Date | string
    rejectedReason?: string | null
    approvedBy?: EmployeeCreateNestedOneWithoutManagerApprovalsInput
    finalApprovedBy?: EmployeeCreateNestedOneWithoutFinanceApprovalsInput
    logs?: SystemLogCreateNestedManyWithoutRequestInput
  }

  export type ExpenseRequestUncheckedCreateWithoutEmployeeInput = {
    id?: number
    description: string
    amount: number
    status?: $Enums.RequestStatus
    imageUrl?: string | null
    createdAt?: Date | string
    approvedById?: number | null
    rejectedReason?: string | null
    finalApprovedById?: number | null
    logs?: SystemLogUncheckedCreateNestedManyWithoutRequestInput
  }

  export type ExpenseRequestCreateOrConnectWithoutEmployeeInput = {
    where: ExpenseRequestWhereUniqueInput
    create: XOR<ExpenseRequestCreateWithoutEmployeeInput, ExpenseRequestUncheckedCreateWithoutEmployeeInput>
  }

  export type ExpenseRequestCreateManyEmployeeInputEnvelope = {
    data: ExpenseRequestCreateManyEmployeeInput | ExpenseRequestCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseRequestCreateWithoutApprovedByInput = {
    description: string
    amount: number
    status?: $Enums.RequestStatus
    imageUrl?: string | null
    createdAt?: Date | string
    rejectedReason?: string | null
    employee: EmployeeCreateNestedOneWithoutRequestsInput
    finalApprovedBy?: EmployeeCreateNestedOneWithoutFinanceApprovalsInput
    logs?: SystemLogCreateNestedManyWithoutRequestInput
  }

  export type ExpenseRequestUncheckedCreateWithoutApprovedByInput = {
    id?: number
    employeeId: number
    description: string
    amount: number
    status?: $Enums.RequestStatus
    imageUrl?: string | null
    createdAt?: Date | string
    rejectedReason?: string | null
    finalApprovedById?: number | null
    logs?: SystemLogUncheckedCreateNestedManyWithoutRequestInput
  }

  export type ExpenseRequestCreateOrConnectWithoutApprovedByInput = {
    where: ExpenseRequestWhereUniqueInput
    create: XOR<ExpenseRequestCreateWithoutApprovedByInput, ExpenseRequestUncheckedCreateWithoutApprovedByInput>
  }

  export type ExpenseRequestCreateManyApprovedByInputEnvelope = {
    data: ExpenseRequestCreateManyApprovedByInput | ExpenseRequestCreateManyApprovedByInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseRequestCreateWithoutFinalApprovedByInput = {
    description: string
    amount: number
    status?: $Enums.RequestStatus
    imageUrl?: string | null
    createdAt?: Date | string
    rejectedReason?: string | null
    employee: EmployeeCreateNestedOneWithoutRequestsInput
    approvedBy?: EmployeeCreateNestedOneWithoutManagerApprovalsInput
    logs?: SystemLogCreateNestedManyWithoutRequestInput
  }

  export type ExpenseRequestUncheckedCreateWithoutFinalApprovedByInput = {
    id?: number
    employeeId: number
    description: string
    amount: number
    status?: $Enums.RequestStatus
    imageUrl?: string | null
    createdAt?: Date | string
    approvedById?: number | null
    rejectedReason?: string | null
    logs?: SystemLogUncheckedCreateNestedManyWithoutRequestInput
  }

  export type ExpenseRequestCreateOrConnectWithoutFinalApprovedByInput = {
    where: ExpenseRequestWhereUniqueInput
    create: XOR<ExpenseRequestCreateWithoutFinalApprovedByInput, ExpenseRequestUncheckedCreateWithoutFinalApprovedByInput>
  }

  export type ExpenseRequestCreateManyFinalApprovedByInputEnvelope = {
    data: ExpenseRequestCreateManyFinalApprovedByInput | ExpenseRequestCreateManyFinalApprovedByInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseRequestUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: ExpenseRequestWhereUniqueInput
    update: XOR<ExpenseRequestUpdateWithoutEmployeeInput, ExpenseRequestUncheckedUpdateWithoutEmployeeInput>
    create: XOR<ExpenseRequestCreateWithoutEmployeeInput, ExpenseRequestUncheckedCreateWithoutEmployeeInput>
  }

  export type ExpenseRequestUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: ExpenseRequestWhereUniqueInput
    data: XOR<ExpenseRequestUpdateWithoutEmployeeInput, ExpenseRequestUncheckedUpdateWithoutEmployeeInput>
  }

  export type ExpenseRequestUpdateManyWithWhereWithoutEmployeeInput = {
    where: ExpenseRequestScalarWhereInput
    data: XOR<ExpenseRequestUpdateManyMutationInput, ExpenseRequestUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type ExpenseRequestScalarWhereInput = {
    AND?: ExpenseRequestScalarWhereInput | ExpenseRequestScalarWhereInput[]
    OR?: ExpenseRequestScalarWhereInput[]
    NOT?: ExpenseRequestScalarWhereInput | ExpenseRequestScalarWhereInput[]
    id?: IntFilter<"ExpenseRequest"> | number
    employeeId?: IntFilter<"ExpenseRequest"> | number
    description?: StringFilter<"ExpenseRequest"> | string
    amount?: FloatFilter<"ExpenseRequest"> | number
    status?: EnumRequestStatusFilter<"ExpenseRequest"> | $Enums.RequestStatus
    imageUrl?: StringNullableFilter<"ExpenseRequest"> | string | null
    createdAt?: DateTimeFilter<"ExpenseRequest"> | Date | string
    approvedById?: IntNullableFilter<"ExpenseRequest"> | number | null
    rejectedReason?: StringNullableFilter<"ExpenseRequest"> | string | null
    finalApprovedById?: IntNullableFilter<"ExpenseRequest"> | number | null
  }

  export type ExpenseRequestUpsertWithWhereUniqueWithoutApprovedByInput = {
    where: ExpenseRequestWhereUniqueInput
    update: XOR<ExpenseRequestUpdateWithoutApprovedByInput, ExpenseRequestUncheckedUpdateWithoutApprovedByInput>
    create: XOR<ExpenseRequestCreateWithoutApprovedByInput, ExpenseRequestUncheckedCreateWithoutApprovedByInput>
  }

  export type ExpenseRequestUpdateWithWhereUniqueWithoutApprovedByInput = {
    where: ExpenseRequestWhereUniqueInput
    data: XOR<ExpenseRequestUpdateWithoutApprovedByInput, ExpenseRequestUncheckedUpdateWithoutApprovedByInput>
  }

  export type ExpenseRequestUpdateManyWithWhereWithoutApprovedByInput = {
    where: ExpenseRequestScalarWhereInput
    data: XOR<ExpenseRequestUpdateManyMutationInput, ExpenseRequestUncheckedUpdateManyWithoutApprovedByInput>
  }

  export type ExpenseRequestUpsertWithWhereUniqueWithoutFinalApprovedByInput = {
    where: ExpenseRequestWhereUniqueInput
    update: XOR<ExpenseRequestUpdateWithoutFinalApprovedByInput, ExpenseRequestUncheckedUpdateWithoutFinalApprovedByInput>
    create: XOR<ExpenseRequestCreateWithoutFinalApprovedByInput, ExpenseRequestUncheckedCreateWithoutFinalApprovedByInput>
  }

  export type ExpenseRequestUpdateWithWhereUniqueWithoutFinalApprovedByInput = {
    where: ExpenseRequestWhereUniqueInput
    data: XOR<ExpenseRequestUpdateWithoutFinalApprovedByInput, ExpenseRequestUncheckedUpdateWithoutFinalApprovedByInput>
  }

  export type ExpenseRequestUpdateManyWithWhereWithoutFinalApprovedByInput = {
    where: ExpenseRequestScalarWhereInput
    data: XOR<ExpenseRequestUpdateManyMutationInput, ExpenseRequestUncheckedUpdateManyWithoutFinalApprovedByInput>
  }

  export type EmployeeCreateWithoutRequestsInput = {
    name: string
    department: string
    role?: $Enums.Role
    managerApprovals?: ExpenseRequestCreateNestedManyWithoutApprovedByInput
    financeApprovals?: ExpenseRequestCreateNestedManyWithoutFinalApprovedByInput
  }

  export type EmployeeUncheckedCreateWithoutRequestsInput = {
    id?: number
    name: string
    department: string
    role?: $Enums.Role
    managerApprovals?: ExpenseRequestUncheckedCreateNestedManyWithoutApprovedByInput
    financeApprovals?: ExpenseRequestUncheckedCreateNestedManyWithoutFinalApprovedByInput
  }

  export type EmployeeCreateOrConnectWithoutRequestsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutRequestsInput, EmployeeUncheckedCreateWithoutRequestsInput>
  }

  export type EmployeeCreateWithoutManagerApprovalsInput = {
    name: string
    department: string
    role?: $Enums.Role
    requests?: ExpenseRequestCreateNestedManyWithoutEmployeeInput
    financeApprovals?: ExpenseRequestCreateNestedManyWithoutFinalApprovedByInput
  }

  export type EmployeeUncheckedCreateWithoutManagerApprovalsInput = {
    id?: number
    name: string
    department: string
    role?: $Enums.Role
    requests?: ExpenseRequestUncheckedCreateNestedManyWithoutEmployeeInput
    financeApprovals?: ExpenseRequestUncheckedCreateNestedManyWithoutFinalApprovedByInput
  }

  export type EmployeeCreateOrConnectWithoutManagerApprovalsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutManagerApprovalsInput, EmployeeUncheckedCreateWithoutManagerApprovalsInput>
  }

  export type EmployeeCreateWithoutFinanceApprovalsInput = {
    name: string
    department: string
    role?: $Enums.Role
    requests?: ExpenseRequestCreateNestedManyWithoutEmployeeInput
    managerApprovals?: ExpenseRequestCreateNestedManyWithoutApprovedByInput
  }

  export type EmployeeUncheckedCreateWithoutFinanceApprovalsInput = {
    id?: number
    name: string
    department: string
    role?: $Enums.Role
    requests?: ExpenseRequestUncheckedCreateNestedManyWithoutEmployeeInput
    managerApprovals?: ExpenseRequestUncheckedCreateNestedManyWithoutApprovedByInput
  }

  export type EmployeeCreateOrConnectWithoutFinanceApprovalsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutFinanceApprovalsInput, EmployeeUncheckedCreateWithoutFinanceApprovalsInput>
  }

  export type SystemLogCreateWithoutRequestInput = {
    action: string
    timestamp?: Date | string
  }

  export type SystemLogUncheckedCreateWithoutRequestInput = {
    id?: number
    action: string
    timestamp?: Date | string
  }

  export type SystemLogCreateOrConnectWithoutRequestInput = {
    where: SystemLogWhereUniqueInput
    create: XOR<SystemLogCreateWithoutRequestInput, SystemLogUncheckedCreateWithoutRequestInput>
  }

  export type SystemLogCreateManyRequestInputEnvelope = {
    data: SystemLogCreateManyRequestInput | SystemLogCreateManyRequestInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeUpsertWithoutRequestsInput = {
    update: XOR<EmployeeUpdateWithoutRequestsInput, EmployeeUncheckedUpdateWithoutRequestsInput>
    create: XOR<EmployeeCreateWithoutRequestsInput, EmployeeUncheckedCreateWithoutRequestsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutRequestsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutRequestsInput, EmployeeUncheckedUpdateWithoutRequestsInput>
  }

  export type EmployeeUpdateWithoutRequestsInput = {
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    managerApprovals?: ExpenseRequestUpdateManyWithoutApprovedByNestedInput
    financeApprovals?: ExpenseRequestUpdateManyWithoutFinalApprovedByNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    managerApprovals?: ExpenseRequestUncheckedUpdateManyWithoutApprovedByNestedInput
    financeApprovals?: ExpenseRequestUncheckedUpdateManyWithoutFinalApprovedByNestedInput
  }

  export type EmployeeUpsertWithoutManagerApprovalsInput = {
    update: XOR<EmployeeUpdateWithoutManagerApprovalsInput, EmployeeUncheckedUpdateWithoutManagerApprovalsInput>
    create: XOR<EmployeeCreateWithoutManagerApprovalsInput, EmployeeUncheckedCreateWithoutManagerApprovalsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutManagerApprovalsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutManagerApprovalsInput, EmployeeUncheckedUpdateWithoutManagerApprovalsInput>
  }

  export type EmployeeUpdateWithoutManagerApprovalsInput = {
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    requests?: ExpenseRequestUpdateManyWithoutEmployeeNestedInput
    financeApprovals?: ExpenseRequestUpdateManyWithoutFinalApprovedByNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutManagerApprovalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    requests?: ExpenseRequestUncheckedUpdateManyWithoutEmployeeNestedInput
    financeApprovals?: ExpenseRequestUncheckedUpdateManyWithoutFinalApprovedByNestedInput
  }

  export type EmployeeUpsertWithoutFinanceApprovalsInput = {
    update: XOR<EmployeeUpdateWithoutFinanceApprovalsInput, EmployeeUncheckedUpdateWithoutFinanceApprovalsInput>
    create: XOR<EmployeeCreateWithoutFinanceApprovalsInput, EmployeeUncheckedCreateWithoutFinanceApprovalsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutFinanceApprovalsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutFinanceApprovalsInput, EmployeeUncheckedUpdateWithoutFinanceApprovalsInput>
  }

  export type EmployeeUpdateWithoutFinanceApprovalsInput = {
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    requests?: ExpenseRequestUpdateManyWithoutEmployeeNestedInput
    managerApprovals?: ExpenseRequestUpdateManyWithoutApprovedByNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutFinanceApprovalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    requests?: ExpenseRequestUncheckedUpdateManyWithoutEmployeeNestedInput
    managerApprovals?: ExpenseRequestUncheckedUpdateManyWithoutApprovedByNestedInput
  }

  export type SystemLogUpsertWithWhereUniqueWithoutRequestInput = {
    where: SystemLogWhereUniqueInput
    update: XOR<SystemLogUpdateWithoutRequestInput, SystemLogUncheckedUpdateWithoutRequestInput>
    create: XOR<SystemLogCreateWithoutRequestInput, SystemLogUncheckedCreateWithoutRequestInput>
  }

  export type SystemLogUpdateWithWhereUniqueWithoutRequestInput = {
    where: SystemLogWhereUniqueInput
    data: XOR<SystemLogUpdateWithoutRequestInput, SystemLogUncheckedUpdateWithoutRequestInput>
  }

  export type SystemLogUpdateManyWithWhereWithoutRequestInput = {
    where: SystemLogScalarWhereInput
    data: XOR<SystemLogUpdateManyMutationInput, SystemLogUncheckedUpdateManyWithoutRequestInput>
  }

  export type SystemLogScalarWhereInput = {
    AND?: SystemLogScalarWhereInput | SystemLogScalarWhereInput[]
    OR?: SystemLogScalarWhereInput[]
    NOT?: SystemLogScalarWhereInput | SystemLogScalarWhereInput[]
    id?: IntFilter<"SystemLog"> | number
    action?: StringFilter<"SystemLog"> | string
    timestamp?: DateTimeFilter<"SystemLog"> | Date | string
    requestId?: IntFilter<"SystemLog"> | number
  }

  export type ExpenseRequestCreateWithoutLogsInput = {
    description: string
    amount: number
    status?: $Enums.RequestStatus
    imageUrl?: string | null
    createdAt?: Date | string
    rejectedReason?: string | null
    employee: EmployeeCreateNestedOneWithoutRequestsInput
    approvedBy?: EmployeeCreateNestedOneWithoutManagerApprovalsInput
    finalApprovedBy?: EmployeeCreateNestedOneWithoutFinanceApprovalsInput
  }

  export type ExpenseRequestUncheckedCreateWithoutLogsInput = {
    id?: number
    employeeId: number
    description: string
    amount: number
    status?: $Enums.RequestStatus
    imageUrl?: string | null
    createdAt?: Date | string
    approvedById?: number | null
    rejectedReason?: string | null
    finalApprovedById?: number | null
  }

  export type ExpenseRequestCreateOrConnectWithoutLogsInput = {
    where: ExpenseRequestWhereUniqueInput
    create: XOR<ExpenseRequestCreateWithoutLogsInput, ExpenseRequestUncheckedCreateWithoutLogsInput>
  }

  export type ExpenseRequestUpsertWithoutLogsInput = {
    update: XOR<ExpenseRequestUpdateWithoutLogsInput, ExpenseRequestUncheckedUpdateWithoutLogsInput>
    create: XOR<ExpenseRequestCreateWithoutLogsInput, ExpenseRequestUncheckedCreateWithoutLogsInput>
    where?: ExpenseRequestWhereInput
  }

  export type ExpenseRequestUpdateToOneWithWhereWithoutLogsInput = {
    where?: ExpenseRequestWhereInput
    data: XOR<ExpenseRequestUpdateWithoutLogsInput, ExpenseRequestUncheckedUpdateWithoutLogsInput>
  }

  export type ExpenseRequestUpdateWithoutLogsInput = {
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    employee?: EmployeeUpdateOneRequiredWithoutRequestsNestedInput
    approvedBy?: EmployeeUpdateOneWithoutManagerApprovalsNestedInput
    finalApprovedBy?: EmployeeUpdateOneWithoutFinanceApprovalsNestedInput
  }

  export type ExpenseRequestUncheckedUpdateWithoutLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedById?: NullableIntFieldUpdateOperationsInput | number | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    finalApprovedById?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ExpenseRequestCreateManyEmployeeInput = {
    id?: number
    description: string
    amount: number
    status?: $Enums.RequestStatus
    imageUrl?: string | null
    createdAt?: Date | string
    approvedById?: number | null
    rejectedReason?: string | null
    finalApprovedById?: number | null
  }

  export type ExpenseRequestCreateManyApprovedByInput = {
    id?: number
    employeeId: number
    description: string
    amount: number
    status?: $Enums.RequestStatus
    imageUrl?: string | null
    createdAt?: Date | string
    rejectedReason?: string | null
    finalApprovedById?: number | null
  }

  export type ExpenseRequestCreateManyFinalApprovedByInput = {
    id?: number
    employeeId: number
    description: string
    amount: number
    status?: $Enums.RequestStatus
    imageUrl?: string | null
    createdAt?: Date | string
    approvedById?: number | null
    rejectedReason?: string | null
  }

  export type ExpenseRequestUpdateWithoutEmployeeInput = {
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    approvedBy?: EmployeeUpdateOneWithoutManagerApprovalsNestedInput
    finalApprovedBy?: EmployeeUpdateOneWithoutFinanceApprovalsNestedInput
    logs?: SystemLogUpdateManyWithoutRequestNestedInput
  }

  export type ExpenseRequestUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedById?: NullableIntFieldUpdateOperationsInput | number | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    finalApprovedById?: NullableIntFieldUpdateOperationsInput | number | null
    logs?: SystemLogUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type ExpenseRequestUncheckedUpdateManyWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedById?: NullableIntFieldUpdateOperationsInput | number | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    finalApprovedById?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ExpenseRequestUpdateWithoutApprovedByInput = {
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    employee?: EmployeeUpdateOneRequiredWithoutRequestsNestedInput
    finalApprovedBy?: EmployeeUpdateOneWithoutFinanceApprovalsNestedInput
    logs?: SystemLogUpdateManyWithoutRequestNestedInput
  }

  export type ExpenseRequestUncheckedUpdateWithoutApprovedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    finalApprovedById?: NullableIntFieldUpdateOperationsInput | number | null
    logs?: SystemLogUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type ExpenseRequestUncheckedUpdateManyWithoutApprovedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    finalApprovedById?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ExpenseRequestUpdateWithoutFinalApprovedByInput = {
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    employee?: EmployeeUpdateOneRequiredWithoutRequestsNestedInput
    approvedBy?: EmployeeUpdateOneWithoutManagerApprovalsNestedInput
    logs?: SystemLogUpdateManyWithoutRequestNestedInput
  }

  export type ExpenseRequestUncheckedUpdateWithoutFinalApprovedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedById?: NullableIntFieldUpdateOperationsInput | number | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: SystemLogUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type ExpenseRequestUncheckedUpdateManyWithoutFinalApprovedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedById?: NullableIntFieldUpdateOperationsInput | number | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SystemLogCreateManyRequestInput = {
    id?: number
    action: string
    timestamp?: Date | string
  }

  export type SystemLogUpdateWithoutRequestInput = {
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemLogUncheckedUpdateWithoutRequestInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemLogUncheckedUpdateManyWithoutRequestInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
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