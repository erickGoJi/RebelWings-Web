﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.bd2.Entities
{
    public partial class Monedaslin
    {
        public int Codmoneda { get; set; }
        public double Cantidad { get; set; }
        public byte[] Imagen { get; set; }

        public virtual Moneda CodmonedaNavigation { get; set; }
    }
}