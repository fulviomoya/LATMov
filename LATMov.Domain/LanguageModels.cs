using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LATMov.Models {
    public class LanguageModels {
        private string code;
        private string description;

        public string Description {
            get {
                return description;
            }
            set {
                description = value;
            }
        }
        public string Code {
            get {
                return code;
            }
            set {
                code = value;
            }
        }
        
    }
}