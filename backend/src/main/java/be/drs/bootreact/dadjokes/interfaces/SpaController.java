package be.drs.bootreact.dadjokes.interfaces;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Known client routes are forwarded to the application root.
 * This is to allow client side routing
 */
@Controller
public class SpaController {

    @RequestMapping(value = "/admin")
    public String nonRestApiPathsShouldForwardToSinglePageApplication(){
        return "forward:/";
    }
}
