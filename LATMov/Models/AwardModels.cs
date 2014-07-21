using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using LATMov.Utilities;

namespace LATMov.Models {
    public class AwardModels {
        private string code;
        private DateTime date;
        private Enumerations.TypeAwards typeNomination;
        private string description;

        public string Code {
            get {
                return code;
            }
            set {
                code = value;
            }
        }


        public Enumerations.TypeAwards TypeNomination {
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