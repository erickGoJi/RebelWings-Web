﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.bd2.Entities
{
    public partial class Albventatarjetaembarque
    {
        public string Numserie { get; set; }
        public int Numalbaran { get; set; }
        public string N { get; set; }
        public string Tarjetaembarque { get; set; }
        public string Aeropuertoorigen { get; set; }
        public string Aeropuertodestino { get; set; }
        public string Numerovuelo { get; set; }
        public string Clase { get; set; }
        public string Codnacionalidad { get; set; }

        public virtual Albventacab NNavigation { get; set; }
    }
}