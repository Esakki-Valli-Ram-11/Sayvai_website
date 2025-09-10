declare module 'react-phone-input-2' {
    import * as React from 'react';
  
    export interface PhoneInputProps {
      value: string;
      onChange: (value: string, country: any, e: any, formattedValue: string) => void;
      country?: string;
      onlyCountries?: string[];
      preferredCountries?: string[];
      inputClass?: string;
      buttonClass?: string;
      containerClass?: string;
      dropdownClass?: string;
      searchClass?: string;
      autoFormat?: boolean;
      disableAreaCodes?: boolean;
      disableCountryCode?: boolean;
      enableLongNumbers?: boolean;
      enableSearch?: boolean;
      disableDropdown?: boolean;
      disableCountryGuess?: boolean;
      excludeCountries?: string[];
      placeholder?: string;
      searchPlaceholder?: string;
      copyNumbersOnly?: boolean;
      preserveOrder?: Array<'onlyCountries' | 'preferredCountries'>;
      renderStringAsFlag?: string;
      disableInitialCountryGuess?: boolean;
      defaultMask?: string;
      alwaysDefaultMask?: boolean;
      masks?: { [key: string]: string };
      areaCodes?: { [key: string]: string[] };
      localization?: { [key: string]: string };
      isValid?: (value: string, country: any) => boolean;
      onEnterKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
      specialLabel?: string;
      countryCodeEditable?: boolean;
      inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    }
  
    const PhoneInput: React.FC<PhoneInputProps>;
    export default PhoneInput;
  }
  