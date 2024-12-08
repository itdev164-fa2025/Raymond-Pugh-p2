using System;

namespace CalorieCounterApi.Models
{
    public class CalorieEntry
    {
        public int Id { get; set; }
        public string FoodName { get; set; }
        public int Calories { get; set; }
        public DateTime Date { get; set; }
    }
}
