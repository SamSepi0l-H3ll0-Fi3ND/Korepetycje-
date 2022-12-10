namespace Koreprtycje_.Models
{
    public class Tutor : User
    {
        public string Description { get; set; }
        public virtual List<Review> Reviews { get; set; }
        public string Education { get; set; }
        public virtual List<Achievement> Achievements { get; set; }
    }
}
