﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace biz.bd2.Entities
{
    public partial class Asuntosbloqueo
    {
        public string Serie { get; set; }
        public int Numero { get; set; }
        public string Terminal { get; set; }
        public DateTime Fechainibloqueo { get; set; }
        public DateTime Horainibloqueo { get; set; }
        public double Idintervencion { get; set; }

        public virtual Asunto Asunto { get; set; }
    }
}