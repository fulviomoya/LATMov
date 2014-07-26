﻿using System;
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
        public int movieId { get; set; }
        /// <summary>
        /// Identifier of people at cast.
        /// </summary>
        public int peopleId { get; set; }
    }
}