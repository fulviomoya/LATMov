using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using LATMov.Utilities;

namespace LATMov.Models {
    public class CastModels {
        private int movieId {get; set;}
        private int peopleId {get; set;}
        private Enumerations.Roles rol { get; set;}
    }
}