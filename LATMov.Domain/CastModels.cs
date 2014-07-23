using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LATMov.Models {
    /// <summary>
    /// Model's class that define the 'Cast'
    /// </summary>
    public class CastModels {
        /// <summary>
        /// Unique Identifier of a movies.
        /// </summary>
        private int movieId {
            get;
            set;
        }
        /// <summary>
        /// Identifier of people at cast.
        /// </summary>
        private int peopleId {
            get;
            set;
        }
    }
}