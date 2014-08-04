using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using LATMov.Domain;

namespace LATMov.Domain {
    public class Genre {
        [Key]
        public virtual int GenreId { get; set; }
        public virtual string Name { get; set; }
        public virtual List<Movie> Movies { get; set; }
    }
}
