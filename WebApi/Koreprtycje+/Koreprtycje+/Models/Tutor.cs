namespace Koreprtycje_.Models
{
    public class Tutor : User
    {
        public string Description { get; set; }
        public double Rate { get; set; }
        public List<Review> Reviews { get; set; }
        public string Education { get; set; }
        public List<Achievement> Achievements { get; set; }
    }
}
