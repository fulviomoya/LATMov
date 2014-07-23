using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LATMov.Domain {
    public enum Roles {
        Director,
        Producer,
        Writter,
        Actor
    }
    public enum SocialNetworks {
        FACEBOOK,
        TWITTER,
        INSTAGRAM
    }
    public abstract class Person {
        private string Name;
        private DateTime Age;
        private string Nationality;
        private Roles Rol;
        private SocialNetworks Network;
    }
}
