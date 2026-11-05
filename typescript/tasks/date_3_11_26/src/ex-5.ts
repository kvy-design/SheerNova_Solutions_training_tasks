type Database = { host: string; port: number; name: string; ssl: boolean };
type Server = { port: number; cors: boolean; rateLimit: number };
type Auth = { jwtSecret: string; tokenExpiry: number; maxAttempts: number };
type Features = {
  darkMode: boolean;
  notifications: boolean;
  analytics: boolean;
};

type AppConfig = {
  database: Database;
  server: Server;
  auth: Auth;
  features: Features;
};

type ConfigSection = keyof AppConfig;

type DatabaseConfig = AppConfig["database"];
function getConfig<S extends keyof AppConfig, K extends keyof AppConfig[S]>(section: S,key: K):
 AppConfig[S][K] {
  return config[section][key];
}

type DeepPartial<T> = {
    [K in keyof T] ?: T[K] extends object ? DeepPartial<T[K]> : T[K]
}
function mergeConfig(base:AppConfig , override : DeepPartial<AppConfig>) : AppConfig{
    return {
        ...base,
        'database':{
            ...base.database,
            ...override.database
        },
        'auth' : {
            ...base.auth,
            ...override.auth
        },
        'features' : {
            ...base.features,
            ...override.features
        },
        'server' : {
            ...base.server,
            ...override.server
        }
    }
}

const overrides: DeepPartial<AppConfig> = {
    database: {
        host: "192.168.1.10"
    },
    features: {
        darkMode: false
    }
};

const config = {
  database: {
    host: "localhost",
    port: 5432,
    name: "my_database",
    ssl: true,
  },

  server: {
    port: 3000,
    cors: true,
    rateLimit: 100,
  },

  auth: {
    jwtSecret: "my_secret_key",
    tokenExpiry: 3600,
    maxAttempts: 5,
  },

  features: {
    darkMode: true,
    notifications: false,
    analytics: true,
  },
} satisfies AppConfig;

const defaultSettings = {
    environment: "development",
    port: 3000,
    debug: true
} as const;

console.log(defaultSettings.environment)
console.log(defaultSettings.port)
console.log(defaultSettings.debug)

const host = getConfig("database", "host");       
const port = getConfig("server", "port");        
const darkMode = getConfig("features", "darkMode");

const merging = mergeConfig(config,overrides)
