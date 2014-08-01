using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

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
        [Key]
        public int idPerson;
        public string name;
        public DateTime age;
        public string nationality;
        public List<Roles> rol;
        public List<SocialNetworks> networks;
    }
}
