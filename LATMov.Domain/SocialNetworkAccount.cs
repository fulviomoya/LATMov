using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace LATMov.Domain {
    public enum SocialNetworks { 
        FACEBOOK, INSTAGRAM, 
        TWITTER
    }
    public class SocialNetworkAccount {
        [Key]
        public int id { get; set; }
        public string url_username { get; set; }
        public SocialNetworks socialMediaCompany { get; set; }
    }
}
