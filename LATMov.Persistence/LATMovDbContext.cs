using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using LATMov.Models;

namespace LATMov.Persistence {
    public class LATMovDbContext: DbContext {
        public LATMovDbContext() { 
            
        }

        public DbSet<Movie> movies { get; set; }
        //DbSet<AwardModels> Award { get; set; }
    }
}
