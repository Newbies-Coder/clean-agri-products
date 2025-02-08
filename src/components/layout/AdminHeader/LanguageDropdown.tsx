import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from '@/components/ui/dropdown-menu';
import LanguageItem from './LanguageItem';
import US_Flag from '@/assets/images/US-flag.jpg';
import VN_Flag from '@/assets/images/VN-flag.png';

export default function LanguageDropdown() {
  const listLanguages = [
    {
      id: 0,
      name: 'En',
      src: US_Flag,
      alt: 'US flag',
    },
    {
      id: 1,
      name: 'Vn',
      src: VN_Flag,
      alt: 'VN flag',
    },
  ];
  const [languageId, setLanguageId] = useState(0);
  const handleLanguageChange = (languageId: string) => {
    setLanguageId(Number(languageId));
  };
  const language = listLanguages[languageId];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="hidden h-10 items-center justify-center whitespace-nowrap rounded-md bg-transparent px-4 py-[10px] text-sm font-semibold text-primary-foreground ring-offset-background transition-colors hover:bg-transparent focus-visible:outline-none focus-visible:ring-0 xl:inline-flex"
          type="button"
        >
          <span className="me-1.5 h-6 w-6 rounded-full">
            <img
              className="h-full w-full rounded-full object-cover"
              src={language.src}
              alt={language.alt}
            />
          </span>
          <span className="text-sm capitalize text-gray-600">
            {language.name}
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2">
        <DropdownMenuRadioGroup
          value={language.id.toString()}
          onValueChange={handleLanguageChange}
        >
          {listLanguages.map((l) => (
            <DropdownMenuRadioItem
              key={l.id}
              value={l.id.toString()}
              className="py-0"
            >
              <LanguageItem src={l.src} alt={l.alt} name={l.name} />
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
