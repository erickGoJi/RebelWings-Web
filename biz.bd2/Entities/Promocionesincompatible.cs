﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.bd2.Entities
{
    public partial class Promocionesincompatible
    {
        public int Idpromocion { get; set; }
        public int Posicion { get; set; }
        public int? Idpromocionincompatible { get; set; }

        public virtual Promocione IdpromocionNavigation { get; set; }
    }
}