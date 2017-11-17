using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace GenVue.Models
{
    // Add profile data for application users by adding properties to the ApplicationUser class
    public class ApplicationUser : IdentityUser {

        // FirstName and LastName will be stored in the same table as Users
        [StringLength(50)]
        [Display(Name = "Firt Name")]
        public string FirstName { get; set; }

        [StringLength(50)]
        [Display(Name = "Last Name")]
        public string LastName { get; set; }

        [Display(Name = "Full Name")]
        public string FullName
        {
            get
            {
                return FirstName + " " + LastName;
            }
        }
    }
}
