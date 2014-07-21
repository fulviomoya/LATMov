using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using LATMov.Utilities;

namespace LATMov.Models {
    public class CastModels {
        private int movieId;
        private int peopleId;
        private Enumerations.Roles rol;

        public Enumerations.Roles Rol {
            get {
                return rol;
            }
            set {
                rol = value;
            }
        }

        public int PeopleId {
            get {
                return peopleId;
            }
            set {
                peopleId = value;
            }
        }

        public int MovieId {
            get {
                return movieId;
            }
            set {
                movieId = value;
            }
        }
    }
}