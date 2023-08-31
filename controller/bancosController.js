const util = require("../util/util");
const config = require('../package.json');

class bancosController {
    constructor(dolarSiService, cryptoYaService) {
        this.dolarSiService = dolarSiService;
        this.cryptoYaService = cryptoYaService;
        this.util = new util();
    }


    /**
     * @description Obtener las cotizaciones del Banco BBVA
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getDolarBBVA = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar();
            const taxPercent = parseInt(config.taxPercent.ahorro);
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.Capital_Federal.casa336.compra._text),
                venta: this.util.formatCurrency(data.cotiza.Capital_Federal.casa336.venta._text),
                ventaAhorro: this.util.formatCurrency(data.cotiza.Capital_Federal.casa336.venta._text, 2, taxPercent),
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }


    /**
     * @description Obtener las cotizaciones del Banco Piano
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getDolarPiano = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar();
            const taxPercent = parseInt(config.taxPercent.ahorro);
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.Capital_Federal.casa37.compra._text),
                venta: this.util.formatCurrency(data.cotiza.Capital_Federal.casa37.venta._text),
                ventaAhorro: this.util.formatCurrency(data.cotiza.Capital_Federal.casa37.venta._text, 2, taxPercent),
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }


    /**
     * @description Obtener las cotizaciones del Banco Hipotecario
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getDolarHipotecario = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar();
            const taxPercent = parseInt(config.taxPercent.ahorro);
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.Capital_Federal.casa217.compra._text),
                venta: this.util.formatCurrency(data.cotiza.Capital_Federal.casa217.venta._text),
                ventaAhorro: this.util.formatCurrency(data.cotiza.Capital_Federal.casa217.venta._text, 2, taxPercent),
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }


    /**
     * @description Obtener las cotizaciones del Banco Galicia
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getDolarGalicia = async (_req, res) => {
        try {
            const data = await this.cryptoYaService.getDolarGalicia();
            const valores = {
                fecha: this.util.getDateTimeFromUnix(data.time),
                compra: this.util.formatCurrency(data.bid.toString()),
                venta: this.util.formatCurrency(data.ask.toString()),
                ventaAhorro: this.util.formatCurrency(data.totalAsk.toString()),
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    /**
     * @description Obtener las cotizaciones del Banco HSBC
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
     getDolarHSBC = async (_req, res) => {
        try {
            const data = await this.cryptoYaService.getDolarHSBC();
            const valores = {
                fecha: this.util.getDateTimeFromUnix(data.time),
                compra: this.util.formatCurrency(data.bid.toString()),
                venta: this.util.formatCurrency(data.ask.toString()),
                ventaAhorro: this.util.formatCurrency(data.totalAsk.toString()),
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }    

    /**
     * @description Obtener las cotizaciones del Banco Macro
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
     getDolarMacro = async (_req, res) => {
        try {
            const data = await this.cryptoYaService.getDolarMacro();
            const valores = {
                fecha: this.util.getDateTimeFromUnix(data.time),
                compra: this.util.formatCurrency(data.bid.toString()),
                venta: this.util.formatCurrency(data.ask.toString()),
                ventaAhorro: this.util.formatCurrency(data.totalAsk.toString()),
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }   
    
    /**
     * @description Obtener las cotizaciones del Banco Brubank
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
     getDolarBrubank = async (_req, res) => {
        try {
            const data = await this.cryptoYaService.getDolarBrubank();
            const valores = {
                fecha: this.util.getDateTimeFromUnix(data.time),
                compra: this.util.formatCurrency(data.bid.toString()),
                venta: this.util.formatCurrency(data.ask.toString()),
                ventaAhorro: this.util.formatCurrency(data.totalAsk.toString()),
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }     

    /**
     * @description Obtener las cotizaciones del Banco Santander
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getDolarSantander = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar();
            const taxPercent = parseInt(config.taxPercent.ahorro);
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.Capital_Federal.casa401.compra._text),
                venta: this.util.formatCurrency(data.cotiza.Capital_Federal.casa401.venta._text),
                ventaAhorro: this.util.formatCurrency(data.cotiza.Capital_Federal.casa401.venta._text, 2, taxPercent),
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }


    /**
     * @description Obtener las cotizaciones del Banco Ciudad de Buenos Aires
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getDolarCiudad = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar();
            const taxPercent = parseInt(config.taxPercent.ahorro);
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.Capital_Federal.casa402.compra._text),
                venta: this.util.formatCurrency(data.cotiza.Capital_Federal.casa402.venta._text),
                ventaAhorro: this.util.formatCurrency(data.cotiza.Capital_Federal.casa402.venta._text, 2, taxPercent),
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }


    /**
     * @description Obtener las cotizaciones del Banco Supervielle
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getDolarSupervielle = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar();
            const taxPercent = parseInt(config.taxPercent.ahorro);
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.Capital_Federal.casa403.compra._text),
                venta: this.util.formatCurrency(data.cotiza.Capital_Federal.casa403.venta._text),
                ventaAhorro: this.util.formatCurrency(data.cotiza.Capital_Federal.casa403.venta._text, 2, taxPercent),
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }


    /**
     * @description Obtener las cotizaciones del Banco Patagonia
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getDolarPatagonia = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar();
            const taxPercent = parseInt(config.taxPercent.ahorro);
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.Capital_Federal.casa404.compra._text),
                venta: this.util.formatCurrency(data.cotiza.Capital_Federal.casa404.venta._text),
                ventaAhorro: this.util.formatCurrency(data.cotiza.Capital_Federal.casa404.venta._text, 2, taxPercent),
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }


    /**
     * @description Obtener las cotizaciones del Banco Comafi
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getDolarComafi = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar();
            const taxPercent = parseInt(config.taxPercent.ahorro);
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.Capital_Federal.casa405.compra._text),
                venta: this.util.formatCurrency(data.cotiza.Capital_Federal.casa405.venta._text),
                ventaAhorro: this.util.formatCurrency(data.cotiza.Capital_Federal.casa405.venta._text, 2, taxPercent),
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    /**
     * @description Obtener las cotizaciones del Banco Nación
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getDolarNacion = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar();
            const taxPercent = parseInt(config.taxPercent.ahorro);
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.Capital_Federal.casa6.compra._text),
                venta: this.util.formatCurrency(data.cotiza.Capital_Federal.casa6.venta._text),
                ventaAhorro: this.util.formatCurrency(data.cotiza.Capital_Federal.casa6.venta._text, 2, taxPercent),
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    /**
     * @description Obtener las cotizaciones del Banco Industrial
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getDolarBIND = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar();
            const taxPercent = parseInt(config.taxPercent.ahorro);
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.Capital_Federal.casa22.compra._text),
                venta: this.util.formatCurrency(data.cotiza.Capital_Federal.casa22.venta._text),
                ventaAhorro: this.util.formatCurrency(data.cotiza.Capital_Federal.casa22.venta._text, 2, taxPercent),
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    /**
     * @description Obtener las cotizaciones del Nuevo Banco del Chaco
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getDolarChaco = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar();
            const taxPercent = parseInt(config.taxPercent.ahorro);
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.Capital_Federal.casa334.compra._text),
                venta: this.util.formatCurrency(data.cotiza.Capital_Federal.casa334.venta._text),
                ventaAhorro: this.util.formatCurrency(data.cotiza.Capital_Federal.casa334.venta._text, 2, taxPercent),
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    /**
     * @description Obtener las cotizaciones del Banco de La Pampa
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getDolarPampa = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar();
            const taxPercent = parseInt(config.taxPercent.ahorro);
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.Capital_Federal.casa335.compra._text),
                venta: this.util.formatCurrency(data.cotiza.Capital_Federal.casa335.venta._text),
                ventaAhorro: this.util.formatCurrency(data.cotiza.Capital_Federal.casa335.venta._text, 2, taxPercent),
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    /**
     * @description Obtener las cotizaciones del Banco de Córdoba
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getDolarBancor = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar();
            const taxPercent = parseInt(config.taxPercent.ahorro);
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.Capital_Federal.casa341.compra._text),
                venta: this.util.formatCurrency(data.cotiza.Capital_Federal.casa341.venta._text),
                ventaAhorro: this.util.formatCurrency(data.cotiza.Capital_Federal.casa341.venta._text, 2, taxPercent),
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    /**
    * @description Obtener las cotizaciones del Banco de la Provincia de Buenos Aires
    * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
    */
    getDolarProvincia = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar();
            const taxPercent = parseInt(config.taxPercent.ahorro);
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.Capital_Federal.casa411.compra._text),
                venta: this.util.formatCurrency(data.cotiza.Capital_Federal.casa411.venta._text),
                ventaAhorro: this.util.formatCurrency(data.cotiza.Capital_Federal.casa411.venta._text, 2, taxPercent),
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    /**
     * @description Obtener las cotizaciones del Industrial and Commercial Bank of China (ICBC)
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getDolarICBC = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar();
            const taxPercent = parseInt(config.taxPercent.ahorro);
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.Capital_Federal.casa412.compra._text),
                venta: this.util.formatCurrency(data.cotiza.Capital_Federal.casa412.venta._text),
                ventaAhorro: this.util.formatCurrency(data.cotiza.Capital_Federal.casa412.venta._text, 2, taxPercent),
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    /**
     * @description Obtener las cotizaciones de Rebanking
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getDolarRebanking = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar();
            const taxPercent = parseInt(config.taxPercent.ahorro);
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.Capital_Federal.casa414.compra._text),
                venta: this.util.formatCurrency(data.cotiza.Capital_Federal.casa414.venta._text),
                ventaAhorro: this.util.formatCurrency(data.cotiza.Capital_Federal.casa414.venta._text, 2, taxPercent),
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }

    /**
     * @description Obtener las cotizaciones de Banco Roela
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getDolarRoela = async (_req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar();
            const taxPercent = parseInt(config.taxPercent.ahorro);
            const valores = {
                fecha: this.util.getDateTime(),
                compra: this.util.formatCurrency(data.cotiza.Capital_Federal.casa337.compra._text),
                venta: this.util.formatCurrency(data.cotiza.Capital_Federal.casa337.venta._text),
                ventaAhorro: this.util.formatCurrency(data.cotiza.Capital_Federal.casa337.venta._text, 2, taxPercent),
            }
            res.send(valores)
        } catch (e) {
            res.sendStatus(500)
            console.log(e)
        }
    }
}

module.exports = bancosController
