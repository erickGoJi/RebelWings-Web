﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.bd2.Entities
{
    public partial class Tarifashotelcalendariodefecto
    {
        public DateTime Dia { get; set; }
        public int Idtemporada { get; set; }
        public byte[] Version { get; set; }

        public virtual Temporadashotel IdtemporadaNavigation { get; set; }
    }
}