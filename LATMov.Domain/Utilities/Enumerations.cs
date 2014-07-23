using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LATMov.Utilities {
    public class Enumerations {
        public enum Roles {
            Director,
            Producer,
            Writter,
            Actor
        }

        public enum TypeAwards {
            Nomination,
            Winner
        }

        public enum SocialNetworks {
            FACEBOOK,
            TWITTER,
            INSTAGRAM
        }
    }
}