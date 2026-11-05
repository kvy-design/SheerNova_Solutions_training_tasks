interface UserProfile {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  addrress: string;
  city: string;
  country: string;
  bio: string;
  avatarUrl: string;
  isVerified: boolean;
  createdAt: Date;
}

type UserFormData = Omit<UserProfile, "id" | "createdAt" | "isVerified">;

type UserPreview = Pick<UserProfile, "firstName" | "lastName" | "avatarUrl">;

type UserUpdatePayload = Partial<UserFormData>;
type UserCreatedPlayload = Required<UserFormData>;
type ReadonlyUser = Readonly<UserProfile>;
type UserFieldErrors = Record<keyof UserFormData, string>;

function validateField<K extends keyof UserFormData>(
  field: K,
  value: UserFormData[K],
): string | null {
  switch (field) {
    case "addrress":
      if (typeof value !== "string") return "write address in string";
      break;
    case "avatarUrl":
      if (typeof value !== "string") return "write url in string";
      break;
    case "bio":
      if (typeof value !== "string") return "write bio in string type";
      break;
    case "city":
      if (typeof value !== "string") return "write city name in string";
      break;
    case "country":
      if (typeof value !== "string") return "write country in string";
      break;
    case "email":
      if (typeof value !== "string") return "email must be string";
      if (!value.includes("@")) return "not valid email";
      break;
    case "firstName":
      if (typeof value !== "string") return "write name in type string";
      break;
    case "lastName":
      if (typeof value !== "string") return "write surname in type string";
      break;
    case "phone":
      if (typeof value !== "number") return "write phone no in type number";
      if (1000000000 >= value || value >= 9999999999) return "invalid number";
      break;
    default : return 'invalid field written'
  }

  return null
}
console.log(validateField('phone' , 8979780136))
