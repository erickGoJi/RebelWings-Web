﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.bd1.Entities
{
    public partial class Balanceoscab
    {
        public Balanceoscab()
        {
            Balanceoslins = new HashSet<Balanceoslin>();
        }

        public int Codigo { get; set; }
        public string Nombre { get; set; }
        public DateTime? Fecha { get; set; }

        public virtual ICollection<Balanceoslin> Balanceoslins { get; set; }
    }
}