using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace LATMov.Domain {
    /// <summary>
    /// Model's class that define the 'Cast'
    /// </summary>
    public class Cast {
        /// <summary>
        /// Unique Identifier of a movies.
        /// </summary>
        [Key]
        public int movieId { get; set; }
        /// <summary>
        /// Identifier of people at cast.
        /// </summary>
        public int peopleId { get; set; }
    }
}