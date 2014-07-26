using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LATMov.Models {
    public enum TypeAwards {
        Nomination,
        Winner
    }
    public class AwardModels {
        private string code { get; set; }

        private DateTime date { get; set; }

        private TypeAwards typeNomination { get; set; }

        private string description { get; set; }

    }
}