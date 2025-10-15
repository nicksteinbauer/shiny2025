import { NavLink } from "@remix-run/react";
import { useState } from "react";

import Logo from "./Logo";

export default function NavBar() {

   
    return (
        <header className="">
			<div className="">
				<div>
					<NavLink to="/">
						<Logo />
					</NavLink>
				</div>
				
			</div>
			
		</header>
    )
}