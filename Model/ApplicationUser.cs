using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace GenVue.Model
{
    public class ApplicationUser : IdentityUser
    {
        public string GivenName { get; set; }
    }
}
