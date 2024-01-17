export const generateColorScheme = (darkMode:boolean):string => darkMode ? 'dark' : 'light'

export const generateColorVariables = (darkMode:boolean):string =>
  
  darkMode
    ? `
      --blue-11: 82 169 255;
      --purple-11: 191 122 240;
      --green-11: 76 195 138;
      --yellow-11: 240 192 0;

      --blue-4: 16 42 76;
      --purple-4: 58 30 72;
      --green-4: 17 49 35;
      --yellow-4: 53 40 0;

      --blue-5: 15 48 88;
      --purple-5: 67 33 85;
      --green-5: 19 57 41;
      --yellow-5: 62 48 0;

      --green-8: 35 110 74;

      --red-4: 72 26 29;
      --red-5: 84 27 31;
      --red-8: 170 36 41;
    `
    : `
      --blue-11: 0 106 220;
      --purple-11: 121 58 175;
      --green-11: 24 121 78;
      --yellow-11: 148 104 0;

      --blue-4: 225 240 255;
      --purple-4: 243 231 252;
      --green-4: 221 243 228;
      --yellow-4: 255 248 187;

      --blue-5: 206 231 254;
      --purple-5: 237 219 249;
      --green-5: 204 235 215;
      --yellow-5: 254 242 164;

      --green-8: 91 185 140;

      --red-4: 255 229 229;
      --red-5: 253 216 216;
      --red-8: 235 144 145;
    `