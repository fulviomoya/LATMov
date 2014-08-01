using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace LATMov.Models {
    public enum TypeAwards {
        Nomination,
        Winner
    }
    public class Award {
        [Key]
        public String code { get; set; }

        public DateTime date { get; set; }

        public TypeAwards typeNomination { get; set; }

        public string description { get; set; }

    }
}