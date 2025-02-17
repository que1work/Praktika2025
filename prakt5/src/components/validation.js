export const countryCodes = {
    US: { code: "+1", maxLength: 10, regex: /^\+1\d{10}$/, message: "Invalid number" },
    UA: { code: "+380", maxLength: 9, regex: /^\+380\d{9}$/, message: "Invalid number" },
    IN: { code: "+91", maxLength: 10, regex: /^\+91\d{10}$/, message: "Invalid number" },
    DE: { code: "+49", maxLength: 11, regex: /^\+49\d{10,11}$/, message: "Invalid number" },
    FR: { code: "+33", maxLength: 9, regex: /^\+33\d{9}$/, message: "Invalid number" },
  };
  