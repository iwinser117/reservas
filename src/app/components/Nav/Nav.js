import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "../../../lib/mui";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    "Logeado",
    "Configuración",
    "Perfil",
    "Compras",
    "Log Out",
  ];
  return (
    <Navbar
      isBordered
      className=""
      onMenuOpenChange={setIsMenuOpen}
      position="static"
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="mr-4">
          <p className="hidden sm:block font-bold text-inherit">D'visita</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3">
          <NavbarItem>
            <Link color="foreground" href="#" className="hover:bg-gray-200 hover:rounded-full transition duration-300 p-2 rounded-full">
              Destinos
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#" className="hover:bg-gray-200 hover:rounded-full transition duration-300 p-2 rounded-full">
              Ofertas
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" color="foreground" className="hover:bg-gray-200 hover:rounded-full transition duration-300 p-2 rounded-full">
              Conócenos
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#" className="hover:bg-gray-200 hover:rounded-full transition duration-300 p-2 rounded-full">
              Contacto
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full hover:bg-gray-200 hover:rounded-full transition duration-300 p-2 rounded-full"
                color={
                  index === 2
                    ? "warning"
                    : index === menuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        {/* <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 ",
          }}
          placeholder="Type to search..."
          size="sm"
          type="search"
        /> */}
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="primary"
              name="Jason Hughes"
              size="sm"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Inicio de sesion como</p>
              <p className="font-semibold">test@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">Configuración</DropdownItem>
            <DropdownItem key="team_settings">Perfil</DropdownItem>
            <DropdownItem key="analytics" color="success" className="text-success">Compras</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
