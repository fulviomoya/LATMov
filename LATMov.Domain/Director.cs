using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;

namespace LATMov.Domain {
    public enum Roles { //Recargar esta parte
        DIRECTOR, PRODUCER,
    }
    public class Director {
        [Key]
        public int id { get; set; }
        public string name { get; set; }
        public DateTime age { get; set; }
        public string nationality { get; set; }
        public List<Roles> rol { get; set; }
        public List<SocialNetworkAccount> networks { get; set; }
    }
}
