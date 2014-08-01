using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace LATMov.Models {
    public class SocialNetworkAccount {
        [Key]
        public int id;
        public string url_username;
    }
}
