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
        

        private string code;
        private DateTime date;
        private TypeAwards typeNomination;
        private string description;

        public string Code { get; set;}


        public TypeAwards TypeNomination {
            get {
                return typeNomination;
            }
            set {
                typeNomination = value;
            }
        }

        public string Description {
            get {
                return description;
            }
            set {
                description = value;
            }
        }

        public DateTime Date {
            get {
                return date;
            }
            set {
                date = value;
            }
        }
    }
}