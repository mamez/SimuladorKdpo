var com = {
    bbva: {}
};
com.bbva.kyop = {
    kyop: {}
};
com.bbva.kyop.util = {
    util: {}
};
com.bbva.kyop.common = {
    common: {}
};
com.bbva.kyop.bean = {
    bean: {}
};
com.bbva.kyop.component = {
    component: {}
};
com.bbva.kyop.component.activityRegister = {
    activityRegister: {}
};
com.bbva.kyop.controller = {
    controller: {}
};
com.bbva.kyop.bean.ConfigurationBean = new function() {
    var j = "";
    var m = "";
    var M = "";
    var k = "";
    var b = 0;
    var s = "";
    var L = "";
    var H = "";
    var f = 0;
    var G;
    var r;
    var u;
    var I;
    var g;
    var q;
    var K;
    var v;
    var w;
    var y;
    var l;
    var p;
    var E;
    var N;
    var d;
    var A;
    var J;
    var z;
    var o;
    var n;
    var C;
    var h;
    var t;
    this.getActiveHelpEnabled = function() {
        return this.activeHelpEnabled
    };
    this.setActiveHelpEnabled = function(O) {
        this.activeHelpEnabled = O
    };
    var F = new function() {
        var Q = "";
        var P = "";
        var O = "";
        this.getCodProduct = function() {
            return this.codProduct
        };
        this.setCodProduct = function(R) {
            this.codProduct = R
        };
        this.getEnabled = function() {
            return this.enabled
        };
        this.setEnabled = function(R) {
            this.enabled = R
        };
        this.getTelephone = function() {
            return this.telephone
        };
        this.setTelephone = function(R) {
            this.telephone = R
        };
        this.toJson = function() {
            return {
                enabled: this.enabled,
                telephone: this.telephone,
                product: this.codProduct
            }
        }
    };
    this.getTelephoneDto = function() {
        return F
    };
    var a = new function() {
        var T = "";
        var S = "";
        var R = "";
        var P = "";
        var U = "";
        var O = "";
        var Q = "";
        this.getOpinatorUrlDefault = function() {
            return this.opinatorUrlDefault
        };
        this.setOpinatorUrlDefault = function(V) {
            this.opinatorUrlDefault = V
        };
        this.getOpinatorUrlCat = function() {
            return this.opinatorUrlCat
        };
        this.setOpinatorUrlCat = function(V) {
            this.opinatorUrlCat = V
        };
        this.getOpinatorUrlFr = function() {
            return this.opinatorUrlFr
        };
        this.setOpinatorUrlFr = function(V) {
            this.opinatorUrlFr = V
        };
        this.getOpinatorUrlGb = function() {
            return this.opinatorUrlGb
        };
        this.setOpinatorUrlGb = function(V) {
            this.opinatorUrlGb = V
        };
        this.getOpinatorUrlIt = function() {
            return this.opinatorUrlIt
        };
        this.setOpinatorUrlIt = function(V) {
            this.opinatorUrlIt = V
        };
        this.getOpinatorUrlPt = function() {
            return this.opinatorUrlPt
        };
        this.setOpinatorUrlPt = function(V) {
            this.opinatorUrlPt = V
        };
        this.getEnableOpinator = function() {
            return this.enableOpinator
        };
        this.setEnableOpinator = function(V) {
            this.enableOpinator = V
        }
    };
    var B = new function() {
        var O = "";
        var Q = "";
        var U = "";
        var S = "";
        var P = "";
        var T = "";
        var R = "";
        this.setBannerRequestUrl = function(V) {
            this.bannerRequestUrl = V
        };
        this.getBannerRequestUrl = function() {
            return this.bannerRequestUrl
        };
        this.setBannerRequestPpId = function(V) {
            this.bannerRequestPpId = V
        };
        this.getBannerRequestPpId = function() {
            return this.bannerRequestPpId
        };
        this.setBannerRequestPpLifeCycle = function(V) {
            this.bannerRequestPpLifeCycle = V
        };
        this.getBannerRequestPpLifeCycle = function() {
            return this.bannerRequestPpLifeCycle
        };
        this.setProcessHelpRequestUrl = function(V) {
            this.processHelpRequestUrl = V
        };
        this.getProcessHelpRequestUrl = function() {
            return this.processHelpRequestUrl
        };
        this.setProcessHelpRequestPpId = function(V) {
            this.processHelpRequestPpId = V
        };
        this.getProcessHelpRequestPpId = function() {
            return this.processHelpRequestPpId
        };
        this.setProcessHelpRequestPpLifeCycle = function(V) {
            this.processHelpRequestPpLifeCycle = V
        };
        this.getProcessHelpRequestPpLifeCycle = function() {
            return this.processHelpRequestPpLifeCycle
        };
        this.setContactUsRequestUrl = function(V) {
            this.contactUsRequestUrl = V
        };
        this.getContactUsRequestUrl = function() {
            return this.contactUsRequestUrl
        }
    };
    var D = new function() {
        var P = "";
        var O = "";
        var Q = "";
        this.setUrlLogo = function(R) {
            this.urlLogo = R
        };
        this.getUrlLogo = function() {
            return this.urlLogo
        };
        this.setAltLogo = function(R) {
            this.altLogo = R
        };
        this.getAltLogo = function() {
            return this.altLogo
        };
        this.setUrlIndex = function(R) {
            this.urlIndex = R
        };
        this.getUrlIndex = function() {
            return this.urlIndex
        }
    };
    var e = new function() {
        var T = true;
        var Q = true;
        var P = true;
        var S = true;
        var R = true;
        var O = true;
        this.setIntegrateAlerts = function(U) {
            this.integrateAlerts = U
        };
        this.getIntegrateAlerts = function() {
            return this.integrateAlerts
        };
        this.setIntegrateMessages = function(U) {
            this.integrateMessages = U
        };
        this.getIntegrateMessages = function() {
            return this.integrateMessages
        };
        this.setIntegrateOpenweb = function(U) {
            this.integrateOpenweb = U
        };
        this.getIntegrateOpenweb = function() {
            return this.integrateOpenweb
        };
        this.setIntegrateManager = function(U) {
            this.integrateManager = U
        };
        this.getIntegrateManager = function() {
            return this.integrateManager
        };
        this.setIntegrateFavoriteAccounts = function(U) {
            this.integrateFavoriteAccounts = U
        };
        this.getIntegrateFavoriteAccounts = function() {
            return this.integrateFavoriteAccounts
        };
        this.setIntegrateBanners = function(U) {
            this.integrateBanners = U
        };
        this.getIntegrateBanners = function() {
            return this.integrateBanners
        }
    };
    this.getLoadCampaignOnStart = function() {
        return this.loadCampaignOnStart
    };
    this.setLoadCampaignOnStart = function(O) {
        this.loadCampaignOnStart = O
    };
    this.getCampaignTimeout = function() {
        return this.campaignTimeout
    };
    this.setCampaignTimeout = function(O) {
        this.campaignTimeout = O
    };
    this.getDefaultErrorMessageTitleKey = function() {
        return this.defaultErrorMessageTitleKey
    };
    this.setDefaultErrorMessageTitleKey = function(O) {
        this.defaultErrorMessageTitleKey = O
    };
    this.getDefaultErrorMessageTextKey = function() {
        return this.defaultErrorMessageTextKey
    };
    this.setDefaultErrorMessageTextKey = function(O) {
        this.defaultErrorMessageTextKey = O
    };
    this.getPathPublicPortal = function() {
        return this.pathPublicPortal
    };
    this.setPathPublicPortal = function(O) {
        this.pathPublicPortal = O
    };
    this.getUrlSessionLogout = function() {
        return this.urlSessionLogout
    };
    this.setUrlSessionLogout = function(O) {
        this.urlSessionLogout = O
    };
    this.getSessionTimeOut = function() {
        return this.sessionTimeOut
    };
    this.setSessionTimeOut = function(O) {
        this.sessionTimeOut = O
    };
    this.getPingTimeRequest = function() {
        return this.pingTimeRequest
    };
    this.setPingTimeRequest = function(O) {
        this.pingTimeRequest = O
    };
    this.getLastPingTimePerformed = function() {
        return this.lastPingTimePerformed
    };
    this.setLastPingTimePerformed = function(O) {
        this.lastPingTimePerformed = O
    };
    this.getPathWebseal = function() {
        return this.pathWebseal
    };
    this.setPathWebseal = function(O) {
        this.pathWebseal = O
    };
    this.setWindowCountDown = function(O) {
        this.windowCountDown = O
    };
    this.getWindowCountDown = function() {
        return this.windowCountDown
    };
    this.getRequestConfiguration = function() {
        return B
    };
    this.setRequestConfiguration = function(O) {
        this.requestConfiguration = O
    };
    this.getOpinator = function() {
        return a
    };
    this.setOpinator = function(O) {
        this.opinator = O
    };
    this.getProductConfiguration = function() {
        return D
    };
    this.setProductConfiguration = function(O) {
        this.productConfiguration = O
    };
    this.getPortalIntegration = function() {
        return e
    };
    this.setPortalIntegration = function(O) {
        this.portalIntegration = O
    };
    this.getHelpUrl = function() {
        return this.helpUrl
    };
    this.setHelpUrl = function(O) {
        this.helpUrl = O
    };
    this.setMaxSectionsVisitedShownOnInit = function(O) {
        this.maxSectionsVisitedShownOnInit = O
    };
    this.getMaxSectionsVisitedShownOnInit = function() {
        return this.maxSectionsVisitedShownOnInit
    };
    this.setMaxProcessInMainSections = function(O) {
        this.maxProcessInMainSections = O
    };
    this.getMaxProcessInMainSections = function() {
        return this.maxProcessInMainSections
    };
    this.setMessageAlertIntegrationJsPath = function(O) {
        this.messageAlertIntegrationJsPath = O
    };
    this.getMessageAlertIntegrationJsPath = function() {
        return this.messageAlertIntegrationJsPath
    };
    this.setMessageAlertIntegrationCssPath = function(O) {
        this.messageAlertIntegrationCssPath = O
    };
    this.getMessageAlertIntegrationCssPath = function() {
        return this.messageAlertIntegrationCssPath
    };
    this.setOpenwebIntegrationJsPath = function(O) {
        this.openwebIntegrationJsPath = O
    };
    this.getOpenwebIntegrationJsPath = function() {
        return this.openwebIntegrationJsPath
    };
    this.setOpenwebIntegrationCssPath = function(O) {
        this.openwebIntegrationCssPath = O
    };
    this.getOpenwebIntegrationCssPath = function() {
        return this.openwebIntegrationCssPath
    };
    this.setManagerIntegrationJsPath = function(O) {
        this.managerIntegrationJsPath = O
    };
    this.getManagerIntegrationJsPath = function() {
        return this.managerIntegrationJsPath
    };
    this.setManagerIntegrationCssPath = function(O) {
        this.managerIntegrationCssPath = O
    };
    this.getManagerIntegrationCssPath = function() {
        return this.managerIntegrationCssPath
    };
    this.isMenuModeHover = function() {
        return this.menuModeHover
    };
    this.setMenuModeHover = function(O) {
        this.menuModeHover = O
    };
    this.getModeEurasia = function() {
        return this.modeEurasia
    };
    this.setModeEurasia = function(O) {
        this.modeEurasia = O
    };
    var x = new function() {
        var R = "";
        var Q = "";
        var P = "";
        var T = "";
        var O = "";
        var S = "";
        this.getCounterTime = function() {
            return this.counterTime
        };
        this.setCounterTime = function(U) {
            this.counterTime = U
        };
        this.getLoginTime = function() {
            return this.loginTime
        };
        this.setLoginTime = function(U) {
            this.loginTime = U
        };
        this.getIdProduct = function() {
            return this.idProduct
        };
        this.setIdProduct = function(U) {
            this.idProduct = U
        };
        this.isEnabled = function() {
            return this.enabled
        };
        this.setEnabled = function(U) {
            this.enabled = U
        };
        this.getInitTime = function() {
            return this.initTime
        };
        this.setInitTime = function(U) {
            this.initTime = U
        };
        this.getTimeToShowMessage = function() {
            return this.timeToShowMessage
        };
        this.setTimeToShowMessage = function(U) {
            this.timeToShowMessage = U
        }
    };
    this.getSessionEndAutomatic = function() {
        return x
    };
    this.isFooterEnabled = function() {
        return this.footerEnabled
    };
    this.setFooterEnabled = function(O) {
        this.footerEnabled = O
    };
    this.getHomeLocalServiceUrl = function() {
        return this.homeLocalServiceUrl
    };
    this.setHomeLocalServiceUrl = function(O) {
        this.homeLocalServiceUrl = O
    };
    this.isRwdEnabled = function() {
        return this.rwdEnabled
    };
    this.setRwdEnabled = function(O) {
        this.rwdEnabled = O
    };
    this.getMessageAlertIntegrationBasePath = function() {
        return this.messageAlertIntegrationBasePath
    };
    this.setMessageAlertIntegrationBasePath = function(O) {
        this.messageAlertIntegrationBasePath = O
    };
    this.getOpenwebIntegrationBasePath = function() {
        return this.openwebIntegrationBasePath
    };
    this.setOpenwebIntegrationBasePath = function(O) {
        this.openwebIntegrationBasePath = O
    };
    this.getManagerIntegrationBasePath = function() {
        return this.managerIntegrationBasePath
    };
    this.setManagerIntegrationBasePath = function(O) {
        this.managerIntegrationBasePath = O
    };
    this.isMultiSessionEnabled = function() {
        return this.multiSessionEnabled
    };
    this.setMultiSessionEnabled = function(O) {
        this.multiSessionEnabled = O
    };
    this.isAstSessionPingEnabled = function() {
        return this.astSessionPingEnabled
    };
    this.setAstSessionPingEnabled = function(O) {
        this.astSessionPingEnabled = O
    };
    this.getAstSessionPingTime = function() {
        return this.astSessionPingTime
    };
    this.setAstSessionPingTime = function(O) {
        this.astSessionPingTime = O
    }
};
com.bbva.kyop.bean.UserBean = new function() {
    var e = new function() {
        var o = "";
        var k = "";
        var u = "";
        var v = "";
        var q = "";
        var m = "";
        var w = "";
        var s = "";
        var r = "";
        var t = "";
        var j = "";
        var l = "";
        var p = "";
        var n = "";
        this.setHabilitarOpinator = function(x) {
            this.habilitarOpinator = x
        };
        this.getHabilitarOpinator = function() {
            return this.habilitarOpinator
        };
        this.setUrlOpinator = function(x) {
            this.urlOpinator = x
        };
        this.getUrlOpinator = function() {
            return this.urlOpinator
        };
        this.setDinamicOpinatorUrl = function(x) {
            this.dinamicOpinatorUrl = x
        };
        this.getDinamicOpinatorUrl = function() {
            return this.dinamicOpinatorUrl
        };
        this.setLanguage = function(x) {
            this.language = x
        };
        this.getLanguage = function() {
            return this.language
        };
        this.setDateFormat = function(x) {
            this.dateFormat = x
        };
        this.getDateFormat = function() {
            return this.dateFormat
        };
        this.setPriceFormat = function(x) {
            this.priceFormat = x
        };
        this.getPriceFormat = function() {
            return this.priceFormat
        };
        this.setTimeZone = function(x) {
            this.timeZone = x
        };
        this.getTimeZone = function() {
            return this.timeZone
        };
        this.setIdDateFormat = function(x) {
            this.idDateFormat = x
        };
        this.getIdDateFormat = function() {
            return this.idDateFormat
        };
        this.setIdPriceFormat = function(x) {
            this.idPriceFormat = x
        };
        this.getIdPriceFormat = function() {
            return this.idPriceFormat
        };
        this.setIdTimeZone = function(x) {
            this.idTimeZone = x
        };
        this.getIdTimeZone = function() {
            return this.idTimeZone
        };
        this.getLocale = function() {
            return this.locale
        };
        this.setLocale = function(x) {
            this.locale = x
        };
        this.getCodIso = function() {
            return this.codIso
        };
        this.setCodIso = function(x) {
            this.codIso = x
        };
        this.getLocaleCMP = function() {
            return this.localeCMP
        };
        this.setLocaleCMP = function(x) {
            this.localeCMP = x
        };
        this.getIdionaOriginalVacio = function() {
            return this.idionaOriginalVacio
        };
        this.setIdionaOriginalVacio = function(x) {
            this.idionaOriginalVacio = x
        }
    };
    var b = new function() {
        var l = "";
        var p = "";
        var q = "";
        var m = "";
        var j = "";
        var o = "";
        var k = "";
        var n = false;
        this.setIsLatam = function(r) {
            this.isLatam = r
        };
        this.getIsLatam = function() {
            return this.isLatam
        };
        this.setCompanyId = function(r) {
            this.companyId = r
        };
        this.getCompanyId = function() {
            return this.companyId
        };
        this.setCompanyName = function(r) {
            this.companyName = r
        };
        this.getCompanyName = function() {
            return this.companyName
        };
        this.setCompanyPic = function(r) {
            this.companyPic = r
        };
        this.getCompanyPic = function() {
            return this.companyPic
        };
        this.setSegmentId = function(r) {
            this.segmentId = r
        };
        this.getSegmentId = function() {
            return this.segmentId
        };
        this.setTypeDay = function(r) {
            this.typeDay = r
        };
        this.getTypeDay = function() {
            return this.typeDay
        };
        this.isCaixa = function() {
            return this.caixa
        };
        this.setCaixa = function(r) {
            this.caixa = r
        }
    };
    var a = new function() {
        var m = "";
        var s = "";
        var y = "";
        var r = false;
        var k = "";
        var j = "";
        var n = "";
        var x = "";
        var p = "";
        var u = false;
        var l = false;
        var t = false;
        var z = false;
        var q = false;
        var v = false;
        var o = false;
        var w = "";
        var A = false;
        this.setUserId = function(B) {
            this.userId = B
        };
        this.getUserId = function() {
            return this.userId
        };
        this.setUserName = function(B) {
            this.userName = B
        };
        this.getUserName = function() {
            return this.userName
        };
        this.getUserPic = function() {
            return this.userPic
        };
        this.setUserPic = function(B) {
            this.userPic = B
        };
        this.isAdmin = function() {
            return this.admin
        };
        this.setAdmin = function(B) {
            this.admin = B
        };
        this.getProductList = function() {
            return this.productList
        };
        this.setProductList = function(B) {
            this.productList = B
        };
        this.getProductId = function() {
            return this.idProduct
        };
        this.setProductId = function(B) {
            this.idProduct = B
        };
        this.getProductIdMigrated = function() {
            return this.idProductMigrated
        };
        this.setProductIdMigrated = function(B) {
            this.idProductMigrated = B
        };
        this.getProductMainId = function() {
            return this.idMainProduct
        };
        this.setProductMainId = function(B) {
            this.idMainProduct = B
        };
        this.getProductMainIdMigrated = function() {
            return this.idMainProductMigrated
        };
        this.setProductMainIdMigrated = function(B) {
            this.idMainProductMigrated = B
        };
        this.setFromLogin = function(B) {
            this.fromLogin = B
        };
        this.isFromLogin = function() {
            return this.fromLogin
        };
        this.isMultiUser = function() {
            return this.multiUser
        };
        this.setMultiUser = function(B) {
            this.multiUser = B
        };
        this.isReferenciaMonousuario = function() {
            return this.referenciaMonousuario
        };
        this.setReferenciaMonousuario = function(B) {
            this.referenciaMonousuario = B
        };
        this.isReferenciaLite = function() {
            return this.referenciaLite
        };
        this.setReferenciaLite = function(B) {
            this.referenciaLite = B
        };
        this.isReferenciaAvanzada = function() {
            return this.referenciaAvanzada
        };
        this.setReferenciaAvanzada = function(B) {
            this.referenciaAvanzada = B
        };
        this.isReferenciaCreadaEnPnm = function() {
            return this.referenciaCreadaEnPnm
        };
        this.setReferenciaCreadaEnPnm = function(B) {
            this.referenciaCreadaEnPnm = B
        };
        this.isReferenciaMigradaDePibeeAPnm = function() {
            return this.referenciaMigradaDePibeeAPnm
        };
        this.setReferenciaMigradaDePibeeAPnm = function(B) {
            this.referenciaMigradaDePibeeAPnm = B
        };
        this.setTelefono = function(B) {
            this.telefono = B
        };
        this.getTelefono = function() {
            return this.telefono
        };
        this.isLatam = function() {
            return this.latam
        };
        this.setLatam = function(B) {
            this.latam = B
        }
    };
    var h = new function() {
        var j = "";
        var p = "";
        var l = "";
        var o = "";
        var q = "";
        var m = "";
        var k = "";
        var n = "";
        this.getDateFormatted = function() {
            return this.dateFormatted
        };
        this.setDateFormatted = function(r) {
            this.dateFormatted = r
        };
        this.setDay = function(r) {
            this.day = r
        };
        this.getDay = function() {
            return this.day
        };
        this.setMonth = function(r) {
            this.month = r
        };
        this.getMonth = function() {
            return this.month
        };
        this.setYear = function(r) {
            this.year = r
        };
        this.getYear = function() {
            return this.year
        };
        this.setTime = function(r) {
            this.time = r
        };
        this.getTime = function() {
            return this.time
        };
        this.setIp = function(r) {
            this.ip = r
        };
        this.getIp = function() {
            return this.ip
        };
        this.setDevice = function(r) {
            this.device = r
        };
        this.getDevice = function() {
            return this.device
        };
        this.setFooterInfoKey = function(r) {
            this.footerInfoKey = r
        };
        this.getFooterInfoKey = function() {
            return this.footerInfoKey
        }
    };
    var d = new function() {
        var j = false;
        var n = false;
        var r = false;
        var m = false;
        var p = "";
        var u = "";
        var o = "";
        var v = "";
        var s = "";
        var l = "";
        var t = "";
        var k = "";
        var q = "";
        var w = "";
        this.setGlobalHelpDesk = function(x) {
            this.globalHelpDesk = x
        };
        this.isGlobalHelpDesk = function() {
            return this.globalHelpDesk
        };
        this.setLocalHelpDesk = function(x) {
            this.localHelpDesk = x
        };
        this.isLocalHelpDesk = function() {
            return this.localHelpDesk
        };
        this.setNetCash = function(x) {
            this.netCash = x
        };
        this.isNetCash = function() {
            return this.netCash
        };
        this.setGlobalNetCash = function(x) {
            this.globalNetCash = x
        };
        this.isGlobalNetCash = function() {
            return this.globalNetCash
        };
        this.setDefaultProcess = function(x) {
            this.defaultProcess = x
        };
        this.getDefaultProcess = function() {
            return this.defaultProcess
        };
        this.setDefaultService = function(x) {
            this.defaultService = x
        };
        this.getDefaultService = function() {
            return this.defaultService
        };
        this.setProductType = function(x) {
            this.productType = x
        };
        this.getProductType = function() {
            return this.productType
        };
        this.setInternalBank = function(x) {
            this.internalBank = x
        };
        this.getInternalBank = function() {
            return this.internalBank
        };
        this.setChannel = function(x) {
            this.channel = x
        };
        this.getChannel = function() {
            return this.channel
        };
        this.getIdSessionAst = function() {
            return this.idSessionAst
        };
        this.setIdSessionAst = function(x) {
            this.idSessionAst = x
        };
        this.getIvUser = function() {
            return this.ivUser
        };
        this.setIvUser = function(x) {
            this.ivUser = x
        };
        this.isHelpDesk = function() {
            return this.isGlobalHelpDesk() || this.isLocalHelpDesk()
        };
        this.setIdCompass = function(x) {
            this.idCompass = x
        };
        this.getIdCompass = function() {
            return this.idCompass
        };
        this.setIdNetCashProduct = function(x) {
            this.idNetCashProduct = x
        };
        this.getIdNetCashProduct = function() {
            return this.idNetCashProduct
        };
        this.setProductDescription = function(x) {
            this.productDescription = x
        };
        this.getProductDescription = function() {
            return this.productDescription
        }
    };
    var g = new function() {
        var u = "";
        var A = "";
        var k = "";
        var t = false;
        var l = "";
        var s = "";
        var B = "";
        var z = "";
        var q = "";
        var y = "";
        var p = "";
        var m = "";
        var x = false;
        var r = "";
        var v = "";
        var j;
        var C;
        var o;
        var n;
        var w = false;
        this.setCompanyDocumentType = function(D) {
            this.companyDocumentType = D
        };
        this.getCompanyDocumentType = function() {
            return this.companyDocumentType
        };
        this.setCompanyDocumentNumber = function(D) {
            this.companyDocumentNumber = D
        };
        this.getCompanyDocumentNumber = function() {
            return this.companyDocumentNumber
        };
        this.setCompanyLastAccessDate = function(D) {
            this.companyLastAccessDate = D
        };
        this.getCompanyLastAccessDate = function() {
            return this.companyLastAccessDate
        };
        this.setCompanyClousureDate = function(D) {
            this.companyClousureDate = D
        };
        this.getCompanyClousureDate = function() {
            return this.companyClousureDate
        };
        this.setIdCompany = function(D) {
            this.idCompany = D
        };
        this.getIdCompany = function() {
            return this.idCompany
        };
        this.setIdProduct = function(D) {
            this.idProduct = D
        };
        this.getIdProduct = function() {
            return this.idProduct
        };
        this.setGlobal = function(D) {
            this.global = D
        };
        this.isGlobal = function() {
            return this.global
        };
        this.setInternalBank = function(D) {
            this.internalBank = D
        };
        this.getInternalBank = function() {
            return this.internalBank
        };
        this.setProductBank = function(D) {
            this.productBank = D
        };
        this.getProductBank = function() {
            return this.productBank
        };
        this.setChannel = function(D) {
            this.channel = D
        };
        this.getChannel = function() {
            return this.channel
        };
        this.setServiceProduct = function(D) {
            this.serviceProduct = D
        };
        this.getServiceProduct = function() {
            return this.serviceProduct
        };
        this.setServiceSubProduct = function(D) {
            this.serviceSubProduct = D
        };
        this.getServiceSubProduct = function() {
            return this.serviceSubProduct
        };
        this.setProductDescription = function(D) {
            this.productDescription = D
        };
        this.getProductDescription = function() {
            return this.productDescription
        };
        this.getCompanyName = function() {
            return this.companyName
        };
        this.setCompanyName = function(D) {
            this.companyName = D
        };
        this.getIdSessionAst = function() {
            return this.idSessionAst
        };
        this.setIdSessionAst = function(D) {
            this.idSessionAst = D
        };
        this.getProfile = function() {
            return this.profile
        };
        this.setProfile = function(D) {
            this.profile = D
        };
        this.isMigratedCompany = function() {
            return this.migratedCompany
        };
        this.setMigratedCompany = function(D) {
            this.migratedCompany = D
        };
        this.setCompanyCif = function(D) {
            this.companyCif = D
        };
        this.getCompanyCif = function() {
            return this.companyCif
        };
        this.setCompanyStatus = function(D) {
            this.companyStatus = D
        };
        this.getCompanyStatus = function() {
            return this.companyStatus
        };
        this.isBossCompany = function() {
            return this.bossCompany
        };
        this.setBossCompany = function(D) {
            this.bossCompany = D
        }
    };
    var f;
    this.getUserServices = function() {
        return f
    };
    this.setUserServices = function(j) {
        f = j
    };
    this.getRegionalInformation = function() {
        return e
    };
    this.setRegionalInformation = function(j) {
        this.regionalInformation = j
    };
    this.getCompanyInformation = function() {
        return b
    };
    this.setCompanyInformation = function(j) {
        this.companyInformation = j
    };
    this.getUserInformation = function() {
        return a
    };
    this.setUserInformation = function(j) {
        this.userInformation = j
    };
    this.getLastAccessInformation = function() {
        return h
    };
    this.setLastAccessInformation = function(j) {
        this.lastAccessInformation = j
    };
    this.getProductInformation = function() {
        return d
    };
    this.setProductInformation = function(j) {
        this.productInformation = j
    };
    this.getProductInformation = function() {
        return d
    };
    this.setProductInformation = function(j) {
        this.productInformation = j
    };
    this.setHelpDeskInformation = function(j) {
        this.helpDeskInformation = j
    };
    this.getHelpDeskInformation = function() {
        return g
    };
    this.logOutOpinator = function(k, p) {
        if (("undefined" != k && undefined != k) && ("undefined" != p && undefined != p) && (k == "true")) {
            var o = com.bbva.kyop.bean.UserBean.getCompanyInformation().getCompanyId();
            var m = com.bbva.kyop.bean.UserBean.getUserInformation().getUserId();
            var j = com.bbva.kyop.bean.UserBean.getRegionalInformation().getDinamicOpinatorUrl();
            var l = j + o + m;
            var n = -1;
            $.ajax({
                url: l,
                type: "GET",
                dataType: "html",
                async: false,
                success: function(q) {
                    if (q != null) {
                        n = q.indexOf('"response":true')
                    }
                },
                error: function(q) {}
            });
            if (n != -1) {
                $("#botonDesconectar").removeAttr("onclick");
                $("#botonDesconectar").unbind("click").bind("click", function(s) {
                    $("#kyop-timeoutcontainer").css("opacity", "0");
                    var q = 0;
                    var t;
                    var u = $(window).height();
                    var r = 740;
                    if (u < r) {
                        r = u - 100
                    }
                    com.bbva.kyop.util.LightBoxUtil.loadLightBoxKyop("kyop-lightbox-container-div", "kyop-lightbox-iframe-div", "kyop-lightbox-form", {
                        url: p,
                        height: r,
                        width: 465,
                        innerWidth: 420,
                        innerHeight: 100,
                        registerActivity: true,
                        title: "Opinator"
                    }, "GET");
                    setTimeout(function() {
                        if (document.getElementById("kyop-lightbox-container-div").style.display != "") {
                            com.bbva.kyop.util.UUAASessionManager.endSessionOpenedProcess();
                            com.bbva.kyop.util.SessionUtil.endSessions(true);
                            return
                        } else {
                            t = setInterval(function() {
                                if (document.getElementById("kyop-lightbox-container-div").style.display != "") {
                                    clearInterval(t);
                                    com.bbva.kyop.util.UUAASessionManager.endSessionOpenedProcess();
                                    com.bbva.kyop.util.SessionUtil.endSessions(true)
                                }
                            }, 100)
                        }
                    }, 900)
                })
            } else {
                $("#botonDesconectar").removeAttr("onclick");
                $("#botonDesconectar").unbind("click").bind("click", function(q) {
                    com.bbva.kyop.util.SessionUtil.portalLogout()
                })
            }
        } else {
            $("#botonDesconectar").removeAttr("onclick");
            $("#botonDesconectar").unbind("click").bind("click", function(q) {
                com.bbva.kyop.util.SessionUtil.portalLogout()
            })
        }
    }
};
com.bbva.kyop.bean.ProcessBean = new function() {
    var d = null;
    var b = null;
    var a = null;
    this.getExtraParams = function() {
        return this.extraParams
    };
    this.setExtraParams = function(e) {
        this.extraParams = e
    };
    this.getUrlOverride = function() {
        return this.urlOverride
    };
    this.setUrlOverride = function(e) {
        this.urlOverride = e
    };
    this.getActivityRegisterParams = function() {
        return this.activityRegisterParams
    };
    this.setActivityRegisterParams = function(e) {
        this.activityRegisterParams = e
    }
};
com.bbva.kyop.bean.ActivityRegisterBean = function() {
    var j = null;
    var a = null;
    var m = null;
    var d = null;
    var g = null;
    var l = null;
    var k = null;
    var h = null;
    var b = null;
    var f = null;
    var e = null;
    this.getWOrigen = function() {
        return this.w_origen
    };
    this.setWOrigen = function(n) {
        this.w_origen = n
    };
    this.getWStep = function() {
        return this.w_step
    };
    this.setWStep = function(n) {
        this.w_step = n
    };
    this.getStep = function() {
        return this.step
    };
    this.setStep = function(n) {
        this.step = n
    };
    this.getFunnel = function() {
        return this.funnel
    };
    this.setFunnel = function(n) {
        this.funnel = n
    };
    this.getPage = function() {
        return this.page
    };
    this.setPage = function(n) {
        this.page = n
    };
    this.getCountry = function() {
        return this.country
    };
    this.setCountry = function(n) {
        this.country = n
    };
    this.getLanguage = function() {
        return this.language
    };
    this.setLanguage = function(n) {
        this.language = n
    };
    this.getTitle = function() {
        return this.title
    };
    this.setTitle = function(n) {
        this.title = n
    };
    this.getService = function() {
        return this.service
    };
    this.setService = function(n) {
        this.service = n
    };
    this.getProcess = function() {
        return this.process
    };
    this.setProcess = function(n) {
        this.process = n
    };
    this.getProduct = function() {
        return this.product
    };
    this.setProduct = function(n) {
        this.product = n
    }
};
com.bbva.kyop.bean.ActivityRegisterRequiredBean = new function() {
    var o = null;
    var p = null;
    var a = null;
    var j = null;
    var e = null;
    var h = null;
    var l = null;
    var n = null;
    var g = null;
    var b = null;
    var k = null;
    var q = null;
    var m = null;
    var f = null;
    var d = null;
    this.getLoginProcess = function() {
        return this.loginProcess
    };
    this.setLoginProcess = function(r) {
        this.loginProcess = r
    };
    this.getLogoutProcess = function() {
        return this.logoutProcess
    };
    this.setLogoutProcess = function(r) {
        this.logoutProcess = r
    };
    this.getMethod = function() {
        return this.method
    };
    this.setMethod = function(r) {
        this.method = r
    };
    this.isAjaxRequest = function() {
        return this.ajaxRequest
    };
    this.setAjaxRequest = function(r) {
        this.ajaxRequest = r
    };
    this.isTestConnection = function() {
        return this.testConnection
    };
    this.setTestConnection = function(r) {
        this.testConnection = r
    };
    this.getUrlWebTrends = function() {
        return this.urlWebTrends
    };
    this.setUrlWebTrends = function(r) {
        this.urlWebTrends = r
    };
    this.getIpClient = function() {
        return this.ipClient
    };
    this.setIpClient = function(r) {
        this.ipClient = r
    };
    this.getUser = function() {
        return this.user
    };
    this.setUser = function(r) {
        this.user = r
    };
    this.getCompany = function() {
        return this.company
    };
    this.setCompany = function(r) {
        this.company = r
    };
    this.getSession = function() {
        return this.session
    };
    this.setSession = function(r) {
        this.session = r
    };
    this.getDomain = function() {
        return this.domain
    };
    this.setDomain = function(r) {
        this.domain = r
    };
    this.getFpcDom = function() {
        return this.fpcDom
    };
    this.setFpcDom = function(r) {
        this.fpcDom = r
    };
    this.getDcsid = function() {
        return this.dcsid
    };
    this.setDcsid = function(r) {
        this.dcsid = r
    };
    this.getCallbackTestFail = function() {
        return this.callbackTestFail()
    };
    this.setCallbackTestFail = function(r) {
        this.callbackTestFail = r
    };
    this.getCallbackSendPostUrlFail = function() {
        return this.callbackSendPostUrlFail()
    };
    this.setCallbackSendPostUrlFail = function(r) {
        this.callbackSendPostUrlFail = r
    }
};
com.bbva.kyop.bean.FrequentlyOperationsBean = new function() {
    var a = undefined;
    this.getFrequentlyOperations = function() {
        return this.frequentlyOperations
    };
    this.setFrequentlyOperations = function(b) {
        this.frequentlyOperations = b
    };
    this.hasBeanFrequentlyOperationsSetted = function() {
        return typeof(this.frequentlyOperations) != "undefined"
    }
};
com.bbva.kyop.util.LoggerUtil = new function() {
    this.info = function() {
        if (consoleExists()) {
            var parameters = arguments;
            eval(createExecutionString("info", parameters))
        }
    };
    this.debug = function() {
        if (consoleExists()) {
            if (getInternetExplorerVersion() == -1) {
                var parameters = arguments;
                eval(createExecutionString("debug", parameters))
            } else {
                var parameters = arguments;
                eval(createExecutionString("log", parameters))
            }
        }
    };
    this.warn = function() {
        if (consoleExists()) {
            var parameters = arguments;
            eval(createExecutionString("warn", parameters))
        }
    };
    this.error = function() {
        if (consoleExists()) {
            var parameters = arguments;
            eval(createExecutionString("error", parameters))
        }
    };
    this.log = function() {
        if (consoleExists()) {
            var parameters = arguments;
            eval(createExecutionString("log", parameters))
        }
    };
    var createExecutionString = function(methodToExecute, parameters) {
        var executionStr = "try{ console.";
        executionStr += methodToExecute;
        executionStr += "(";
        $.each(parameters, function(i, item) {
            executionStr += "parameters[" + i + "],"
        });
        executionStr = executionStr.substr(0, executionStr.length - 1);
        executionStr += ");";
        executionStr += "} catch(e){}";
        return executionStr
    };
    var createText = function(parameters) {
        var executionStr = "";
        $.each(parameters, function(i, item) {
            executionStr += item + "\r\n"
        });
        executionStr = executionStr.substr(0, executionStr.length - 1);
        return executionStr
    };
    var consoleExists = function() {
        return typeof(console) != "undefined"
    };
    var getInternetExplorerVersion = function() {
        var rv = -1;
        if (navigator.appName == "Microsoft Internet Explorer") {
            var ua = navigator.userAgent;
            var re = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
            if (re.exec(ua) != null) {
                rv = parseFloat(RegExp.$1)
            }
        }
        return rv
    }
};
var logger = com.bbva.kyop.util.LoggerUtil;
com.bbva.kyop.util.I18nUtil = new function() {
    this.items = new Object();
    this.length = 0;
    this.setText = function(a, b) {
        if (!this.keyExists(a)) {
            this.length++
        }
        this.items[a] = b
    };
    this.getText = function(a) {
        var b = "Sin traducción";
        if (this.keyExists(a)) {
            b = this.items[a]
        }
        return b
    };
    this.getTextDefaultValue = function(b, a) {
        var d = a;
        if (this.keyExists(b)) {
            d = this.items[b]
        }
        return d
    };
    this.getAll = function() {
        return this.items
    };
    this.keyExists = function(a) {
        return typeof(this.items[a]) != "undefined"
    };
    this.remove = function(a) {
        if (this.keyExists(a)) {
            delete this.items[a];
            this.length--;
            return true
        }
        return false
    };
    this.removeAll = function() {
        this.items = null;
        this.items = new Object();
        this.length = 0
    };
    this.size = function() {
        return this.length
    };
    this.stringFormat = function() {
        if (arguments.length > 0) {
            var b = arguments[0];
            if (b != undefined && b != "") {
                for (var a = 1; a < arguments.length; a++) {
                    b = b.split("{" + (a - 1) + "}").join(arguments[a])
                }
            } else {
                b = ""
            }
            return b
        }
        return args[0]
    }
};
com.bbva.kyop.util.MenuUtil = new function() {
    this.items = new Object();
    this.length = 0;
    this.setMenu = function(a, b) {
        if (!this.keyExists(a)) {
            this.length++
        }
        this.items[a] = b
    };
    this.getMenu = function(a) {
        return getMenu(a, true)
    };
    this.getMenu = function(b, d) {
        var a = null;
        if (this.keyExists(b)) {
            a = this.items[b]
        } else {
            if (d) {
                logger.info("Menú con id: " + b + " No encontrado");
                com.bbva.kyop.util.MessageBoxUtil.showMessageBoxAlert(com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.i.rvsInvk.ntCsh.service"), com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.service.not.purchased.1") + " " + com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.service.not.purchased.2") + " " + com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.service.not.purchased.3") + " ", function() {})
            }
        }
        return a
    };
    this.isNewMenuOrBetaFrec = function(h, a) {
        if (com.bbva.kyop.util.MenuUtil.keyExists(h)) {
            var g = com.bbva.kyop.util.MenuUtil.getMenu(h).tipoIconoPropio;
            if ((g == "N") || (g == "B")) {
                return g
            }
        }
        if (a.length == 0) {
            return
        } else {
            var d = "";
            for (var b = 0; b < a.length; b++) {
                var f = a[b].menuOptionId;
                if (com.bbva.kyop.util.MenuUtil.keyExists(f)) {
                    var e = iconoBetaMenuSinHeredar(f);
                    if ((e == "B") || (e == "N")) {
                        if (d != "N") {
                            d = e
                        }
                    }
                }
            }
            return d
        }
    };
    this.iconoBetaMenuHeredar = function(b) {
        var a = "";
        if (com.bbva.kyop.util.MenuUtil.keyExists(b)) {
            if (com.bbva.kyop.util.MenuUtil.getMenu(b).newMenu) {
                a = com.bbva.kyop.util.MenuUtil.getMenu(b).tipoIcono
            }
        }
        if (a == null) {
            a = ""
        }
        return a
    };
    this.iconoBetaMenuSinHeredar = function(b) {
        var a = "";
        if (com.bbva.kyop.util.MenuUtil.keyExists(b)) {
            if (com.bbva.kyop.util.MenuUtil.getMenu(b).newMenu) {
                a = com.bbva.kyop.util.MenuUtil.getMenu(b).tipoIconoPropio
            }
        }
        if (a == null) {
            a = ""
        }
        return a
    };
    this.getAll = function() {
        return this.items
    };
    this.keyExists = function(a) {
        return typeof(this.items[a]) != "undefined"
    };
    this.remove = function(a) {
        if (this.keyExists(a)) {
            delete this.items[a];
            this.length--;
            return true
        }
        return false
    };
    this.removeAll = function() {
        this.items = null;
        this.items = new Object();
        this.length = 0
    };
    this.size = function() {
        return this.length
    }
};
com.bbva.kyop.util.FavoriteUtil = new function() {
    this.items = new Object();
    this.length = 0;
    this.setFavorite = function(a, b) {
        if (!this.keyExists(a)) {
            this.length++
        }
        this.items[a] = b
    };
    this.getFavorite = function(b) {
        var a = null;
        if (this.keyExists(b)) {
            a = this.items[b]
        } else {
            logger.info("Favorito con idMenú: " + b + " No encontrado")
        }
        return a
    };
    this.getAll = function() {
        return this.items
    };
    this.keyExists = function(a) {
        return typeof(this.items[a]) != "undefined"
    };
    this.remove = function(a) {
        if (this.keyExists(a)) {
            delete this.items[a];
            this.length--;
            return true
        }
        return false
    };
    this.removeAll = function() {
        this.items = null;
        this.items = new Object();
        this.length = 0
    };
    this.size = function() {
        return this.length
    };
    this.getKey = function(b, a) {
        return b + a
    }
};
com.bbva.kyop.util.ExtraParamsUtil = new function() {
    this.items = new Object();
    this.keyList = [];
    this.length = 0;
    this.addParam = function(a, b) {
        if (!this.keyExists(a)) {
            this.length++
        }
        this.items[a] = b;
        this.keyList[this.keyList.length] = a
    };
    this.getKey = function(a) {
        return this.keyList[a]
    };
    this.getParam = function(b) {
        var a = null;
        if (this.keyExists(b)) {
            a = this.items[b]
        } else {
            logger.info("Parámetro con id: " + b + " No encontrado")
        }
        return a
    };
    this.getAll = function() {
        return this.items
    };
    this.keyExists = function(a) {
        return typeof(this.items[a]) != "undefined"
    };
    this.removeAll = function() {
        this.keyList = [];
        this.items = null;
        this.items = new Object();
        this.length = 0
    };
    this.size = function() {
        return this.length
    }
};
com.bbva.kyop.util.ErrorHandler = new function() {
    this.manageError = function(j, b, g, h, e) {
        var d;
        var f;
        if (j && j != "") {
            d = com.bbva.kyop.util.I18nUtil.getText(j)
        } else {
            d = com.bbva.kyop.util.I18nUtil.getText(com.bbva.kyop.util.SessionUtil.getConfiguration().getDefaultErrorMessageTitleKey())
        }
        if (b && b != "") {
            f = com.bbva.kyop.util.I18nUtil.getText(b)
        } else {
            f = com.bbva.kyop.util.I18nUtil.getText(com.bbva.kyop.util.SessionUtil.getConfiguration().getDefaultErrorMessageTextKey())
        }
        if (g == 78) {
            a("index-user-error.html")
        } else {
            if (h != undefined && h == true) {
                a("index-error.html")
            } else {
                com.bbva.kyop.util.MessageBoxUtil.showMessageBoxError(d, f, g, "")
            }
        }
        if (e != null && e != "") {
            e()
        }
        logger.warn("Error en la aplicación: \n T�tulo: " + d + "\n Descripción: " + f + "\n Código: " + g)
    };
    var a = function(b) {
        document.location = b
    }
};
com.bbva.kyop.util.AjaxUtil = new function() {
    var d = false;
    var a = false;
    var b = function(h) {
        var g = com.bbva.kyop.controller.CoreController.getVirtualHost();
        var j = "../" + g + "/" + h.url;
        var f = true;
        if (com.bbva.kyop.util.AjaxUtil.getPortableVersion()) {
            j = h.urlMock
        } else {
            if (h.externalUrl != undefined) {
                j = h.externalUrl
            }
            if (com.bbva.kyop.util.AjaxUtil.getMock() != undefined && (com.bbva.kyop.util.AjaxUtil.getMock() == true || com.bbva.kyop.util.AjaxUtil.getMock() == "true")) {
                j = h.urlMock
            }
        }
        return j
    };
    var e = function(g) {
        var f = "";
        if (g != undefined && g != "") {
            f = $.param(g, true);
            f = f + "&dc=" + Date.now()
        } else {
            f = "dc=" + Date.now()
        }
        return f
    };
    this.sendRequestContext = function(g) {
        var j = b(g);
        var f = true;
        if (typeof(g.async) != "undefined") {
            f = g.async
        }
        var h = e(g.params);
        $.ajax({
            url: j,
            type: g.method,
            dataType: g.typeRequest,
            async: f,
            data: h,
            success: function(k) {
                g.callback(k)
            },
            error: function(k) {
                g.fallback(k)
            }
        })
    };
    this.redirectToLoginWithError = function(f) {
        if (f) {
            com.bbva.kyop.controller.CoreController.setCookie("CODIGO_ERROR", "PORTAL_FAILURE")
        }
        if (document.location.hostname.indexOf("helpdesk") != -1) {
            document.location = ("../../local_pibee/KDHDSolicitarCredenciales_es.html")
        } else {

        }
    };
    this.sendRequestJSON = function(g) {
        var j = b(g);
        var f = true;
        if (typeof(g.async) != "undefined") {
            f = g.async
        }
        var h = e(g.params);
        $.ajax({
            url: j,
            type: g.method,
            dataType: g.typeRequest,
            async: f,
            data: h,
            success: function(m) {
                try {
                    if (m.success == true) {
                        g.callback(m.data)
                    } else {
                        if (g.loginRedirectOnError != undefined && g.loginRedirectOnError == true) {
                            com.bbva.kyop.util.AjaxUtil.redirectToLoginWithError(true)
                        } else {
                            if (g.showInternalMessageError == true) {
                                com.bbva.kyop.controller.ReverseCallerController.executeUrlFromReverseCaller("external/genericError.html")
                            } else {
                                var k = "";
                                var l = "";
                                var o = 0;
                                if (m.errorInfo != null && m.errorInfo != undefined) {
                                    if (m.errorInfo.errorKeyTitle != null && m.errorInfo.errorKeyTitle != undefined) {
                                        k = m.errorInfo.errorKeyTitle
                                    }
                                    if (m.errorInfo.errorKeyDescription != null && m.errorInfo.errorKeyDescription != undefined) {
                                        l = m.errorInfo.errorKeyDescription
                                    }
                                    if (m.errorInfo.errorCode != null && m.errorInfo.errorCode != undefined) {
                                        o = m.errorInfo.errorCode
                                    }
                                }
                                if (g.fallbackFn) {
                                    if (g.showMessageError != undefined && g.showMessageError == true) {
                                        com.bbva.kyop.util.ErrorHandler.manageError(k, l, o, g.abortApp, g.fallbackFn)
                                    } else {
                                        g.fallbackFn(m)
                                    }
                                } else {
                                    com.bbva.kyop.util.ErrorHandler.manageError(k, l, o, g.abortApp, null)
                                }
                            }
                        }
                    }
                } catch (n) {
                    logger.warn("Error al realizar el decode del JSON: " + n);
                    logger.warn("Url: " + j);
                    if (j == "../kyop_mult_web_kyoppresentation_01/users/getUser.json") {
                        com.bbva.kyop.util.MessageBoxUtil.showMessageBoxError("Error Info Usuario", "Error al obtener la información del usuario", 99, function() {})
                    }
                    if (n.message.indexOf("WebSEAL") != -1) {
                        logger.warn("Finalizada sesión WebSeal");
                        com.bbva.kyop.util.MessageBoxUtil.showMessageBoxConfirm("WebSEAL", com.bbva.kyop.util.I18nUtil.getText("logout.message.title"), function() {
                            com.bbva.kyop.util.SessionUtil.endSessions(true)
                        })
                    }
                }
            },
            error: function(k, m, l) {
                logger.error("Error al pedir destinyUrl:" + j + " textStatus:" + m + " errorThrown:" + l);
                if (m == "parsererror") {
                    if (k.responseText.indexOf("<HTML>") != -1 || k.responseText.indexOf("<html>") != -1) {
                        logger.error("Finalizada sesion WebSeal");
                        com.bbva.kyop.util.AjaxUtil.redirectToLoginWithError(false)
                    }
                } else {
                    if (g.fallbackFn) {
                        if (g.fallbackFn != null && g.fallbackFn != "") {
                            g.fallbackFn(k)
                        }
                    }
                    if (g.loginRedirectOnError != undefined && g.loginRedirectOnError == true) {
                        com.bbva.kyop.util.AjaxUtil.redirectToLoginWithError(true)
                    }
                }
            }
        })
    };
    this.sendRequestJSONObject = function(g) {
        var h = b(g);
        var f = true;
        if (typeof(g.async) != "undefined") {
            f = g.async
        }
        $.ajax({
            url: h,
            type: g.method,
            dataType: g.typeRequest,
            async: f,
            data: g.jsonData,
            contentType: "application/json",
            mimeType: "application/json",
            success: function(n) {
                try {
                    if (n.success == true) {
                        if (n.data.length > 0) {
                            if (n.data[0].validationErrors != undefined) {
                                var l = n.data[0].validationErrors;
                                if ((l[0].messageKey).indexOf("Could not access HTTP invoker remote service") != -1) {
                                    com.bbva.kyhd.controller.ProductController.showProductPanel();
                                    var k = "El servicio remoto asociado a la uuaa KYGU no está disponible, por lo que no se puede mostrar la opción seleccionada";
                                    com.bbva.kyhd.controller.ValidationController.printMsgError(k, "kyhd-conf-portals-errors")
                                } else {
                                    if (l[0].params != undefined && l[0].params.length > 0) {
                                        com.bbva.kyhd.controller.ValidationController.printAjaxErrorsWithParams(l[0].messageKey, l[0].params, g.errorContainerId)
                                    } else {
                                        com.bbva.kyhd.controller.ValidationController.printAjaxErrors(l, g.errorContainerId)
                                    }
                                }
                            } else {
                                g.callback(n.data);
                                if (g.successContainerId != undefined) {
                                    com.bbva.kyhd.controller.ValidationController.printMsgSuccess(g.successContainerId)
                                }
                                if (g.warnContainerId != undefined && n.data[0] != "") {
                                    com.bbva.kyhd.controller.ValidationController.printMsgWarn(g.warnContainerId, n.data[0])
                                }
                            }
                        } else {
                            g.callback(n.data);
                            if (g.successContainerId != undefined) {
                                com.bbva.kyhd.controller.ValidationController.printMsgSuccess(g.successContainerId)
                            }
                            if (g.warnContainerId != undefined && n.data[0] != "") {
                                com.bbva.kyhd.controller.ValidationController.printMsgWarn(g.warnContainerId, n.data[0])
                            }
                        }
                    } else {
                        if (g.loginRedirectOnError != undefined && g.loginRedirectOnError == true) {
                            com.bbva.kyhd.controller.CoreController.setCookie("CODIGO_ERROR", "PORTAL_FAILURE");

                        } else {
                            if (g.showInternalMessageError == true) {
                                com.bbva.kyhd.controller.ReverseCallerController.executeUrlFromReverseCaller("external/genericError.html")
                            } else {
                                var j = "";
                                var m = "";
                                var p = 0;
                                if (n.errorInfo != null && n.errorInfo != undefined) {
                                    if (n.errorInfo.errorKeyTitle != null && n.errorInfo.errorKeyTitle != undefined) {
                                        j = n.errorInfo.errorKeyTitle
                                    }
                                    if (n.errorInfo.errorKeyDescription != null && n.errorInfo.errorKeyDescription != undefined) {
                                        m = n.errorInfo.errorKeyDescription
                                    }
                                    if (n.errorInfo.errorCode != null && n.errorInfo.errorCode != undefined) {
                                        p = n.errorInfo.errorCode
                                    }
                                }
                                if (g.fallbackFn) {
                                    if (g.showMessageError != undefined && g.showMessageError == true) {
                                        com.bbva.kyhd.util.ErrorHandler.manageError(j, m, p, g.abortApp, g.fallbackFn)
                                    } else {
                                        g.fallbackFn(n)
                                    }
                                } else {
                                    com.bbva.kyhd.util.ErrorHandler.manageError(j, m, p, g.abortApp, null)
                                }
                            }
                        }
                    }
                } catch (o) {
                    logger.warn("Error al realizar el decode del JSON: " + o);
                    logger.warn("Ha podido ser un error por el procesamiento del callback");
                    logger.warn("Url: " + h);
                    if (o.message.indexOf("WebSEAL") != -1) {
                        logger.warn("Finalizada sesión WebSeal");
                        com.bbva.kyhd.util.MessageBoxUtil.showMessageBoxConfirm("WebSEAL", com.bbva.kyhd.util.I18nUtil.getText("logout.message.title"), function() {
                            com.bbva.kyhd.util.SessionUtil.endSessions(true)
                        })
                    }
                }
            },
            error: function(j) {
                if (h == "../kyop_mult_web_kyoppresentation_01/users/getUser.json") {
                    com.bbva.kyhd.util.MessageBoxUtil.showMessageBoxError("Error Info Usuario", "Error al obtener la información del usuario", 99, function() {
                        document.location = ("index-error.html")
                    })
                } else {
                    if (g.fallbackFn) {
                        if (g.fallbackFn != null && g.fallbackFn != "") {
                            g.fallbackFn(j)
                        }
                    }
                    if (g.abortApp != undefined && g.abortApp == true) {
                        document.location = ("index-error.html")
                    }
                }
            }
        })
    };
    this.sendRequest = function(g, h, f) {
        var k = g.url;
        if (this.getMock() != undefined && (this.getMock() == true || this.getMock() == "true")) {
            k = g.urlMock
        }
        var l = function(n) {
            var m = "";
            if (n != undefined && n != "") {
                m = $.param(n, true)
            }
            return m
        };
        var j = l(g.params);
        $.ajax({
            url: k,
            type: g.method,
            dataType: g.typeRequest,
            async: true,
            data: j,
            success: function(m) {
                if (h != null && h != "") {
                    h(m)
                }
            },
            error: function(m) {
                if (f != null && f != "") {
                    f(m)
                }
            }
        })
    };
    this.findObjJson = function(j, h, g) {
        var f = null;
        $.map(j, function(l, k) {
            if (l[h] == g) {
                f = l
            }
        });
        return f
    };
    this.findObject = function(j, g, k) {
        var h = [];
        for (var f in j) {
            if (!j.hasOwnProperty(f)) {
                continue
            }
            if (typeof j[f] == "object") {
                h = h.concat(getObjects(j[f], g, k))
            } else {
                if (f == g && j[g] == k) {
                    h.push(j)
                }
            }
        }
        return h
    };
    this.parseJSONTextToJSONObject = function(f) {
        return $.parseJSON(f)
    };
    this.parseJSONObjectToString = function(f) {
        return JSON.stringify(f, "\t")
    };
    this.setMock = function(f) {
        this.mock = f
    };
    this.getMock = function() {
        return this.mock
    };
    this.setPortableVersion = function(f) {
        this.portableVersion = f
    };
    this.getPortableVersion = function() {
        return this.portableVersion
    }
};
com.bbva.kyop.util.MessageBoxUtil = new function() {
    var a = 18;
    this.callbackFn = null;
    this.callbackCancel = null;
    this.closeMessageBox = function() {
        $("#kyop-messagebox-container").empty();
        this.resetCallbackFunctions()
    };
    this.showMessageBoxAlert = function(h, j, l) {
        this.callbackFn = l;
        var k = {
            strTitle: h,
            strMsg: j,
            fnCallback: l,
            type: "alert",
            buttons: {
                button1: com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.accept")
            }
        };
        this.loadMessageBoxTemplate(k)
    };
    this.showError = function(h, k, j, l) {
        this.showMessageBoxError(h, k, j, l)
    };
    this.showMessageBoxError = function(h, k, j, m) {
        this.callbackFn = m;
        var l = {
            strTitle: h,
            strMsg: k,
            strErrorCode: j,
            type: "error",
            buttons: {
                button1: com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.accept")
            }
        };
        logger.info("Se ha producido un error con el código: " + j);
        this.loadMessageBoxTemplate(l)
    };
    this.showMessageBoxConfirm = function(h, j, m, l) {
        this.callbackFn = m;
        this.callbackCancel = l;
        var k = {
            strTitle: h,
            strMsg: j,
            type: "confirm",
            buttons: {
                button1: com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.accept"),
                button2: com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.cancel")
            }
        };
        this.loadMessageBoxTemplate(k)
    };
    this.loadMessageBoxTemplate = function(h) {
        $("#kyop-messagebox-container").empty();
        this.setMessageBoxTemplate(h, "#kyop-messagebox-tmpl", "#kyop-messagebox-container");
        $("#kyop-messagebox-internal-container-div").attr("initWidth", $("#kyop-messagebox-internal-container-div").width());
        $("#kyop-messagebox-internal-container-div").attr("initHeight", $("#kyop-messagebox-internal-container-div").height());
        com.bbva.kyop.util.MessageBoxUtil.resizeIfExistContainerMessageBox()
    };
    this.executeCallback = function() {
        var h = this.callbackFn;
        if (h != null && h != undefined && h != "") {
            h()
        }
        this.closeMessageBox()
    };
    this.executeCallbackCancel = function() {
        var h = this.callbackCancel;
        if (h != null && h != undefined && h != "") {
            h()
        }
        this.closeMessageBox()
    };
    this.resetCallbackFunctions = function() {
        this.callbackFn = null;
        this.callbackCancel = null
    };
    this.setMessageBoxTemplate = function(k, j, h) {
        $(j).tmpl(k).appendTo(h)
    };
    this.testMessageBoxAlert = function() {
        com.bbva.kyop.util.MessageBoxUtil.showMessageBoxAlert("T�tulo mensaje Alerta", "Este es el mensaje que se mostrará cuando aparezca un mensaje de alerta o notificación", function() {
            alert("Callback Aceptar")
        })
    };
    this.testMessageBoxError = function() {
        com.bbva.kyop.util.MessageBoxUtil.showMessageBoxError("T�tulo mensaje Error", "Este es el mensaje que se mostrará cuando aparezca un mensaje de error", 56, function() {
            alert("Callback Aceptar")
        })
    };
    this.testMessageBoxConfirm = function() {
        com.bbva.kyop.util.MessageBoxUtil.showMessageBoxConfirm("T�tulo mensaje Confirmación", "Este es el mensaje que se mostrará cuando aparezca un mensaje de confirmación", function() {
            alert("Callback Aceptar")
        }, function() {
            alert("Callback Cancelar")
        })
    };
    var d = function(h) {
        return h > $(window).height()
    };
    var b = function(l, h, j) {
        var m = ($(window).height() - h - a * 2) / 2;
        var k = "height:" + h + "px; width:" + l + "px; margin-top:" + m + "px !important;";
        $(j).attr("style", k)
    };
    var f = function(l, h, j) {
        var k = "height:" + h + "px; width:" + l + "px; margin-top:0px !important;";
        $(j).attr("style", k)
    };
    var e = function(k, h, j) {
        $(j).attr("initWidth", k);
        $(j).attr("initHeight", h)
    };
    var g = function(l, h, k, j, m) {
        if (d(h)) {
            f(l, $(window).height() - 32, j)
        } else {
            b(l, h, j)
        }
        e(l, h, j)
    };
    this.resizeIfExistContainerMessageBox = function() {
        if (!$("#kyop-messagebox-internal-container-div").is(":hidden")) {
            var j = $("#kyop-messagebox-internal-container-div").attr("initWidth");
            var h = $("#kyop-messagebox-internal-container-div").attr("initHeight");
            g(j, h, undefined, "#kyop-messagebox-internal-container-div", undefined)
        }
    }
};
com.bbva.kyop.util.SessionUtil = new function() {
    var V = null;
    var F = null;
    var ai = new Date();
    var ae = false;
    var y = 0;
    var ag;
    var T;
    var af = new Array();
    var ab;
    var N;
    var d;
    var J;
    var G;
    var A;
    var af = new Array();
    var ab;
    var f = ["PD-ID", "COD_IDIOMISO", "INICIO", "PAIS", "CODIGO_PRODUCTO"];
    var q = false;
    var s = "KYOP_COOKIE_SESSION_TIME";
    var E = "KYOP_S01";
    var b = "false";
    this.isSessionDestroyed = function() {
        return this.sessionDestroyed
    };
    this.setSessionDestroyed = function(aj) {
        this.sessionDestroyed = aj
    };
    var j = function() {
        com.bbva.kyop.util.SessionUtil.deleteCookie(com.bbva.kyop.util.SessionUtil.getCookieTimeoutAutomatic())
    };
    var u = function(aj) {
        logger.debug("Redirección a: " + aj);
        j();
        com.bbva.kyop.util.SessionUtil.deleteCookie("KYOP_S01", "/SESKYOP/");
        com.bbva.kyop.util.SessionUtil.deleteCookie("KYOP_01", "/SESKYOP/");
        document.location.href = aj
    };
    this.endWebsealSession = function() {
        var aj = document.location.hostname + this.getConfiguration().getPathWebseal();
        this.endSessions(false);
        $.ajax({
            url: "https://" + aj,
            type: "GET",
            dataType: "html",
            success: function(ak) {},
            error: function(ak) {}
        })
    };
    var X = function() {
        var aj = com.bbva.kyop.controller.ProcessController.getOpenedWindow();
        if (typeof(aj) != "undefined") {
            aj.close();
            com.bbva.kyop.controller.ProcessController.setOpenedWindow(undefined)
        }
    };
    this.endSessions = function(aj) {
        com.bbva.kyop.controller.CoreController.closeChromeNotification();
        var ak = this;
        com.bbva.kyop.util.UUAASessionManager.endSessionOpenedProcess();
        X();
        com.bbva.kyop.util.AjaxUtil.setMock(false);
        com.bbva.kyop.util.AjaxUtil.sendRequestContext({
            url: ak.getConfiguration().getUrlSessionLogout(),
            urlMock: "mock/core/getConfiguration.json",
            method: "POST",
            typeRequest: "json",
            abortApp: false,
            callback: function(am) {
                logger.debug("Finalización sesión de Marco CIB, initialHref:" + initialHref + " window.location.href:" + window.location.href);
                if (aj) {
                    blnIsEndSessionClose = true;
                    logger.debug("Registro de actividad logout");
                    var al = com.bbva.kyop.bean.UserBean.getUserInformation().getProductId();
                    var ao = com.bbva.kyop.bean.UserBean.getRegionalInformation().getLanguage();
                    var an = com.bbva.kyop.bean.UserBean.getRegionalInformation().getCodIso();
                    if (!com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().isHelpDesk()) {
                        com.bbva.kyop.component.ActivityRegister.logoutRegister(al, ao, an, function() {
                            u(ak.getConfiguration().getPathWebseal());
                            com.bbva.kyop.util.SessionUtil.setSessionDestroyed(true)
                        })
                    } else {
                        u(ak.getConfiguration().getPathWebseal())
                    }
                }
            },
            fallback: function(al) {
                if (aj) {
                    logger.debug("Redirección a: " + ak.getConfiguration().getPathWebseal());
                    document.location.href = ak.getConfiguration().getPathWebseal()
                }
            }
        })
    };
    this.getUserInfo = function(aj) {
        com.bbva.kyop.util.AjaxUtil.setMock(false);
        com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
            url: "users/getUser.json",
            urlMock: "mock/core/getUser.json",
            method: "POST",
            typeRequest: "json",
            abortApp: true,
            callback: function(ak) {
                if (aj != null && aj != "") {
                    aj(ak)
                }
            }
        })
    };
    this.getConfigurationInfo = function(aj) {
        com.bbva.kyop.util.AjaxUtil.setMock(false);
        com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
            url: "core/getConfiguration.json",
            urlMock: "mock/core/getConfiguration.json",
            method: "POST",
            typeRequest: "json",
            abortApp: false,
            callback: function(ak) {
                if (aj != null && aj != "") {
                    aj(ak)
                }
            }
        })
    };
    this.getUnitedConfigurationInfo = function(aj) {
        com.bbva.kyop.util.AjaxUtil.setMock(false);
        com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
            url: "core/getUnitedConfiguration.json",
            urlMock: "mock/core/getConfiguration.json",
            method: "POST",
            typeRequest: "json",
            abortApp: false,
            callback: function(ak) {
                if (aj != null && aj != "") {
                    aj(ak)
                }
            }
        })
    };
    this.startTimer = function() {
        P();
        M();
        v();
        a()
    };
    this.setConfiguration = function(aj) {
        this.configuration = aj
    };
    this.getConfiguration = function() {
        return this.configuration
    };
    this.setUser = function(aj) {
        this.user = aj
    };
    this.getUser = function() {
        return this.user
    };
    this.notifyProcessRequest = function() {
        var al = this;
        var ak = new Date();
        var aj = ak.getTime() - al.sessionTimeStamp.getTime();
        if (aj > (parseInt(al.getConfiguration().getSessionTimeOut()))) {
            al.askEndSession()
        } else {
            al.sessionTimeStamp = ak
        }
    };
    this.notifyProcessRequestTaskManager = function() {
        var al = this;
        var ak = new Date();
        var aj = ak.getTime() - al.sessionTimeStamp.getTime();
        if (aj > (parseInt(al.getConfiguration().getSessionTimeOut()))) {
            al.askEndSession()
        }
    };
    this.askEndSession = function() {
        var ak = this;
        ak.blnSessionControl = false;
        var aj = setTimeout(function() {
            if (ak.blnSessionControl) {
                logger.debug("Timeout");
                ak.endSessions(true)
            }
        }, 15000);
        ak.blnSessionControl = true
    };
    var K = function() {
        alert(com.bbva.kyop.util.I18nUtil.getText("kyop.ntch.another.login.message"));
        com.bbva.kyop.controller.CoreController.refreshPortal()
    };
    var Y = function(aj, ak) {
        if (com.bbva.kyop.bean.UserBean.getUserInformation().getUserId() != aj) {
            K();
            return
        }
        if (com.bbva.kyop.bean.UserBean.getCompanyInformation().getCompanyId() != ak) {
            K()
        }
    };
    this.maintainSessionBack = function() {
        com.bbva.kyop.util.AjaxUtil.setMock(false);
        com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
            url: "session/sessionPing.json",
            urlMock: "core/ping.json",
            method: "POST",
            abortApp: false,
            typeRequest: "json",
            async: true,
            callback: function(aj) {
                Y(aj[0].userId, aj[0].referenceId);
                com.bbva.kyop.util.LoggerUtil.debug("Ping realizado satisfactoriamente al servidor")
            }
        })
    };
    this.continueSession = function() {
        com.bbva.kyop.util.SessionUtil.resetTimer();
        com.bbva.kyop.util.UUAASessionManager.doPingUrls();
        this.maintainSessionBack()
    };
    this.portalLogout = function() {
        this.endSessions(true)
    };
    var aa = function() {
        return 1.06 * 1000
    };
    var O = function() {
        return com.bbva.kyop.controller.CoreController.getCookie(com.bbva.kyop.util.SessionUtil.getCookieTimeoutAutomatic()) != null
    };
    this.getCookieTimeoutAutomatic = function() {
        return s + com.bbva.kyop.controller.CoreController.getCookie(E)
    };
    var w = function() {
        com.bbva.kyop.controller.MenuRwdController.changeAttrAsrcForSrc("#kyop-automatic-footer-img-clock");
        $(".kyop-logout-automatic-footer").show()
    };
    var m = function() {
        var al = Math.floor(com.bbva.kyop.controller.CoreController.getCookie(com.bbva.kyop.util.SessionUtil.getCookieTimeoutAutomatic()) / 1000);
        var am = com.bbva.kyop.util.SessionUtil.getConfiguration().getSessionEndAutomatic().getTimeToShowMessage();
        var ak = com.bbva.kyop.util.SessionUtil.getConfiguration().getSessionEndAutomatic().getInitTime();
        var aj = com.bbva.kyop.util.SessionUtil.getConfiguration().getSessionEndAutomatic().getLoginTime();
        com.bbva.kyop.util.SessionUtil.getConfiguration().getSessionEndAutomatic().setLoginTime(aj - com.bbva.kyop.controller.CoreController.getCookie(com.bbva.kyop.util.SessionUtil.getCookieTimeoutAutomatic()));
        if (al < am) {
            setInterval(o, aa())
        }
        if (al > am && ak >= al) {
            com.bbva.kyop.util.SessionUtil.getConfiguration().getSessionEndAutomatic().setCounterTime(ak - al);
            w();
            setInterval(Q, aa())
        }
    };
    var H = function() {
        var aj = com.bbva.kyop.util.SessionUtil.getConfiguration().getPingTimeRequest();
        var ak = com.bbva.kyop.util.SessionUtil.getConfiguration().getLastPingTimePerformed();
        var al = new Date().getTime();
        if (al >= ak + aj) {
            com.bbva.kyop.util.UUAASessionManager.doPingUrls();
            com.bbva.kyop.util.SessionUtil.maintainSessionBack();
            com.bbva.kyop.util.SessionUtil.getConfiguration().setLastPingTimePerformed(new Date().getTime())
        }
    };
    var v = function() {
        com.bbva.kyop.util.SessionUtil.getConfiguration().setLastPingTimePerformed(new Date().getTime());
        setInterval(H, aa())
    };
    var M = function() {
        if (com.bbva.kyop.util.SessionUtil.getConfiguration().getSessionEndAutomatic().isEnabled()) {
            if (O()) {
                m()
            } else {
                setInterval(o, aa())
            }
        }
    };
    var P = function() {
        var ak = this;
        ag = com.bbva.kyop.util.SessionUtil.getConfiguration().getSessionTimeOut() * 1000;
        N = com.bbva.kyop.util.SessionUtil.getConfiguration().getWindowCountDown() * 1;
        T = aa();
        ab = com.bbva.kyop.util.SessionUtil.getConfiguration().getUrlSessionLogout();
        if (!ag) {
            ag = 525000
        }
        if (!N) {
            N = 15
        }
        if (!T) {
            N = 106000
        }
        y = new Date().getTime();
        d = setInterval(l, T);
        var aj = window.top.location.pathname.substring(0, window.top.location.pathname.lastIndexOf("/"));
        ac(aj);
        $(document).click(function(al) {
            R();
            com.bbva.kyop.controller.CoreController.controlTooltipsArrows()
        });
        $(document).keypress(function(al) {
            R()
        });
        $("#kdpoArea").load(function() {
            R()
        });
        ad(N)
    };
    this.iFrameActivityRegister = function(aj) {
        if (aj) {
            com.bbva.kyop.controller.CoreController.controlTooltipsArrows()
        }
        logger.debug("Se ha detectado actividad en el iFrame ");
        R()
    };
    var R = function() {
        y = new Date().getTime()
    };
    var l = function() {
        var aj = new Date().getTime();
        if (aj >= y + ag) {
            h()
        }
    };
    var o = function() {
        var al = new Date().getTime();
        var aj = com.bbva.kyop.util.SessionUtil.getConfiguration().getSessionEndAutomatic().getLoginTime();
        var ak = com.bbva.kyop.util.SessionUtil.getConfiguration().getSessionEndAutomatic().getTimeToShowMessage() * 1000;
        if (al >= aj + ak) {
            W()
        }
    };
    var g = function(ak) {
        var aj = Math.floor(ak / 60);
        var al = ak - aj * 60;
        return (aj > 9 ? aj : "0" + aj) + ":" + (al > 9 ? al : "0" + al)
    };
    var Q = function() {
        var aj = com.bbva.kyop.util.SessionUtil.getConfiguration().getSessionEndAutomatic().getCounterTime() - 1;
        com.bbva.kyop.util.SessionUtil.getConfiguration().getSessionEndAutomatic().setCounterTime(aj);
        if (aj >= 0) {
            $("#kyop-logout-automatic-footer-time").html(g(aj))
        }
        if (aj <= 0) {
            com.bbva.kyop.util.SessionUtil.endSessions(true)
        }
    };
    var W = function() {
        if (!q) {
            var ak = com.bbva.kyop.util.SessionUtil.getConfiguration().getSessionEndAutomatic().getInitTime();
            var al = com.bbva.kyop.util.SessionUtil.getConfiguration().getSessionEndAutomatic().getTimeToShowMessage();
            var aj = ak - al;
            com.bbva.kyop.util.SessionUtil.getConfiguration().getSessionEndAutomatic().setCounterTime(aj);
            setInterval(Q, aa());
            Z(aj);
            Q();
            w();
            q = true;
            z();
            $("#kyop-timeoutcontainerautomatic").show()
        }
    };
    var h = function() {
        if (!q) {
            var aj = $("#kyop-img-desconexion").attr("asrc");
            if (aj) {
                $("#kyop-img-desconexion").attr("src", aj);
                $("#kyop-img-desconexion").attr("asrc", "")
            }
            com.bbva.kyop.controller.CoreController.launchPortalTitleProcess();
            $("#kyop-timeoutcontainer").show();
            G = N;
            clearInterval(d);
            J = setInterval(I, aa())
        }
    };
    var z = function() {
        $("#kyop-timeoutcontainer").hide();
        d = setInterval(l, T);
        clearInterval(J);
        G = N + 1;
        I();
        com.bbva.kyop.controller.CoreController.stopPortalTitleProcess()
    };
    var I = function() {
        if (G > 0) {
            G = G - 1;
            $("#timerVentanaFinSesion")[0].innerHTML = G;
            if (G == 0) {
                com.bbva.kyop.util.SessionUtil.endSessionsPopUp()
            }
        }
    };
    this.endSessionsPopUp = function() {
        $("#ventanaFinSesion #botonesVentanaFinDesconexion").hide();
        $("#ventanaFinSesion #cargandoFinDesconexion").show();
        com.bbva.kyop.util.SessionUtil.endSessions(true)
    };
    var ad = function(al) {
        var aj = com.bbva.kyop.util.SessionUtil.getUser().getCompanyInformation().isLatam;
        if (aj) {
            var ak = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductId();
            var am = '<div id="ventanaFinSesion"><div class="ventanaModal desconexion" style="display: block;"><h1 class="azul">' + com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.i.msg.title.disconAdvice") + '</h1><div id="kyop-timeoutcontainer-text" class="marginBottom20"><p>' + com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.i.msg.disconCauseInactivity1_6");
            if (ak == "002" || ak == "102") {
                am += com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.i.msg.disconCauseInactivity7_6")
            } else {
                am += com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.i.msg.disconCauseInactivity2_6")
            }
            am += com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.i.msg.disconCauseInactivity3_6") + com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.i.msg.disconCauseInactivity4_6") + com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.i.msg.disconCauseInactivity5_6") + com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.i.msg.disconCauseInactivity6_6") + '</p></div><div class="clearAll" id=""></div><div class="centrado"><h2>' + com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.i.msg.disconectionWaitingTime") + '</h2></div><div class="centrado"> <div class="interior"> <div class="centrado bordeDesconexion ancho150" style="margin:auto"> <p class="numero" id="timerVentanaFinSesion">' + al + '</p><p class="letra">' + com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.i.common.seconds") + '</p></div><div class="marginTop5"> <img id="kyop-img-desconexion" alt="" asrc="./resources/images/desconexion.png"></div></div> </div> <div class="clearAll" id=""></div> <div id="botonesVentanaFinDesconexion" class="marginTop20"> <div class="dobleColumnaIzquierda dobleColumnaBoton"> <div class="interior"> <button class="grandote right" id="continuarVentanaFinSesion" onclick="com.bbva.kyop.util.SessionUtil.continueSession();" type="button" value="">' + com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.i.common.getActiveSession") + '<img alt="" class="botonDesconectar" src="./resources/images/img_trans_1x1.gif"></button></div> </div> <div class="dobleColumnaDerecha dobleColumnaBoton"><div class="interior"><button class="grandote bgRojo left" id="cerrarVentanaFinSesion" onclick="com.bbva.kyop.util.SessionUtil.endSessionsPopUp()" type="button" value="">' + com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.i.common.disconnectNow") + '<img alt="" class="botonDesconectar" src="./resources/images/img_trans_1x1.gif"></button></div></div><div class="clearAll"></div></div><div id="cargandoFinDesconexion" class="marginTop20" style="display:none"><div class="centrado  marginBottom10"><img alt="imagen de desconexión" src="resources/images/common/loadingNBbva.gif" height="20px" width="20px"/></div><div class="centrado" style="font-size:14px">' + com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.i.common.disconnectNow") + "</div></div>";
            '</div><div class="fondoTransparente" id=""></div></div>';
            $("#kyop-timeoutcontainer").html(am)
        } else {
            var am = '<div id="ventanaFinSesion"><div class="ventanaModal desconexion" style="display: block;"><h1 class="azul">' + com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.i.msg.title.disconAdvice") + '</h1><div id="kyop-timeoutcontainer-text" class="marginBottom20"><p>' + com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.i.msg.disconCauseInactivity1_6") + com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.i.msg.disconCauseInactivity2_6") + com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.i.msg.disconCauseInactivity3_6") + com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.i.msg.disconCauseInactivity4_6") + com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.i.msg.disconCauseInactivity5_6") + com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.i.msg.disconCauseInactivity6_6") + '</p></div><div class="clearAll" id=""></div><div class="centrado"><h2>' + com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.i.msg.disconectionWaitingTime") + '</h2></div><div class="centrado"> <div class="interior"> <div class="centrado bordeDesconexion ancho150" style="margin:auto"> <p class="numero" id="timerVentanaFinSesion">' + al + '</p><p class="letra">' + com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.i.common.seconds") + '</p></div><div class="marginTop5"> <img id="kyop-img-desconexion" alt="" asrc="./resources/images/desconexion.png"></div></div> </div> <div class="clearAll" id=""></div> <div id="botonesVentanaFinDesconexion" class="marginTop20"> <div class="dobleColumnaIzquierda dobleColumnaBoton"> <div class="interior"> <button class="grandote right" id="continuarVentanaFinSesion" onclick="com.bbva.kyop.util.SessionUtil.continueSession();" type="button" value="">' + com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.i.common.getActiveSession") + '<img alt="" class="botonDesconectar" src="./resources/images/img_trans_1x1.gif"></button></div> </div> <div class="dobleColumnaDerecha dobleColumnaBoton"><div class="interior"><button class="grandote bgRojo left" id="cerrarVentanaFinSesion" onclick="com.bbva.kyop.util.SessionUtil.endSessionsPopUp()" type="button" value="">' + com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.i.common.disconnectNow") + '<img alt="" class="botonDesconectar" src="./resources/images/img_trans_1x1.gif"></button></div></div><div class="clearAll"></div></div><div id="cargandoFinDesconexion" class="marginTop20" style="display:none"><div class="centrado  marginBottom10"><img alt="imagen de desconexión" src="resources/images/common/loadingNBbva.gif" height="20px" width="20px"/></div><div class="centrado" style="font-size:14px">' + com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.i.common.disconnectNow") + "</div></div>";
            '</div><div class="fondoTransparente" id=""></div></div>';
            $("#kyop-timeoutcontainer").html(am)
        }
    };
    var L = function(al, ak, aj) {
        $(ak).tmpl(al).appendTo(aj)
    };
    var Z = function(ak) {
        var am = (Math.floor(ak / 60));
        var al = {
            title: com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.i.msg.title.disconAdvice"),
            subtitle: com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.i.msg.disconectionWaitingTime"),
            message: com.bbva.kyop.util.I18nUtil.stringFormat(com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.i.msg.disconAutomaticCauseInactivity"), am),
            minutes: am,
            minutesStr: com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.i.common.minutes")
        };
        var aj = L(al, "#kyop-window-logout-automatic-tmpl", "#kyop-timeoutcontainerautomatic")
    };
    this.resetTimer = function() {
        R();
        z()
    };
    var t = function(aj, ak) {
        return $.inArray($.trim(aj), ak) >= 0
    };
    this.deleteCookies = function() {
        var ak = this.getCookies();
        for (i in ak) {
            var aj = ak[i].indexOf("=");
            var al = ak[i].substring(0, aj);
            if (!t(al, f)) {
                com.bbva.kyop.util.SessionUtil.deleteCookie(al)
            }
        }
    };
    this.getCookies = function() {
        return document.cookie.split(";")
    };
    this.deleteCookie = function(aj, al) {
        aj = $.trim(aj);
        var am = "/";
        var ak = "";
        if (al != undefined) {
            am = al
        }
        ak = aj + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=" + am;
        logger.debug("Borrando cookie [" + aj + "]");
        document.cookie = ak
    };
    var U = function() {
        $.each(af, function(ak, al) {
            var aj = p(al);
            C(aj)
        })
    };
    var D = function() {
        ah(function() {
            fKdrgEnviarLogout();
            alert($("#portal_alerta_cerrar_pestana").val());
            var aj = $("#" + window.portal_form);
            window.top.unloadNoValido = true;
            $("#" + window.portal_form).attr("action", ab);
            $("#" + window.portal_form).submit()
        })
    };
    var ah = function(aj) {
        S(af, aj)
    };
    var S = function(al, am) {
        if (al.length > 0) {
            var aj = al.pop();
            var ak = B(aj);
            $.ajax({
                url: ak,
                type: "POST",
                dataType: "html",
                async: true,
                error: function(an, ap, ao) {
                    S(al, am)
                },
                success: function() {
                    S(al, am)
                }
            })
        } else {
            if (am) {
                am()
            }
        }
    };
    var p = function(al) {
        if (al.indexOf("/servlet") >= 0) {
            al = al.substring(0, al.indexOf("/servlet"))
        }
        var am = "?dc=" + (new Date().getTime());
        var ak = k(al);
        var aj = al + ak + am;
        return aj
    };
    var B = function(al) {
        if (al.indexOf("/servlet") >= 0) {
            al = al.substring(0, al.indexOf("/servlet"))
        }
        var am = "?dc=" + (new Date().getTime());
        var ak = r(al);
        var aj = al + ak + am;
        return aj
    };
    var k = function(aj) {
        if (aj.indexOf("/SGLKDHD") !== -1 || aj.indexOf("/SGLKDAM") !== -1 || aj.indexOf("/SGLKJMU") !== -1 || aj.indexOf("/SGLKXSG") !== -1 || aj.indexOf("/SGLKDPO") !== -1 || aj.indexOf("/SGLKJMC") !== -1) {
            return "/LogoutPortaServlet"
        } else {
            return "/sessionPing"
        }
    };
    var r = function(aj) {
        if (aj.indexOf("/SGLKDHD") !== -1 || aj.indexOf("/SGLKDAM") !== -1 || aj.indexOf("/SGLKJMU") !== -1 || aj.indexOf("/SGLKXSG") !== -1 || aj.indexOf("/SGLKDPO") !== -1 || aj.indexOf("/SGLKJMC") !== -1) {
            return "/LogoutPortaServlet?pag=0"
        } else {
            return "/sessionInvalidate"
        }
    };
    var ac = function(aj) {
        var ak = jQuery.inArray(aj, af);
        if (ak < 0) {
            if (!n(aj)) {
                af.push(aj)
            }
        }
    };
    var C = function(aj) {
        $.ajax({
            url: aj,
            type: "POST",
            dataType: "html",
            async: true,
            error: function(ak, am, al) {}
        })
    };
    var x = function() {
        ah(function() {
            if ($.isFunction(window.fKdrgEnviarLogout)) {
                fKdrgEnviarLogout()
            }
            setTimeout(function() {
                window.top.unloadNoValido = true;
                $("#" + window.portal_form).attr("action", ab);
                $("#" + window.portal_form).submit()
            }, 150)
        })
    };
    var n = function(aj) {
        if (aj.indexOf("imgPortada.png") !== -1) {
            return true
        } else {
            return false
        }
    };
    var e = function() {
        com.bbva.kyop.util.AjaxUtil.setMock(false);
        com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
            url: "session/astSessionPing.json",
            urlMock: "core/ping.json",
            method: "POST",
            abortApp: false,
            typeRequest: "json",
            async: true,
            callback: function(aj) {
                com.bbva.kyop.util.LoggerUtil.debug("AST Ping realizado satisfactoriamente al servidor")
            }
        })
    };
    var a = function() {
        var aj = this;
        if (com.bbva.kyop.util.SessionUtil.getConfiguration().isMultiSessionEnabled() && com.bbva.kyop.util.SessionUtil.getConfiguration().isAstSessionPingEnabled()) {
            setInterval(e, com.bbva.kyop.util.SessionUtil.getConfiguration().getAstSessionPingTime())
        }
    }
};
com.bbva.kyop.util.ResourcesLoaderUtil = new function() {
    var h = 0;
    var a = 0;
    var f = null;
    this.loadInitialJSArray = function(l) {
        var k = this;
        f = l;
        for (var j in arrayExternalJss) {
            k.loadJS(arrayExternalJss[j], function() {
                k.checkLoadJs(false)
            }, function() {
                k.checkLoadJs(true)
            })
        }
    };
    this.checkLoadJs = function(j) {
        h++;
        if (j) {
            logger.error("Error cargando el recurso: " + arrayExternalJss[i])
        }
        if (h == arrayExternalJss.length) {
            f()
        }
    };
    var b = function(j) {
        com.bbva.kyop.util.StoreJSUtil.set(j, j)
    };
    var e = function(j) {
        return com.bbva.kyop.util.StoreJSUtil.keyExists(j)
    };
    this.addJStoArray = function(j) {
        b(j)
    };
    this.loadJS = function(j, k) {
        $.getScript(j).done(function(l, m) {
            b(j);
            if (k != null && k != "") {
                k()
            }
        }).fail(function(n, m, l) {
            logger.warn("Error al cargar el fichero .js: " + j);
            logger.warn(n);
            logger.warn(m);
            logger.warn(l);
            com.bbva.kyop.controller.CoreController.showUnavailableServiceMsg()
        })
    };
    this.loadExternalJS = function(k, l, j) {
        this.loadJS(k, l, j)
    };
    this.loadInitialCSSArray = function(l) {
        var k = this;
        for (var j in arrayExternalCss) {
            if (j < arrayExternalCss.length - 1) {
                k.loadCSS(arrayExternalCss[j])
            } else {
                k.loadCSS(arrayExternalCss[j], function() {
                    l()
                })
            }
        }
        if (arrayExternalCss.length == 0) {
            l()
        }
    };
    var g = function(j) {
        com.bbva.kyop.util.StoreCSSUtil.set(j, j)
    };
    var d = function(j) {
        return com.bbva.kyop.util.StoreCSSUtil.keyExists(j)
    };
    this.loadCSS = function(l, n) {
        var m = this;
        if (!d(l)) {
            var k = document.createElement("link");
            var j = l;
            k.setAttribute("rel", "stylesheet");
            k.setAttribute("type", "text/css");
            j = j + "?dc=" + Date.now();
            k.setAttribute("href", j);
            document.getElementsByTagName("head")[0].appendChild(k);
            g(l);
            logger.debug("Cargando recurso " + l)
        }
        if (n) {
            n()
        }
    }
};
com.bbva.kyop.util.StringUtil = new function() {
    var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    this.encodeBase64 = function(f) {
        f = escape(f);
        var d = "";
        var n, l, j = "";
        var m, k, h, g = "";
        var e = 0;
        do {
            n = f.charCodeAt(e++);
            l = f.charCodeAt(e++);
            j = f.charCodeAt(e++);
            m = n >> 2;
            k = ((n & 3) << 4) | (l >> 4);
            h = ((l & 15) << 2) | (j >> 6);
            g = j & 63;
            if (isNaN(l)) {
                h = g = 64
            } else {
                if (isNaN(j)) {
                    g = 64
                }
            }
            d = d + this.keyStrBase64.charAt(m) + this.keyStrBase64.charAt(k) + this.keyStrBase64.charAt(h) + this.keyStrBase64.charAt(g);
            n = l = j = "";
            m = k = h = g = ""
        } while (e < f.length);
        return d
    };
    this.decodeBase64 = function(g) {
        var e = "";
        var o, m, k = "";
        var n, l, j, h = "";
        var f = 0;
        var d = /[^A-Za-z0-9\+\/\=]/g;
        if (d.exec(g)) {}
        g = g.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        do {
            n = this.keyStrBase64.indexOf(g.charAt(f++));
            l = this.keyStrBase64.indexOf(g.charAt(f++));
            j = this.keyStrBase64.indexOf(g.charAt(f++));
            h = this.keyStrBase64.indexOf(g.charAt(f++));
            o = (n << 2) | (l >> 4);
            m = ((l & 15) << 4) | (j >> 2);
            k = ((j & 3) << 6) | h;
            e = e + String.fromCharCode(o);
            if (j != 64) {
                e = e + String.fromCharCode(m)
            }
            if (h != 64) {
                e = e + String.fromCharCode(k)
            }
            o = m = k = "";
            n = l = j = h = ""
        } while (f < g.length);
        return unescape(e)
    };
    this.encodeUTF8 = function(e) {
        e = e.replace(/\r\n/g, "\n");
        var d = "";
        for (var g = 0; g < e.length; g++) {
            var f = e.charCodeAt(g);
            if (f < 128) {
                d += String.fromCharCode(f)
            } else {
                if ((f > 127) && (f < 2048)) {
                    d += String.fromCharCode((f >> 6) | 192);
                    d += String.fromCharCode((f & 63) | 128)
                } else {
                    d += String.fromCharCode((f >> 12) | 224);
                    d += String.fromCharCode(((f >> 6) & 63) | 128);
                    d += String.fromCharCode((f & 63) | 128)
                }
            }
        }
        return d
    };
    this.decodeUTF8 = function(d) {
        var e = "";
        var f = 0;
        var g = c1 = c2 = 0;
        while (f < d.length) {
            g = d.charCodeAt(f);
            if (g < 128) {
                e += String.fromCharCode(g);
                f++
            } else {
                if ((g > 191) && (g < 224)) {
                    c2 = d.charCodeAt(f + 1);
                    e += String.fromCharCode(((g & 31) << 6) | (c2 & 63));
                    f += 2
                } else {
                    c2 = d.charCodeAt(f + 1);
                    c3 = d.charCodeAt(f + 2);
                    e += String.fromCharCode(((g & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                    f += 3
                }
            }
        }
        return e
    };
    this.getLimitedString = function(e, d) {
        if (e.length > d) {
            e = e.substring(0, d - 2) + "..."
        }
        return e
    };
    this.formatDay = function(d) {
        return d.length < 2 ? "0" + d : d
    };
    this.getFormatDate = function(d, f, e) {
        return d + "/" + f + "/" + e
    };
    var a = 0;
    this.incrementCounter = function() {
        return this.counter++
    };
    this.setCounter = function(d) {
        this.counter = d
    };
    this.getCounter = function() {
        return this.counter
    };
    this.addParamsToUrl = function(e, f) {
        var d = e + "?" + f;
        if (e.indexOf("?") != -1) {
            d = e + "&" + f
        }
        return d
    }
};
com.bbva.kyop.util.StoreJSUtil = new function() {
    this.items = new Object();
    this.length = 0;
    this.set = function(a, b) {
        if (!this.keyExists(a)) {
            this.length++
        }
        this.items[a] = b
    };
    this.get = function(a) {
        if (this.keyExists(a)) {
            return this.items[a]
        }
    };
    this.getAll = function() {
        return this.items
    };
    this.keyExists = function(a) {
        return typeof(this.items[a]) != "undefined"
    };
    this.remove = function(a) {
        if (this.keyExists(a)) {
            delete this.items[a];
            this.length--;
            return true
        }
        return false
    };
    this.removeAll = function() {
        this.items = null;
        this.items = new Object();
        this.length = 0
    };
    this.size = function() {
        return this.length
    }
};
com.bbva.kyop.util.StoreCSSUtil = new function() {
    this.items = new Object();
    this.length = 0;
    this.set = function(a, b) {
        if (!this.keyExists(a)) {
            this.length++
        }
        this.items[a] = b
    };
    this.get = function(a) {
        if (this.keyExists(a)) {
            return this.items[a]
        }
    };
    this.getAll = function() {
        return this.items
    };
    this.keyExists = function(a) {
        return typeof(this.items[a]) != "undefined"
    };
    this.remove = function(a) {
        if (this.keyExists(a)) {
            delete this.items[a];
            this.length--;
            return true
        }
        return false
    };
    this.removeAll = function() {
        this.items = null;
        this.items = new Object();
        this.length = 0
    };
    this.size = function() {
        return this.length
    }
};
com.bbva.kyop.util.LightBoxUtil = new function() {
    var q = 600;
    var b = 600;
    var g = 18;
    var p = 18;
    var r = 18;
    var t = "POST";
    this.loadLightBox = function(v, w, u) {
        $("#" + w).attr("src", u.url);
        $.colorbox({
            inline: true,
            height: u.height,
            width: u.width,
            innerWidth: u.innerWidth,
            innerHeight: u.innerHeight,
            href: "#" + v
        })
    };
    var h = function(u) {
        return u != null && u != ""
    };
    var m = function(u) {
        return u > $(window).height()
    };
    var f = function(x, u, v) {
        var y = ($(window).height() - u - r * 2) / 2;
        var w = "height:" + u + "px; width:" + x + "px; margin-top:" + y + "px !important;";
        $(v).attr("style", w)
    };
    var s = function(x, u, v) {
        var w = "height:" + u + "px; width:" + x + "px; margin-top:0px !important;";
        $(v).attr("style", w)
    };
    var k = function(u, v, x) {
        if (typeof(x) != "undefined") {
            var w = u - 2 * r;
            if (typeof(v) != "undefined" && typeof(v.styles) != "undefined" && typeof(v.styles.iframe) != "undefined" && typeof(v.styles.iframe.height) != "undefined") {
                w = v.styles.iframe.height + "px"
            }
            $(x).height(w)
        }
    };
    var o = function(w, u, v) {
        $(v).attr("initWidth", w);
        $(v).attr("initHeight", u)
    };
    var n = function(x, u, w, v, y) {
        if (m(u)) {
            s(x, $(window).height() - 32, v)
        } else {
            f(x, u, v)
        }
        k(u, w, y);
        o(x, u, v)
    };
    this.resizeIfExistContainerLightBox = function() {
        if (!$("#kyop-lightbox-container-div").is(":hidden")) {
            var v = $("#kyop-lightbox-internal-container-div").attr("initWidth");
            var u = $("#kyop-lightbox-internal-container-div").attr("initHeight");
            n(v, u, undefined, "#kyop-lightbox-internal-container-div", "#kyop-lightbox-iframe-div")
        }
    };
    var d = function(B, w, u) {
        var A = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getLocale();
        var x = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getDateFormat();
        var C = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getPriceFormat();
        var D = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getTimeZone();
        var v = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductId();
        var z = com.bbva.kyop.util.SessionUtil.getUser().getCompanyInformation().getSegmentId();
        var y = com.bbva.kyop.util.SessionUtil.getUser().getCompanyInformation().getCompanyId() + "" + com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getUserId();
        $("#" + B).find("#kyop-lightBox-locale").val(A);
        $("#" + B).find("#kyop-lightBox-date").val(x);
        $("#" + B).find("#kyop-lightBox-price").val(C);
        $("#" + B).find("#kyop-lightBox-time").val(D);
        $("#" + B).find("#kyop-lightBox-product").val(v);
        $("#" + B).find("#kyop-lightBox-segment").val(z);
        $("#" + B).find("#kyop-lightBox-refID").val(y);
        $("#" + B).attr("action", w);
        if (typeof(u) != "undefined") {
            $("#" + B).attr("method", u)
        } else {
            $("#" + B).attr("method", t)
        }
        $("#" + B).submit()
    };
    var l = function(v) {
        var u = "";
        if (typeof(v) != "undefined" && typeof(v.iframe) != "undefined") {
            $.each(v.iframe, function(w, x) {
                u = u + w + ":" + x + ";"
            })
        }
        return u
    };
    var e = function(w, u) {
        var v = $("#" + w).attr("style");
        v = v + ";border: 0px;" + l(u.styles);
        $("#" + w).attr("style", v)
    };
    var a = function(u) {
        $("#" + u).attr("style", "")
    };
    this.loadLightBoxKyop = function(v, y, D, A, u) {
        var w = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductMainId();
        if (typeof(A.method) != "undefined" && A.method != "") {
            u = A.method
        }
        if (typeof(A.url) != "undefined" && A.url != "") {
            a(y);
            var C = q;
            var E = b;
            if (h(A.height)) {
                C = A.height + p
            }
            if (h(A.width)) {
                E = A.width + g
            }
            n(E, C, A, "#kyop-lightbox-internal-container-div", "#kyop-lightbox-iframe-div");
            e(y, A);
            d(D, A.url, u);
            var F = $("#kyop-lightbox-close-img").attr("asrc");
            $("#kyop-lightbox-close-img").attr("src", F);
            $("#" + v).show()
        }
        if (A.registerActivity != undefined && A.registerActivity == true) {
            var x = com.bbva.kyop.bean.UserBean.getRegionalInformation().getCodIso();
            var w = com.bbva.kyop.bean.UserBean.getUserInformation().getProductId();
            var z = com.bbva.kyop.bean.UserBean.getRegionalInformation().getLanguage();
            var B = com.bbva.kyop.controller.CoreController.getCurrentDescriptionProcess();
            com.bbva.kyop.component.ActivityRegister.dynamicLinksRegister(A.url, A.title, x, w, z, B)
        }
    };
    var j = function(u) {
        return $("#" + u).find("iframe")[0]
    };
    this.closeLightBoxKyop = function(v) {
        var u = j(v);
        $(u).attr("src", "");
        $("#" + v).hide()
    }
};
com.bbva.kyop.util.LoadBoxUtil = new function() {
    this.timer = null;
    this.show = function(a) {
        var b = $(".kyop-waiting-img").attr("asrc");
        $(".kyop-waiting-img").attr("src", b);
        if (a) {
            $("#ventanaCapaEsperaMensaje").html(a);
            $("#ventanaCapaEsperaMensajeOriginalTr").hide();
            $("#ventanaCapaEsperaMensajeTr").show();
            $("#ventanaCapaEspera").show()
        } else {
            $("#ventanaCapaEsperaMensajeOriginalTr").show();
            $("#ventanaCapaEsperaMensajeTr").hide();
            $("#ventanaCapaEspera").show()
        }
    };
    this.hide = function() {
        $("#ventanaCapaEspera").hide()
    }
};
var loadBox = com.bbva.kyop.util.LoadBoxUtil;
com.bbva.kyop.util.CampaignLightBoxUtil = new function() {
    var g = 600;
    var h = 600;
    var k = 18;
    var e = 18;
    var m = 18;
    var j = function(n) {
        return n != null && n != ""
    };
    var b = function(n) {
        return n > $(window).height()
    };
    var f = function(o, n) {
        $("#kyop-campaigns-lightbox-internal-container-div").attr("style", "height:" + n + "px; width:" + o + "px; top:50%; left: 50%; margin-top:-" + (n / 2 + m) + "px; margin-left:-" + (o / 2 + m) + "px; !important")
    };
    var l = function(o, n) {
        $("#kyop-campaigns-lightbox-internal-container-div").attr("style", "height:" + n + "px; width:" + o + "px; top:0px; left: 50%; margin-left:-" + (o / 2 + m) + "px; !important; position:fixed;")
    };
    var d = function() {
        var p = $(window).height();
        var n = $("#kyop-campaigns-lightbox-internal-container-header").height() + 65;
        var o = $("#kyop-campaigns-lightbox-internal-container-footer").height();
        return p - n - o
    };
    this.setStylesToLightBox = function(o, n) {
        $("#kyop-campaigns-lightbox-internal-container-div").width($(window).width());
        $("#kyop-campaigns-lightbox-internal-container-div").height($(window).height());
        $("#kyop-campaigns-lightbox-iframe-div").width("width", "100%");
        $("#kyop-campaigns-lightbox-iframe-div").height("height", d());
        $("#kyop-campaigns-lightbox-internal-container-body").width("100%");
        $("#kyop-campaigns-lightbox-internal-container-body").height(d())
    };
    var a = function() {
        var n = {
            infoFooter: [{}]
        };
        $("#kyop-campaigns-lightbox-internal-container-footer-copyright").empty();
        var o = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductId();
        if (o == "002") {
            com.bbva.kyop.controller.MenuController.setMenuInPortal(n, "#kyop-footer-info-campaign-bancomer-tmpl", "#kyop-campaigns-lightbox-internal-container-footer-copyright")
        } else {
            com.bbva.kyop.controller.MenuController.setMenuInPortal(n, "#kyop-footer-info-campaign-tmpl", "#kyop-campaigns-lightbox-internal-container-footer-copyright")
        }
    };
    this.loadCampaignLightBoxKyop = function(o, q, n) {
        logger.info("**DPPCAMPAIGN Componente LigthBox va a realizar la llamada  ");
        logger.info(n);
        logger.info("**DPPCAMPAIGN Hago el show  ");
        var r = g;
        var p = h;
        if (j(n.height)) {
            r = n.height + e
        }
        if (j(n.width)) {
            p = n.width + k
        }
        this.setStylesToLightBox(p, r);
        $("#" + o).show();
        logger.info("**DPPCAMPAIGN Digo que el target es " + q);
        $("#" + n.idRequestForm).attr("target", q);
        logger.info("**DPPCAMPAIGN Hago el submit " + n.idRequestForm);
        logger.info($("#" + n.idRequestForm));
        $("#" + n.idRequestForm).submit();
        a()
    };
    this.closeCampaignLightBoxKyop = function(n) {
        $("#" + n).hide()
    };
    this.adjustToContentSize = function(n) {
        if (n != null) {
            if (j(n.height)) {
                lightBoxHeight = n.height + e
            }
            if (j(n.width)) {
                lightBoxWidth = n.width + k
            }
            this.setStylesToLightBox(lightBoxWidth, lightBoxHeight)
        }
    };
    this.getFooterInfoHtml = function() {
        var s = com.bbva.kyop.util.SessionUtil.getUser().getLastAccessInformation().getDateFormatted();
        var s = '<span class="darker">' + s + "</span>";
        var q = com.bbva.kyop.util.SessionUtil.getUser().getLastAccessInformation().getTime();
        q = '<span class="darker">' + q + com.bbva.kyop.controller.MenuController.getCaracterHourFromLanguage(com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getLanguage()) + "</span>";
        var o = com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.footer.infokey_1");
        var n = com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.footer.infokey_2");
        var p = o + n;
        var r = com.bbva.kyop.util.I18nUtil.stringFormat(p, s, q);
        return r
    }
};
com.bbva.kyop.util.CalculatorSizeElementsUtil = new function() {
    this.calculateWidthContainerLanguages = function() {
        $("div.desplegable div.contenido.kyop-language div.fondoContenido").width(this.getTotalWidth($("#kyop-languages-button")))
    };
    this.calculateIFrameSize = function(e, d) {
        logger.debug("calculateIFrameSize: Metodo deprecado.");
        this.calculateWidthContainerLanguages()
    };
    this.calculateIFrameSizeFromPuller = function(e, d) {
        logger.debug("calculateIFrameSizeFromPuller: Metodo deprecado.")
    };
    this.calculateWidthDivBody = function() {
        logger.debug("calculateWidthDivBody: Metodo deprecado.")
    };
    this.getTotalWidth = function(d) {
        if (!a(d)) {
            return 0
        }
        return $(d).width() + b($(d).css("padding-left")) + b($(d).css("padding-right")) + b($(d).css("margin-left")) + b($(d).css("margin-right"))
    };
    var b = function(d) {
        var e = parseInt(d.substr(0, d.length - 2));
        if (isNaN(e)) {
            return 0
        }
        return e
    };
    var a = function(d) {
        return $(d).length > 0
    };
    this.calculateFooterHeight = function(d) {
        logger.debug("calculateFooterHeight: Metodo deprecado.");
        if (d != null && d != "") {
            d()
        }
    };
    this.resetFooterOperations = function() {
        logger.debug("resetFooterOperations: Metodo deprecado.")
    }
};
com.bbva.kyop.util.ActivityRegisterUtil = new function() {
    this.getActivityRegisterInfo = function(a) {
        com.bbva.kyop.util.AjaxUtil.setMock(false);
        com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
            url: "activityregister/getRequiredDto.json",
            urlMock: "mock/core/getRequiredDto.json",
            method: "POST",
            typeRequest: "json",
            async: true,
            abortApp: false,
            callback: function(b) {
                if (a != null && a != "") {
                    a(b)
                }
            }
        })
    }
};
com.bbva.kyop.util.ActiveElementsBean = new function() {
    var a = [];
    this.put = function(b, d) {
        a[b] = d
    };
    this.get = function(b) {
        return a[b]
    }
};
com.bbva.kyop.util.AdBoxVerticalUtil = new function() {
    this.containerId = "#kyop-ads-middle-right-container";
    this.templateId = "#kyop-ad-insideView-vertical-tpl";
    this.init = function(a) {
        com.bbva.kyop.controller.MenuController.subscribeEvent("menuOptionClicked", this)
    };
    this.receiveEvent = function(a, d) {
        logger.info("**DPP adsEvento recivido en el componente Vertical ");
        $(this.containerId).empty();
        var b = com.bbva.kyop.controller.AdsController.getAd(d.idMenuLevel1, d.idMenuLevel2, "bannerVertical");
        if (b != null) {
            var e = {
                adsData: b
            };
            this.render(e, this.templateId, this.containerId)
        }
    };
    this.render = function(d, b, a) {
        $(b).tmpl(d).appendTo(a)
    }
};
com.bbva.kyop.util.AdBoxHorizontalUtil = new function() {
    this.containerId = "#kyop-ads-footer-container";
    this.templateId = "#kyop-ad-insideView-footer-tpl";
    this.init = function(a) {
        com.bbva.kyop.controller.MenuController.subscribeEvent("menuOptionClicked", this)
    };
    this.receiveEvent = function(a, d) {
        logger.info("**DPP adsEvento recivido en el componente Horizontal ");
        $(this.containerId).empty();
        var b = com.bbva.kyop.controller.AdsController.getAd(d.idMenuLevel1, d.idMenuLevel2, "bannerHorizontal");
        if (b != null) {
            var e = {
                adsData: b
            };
            this.render(e, this.templateId, this.containerId)
        }
    };
    this.render = function(d, b, a) {
        $(b).tmpl(d).appendTo(a)
    }
};
com.bbva.kyop.util.ReverseCallerMapUtil = new function() {
    this.items = new Object();
    this.length = 0;
    this.set = function(a, b) {
        if (!this.keyExists(a)) {
            this.length++
        }
        this.items[a] = b
    };
    this.get = function(b) {
        var a = null;
        if (this.keyExists(b)) {
            a = this.items[b]
        }
        return a
    };
    this.getAll = function() {
        return this.items
    };
    this.keyExists = function(a) {
        return typeof(this.items[a]) != "undefined"
    };
    this.remove = function(a) {
        if (this.keyExists(a)) {
            delete this.items[a];
            this.length--;
            return true
        }
        return false
    };
    this.removeAll = function() {
        this.items = null;
        this.items = new Object();
        this.length = 0
    };
    this.size = function() {
        return this.length
    }
};
com.bbva.kyop.util.TimerUtil = new function() {
    var b = false;
    var a = null;
    this.resetTimer = function() {
        logger.debug("· Timer: Se destruye el hilo del timer");
        var d = this.getThread();
        clearTimeout(d)
    };
    this.initProcessTimer = function() {
        logger.debug("· Timer: Se inicia el timer");
        var d = setTimeout(function() {
            com.bbva.kyop.util.TimerUtil.checkProcessLoaded()
        }, 60000);
        this.setProcessLoaded(false);
        this.setThread(d)
    };
    this.checkProcessLoaded = function() {
        logger.debug("· Timer: Se comprueba si se ha cargado el proceso");
        com.bbva.kyop.util.TimerUtil.resetTimer();
        if (!this.isProcessLoaded()) {
            loadBox.hide();
            logger.debug("· Timer: Fin del Timeout en la carga del proceso. Servicio no disponible.");
            com.bbva.kyop.util.MessageBoxUtil.showMessageBoxError(com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.service.not.avaible.title"), com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.service.not.avaible.subtitle"), 88, function() {
                $("#kyop-central-load-area").attr("src", "external/blank.html");
                com.bbva.kyop.controller.MenuController.foldCentralArea();
                com.bbva.kyop.controller.BreadcrumbController.updateBreadcrumb("home");
                com.bbva.kyop.controller.MenuController.goHome();
                com.bbva.kyop.util.CalculatorSizeElementsUtil.resetFooterOperations()
            })
        }
    };
    this.setProcessLoaded = function(d) {
        if (d == true) {
            logger.debug("· Timer: Se reinicia el Timer. Proceso cargado correctamente.");
            this.resetTimer()
        }
        this.processLoaded = d
    };
    this.isProcessLoaded = function() {
        return this.processLoaded
    };
    this.setThread = function(d) {
        this.thread = d
    };
    this.getThread = function() {
        return this.thread
    }
};
com.bbva.kyop.util.SlideUtil = new function() {
    var d;
    var a;
    var b = function(e) {
        if (typeof(e) == "undefined" || e.length == 0) {
            throw "SlideUtilDataUndefined"
        }
    };
    this.init = function(e) {
        b(e);
        d = e;
        a = 0
    };
    this.next = function() {
        if (a < d.length - 1) {
            a++
        }
        return d[a]
    };
    this.prev = function() {
        if (a > 0) {
            a--
        }
        return d[a]
    };
    this.first = function() {
        return d[0]
    };
    this.isCurrentItemTheFirst = function() {
        return a == 0
    };
    this.isCurrentItemTheLast = function() {
        return a == d.length - 1
    }
};
com.bbva.kyop.util.TimerMapperUtil = new function() {
    this.items = new Object();
    this.length = 0;
    this.set = function(a, b) {
        if (!this.keyExists(a)) {
            this.length++
        }
        this.items[a] = b
    };
    this.get = function(a) {
        var b = null;
        if (this.keyExists(a)) {
            b = this.items[a]
        } else {
            logger.info("Timer map con id: " + a + " No encontrado")
        }
        return b
    };
    this.getAll = function() {
        return this.items
    };
    this.keyExists = function(a) {
        return typeof(this.items[a]) != "undefined"
    };
    this.remove = function(a) {
        if (this.keyExists(a)) {
            delete this.items[a];
            this.length--;
            return true
        }
        return false
    };
    this.removeAll = function() {
        this.items = null;
        this.items = new Object();
        this.length = 0
    };
    this.size = function() {
        return this.length
    }
};
com.bbva.kyop.util.HistoryBackUtil = new function() {
    var d = "bbva";
    var b = "newbbva";
    var a = function() {
        logger.info("Deshabilitando el botón de atrás y adelante del navegador mediante el método pushState.");
        history.pushState(d, null, null);
        window.onpopstate = function() {
            history.pushState(b, null, null)
        }
    };
    var e = function() {
        logger.info("Deshabilitando el botón de atrás y adelante del navegador mediante el método onhashchange.");
        var g = true;
        window.onhashchange = function() {
            if (!g) {
                g = true;
                window.location.hash = Math.random()
            } else {
                g = false
            }
        };
        window.location.hash = Math.random()
    };
    var f = function() {
        logger.info("Deshabilitando el botón de atrás y adelante del navegador mediante el plugin jquery.ba-hashchange.");
        var g = false;
        $(window).hashchange(function() {
            logger.info("Método hashchange. ignoreHashChange = " + g);
            if (!g) {
                g = true;
                window.location.hash = Math.random()
            } else {
                g = false
            }
        });
        window.location.hash = Math.random()
    };
    this.pushNewStateToHistory = function() {
        if (typeof(history.pushState) != "undefined") {
            history.pushState(b, null, null)
        } else {
            window.location.hash = Math.random()
        }
    };
    this.disableBackAndForwardBrowserButtons = function() {
        if (typeof(history.pushState) != "undefined") {
            a();
            return
        }
        if (typeof(window.onhashchange) != "undefined" && window.onhashchange != null) {
            e();
            return
        }
        f()
    }
};
com.bbva.kyop.util.RwdUtil = new function() {
    var k = "INFINITE";
    var a = "body";
    var e = "#kyop-body";
    var q = "#kyop-header";
    var j = true;
    var m = [{
        minWidth: 992,
        maxWidth: k,
        cssClass: "rwd-laptop"
    }, {
        minWidth: 0,
        maxWidth: 991,
        cssClass: "rwd-tablet"
    }, {
        minWidth: 0,
        maxWidth: 767,
        cssClass: "rwd-smartphone"
    }];
    var g = [{
        minWidth: 992,
        maxWidth: k,
        cssClass: "rwd-laptop"
    }, {
        minWidth: 768,
        maxWidth: 991,
        cssClass: "rwd-tablet"
    }, {
        minWidth: 0,
        maxWidth: 767,
        cssClass: "rwd-smartphone"
    }];
    var o = [];
    this.addClassesRwdToIframeBody = function(r) {
        d(p(), r)
    };
    this.addClassesRwdToBody = function(r) {
        d(f(), r)
    };
    this.setRwdEnabled = function(r) {
        this.rwdEnabled = r
    };
    this.isRwdEnabled = function() {
        return this.rwdEnabled
    };
    var d = function(t, s) {
        var s = l(s);
        var r = h(t, $(window.top).width());
        n(t, s);
        $.each(r, function(u, v) {
            $(s).addClass(v)
        })
    };
    this.setMarginTopToKyopBody = function() {
        $(e).css("margin-top", $(q).height())
    };
    var l = function(r) {
        if (typeof(r) != "undefined") {
            return $(r)
        }
        return $(a)
    };
    var h = function(t, r) {
        var s = [];
        $.each(t, function(u, v) {
            if (b(v, r)) {
                s.push(v.cssClass)
            }
        });
        return s
    };
    var f = function() {
        var r = m;
        if (!com.bbva.kyop.util.RwdUtil.isRwdEnabled()) {
            r = o
        }
        return r
    };
    var p = function() {
        var r = g;
        if (!com.bbva.kyop.util.RwdUtil.isRwdEnabled()) {
            r = o
        }
        return r
    };
    var b = function(s, r) {
        if (s.maxWidth == k) {
            return s.minWidth <= r
        }
        return s.minWidth <= r && s.maxWidth >= r
    };
    var n = function(s, r) {
        $.each(s, function(t, u) {
            $(r).removeClass(u.cssClass)
        })
    }
};

function WebTrends() {
    var a = this;
    this.dcsid = "dcszkhefazzlcjyzep1efsbts_3z8t";
    this.domain = "https://grupobbva.es.igrupobbva/SDC";
    this.timezone = 1;
    this.onsitedoms = "";
    this.downloadtypes = "xls,doc,pdf,txt,csv,zip,docx,xlsx";
    this.navigationtag = "div,table";
    this.trackevents = true;
    this.trimoffsiteparams = true;
    this.enabled = true;
    this.i18n = false;
    this.paidsearchparams = "gclid";
    this.splitvalue = "";
    this.preserve = true;
    this.cookieTypes = "all";
    this.FPCConfig = {
        enabled: (this.cookieTypes === "all" || this.cookieTypes == "firstPartyOnly"),
        name: "WT_FPC",
        domain: ".grupobbva.es.igrupobbva",
        expires: 63113851500
    };
    this.TPCConfig = {
        enabled: (this.cookieTypes === "all"),
        cfgType: (this.cookieTypes === "all") ? "" : "1"
    };
    this.DCS = {};
    this.WT = {};
    this.DCSext = {};
    this.images = [];
    this.index = 0;
    this.exre = (function() {
        return (window.RegExp ? new RegExp("dcs(uri)|(ref)|(aut)|(met)|(sta)|(sip)|(pro)|(byt)|(dat)|(p3p)|(cfg)|(redirect)|(cip)", "i") : "")
    })();
    this.re = (function() {
        return (window.RegExp ? (a.i18n ? {
            "%25": /\%/g,
            "%26": /\&/g
        } : {
            "%09": /\t/g,
            "%20": / /g,
            "%23": /\#/g,
            "%26": /\&/g,
            "%2B": /\+/g,
            "%3F": /\?/g,
            "%5C": /\\/g,
            "%22": /\"/g,
            "%7F": /\x7F/g,
            "%A0": /\xA0/g
        }) : "")
    })()
}
WebTrends.prototype.dcsGetId = function() {
    if (this.enabled && (document.cookie.indexOf(this.FPCConfig.name + "=") == -1) && (document.cookie.indexOf("WTLOPTOUT=") == -1) && this.TPCConfig.enabled) {
        document.write("<script type='text/javascript' src='http" + (window.location.protocol.indexOf("https:") == 0 ? "s" : "") + "://" + this.domain + "/" + this.dcsid + "/wtid.js'><\/script>")
    }
};
WebTrends.prototype.setCookieTypes = function(a) {
    this.FPCConfig.enabled = (a === "all" || a == "firstPartyOnly");
    this.TPCConfig.enabled = (a === "all");
    this.TPCConfig.cfgType = (a === "all") ? "" : "1"
};
WebTrends.prototype.dcsGetCookie = function(d) {
    var n = document.cookie.split("; ");
    var m = [];
    var l = 0;
    var g = 0;
    var b = d.length;
    var j = n.length;
    for (g = 0; g < j; g++) {
        var h = n[g];
        if ((h.substring(0, b + 1)) == (d + "=")) {
            m[l++] = h
        }
    }
    var a = m.length;
    if (a > 0) {
        l = 0;
        if ((a > 1) && (d == this.FPCConfig.name)) {
            var k = new Date(0);
            for (g = 0; g < a; g++) {
                var e = parseInt(this.dcsGetCrumb(m[g], "lv"));
                var f = new Date(e);
                if (f > k) {
                    k.setTime(f.getTime());
                    l = g
                }
            }
        }
        return unescape(m[l].substring(b + 1))
    } else {
        return null
    }
};
WebTrends.prototype.dcsGetCrumb = function(g, d, e) {
    var b = g.split(e || ":");
    for (var f = 0; f < b.length; f++) {
        var a = b[f].split("=");
        if (d == a[0]) {
            return a[1]
        }
    }
    return null
};
WebTrends.prototype.dcsGetIdCrumb = function(e, b) {
    var f = e.substring(0, e.indexOf(":lv="));
    var a = f.split("=");
    for (var d = 0; d < a.length; d++) {
        if (b == a[0]) {
            return a[1]
        }
    }
    return null
};
WebTrends.prototype.dcsIsFpcSet = function(a, f, d, b) {
    var e = this.dcsGetCookie(a);
    if (e) {
        return ((f == this.dcsGetIdCrumb(e, "id")) && (d == this.dcsGetCrumb(e, "lv")) && (b == this.dcsGetCrumb(e, "ss"))) ? 0 : 3
    }
    return 2
};
WebTrends.prototype.dcsDeleteCookie = function(b, e, d) {
    var a = b + "=";
    a += "; expires=expires=Thu, 01 Jan 1970 00:00:01 GMT";
    a += "; path=" + e;
    a += (d) ? ";domain=" + d : "";
    document.cookie = a
};
WebTrends.prototype.dcsFPC = function() {
    if (document.cookie.indexOf("WTLOPTOUT=") != -1) {
        return
    }
    if (!this.FPCConfig.enabled && !this.TPCConfig.enabled) {
        this.WT.ce = "0"
    } else {
        if (this.FPCConfig.enabled && !this.TPCConfig.enabled) {
            this.WT.ce = "1"
        } else {
            this.WT.ce = "2"
        }
    }
    if (!this.FPCConfig.enabled) {
        this.dcsDeleteCookie(this.FPCConfig.name, "/", this.FPCConfig.domain);
        return
    }
    var d = this.WT;
    var b = this.FPCConfig.name;
    var o = new Date();
    var m = (o.getTimezoneOffset() * 60000) + (this.timezone * 3600000);
    o.setTime(o.getTime() + m);
    var h = new Date(o.getTime() + 315360000000);
    var n = new Date(o.getTime());
    d.co_f = d.vtid = d.vtvs = d.vt_f = d.vt_f_a = d.vt_f_s = d.vt_f_d = d.vt_f_tlh = d.vt_f_tlv = "";
    if (document.cookie.indexOf(b + "=") == -1) {
        if ((typeof(gWtId) != "undefined") && (gWtId != "")) {
            d.co_f = gWtId
        } else {
            if ((typeof(gTempWtId) != "undefined") && (gTempWtId != "")) {
                d.co_f = gTempWtId;
                d.vt_f = "1"
            } else {
                d.co_f = "2";
                var r = o.getTime().toString();
                for (var k = 2; k <= (32 - r.length); k++) {
                    d.co_f += Math.floor(Math.random() * 16).toString(16)
                }
                d.co_f += r;
                d.vt_f = "1"
            }
        }
        if (typeof(gWtAccountRollup) == "undefined") {
            d.vt_f_a = "1"
        }
        d.vt_f_s = d.vt_f_d = "1";
        d.vt_f_tlh = d.vt_f_tlv = "0"
    } else {
        var l = this.dcsGetCookie(b);
        var e = this.dcsGetIdCrumb(l, "id");
        var g = parseInt(this.dcsGetCrumb(l, "lv"));
        var s = parseInt(this.dcsGetCrumb(l, "ss"));
        if ((e == null) || (e == "null") || isNaN(g) || isNaN(s)) {
            return
        }
        d.co_f = e;
        var j = new Date(g);
        d.vt_f_tlh = Math.floor((j.getTime() - m) / 1000);
        n.setTime(s);
        if ((o.getTime() > (j.getTime() + 1800000)) || (o.getTime() > (n.getTime() + 28800000))) {
            d.vt_f_tlv = Math.floor((n.getTime() - m) / 1000);
            n.setTime(o.getTime());
            d.vt_f_s = "1"
        }
        if ((o.getDay() != j.getDay()) || (o.getMonth() != j.getMonth()) || (o.getYear() != j.getYear())) {
            d.vt_f_d = "1"
        }
    }
    d.co_f = escape(d.co_f);
    d.vtid = (typeof(this.vtid) == "undefined") ? d.co_f : (this.vtid || "");
    d.vtvs = (n.getTime() - m).toString();
    var f = (this.FPCConfig.expires) ? "; expires=" + new Date(new Date().getTime() + (this.FPCConfig.expires)).toGMTString() : "";
    var q = o.getTime().toString();
    var p = n.getTime().toString();
    document.cookie = b + "=id=" + d.co_f + ":lv=" + q + ":ss=" + p + f + "; path=/" + (((this.FPCConfig.domain != "")) ? ("; domain=" + this.FPCConfig.domain) : (""));
    var a = this.dcsIsFpcSet(b, d.co_f, q, p);
    if (a != 0) {
        d.co_f = d.vtvs = d.vt_f_s = d.vt_f_d = d.vt_f_tlh = d.vt_f_tlv = "";
        if (typeof(this.vtid) == "undefined") {
            d.vtid = ""
        }
        d.vt_f = d.vt_f_a = a
    }
};
WebTrends.prototype.dcsIsOnsite = function(d) {
    if (d.length > 0) {
        d = d.toLowerCase();
        if (d == window.location.hostname.toLowerCase()) {
            return true
        }
        if (typeof(this.onsitedoms.test) == "function") {
            return this.onsitedoms.test(d)
        } else {
            if (this.onsitedoms.length > 0) {
                var e = this.dcsSplit(this.onsitedoms);
                var a = e.length;
                for (var b = 0; b < a; b++) {
                    if (d == e[b]) {
                        return true
                    }
                }
            }
        }
    }
    return false
};
WebTrends.prototype.dcsTypeMatch = function(g, f) {
    var e = g.toLowerCase().substring(g.lastIndexOf(".") + 1, g.length);
    var d = this.dcsSplit(f);
    var b = d.length;
    for (var a = 0; a < b; a++) {
        if (e == d[a]) {
            return true
        }
    }
    return false
};
WebTrends.prototype.dcsEvt = function(b, a) {
    var d = b.target || b.srcElement;
    while (d && d.tagName && (d.tagName.toLowerCase() != a.toLowerCase())) {
        d = d.parentElement || d.parentNode
    }
    return d
};
WebTrends.prototype.dcsNavigation = function(a) {
    var k = "";
    var d = "";
    var b = this.dcsSplit(this.navigationtag);
    var g = b.length;
    var f, j, h;
    for (f = 0; f < g; f++) {
        h = b[f];
        if (h.length) {
            j = this.dcsEvt(a, h);
            k = (j.getAttribute && j.getAttribute("id")) ? j.getAttribute("id") : "";
            d = j.className || "";
            if (k.length || d.length) {
                break
            }
        }
    }
    return k.length ? k : d
};
WebTrends.prototype.dcsBind = function(b, a) {
    if ((typeof(a) == "function") && document.body) {
        if (document.body.addEventListener) {
            document.body.addEventListener(b, a.wtbind(this), true)
        } else {
            if (document.body.attachEvent) {
                document.body.attachEvent("on" + b, a.wtbind(this))
            }
        }
    }
};
WebTrends.prototype.dcsET = function() {
    var a = (navigator.appVersion.indexOf("MSIE") != -1) ? "click" : "mousedown";
    this.dcsBind(a, this.dcsDownload);
    this.dcsBind(a, this.dcsOffsite);
    this.dcsBind("contextmenu", this.dcsRightClick)
};
WebTrends.prototype.dcsMultiTrack = function() {
    var b = dcsMultiTrack.arguments ? dcsMultiTrack.arguments : arguments;
    if (b.length % 2 == 0) {
        this.dcsSaveProps(b);
        this.dcsSetProps(b);
        var a = new Date();
        this.DCS.dcsdat = a.getTime();
        this.dcsFPC();
        this.dcsTag();
        this.dcsRestoreProps()
    }
};
WebTrends.prototype.dcsCleanUp = function() {
    this.DCS = {};
    this.WT = {};
    this.DCSext = {};
    if (arguments.length % 2 == 0) {
        this.dcsSetProps(arguments)
    }
};
WebTrends.prototype.dcsSetProps = function(a) {
    for (var b = 0; b < a.length; b += 2) {
        if (a[b].indexOf("WT.") == 0) {
            this.WT[a[b].substring(3)] = a[b + 1]
        } else {
            if (a[b].indexOf("DCS.") == 0) {
                this.DCS[a[b].substring(4)] = a[b + 1]
            } else {
                if (a[b].indexOf("DCSext.") == 0) {
                    this.DCSext[a[b].substring(7)] = a[b + 1]
                }
            }
        }
    }
};
WebTrends.prototype.dcsSaveProps = function(b) {
    var e, a, d, f;
    if (this.preserve) {
        this.args = [];
        for (e = 0, a = 0; e < b.length; e += 2) {
            f = b[e];
            if (f.indexOf("WT.") == 0) {
                d = f.substring(3);
                this.args[a] = f;
                this.args[a + 1] = this.WT[d] || "";
                a += 2
            } else {
                if (f.indexOf("DCS.") == 0) {
                    d = f.substring(4);
                    this.args[a] = f;
                    this.args[a + 1] = this.DCS[d] || "";
                    a += 2
                } else {
                    if (f.indexOf("DCSext.") == 0) {
                        d = f.substring(7);
                        this.args[a] = f;
                        this.args[a + 1] = this.DCSext[d] || "";
                        a += 2
                    }
                }
            }
        }
    }
};
WebTrends.prototype.dcsRestoreProps = function() {
    if (this.preserve) {
        this.dcsSetProps(this.args);
        this.args = []
    }
};
WebTrends.prototype.dcsSplit = function(e) {
    var b = e.toLowerCase().split(",");
    var a = b.length;
    for (var d = 0; d < a; d++) {
        b[d] = b[d].replace(/^\s*/, "").replace(/\s*$/, "")
    }
    return b
};
WebTrends.prototype.dcsDownload = function(b) {
    b = b || (window.event || "");
    if (b && ((typeof(b.which) != "number") || (b.which == 1))) {
        var g = this.dcsEvt(b, "A");
        if (g.href) {
            var k = g.hostname ? (g.hostname.split(":")[0]) : "";
            if (this.dcsIsOnsite(k) && this.dcsTypeMatch(g.pathname, this.downloadtypes)) {
                var f = g.search ? g.search.substring(g.search.indexOf("?") + 1, g.search.length) : "";
                var j = g.pathname ? ((g.pathname.indexOf("/") != 0) ? "/" + g.pathname : g.pathname) : "/";
                var a = "";
                var h = document.all ? g.innerText : g.text;
                var d = this.dcsEvt(b, "IMG");
                if (d.alt) {
                    a = d.alt
                } else {
                    if (h) {
                        a = h
                    } else {
                        if (g.innerHTML) {
                            a = g.innerHTML
                        }
                    }
                }
                this.dcsMultiTrack("DCS.dcssip", k, "DCS.dcsuri", j, "DCS.dcsqry", g.search || "", "WT.ti", "Download:" + a, "WT.dl", "20", "WT.nv", this.dcsNavigation(b))
            }
        }
    }
};
WebTrends.prototype.dcsRightClick = function(a) {
    a = a || (window.event || "");
    if (a) {
        var b = a.which || a.button;
        if ((b != 1) || (navigator.userAgent.indexOf("Safari") != -1)) {
            var d = this.dcsEvt(a, "A");
            if ((typeof(d.href) != "undefined") && d.href) {
                if ((typeof(d.protocol) != "undefined") && d.protocol && (d.protocol.indexOf("http") != -1)) {
                    if ((typeof(d.pathname) != "undefined") && this.dcsTypeMatch(d.pathname, this.downloadtypes)) {
                        var g = d.pathname ? ((d.pathname.indexOf("/") != 0) ? "/" + d.pathname : d.pathname) : "/";
                        var f = d.hostname ? (d.hostname.split(":")[0]) : "";
                        this.dcsMultiTrack("DCS.dcssip", f, "DCS.dcsuri", g, "DCS.dcsqry", "", "WT.ti", "RightClick:" + g, "WT.dl", "25")
                    }
                }
            }
        }
    }
};
WebTrends.prototype.dcsOffsite = function(a) {
    a = a || (window.event || "");
    if (a && ((typeof(a.which) != "number") || (a.which == 1))) {
        var d = this.dcsEvt(a, "A");
        if (d.href) {
            var g = d.hostname ? (d.hostname.split(":")[0]) : "";
            var h = d.protocol || "";
            if ((g.length > 0) && (h.indexOf("http") == 0) && !this.dcsIsOnsite(g)) {
                var b = d.search ? d.search.substring(d.search.indexOf("?") + 1, d.search.length) : "";
                var f = d.pathname ? ((d.pathname.indexOf("/") != 0) ? "/" + d.pathname : d.pathname) : "/";
                this.dcsMultiTrack("DCS.dcssip", g, "DCS.dcsuri", f, "DCS.dcsqry", this.trimoffsiteparams ? "" : b, "DCS.dcsref", window.location, "WT.ti", "Offsite:" + g + f + (b.length ? ("?" + b) : ""), "WT.dl", "24", "WT.nv", this.dcsNavigation(a))
            }
        }
    }
};
WebTrends.prototype.dcsAdv = function() {
    if (this.trackevents && (typeof(this.dcsET) == "function")) {
        if (window.addEventListener) {
            window.addEventListener("load", this.dcsET.wtbind(this), false)
        } else {
            if (window.attachEvent) {
                window.attachEvent("onload", this.dcsET.wtbind(this))
            }
        }
    }
    this.dcsFPC()
};
WebTrends.prototype.dcsVar = function() {
    var b = new Date();
    var a = this.WT;
    var k = this.DCS;
    a.tz = parseInt(b.getTimezoneOffset() / 60 * -1) || "0";
    a.bh = b.getHours() || "0";
    a.ul = navigator.appName == "Netscape" ? navigator.language : navigator.userLanguage;
    if (typeof(screen) == "object") {
        a.cd = navigator.appName == "Netscape" ? screen.pixelDepth : screen.colorDepth;
        a.sr = screen.width + "x" + screen.height
    }
    if (typeof(navigator.javaEnabled()) == "boolean") {
        a.jo = navigator.javaEnabled() ? "Yes" : "No"
    }
    if (document.title && (typeof(a.ti) == "undefined" || a.ti == "")) {
        if (window.RegExp) {
            var g = new RegExp("^" + window.location.protocol + "//" + window.location.hostname + "\\s-\\s");
            a.ti = document.title.replace(g, "")
        } else {
            a.ti = document.title
        }
    }
    a.js = "Yes";
    a.jv = (function() {
        var q = navigator.userAgent.toLowerCase();
        var C = parseInt(navigator.appVersion);
        var p = (q.indexOf("mac") != -1);
        var w = (q.indexOf("firefox") != -1);
        var m = (q.indexOf("firefox/0.") != -1);
        var r = (q.indexOf("firefox/1.0") != -1);
        var n = (q.indexOf("firefox/1.5") != -1);
        var B = (q.indexOf("firefox/2.0") != -1);
        var D = (w && !m && !r & !n & !B);
        var l = (!w && (q.indexOf("mozilla") != -1) && (q.indexOf("compatible") == -1));
        var o = (l && (C == 4));
        var y = (l && (C >= 5));
        var A = ((q.indexOf("msie") != -1) && (q.indexOf("opera") == -1));
        var s = (A && (C == 4) && (q.indexOf("msie 4") != -1));
        var z = (A && !s);
        var v = (q.indexOf("opera") != -1);
        var u = (q.indexOf("opera 5") != -1 || q.indexOf("opera/5") != -1);
        var t = (q.indexOf("opera 6") != -1 || q.indexOf("opera/6") != -1);
        var e = (v && !u && !t);
        var x = "1.1";
        if (D) {
            x = "1.8"
        } else {
            if (B) {
                x = "1.7"
            } else {
                if (n) {
                    x = "1.6"
                } else {
                    if (m || r || y || e) {
                        x = "1.5"
                    } else {
                        if ((p && z) || t) {
                            x = "1.4"
                        } else {
                            if (z || o || u) {
                                x = "1.3"
                            } else {
                                if (s) {
                                    x = "1.2"
                                }
                            }
                        }
                    }
                }
            }
        }
        return x
    })();
    a.ct = "unknown";
    if (document.body && document.body.addBehavior) {
        try {
            document.body.addBehavior("#default#clientCaps");
            a.ct = document.body.connectionType || "unknown";
            document.body.addBehavior("#default#homePage");
            a.hp = document.body.isHomePage(location.href) ? "1" : "0"
        } catch (h) {}
    }
    if (document.all) {
        a.bs = document.body ? document.body.offsetWidth + "x" + document.body.offsetHeight : "unknown"
    } else {
        a.bs = window.innerWidth + "x" + window.innerHeight
    }
    a.fv = (function() {
        var m, l;
        if (window.ActiveXObject) {
            for (m = 15; m > 0; m--) {
                try {
                    l = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + m);
                    return m + ".0"
                } catch (n) {}
            }
        } else {
            if (navigator.plugins && navigator.plugins.length) {
                for (m = 0; m < navigator.plugins.length; m++) {
                    if (navigator.plugins[m].name.indexOf("Shockwave Flash") != -1) {
                        return navigator.plugins[m].description.split(" ")[2]
                    }
                }
            }
        }
        return "Not enabled"
    })();
    a.slv = (function() {
        var n = "Not enabled";
        try {
            if (navigator.userAgent.indexOf("MSIE") != -1) {
                var o = new ActiveXObject("AgControl.AgControl");
                if (o) {
                    n = "Unknown"
                }
            } else {
                if (navigator.plugins["Silverlight Plug-In"]) {
                    n = "Unknown"
                }
            }
        } catch (r) {}
        if (n != "Not enabled") {
            var p, l, s, q;
            if ((typeof(Silverlight) == "object") && (typeof(Silverlight.isInstalled) == "function")) {
                for (p = 9; p > 0; p--) {
                    s = p;
                    if (Silverlight.isInstalled(s + ".0")) {
                        break
                    }
                    if (n == s) {
                        break
                    }
                }
                for (l = 9; l >= 0; l--) {
                    q = s + "." + l;
                    if (Silverlight.isInstalled(q)) {
                        n = q;
                        break
                    }
                    if (n == q) {
                        break
                    }
                }
            }
        }
        return n
    })();
    if (this.i18n) {
        if (typeof(document.defaultCharset) == "string") {
            a.le = document.defaultCharset
        } else {
            if (typeof(document.characterSet) == "string") {
                a.le = document.characterSet
            } else {
                a.le = "unknown"
            }
        }
    }
    a.tv = "9.4.0";
    a.sp = this.splitvalue;
    a.dl = "0";
    a.ssl = (window.location.protocol.indexOf("https:") == 0) ? "1" : "0";
    k.dcsdat = b.getTime();
    k.dcssip = window.location.hostname;
    k.dcsuri = window.location.pathname;
    a.es = k.dcssip + k.dcsuri;
    if (window.location.search) {
        k.dcsqry = window.location.search
    }
    if (k.dcsqry) {
        var d = k.dcsqry.toLowerCase();
        var j = this.paidsearchparams.length ? this.paidsearchparams.toLowerCase().split(",") : [];
        for (var f = 0; f < j.length; f++) {
            if (d.indexOf(j[f] + "=") != -1) {
                a.srch = "1";
                break
            }
        }
    }
    if ((window.document.referrer != "") && (window.document.referrer != "-")) {
        if (!(navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion) < 4)) {
            k.dcsref = window.document.referrer
        }
    }
    k.dcscfg = this.TPCConfig.cfgType
};
WebTrends.prototype.dcsEscape = function(a, d) {
    if (d != "") {
        a = a.toString();
        for (var b in d) {
            if (d[b] instanceof RegExp) {
                a = a.replace(d[b], b)
            }
        }
        return a
    } else {
        return escape(a)
    }
};
WebTrends.prototype.dcsA = function(h, d) {
    if (this.i18n && (this.exre != "") && !this.exre.test(h)) {
        if (h == "dcsqry") {
            var a = "";
            var e = d.substring(1).split("&");
            for (var g = 0; g < e.length; g++) {
                var f = e[g];
                var j = f.indexOf("=");
                if (j != -1) {
                    var k = f.substring(0, j);
                    var b = f.substring(j + 1);
                    if (g != 0) {
                        a += "&"
                    }
                    a += k + "=" + this.dcsEncode(b)
                }
            }
            d = d.substring(0, 1) + a
        } else {
            d = this.dcsEncode(d)
        }
    }
    return "&" + h + "=" + d
};
WebTrends.prototype.dcsEncode = function(a) {
    return (typeof(encodeURIComponent) == "function") ? encodeURIComponent(a) : escape(a)
};
WebTrends.prototype.dcsCreateImage = function(a) {
    if (document.images) {
        this.images[this.index] = new Image();
        this.images[this.index].src = a;
        this.index++
    }
};
WebTrends.prototype.dcsMeta = function() {
    var b;
    if (document.documentElement) {
        b = document.getElementsByTagName("meta")
    } else {
        if (document.all) {
            b = document.all.tags("meta")
        }
    }
    if (typeof(b) != "undefined") {
        var g = b.length;
        for (var e = 0; e < g; e++) {
            var d = b.item(e).name;
            var f = b.item(e).content;
            var a = b.item(e).httpEquiv;
            if (d.length > 0) {
                if (d.toUpperCase().indexOf("WT.") == 0) {
                    this.WT[d.substring(3)] = f
                } else {
                    if (d.toUpperCase().indexOf("DCSEXT.") == 0) {
                        this.DCSext[d.substring(7)] = f
                    } else {
                        if (d.toUpperCase().indexOf("DCS.") == 0) {
                            this.DCS[d.substring(4)] = f
                        }
                    }
                }
            }
        }
    }
};
WebTrends.prototype.dcsTag = function() {
    if (document.cookie.indexOf("WTLOPTOUT=") != -1) {
        return
    }
    var a = this.WT;
    var g = this.DCS;
    var b = this.DCSext;
    var e = this.i18n;
    var d = "http" + (window.location.protocol.indexOf("https:") == 0 ? "s" : "") + "://" + this.domain + (this.dcsid == "" ? "" : "/" + this.dcsid) + "/dcs.gif?";
    if (e) {
        a.dep = ""
    }
    for (var f in g) {
        if (g[f] && (typeof g[f] != "function")) {
            d += this.dcsA(f, g[f])
        }
    }
    for (f in a) {
        if (a[f] && (typeof a[f] != "function")) {
            d += this.dcsA("WT." + f, a[f])
        }
    }
    for (f in b) {
        if (b[f] && (typeof b[f] != "function")) {
            if (e) {
                a.dep = (a.dep.length == 0) ? f : (a.dep + ";" + f)
            }
            d += this.dcsA(f, b[f])
        }
    }
    if (e && (a.dep.length > 0)) {
        d += this.dcsA("WT.dep", a.dep)
    }
    if (d.length > 2048 && navigator.userAgent.indexOf("MSIE") >= 0) {
        d = d.substring(0, 2040) + "&WT.tu=1"
    }
    return d
};
WebTrends.prototype.dcsDebug = function() {
    var d = this;
    var b = d.images[0].src;
    var f = b.indexOf("?");
    var e = b.substring(0, f).split("/");
    var a = "<b>Protocol</b><br><code>" + e[0] + "<br></code>";
    a += "<b>Domain</b><br><code>" + e[2] + "<br></code>";
    a += "<b>Path</b><br><code>/" + e[3] + "/" + e[4] + "<br></code>";
    a += "<b>Query Params</b><code>" + b.substring(f + 1).replace(/\&/g, "<br>") + "</code>";
    a += "<br><b>Cookies</b><br><code>" + document.cookie.replace(/\;/g, "<br>") + "</code>";
    if (d.w && !d.w.closed) {
        d.w.close()
    }
    d.w = window.open("", "dcsDebug", "width=500,height=650,scrollbars=yes,resizable=yes");
    d.w.document.write(a);
    d.w.focus()
};
WebTrends.prototype.dcsCollect = function() {
    if (this.enabled) {
        this.dcsVar();
        this.dcsMeta();
        this.dcsAdv();
        if (typeof(this.dcsCustom) == "function") {
            this.dcsCustom()
        }
        var a = this.dcsTag();
        return a
    }
};

function dcsMultiTrack() {
    if (typeof(_tag) != "undefined") {
        return (_tag.dcsMultiTrack())
    }
}

function dcsDebug() {
    if (typeof(_tag) != "undefined") {
        return (_tag.dcsDebug())
    }
}
Function.prototype.wtbind = function(b) {
    var d = this;
    var a = function() {
        return d.apply(b, arguments)
    };
    return a
};
com.bbva.kyop.component.ActivityRegister = new function() {
    var a = "kyop-central-load-area";
    var k = "activityRegister_frmAjax";
    var d = new WebTrends();
    var g = 0;
    this.activityRegisterRequiredBean;
    var f;
    this.getIFrameCount = function() {
        return this.iFrameCount
    };
    this.setIFrameCount = function(m) {
        this.iFrameCount = m
    };
    this.setActivityRegisterRequiredBean = function(m) {
        this.activityRegisterRequiredBean = m;
        f = this.testConnection(m.getUrlWebTrends())
    };
    this.getWebTrends = function() {
        return d
    };
    this.fKdrgSetIPCliente = function(m) {
        d.DCS.dcscip = m
    };
    this.fKdrgSetFolio = function(m) {
        d.DCSext.w_folio = m
    };
    this.fKdrgSetUsuario = function(m) {
        d.DCS.dcsaut = m
    };
    this.fKdrgRASetEmpresa = function(m) {
        d.DCSext.w_referencia = m
    };
    this.fKdrgSetSesion = function(m) {
        d.DCSext.w_sesion = m
    };
    this.fKdrgSetPagina = function(m) {
        d.DCSext.w_pagina = d.dcsEscape(m, d.re)
    };
    this.fKdrgSetServicio = function(m) {
        d.DCSext.w_serv = m
    };
    this.fKdrgSetProceso = function(m) {
        d.DCSext.w_proc = m
    };
    this.fKdrgSetProducto = function(m) {
        d.DCSext.w_producto = m
    };
    this.fKdrgSetPais = function(m) {
        d.DCSext.w_pais = m
    };
    this.fKdrgSetIdioma = function(m) {
        d.DCSext.w_idioma = m
    };
    this.fKdrgSetPaso = function(m) {
        d.DCSext.w_step = m
    };
    this.fKdrgSetProcOK = function() {
        d.DCSext.w_proc_ok = "S"
    };
    this.fKdrgSetImporte = function(m) {
        d.DCSext.w_import = m
    };
    this.fKdrgSetCodError = function(m) {
        d.DCSext.w_error = m
    };
    this.fKdrgSetMsgError = function(m) {
        d.DCSext.w_err_msg = m
    };
    this.fKdrgSetObservaciones = function(m) {
        d.DCSext.w_future = m
    };
    this.fKdrgSetTitulo = function(m) {};
    this.fKdrgSetDesconex = function() {
        d.DCSext.w_desc = "S"
    };
    this.fKdrgSetConex = function() {
        d.DCSext.w_con = "S"
    };
    this.fKdrgSetCtaOrd = function(m) {
        d.DCSext.w_orden = m
    };
    this.fKdrgSetCtaBnf = function(m) {
        d.DCSext.w_benef = m
    };
    this.fKdrgSetDCSID = function(m) {
        d.dcsid = m
    };
    this.fKdrgSetDomain = function(m) {
        d.domain = m
    };
    this.fKdrgSetFpcdom = function(m) {
        d.fpcdom = m
    };
    this.fKdrgSetBanTridion = function(m) {
        d.DCSext.w_banTridion = m
    };
    this.fKdrgSetFunnel = function(m) {
        d.WT.si_n = m
    };
    this.fKdrgSetStep = function(m) {
        d.WT.si_p = m
    };
    this.fKdrgSetTi = function(m) {
        d.WT.ti = m
    };
    this.fKdrgSetOrigin = function(m) {
        d.WT.ori = m
    };
    this.fKdrgSetFechaCreacion = function(m) {
        d.DCSext.w_fechacreacion = m
    };
    this.fKdrgSetFechaProceso = function(m) {
        d.DCSext.w_fechaproceso = m
    };
    this.fKdrgSetDivisa = function(m) {
        d.DCSext.w_divisa = m
    };
    this.fKdrgSetNombreFichero = function(m) {
        d.DCSext.w_nombrefichero = m
    };
    this.fKdrgSetIdFichero = function(m) {
        d.DCSext.w_idfichero = m
    };
    this.fKdrgSetTipoOrden = function(m) {
        d.DCSext.w_tipoorden = m
    };
    this.fKdrgSetNumOrdenes = function(m) {
        d.DCSext.w_numeroordenes = m
    };
    this.fKdrgSetNumeroCuentaOrdenante = function(m) {
        d.DCSext.w_numerocuentaordenante = m
    };
    this.fKdrgSetFirmante = function(m) {
        d.DCSext.w_firmante = m
    };
    this.fKdrgSetEstado = function(m) {
        d.DCSext.w_estado = m
    };
    this.fKdrgSetTipoClaseFirma = function(m) {
        d.DCSext.w_tipoclasefirma = m
    };
    this.fKdrgSetTipoFirma = function(m) {
        d.DCSext.w_tipofirma = m
    };
    this.fKdrgSetOrigen = function(m) {
        d.DCSext.w_origen = m
    };
    this.fKdrgSetTipoCreacion = function(m) {
        d.DCSext.w_tipocreacion = m
    };
    var b = function() {
        d.WT = {};
        d.DCS = {};
        d.DCSext = {}
    };
    this.setVariableIfNotNull = function(n, m) {
        if (n) {
            m(n)
        }
    };
    var e = function() {
        var m = "";
        if (window.RegExp) {
            var n = new RegExp("^" + window.location.protocol + "//" + window.location.hostname + "\\s-\\s");
            m = document.title.replace(n, "")
        } else {
            m = document.title
        }
        return m
    };
    this.initLogin = function(m, n, q, o, p) {
        logger.info("MÉTODO initLogin. Realizando el login de webtrends");
        this.fKdrgSetConex();
        this.fKdrgSetProceso(this.activityRegisterRequiredBean.getLoginProcess());
        this.fKdrgSetServicio("login");
        this.fKdrgSetTitulo("Login BBVA Net Cash");
        this.fKdrgSetPagina("LOGINKYOP");
        this.fKdrgSetProducto(m);
        this.fKdrgSetIdioma(q);
        this.fKdrgSetPais(o);
        this.fKdrgSetTi("Login " + e());
        this.fKdrgSetOrigen("PLIN");
        this.sendDataToWebTrends(this.getWebTrends().dcsCollect(), p)
    };
    this.initRegisterActivityRequiredBean = function() {
        b();
        this.setVariableIfNotNull(this.activityRegisterRequiredBean.getIpClient(), this.fKdrgSetIPCliente);
        this.setVariableIfNotNull(this.activityRegisterRequiredBean.getUser(), this.fKdrgSetUsuario);
        this.setVariableIfNotNull(this.activityRegisterRequiredBean.getCompany(), this.fKdrgRASetEmpresa);
        this.setVariableIfNotNull(this.activityRegisterRequiredBean.getSession(), this.fKdrgSetSesion);
        this.setVariableIfNotNull(this.activityRegisterRequiredBean.getDomain(), this.fKdrgSetDomain);
        this.setVariableIfNotNull(this.activityRegisterRequiredBean.getDcsid(), this.fKdrgSetDCSID);
        this.setVariableIfNotNull(this.activityRegisterRequiredBean.getFpcDom(), this.fKdrgSetFpcdom)
    };
    this.initRegisterActivity = function(m) {
        this.setVariableIfNotNull(m.getService(), this.fKdrgSetServicio);
        this.setVariableIfNotNull(m.getProcess(), this.fKdrgSetProceso);
        this.setVariableIfNotNull(m.getProduct(), this.fKdrgSetProducto);
        this.setVariableIfNotNull(m.getCountry(), this.fKdrgSetPais);
        this.setVariableIfNotNull(m.getLanguage(), this.fKdrgSetIdioma);
        this.setVariableIfNotNull(m.getTitle(), this.fKdrgSetTitulo);
        this.setVariableIfNotNull(m.getPage(), this.fKdrgSetPagina);
        this.setVariableIfNotNull(m.getFunnel(), this.fKdrgSetFunnel);
        this.setVariableIfNotNull(m.getStep(), this.fKdrgSetStep);
        this.setVariableIfNotNull(m.getWStep(), this.fKdrgSetPaso);
        this.setVariableIfNotNull(activityRegisterDto.getOrigen(), this.fKdrgSetOrigen)
    };
    this.testConnection = function(m) {
        logger.info("MÉTODO testConnection: Realizando test de conexion");
        if (!this.activityRegisterRequiredBean.isTestConnection()) {
            this.initRegisterActivityRequiredBean();
            logger.info("MÉTODO testConnection: Prueba de test deshabilitada. Test OK");
            return true
        }
        var n = false;
        $.ajax({
            type: "GET",
            async: true,
            url: m,
            success: function() {
                n = true
            },
            error: function(o, q, p) {
                n = false
            }
        });
        if (n) {
            this.initRegisterActivityRequiredBean();
            this.initLogin()
        } else {
            this.activityRegisterRequiredBean.getCallbackTestFail()
        }
        logger.info("MÉTODO testConnection: Resultado del test de conexion " + (n ? "OK" : "Falló"));
        return n
    };
    this.initializeCollect = function(m) {
        this.initRegisterActivityRequiredBean();
        this.initRegisterActivity(m)
    };
    var l = function(m) {
        return m.substring(m.indexOf("?") + 1)
    };
    var j = function(m) {
        return [m.substring(0, m.indexOf("=")), m.substring(m.indexOf("=") + 1)]
    };
    this.getParametersStringFromUrl = function(n) {
        var m = l(n);
        var p = m.split("&");
        var o = "";
        for (i = 0; i < p.length; i++) {
            if (p[i] != "") {
                var q = j(p[i]);
                o = o + "&" + q[0] + "=" + q[1]
            }
        }
        logger.info("MÉTODO getParametersStringFromUrl. Los datos que se van a enviar son: " + o.substr(1));
        return o.substr(1)
    };
    this.getParametersInputFromUrl = function(n) {
        var m = l(n);
        var p = m.split("&");
        var r = $("<div></div>");
        var o = "";
        for (i = 0; i < p.length; i++) {
            if (p[i] != "") {
                var q = j(p[i]);
                r.append($("<input name='" + q[0] + "' value='" + q[1] + "' />"))
            }
        }
        return r
    };
    this.sendDataToWebTrendsAjax = function(n, o) {
        var m = false;
        $.ajax({
            type: this.activityRegisterRequiredBean.getMethod(),
            async: true,
            url: this.activityRegisterRequiredBean.getUrlWebTrends(),
            data: this.getParametersStringFromUrl(n),
            success: function() {
                m = true;
                if (o) {
                    o()
                }
            },
            error: function(p, r, q) {
                m = false
            }
        });
        if (!m) {
            this.activityRegisterRequiredBean.getCallbackSendPostUrlFail()
        }
        logger.info("MÉTODO sendDataToWebTrends: Resultado del enviar por post el registro: " + (m ? "OK" : "Falló"));
        return m
    };
    this.sendDataToWebTrendsByIframe = function(p, s) {
        this.setIFrameCount(this.getIFrameCount() + 1);
        var q = this.getIFrameCount();
        var o = "form_" + k + "_" + q;
        var r = $("<div id=" + k + "_" + q + "></div>");
        var m = $("<iframe id='" + o + "' name='" + o + "'></iframe>");
        var n = $("<form method='" + this.activityRegisterRequiredBean.getMethod() + "' action='" + this.activityRegisterRequiredBean.getUrlWebTrends() + "' target='" + o + "'></form>");
        n.append(this.getParametersInputFromUrl(p));
        m.hide();
        n.hide();
        $(r).append(n);
        $(r).append(m);
        $("body").append(r);
        m.load(function() {
            if (s) {
                s()
            }
            var t = $(this).parent()[0].id;
            $("#" + t).remove()
        });
        n.submit()
    };
    this.sendDataToWebTrends = function(m, n) {
        logger.info("MÉTODO sendDataToWebTrends. La URL que devuelve webtrends.js es:" + m);
        if (!m) {
            return false
        }
        if (this.activityRegisterRequiredBean.isAjaxRequest()) {
            return this.sendDataToWebTrendsAjax(m, n)
        } else {
            return this.sendDataToWebTrendsByIframe(m, n)
        }
    };
    this.activityRegister = function(m) {
        logger.info("MÉTODO registerActivity. Realizando petición post a la url " + this.activityRegisterRequiredBean.getUrlWebTrends());
        if (f) {
            this.initializeCollect(m);
            this.sendDataToWebTrends(this.getWebTrends().dcsCollect());
            return this.getWebTrends().dcsCollect()
        } else {
            logger.info("MÉTODO registerActivity. El de conexion falló. No se puede realizar la petición")
        }
        return "undefined"
    };
    this.loginRegister = function(m) {
        this.initRegisterActivityRequiredBean();
        this.initLogin(m);
        this.fKdrgSetOrigen("PLIN")
    };
    this.logoutRegister = function(m, p, n, o) {
        this.initRegisterActivityRequiredBean();
        this.fKdrgSetDesconex();
        this.fKdrgSetPagina("LOGOUTKYOP");
        this.fKdrgSetProceso(this.activityRegisterRequiredBean.getLogoutProcess());
        this.fKdrgSetServicio("logou");
        this.fKdrgSetTitulo("Logout BBVA Net Cash");
        this.fKdrgSetProducto(m);
        this.fKdrgSetIdioma(p);
        this.fKdrgSetPais(n);
        this.fKdrgSetTi("Logout " + e());
        this.fKdrgSetOrigen("PLOU");
        this.sendDataToWebTrends(this.getWebTrends().dcsCollect(), o)
    };
    this.invocationRegister = function(p, o, n, q, t, u, r, m, s) {
        logger.info("InvocationRegister: country" + p + "idioma=" + o + " idProduct=" + n + " idProcess=" + q + " idService=" + t + " title=" + u + " page=" + r + " paso=" + m);
        var w = null;
        var v = "";
        this.initRegisterActivityRequiredBean();
        this.fKdrgSetIdioma(o);
        this.fKdrgSetProducto(n);
        this.fKdrgSetPaso("0");
        this.fKdrgSetProceso(q);
        this.fKdrgSetServicio(t);
        this.fKdrgSetPais(p);
        if (m != undefined && typeof(m) == "object" && m != null) {
            w = m;
            v = w.origin
        }
        if (s != undefined && typeof(s) == "object" && s != null) {
            v = s.origin
        }
        this.fKdrgSetOrigin(v);
        if (v == "Menú") {
            this.fKdrgSetPagina("Menu");
            this.fKdrgSetTitulo("Invocación de " + u);
            this.fKdrgSetTi("Invocación de " + u);
            this.fKdrgSetOrigen("PMME")
        } else {
            if (v == "Buscador") {
                this.fKdrgSetPagina("Menu");
                this.fKdrgSetTitulo("Invocación de " + u);
                this.fKdrgSetTi("Invocación de " + u);
                this.fKdrgSetOrigen("PMBU")
            } else {
                if (v == "También le puede interesar") {
                    this.fKdrgSetPagina("Menu");
                    this.fKdrgSetTitulo("Invocación de " + u);
                    this.fKdrgSetTi("Invocación de " + u);
                    this.fKdrgSetOrigen("PMTI")
                } else {
                    if (v == "Favoritos") {
                        this.fKdrgSetPagina("Menu");
                        this.fKdrgSetTitulo("Invocación de " + u);
                        this.fKdrgSetTi("Invocación de " + u);
                        this.fKdrgSetOrigen("PMFA")
                    } else {
                        if (v == "Operaciones frecuentes") {
                            this.fKdrgSetPagina("Menu");
                            this.fKdrgSetTitulo("Invocación de " + u);
                            this.fKdrgSetTi("Invocación de " + u);
                            this.fKdrgSetOrigen("PMOF")
                        } else {
                            if (u == "Información de productos" || u == "Documentation Centre" || u == "Centre de documentation" || u == "Centro de documentação" || u == "Centro di documentazione" || u == "Centre de documentació") {
                                u = "Información de productos";
                                this.fKdrgSetPagina(u);
                                this.fKdrgSetTitulo(u);
                                this.fKdrgSetTi(u);
                                this.fKdrgSetOrigen("PHL-")
                            } else {
                                if (t == "AYUDA") {
                                    this.fKdrgSetPagina("Ayuda");
                                    this.fKdrgSetTitulo("Ayuda");
                                    this.fKdrgSetTi("Ayuda");
                                    this.fKdrgSetOrigen("PHL-")
                                } else {
                                    this.fKdrgSetPagina("Menu");
                                    this.fKdrgSetTitulo("Invocación de " + u);
                                    this.fKdrgSetTi("Invocación de " + u);
                                    this.fKdrgSetOrigen("PMME")
                                }
                            }
                        }
                    }
                }
            }
        }
        logger.debug("Llamando al registro de Actividad desde el Portal ---- T�tulo: " + u + "- Paso: " + m + "-- Observaciones: El portal no pasa observaciones -------");
        this.sendDataToWebTrends(this.getWebTrends().dcsCollect())
    };
    var h = function(q, m, n, r, u, p, o, s, t) {
        com.bbva.kyop.component.ActivityRegister.initRegisterActivityRequiredBean();
        com.bbva.kyop.component.ActivityRegister.fKdrgSetObservaciones(n);
        com.bbva.kyop.component.ActivityRegister.fKdrgSetPaso(m);
        com.bbva.kyop.component.ActivityRegister.fKdrgSetTitulo(q);
        com.bbva.kyop.component.ActivityRegister.fKdrgSetProceso(r);
        com.bbva.kyop.component.ActivityRegister.fKdrgSetServicio(u);
        com.bbva.kyop.component.ActivityRegister.fKdrgSetPais(p);
        com.bbva.kyop.component.ActivityRegister.fKdrgSetProducto(o);
        com.bbva.kyop.component.ActivityRegister.fKdrgSetIdioma(s);
        com.bbva.kyop.component.ActivityRegister.fKdrgSetTi(q);
        if (typeof(t) != "undefined") {
            com.bbva.kyop.component.ActivityRegister.fKdrgSetPagina(t)
        } else {
            com.bbva.kyop.component.ActivityRegister.fKdrgSetPagina(document.location.href)
        }
    };
    this.pageRegister = function(q, m, n, r, u, p, o, s, t) {
        logger.debug("Llamando al registro de Actividad desde el Portal ---- T�tulo: " + q + "- Paso: " + m + "-- Observaciones: " + n + " -------");
        h(q, m, n, r, u, p, o, s, t);
        this.sendDataToWebTrends(this.getWebTrends().dcsCollect())
    };
    this.register = function(t, m, q, w, p, n) {
        var u = "";
        var x = "";
        var r = "";
        if (typeof(w) == "undefined") {
            u = com.bbva.kyop.controller.CoreController.getCurrentProcess()
        } else {
            u = w
        }
        if (typeof(p) == "undefined") {
            x = com.bbva.kyop.controller.CoreController.getCurrentService()
        } else {
            x = p
        }
        if (typeof(n) == "undefined") {
            r = com.bbva.kyop.controller.CoreController.getCurrentDescriptionProcess()
        } else {
            r = n
        }
        var s = com.bbva.kyop.bean.UserBean.getRegionalInformation().getCodIso();
        var o = com.bbva.kyop.bean.UserBean.getUserInformation().getProductId();
        var v = com.bbva.kyop.bean.UserBean.getRegionalInformation().getLanguage();
        this.pageRegister(t, m, q, u, x, s, o, v, r)
    };
    this.bannerRegister = function(r, s, o, t, u) {
        var n = com.bbva.kyop.bean.UserBean.getRegionalInformation().getCodIso();
        var m = com.bbva.kyop.bean.UserBean.getUserInformation().getProductId();
        var p = com.bbva.kyop.bean.UserBean.getRegionalInformation().getLanguage();
        var q = com.bbva.kyop.controller.CoreController.getCurrentDescriptionProcess();
        this.initRegisterActivityRequiredBean();
        this.fKdrgSetServicio("serTr");
        this.fKdrgSetProceso("procTrid");
        this.fKdrgSetBanTridion(r);
        this.fKdrgSetTitulo(s);
        this.fKdrgSetProducto(m);
        this.fKdrgSetIdioma(p);
        this.fKdrgSetPais(n);
        this.fKdrgSetTi(u + "-" + r);
        this.fKdrgSetObservaciones(o);
        if (o == "bannerVertical") {
            this.fKdrgSetOrigen("PBV-")
        } else {
            if (o == "bannerHorizontal") {
                this.fKdrgSetOrigen("PBH-")
            }
        }
        this.fKdrgSetPagina(t);
        this.sendDataToWebTrends(this.getWebTrends().dcsCollect())
    };
    this.helpRegister = function(t, s, m, p) {
        var q = com.bbva.kyop.bean.UserBean.getRegionalInformation().getCodIso();
        var n = com.bbva.kyop.bean.UserBean.getUserInformation().getProductId();
        var r = com.bbva.kyop.bean.UserBean.getRegionalInformation().getLanguage();
        var o = com.bbva.kyop.controller.CoreController.getCurrentDescriptionProcess();
        this.initRegisterActivityRequiredBean();
        this.fKdrgSetServicio("serHelp");
        this.fKdrgSetProceso("procHelp");
        this.fKdrgSetBanTridion(m);
        this.fKdrgSetTitulo(t);
        this.fKdrgSetProducto(n);
        this.fKdrgSetIdioma(r);
        this.fKdrgSetPais(q);
        this.fKdrgSetTi(p + "-" + m);
        this.fKdrgSetObservaciones(s);
        if (typeof(o) != "undefined") {
            this.fKdrgSetPagina(o)
        } else {
            this.fKdrgSetPagina(document.location.href)
        }
        this.sendDataToWebTrends(this.getWebTrends().dcsCollect())
    };
    this.helpRegister = function(t, u, n, r, p) {
        var o = com.bbva.kyop.bean.UserBean.getRegionalInformation().getCodIso();
        var m = com.bbva.kyop.bean.UserBean.getUserInformation().getProductId();
        var q = com.bbva.kyop.bean.UserBean.getRegionalInformation().getLanguage();
        var s = com.bbva.kyop.controller.CoreController.getCurrentDescriptionProcess();
        this.initRegisterActivityRequiredBean();
        this.fKdrgSetServicio("sHelp");
        this.fKdrgSetProceso("procHelp");
        if (r == "null") {
            r = ""
        }
        this.fKdrgSetBanTridion(r);
        this.fKdrgSetTi(t + "|" + u + "|" + n);
        this.fKdrgSetTitulo(t);
        this.fKdrgSetProducto(m);
        this.fKdrgSetIdioma(q);
        this.fKdrgSetPais(o);
        this.fKdrgSetPagina("Help");
        this.fKdrgSetOrigen(p);
        this.sendDataToWebTrends(this.getWebTrends().dcsCollect())
    };
    this.helpContextRegister = function() {
        var q = com.bbva.kyop.bean.UserBean.getRegionalInformation().getCodIso();
        var n = com.bbva.kyop.bean.UserBean.getUserInformation().getProductId();
        var s = com.bbva.kyop.bean.UserBean.getRegionalInformation().getLanguage();
        var p = com.bbva.kyop.controller.CoreController.getCurrentDescriptionProcess();
        var m;
        if (undefined != $("div.miga.actual a").html()) {
            migas = $("div.miga.actual a").html().trim();
            if (migas == "Portada" || migas == "Pagina principale" || migas == "Home" || migas == "Page d'accueil") {
                m = "Portada";
                var o = "home";
                var r = "home"
            } else {
                m = p.split("-")[0].trim();
                var o = com.bbva.kyop.controller.CoreController.getCurrentProcess();
                var r = com.bbva.kyop.controller.CoreController.getCurrentService()
            }
        } else {
            m = "Portada";
            var o = "home";
            var r = "home"
        }
        this.initRegisterActivityRequiredBean();
        this.fKdrgSetServicio(r);
        this.fKdrgSetProceso(o);
        this.fKdrgSetProducto(n);
        this.fKdrgSetTi("Invocación de " + m);
        this.fKdrgSetIdioma(s);
        this.fKdrgSetPais(q);
        this.fKdrgSetPagina("Help");
        this.fKdrgSetPaso("99");
        this.fKdrgSetOrigen("HC--");
        this.sendDataToWebTrends(this.getWebTrends().dcsCollect())
    };
    this.campainRegister = function(m, o, n) {
        this.fKdrgSetServicio("sCamp");
        this.fKdrgSetProceso("procCamp");
        this.fKdrgSetPagina("Campain");
        this.fKdrgSetBanTridion(o);
        this.fKdrgSetTi(m);
        this.fKdrgSetOrigen(n);
        this.sendDataToWebTrends(this.getWebTrends().dcsCollect())
    };
    this.dynamicLinksRegister = function(m, q, p, n, r, o) {
        this.initRegisterActivityRequiredBean();
        this.fKdrgSetServicio("sLink");
        this.fKdrgSetProceso("procLink");
        this.fKdrgSetTitulo(q);
        this.fKdrgSetProducto(n);
        this.fKdrgSetIdioma(r);
        this.fKdrgSetPais(p);
        if (q == "Seguridad" || q == "Security" || q == "Segurança" || q == "Sécurité" || q == "Seguretat" || q == "Sicurezza") {
            q = "Seguridad";
            this.fKdrgSetTi(q);
            this.fKdrgSetPagina(q);
            this.fKdrgSetOrigen("PFL-")
        } else {
            if (q == "Tarifas y otros avisos" || q == "Rates and other notices" || q == "Tarifas e outros avisos" || q == "Tarifs et autres avis" || q == "Tarifes i altres avisos" || q == "Tariffe e altri avvisi") {
                q = "Tarifas y otros avisos";
                this.fKdrgSetTi(q);
                this.fKdrgSetPagina(q);
                this.fKdrgSetOrigen("PFL-")
            } else {
                if (q == "Aviso legal" || q == "Legal notice" || q == "Avis légal" || q == "Av�s legal" || q == "Avviso legale") {
                    q = "Aviso legal";
                    this.fKdrgSetTi(q);
                    this.fKdrgSetPagina(q);
                    this.fKdrgSetOrigen("PFL-")
                } else {
                    if (q == "Contact link") {
                        this.fKdrgSetTi(q);
                        this.fKdrgSetPagina(q);
                        this.fKdrgSetOrigen("PHL-")
                    } else {
                        this.fKdrgSetTi("Link-" + m);
                        if (typeof(o) != "undefined") {
                            this.fKdrgSetPagina(o)
                        } else {
                            this.fKdrgSetPagina(document.location.href)
                        }
                    }
                }
            }
        }
        this.sendDataToWebTrends(this.getWebTrends().dcsCollect())
    };
    this.filesAndSignaturesRegister = function(y, r, q, w, C, s, F, A, t, u, B, H, o, G, m, n, x) {
        var z = com.bbva.kyop.controller.CoreController.getCurrentProcess();
        var I = com.bbva.kyop.controller.CoreController.getCurrentService();
        var E = com.bbva.kyop.bean.UserBean.getRegionalInformation().getCodIso();
        var p = com.bbva.kyop.bean.UserBean.getUserInformation().getProductId();
        var D = com.bbva.kyop.bean.UserBean.getRegionalInformation().getLanguage();
        var v = com.bbva.kyop.controller.CoreController.getCurrentDescriptionProcess();
        h(y, r, q, z, I, E, p, D, v);
        this.fKdrgSetFechaCreacion(w);
        this.fKdrgSetFechaProceso(C);
        this.fKdrgSetImporte(s);
        this.fKdrgSetDivisa(F);
        this.fKdrgSetNombreFichero(A);
        this.fKdrgSetIdFichero(t);
        this.fKdrgSetTipoOrden(u);
        this.fKdrgSetNumOrdenes(B);
        this.fKdrgSetNumeroCuentaOrdenante(H);
        this.fKdrgSetFirmante(o);
        this.fKdrgSetEstado(G);
        this.fKdrgSetTipoClaseFirma(m);
        this.fKdrgSetTipoFirma(n);
        this.fKdrgSetOrigen("PFF-");
        this.fKdrgSetTipoCreacion(x);
        this.sendDataToWebTrends(this.getWebTrends().dcsCollect())
    }
};
com.bbva.kyop.component.TaskGroup = function() {
    this.taskGroupManager = null;
    var b = null;
    var a = false;
    this.getTaskList = function() {
        return this.taskList
    };
    this.setTaskList = function(d) {
        this.taskList = d
    };
    this.run = function() {
        var e = this;
        var f = new com.bbva.kyop.component.TaskManager();
        f.init();
        var d = this.getTaskList();
        f.setSequentialTasks(e.isSequential());
        $.each(d, function(h, g) {
            f.addTask(g)
        });
        f.setFinishRunFunction(function() {
            e.taskGroupManager.notifyFinishGroupTasks()
        });
        f.run()
    };
    this.isSequential = function() {
        return this.sequential
    };
    this.setSequential = function(d) {
        this.sequential = d
    }
};
com.bbva.kyop.component.Task = function() {
    this.taskManager = null;
    var d = null;
    var b = null;
    var f = null;
    var e = null;
    var a = false;
    this.run = function() {
        return d()
    };
    this.callbackFn = function() {
        this.taskManager.notifyFinishTask(this)
    };
    this.setRunFunction = function(g) {
        d = g
    };
    this.getName = function() {
        return this.name
    };
    this.setName = function(g) {
        this.name = g
    };
    this.getData = function() {
        return this.data
    };
    this.setData = function(g) {
        this.data = g
    };
    this.getId = function() {
        return this.id
    };
    this.setId = function(g) {
        this.id = g
    };
    this.isSequential = function() {
        return this.sequential
    };
    this.setSequential = function(g) {
        this.sequential = g
    }
};
com.bbva.kyop.component.TaskManagerGroup = function() {
    var a = new Array();
    this.currentGroupTask = 0;
    var d = 0;
    var b = null;
    this.notifyFinishGroupTasks = function() {
        d++;
        logger.info("TaskManager - Número de grupos finalizados: " + d);
        if (d == a.length) {
            this.finishGroupRun()
        } else {
            this.runNextGroupTasks()
        }
    };
    this.addGroupTask = function(e) {
        e.taskGroupManager = this;
        a[a.length] = e
    };
    this.init = function() {
        this.currentGroupTask = 0;
        a = new Array()
    };
    this.nextGroupRun = function() {
        logger.info("TaskGroupManager - Se ejecuta le grupo de tareas " + this.currentGroupTask);
        a[this.currentGroupTask].run()
    };
    this.run = function() {
        this.runNextGroupTasks()
    };
    this.runNextGroupTasks = function() {
        this.nextGroupRun();
        this.currentGroupTask++
    };
    this.getGroupTaskList = function() {
        return a
    };
    this.getCurrentGroupTask = function() {
        return this.currentGroupTask
    };
    this.finishGroupRun = function() {
        logger.info("TaskGroupManager - Se ejecuta Finish Group Run...");
        return b()
    };
    this.setFinishRunGroupFunction = function(e) {
        b = e
    }
};
com.bbva.kyop.component.TaskManager = function() {
    var a = new Array();
    this.currentTask = 0;
    var b = 0;
    var e = null;
    var d = false;
    this.notifyFinishTask = function(f) {
        b++;
        logger.info("TaskManager - Tarea finalizada: " + f.name);
        logger.info("TaskManager - Número de tareas finalizadas: " + b);
        if (b == a.length) {
            this.finishRun()
        } else {
            if (this.isSequentialTasks()) {
                this.runNextTask()
            }
        }
    };
    this.addTask = function(f) {
        f.taskManager = this;
        a[a.length] = f
    };
    this.init = function() {
        this.currentTask = 0;
        a = new Array()
    };
    this.nextRun = function() {
        logger.info("TaskManager - Se ejecuta la tarea " + this.currentTask + ": " + a[this.currentTask].name);
        a[this.currentTask].run()
    };
    this.run = function() {
        if (this.isSequentialTasks()) {
            this.runNextTask()
        } else {
            var g = a.length;
            for (var f = 0; f < g; f++) {
                this.runNextTask()
            }
        }
    };
    this.runNextTask = function() {
        this.nextRun();
        this.currentTask++
    };
    this.start = function() {
        this.nextRun()
    };
    this.goToNextTask = function(f) {
        this.currentTask++;
        this.nextRun()
    };
    this.getTaskList = function() {
        return a
    };
    this.getCurrentTask = function() {
        return this.currentTask
    };
    this.finishRun = function() {
        logger.info("TaskManager - Se ejecuta Finish Run...");
        return e()
    };
    this.setFinishRunFunction = function(f) {
        e = f
    };
    this.isSequentialTasks = function() {
        return this.sequentialTasks
    };
    this.setSequentialTasks = function(f) {
        this.sequentialTasks = f
    }
};
com.bbva.kyop.component.ExecutionPlanManager = function() {
    var b = new Array();
    var a = null;
    var d = false;
    this.processDataPlan = function() {
        return this.processDataPlanFn()
    };
    this.setProcessPlanFunction = function(e) {
        this.processDataPlanFn = e
    };
    this.setTaskList = function(e) {
        this.taskList = e
    };
    this.getTaskList = function() {
        return this.taskList
    };
    this.setSequentialLoader = function(e) {
        this.sequentialLoader = e
    };
    this.getSequentialLoader = function() {
        return this.sequentialLoader
    }
};
com.bbva.kyop.util.UUAASessionManager = new function() {
    var f = new Array();
    var l = function(p) {
        if (p) {
            return "/session/sessionInvalidate.json"
        } else {
            return "/LogoutPortaServlet"
        }
    };
    var m = function(p) {
        if (p) {
            return "/session/sessionPing.json"
        } else {
            return "/LogoutPortaServlet"
        }
    };
    var n = function(p, q) {
        if (q == "") {
            return p
        }
        if (p.indexOf(q) >= 0) {
            return p.substring(q.length)
        }
    };
    var b = function(p) {
        if (p.indexOf("http://") >= 0) {
            return "http://"
        }
        if (p.indexOf("https://") >= 0) {
            return "https://"
        }
        return ""
    };
    var d = function(p) {
        var r = p.split("/");
        var s = "";
        for (var q = 0; q < 3; q++) {
            s = s + "/" + r[q]
        }
        return s.substring(1)
    };
    var h = function(p) {
        var q = n(p, b(p));
        if (q.split("/").length < 3) {
            return p
        }
        return b(p) + d(q)
    };
    var g = function(p, q) {
        if (q == false) {
            return p.substring(0, p.indexOf("/servlet"))
        }
        if (p.indexOf("?") >= 0) {
            p = p.substring(0, p.indexOf("?") - 1)
        }
        p = h(p);
        return p
    };
    var j = function(p, s) {
        p = g(p, s);
        var r = "?dc=" + (new Date().getTime());
        var q = l(s);
        return p + q + r
    };
    var a = function(p, q) {
        p = g(p, q);
        return p + m(q) + "?dc=" + (new Date().getTime())
    };
    var o = function(p) {
        var t = {};
        if (p.split("?").length == 1) {
            return t
        }
        var s = p.split("?")[1].split("&");
        if (s[0] == "") {
            return t
        }
        for (var r = 0; r < s.length; r++) {
            var q = s[r].split("=")[0];
            var u = s[r].split("=")[1];
            t[q] = u
        }
        return t
    };
    var e = function(q, s) {
        var p = j(q.url, q.newArchitecture);
        com.bbva.kyop.util.LoggerUtil.info("Cerrando la sesion de la url " + p);
        var r = o(q.url);
        r.pag = "0";
        $.ajax({
            url: p,
            type: "POST",
            data: r,
            async: true,
            error: function(t, v, u) {
                com.bbva.kyop.util.LoggerUtil.error("No se ha podido cerrar la sesion de la url" + p)
            },
            success: function() {
                if (s) {
                    s()
                }
            }
        })
    };
    var k = function(q, s) {
        var p = a(q.url, q.newArchitecture);
        var r = o(q.url);
        $.ajax({
            url: p,
            type: "POST",
            data: r,
            async: true,
            error: function(t, v, u) {
                com.bbva.kyop.util.LoggerUtil.error("No se ha podido hacer ping a la url" + q.url)
            },
            success: function() {
                if (s) {
                    s()
                }
            }
        })
    };
    this.clear = function() {
        f = new Array()
    };
    this.exists = function(p, r) {
        for (var q = 0; q < f.length; q++) {
            if (h(f[q].url) == h(p)) {
                return true
            }
        }
        return false
    };
    this.add = function(p, q) {
        if (!this.exists(p, q)) {
            f.push({
                url: p,
                newArchitecture: q
            })
        }
    };
    this.pop = function() {
        return f.pop()
    };
    this.size = function() {
        return f.length
    };
    this.endSession = function() {
        $.each(f, function(p, q) {
            e(q)
        });
        this.clear()
    };
    this.doPingUrls = function() {
        $.each(f, function(p, q) {
            k(q)
        })
    };
    this.endSessionOpenedProcess = function() {
        return this.endSession()
    };
    this.toString = function() {
        var p = "";
        $.each(f, function(q, r) {
            p = "," + r.url
        });
        return p.subtring(1)
    }
};
com.bbva.kyop.component.ApplicationLoader = new function() {
    this.run = function() {
        logger.info("ApplicationLoader - run()");
        com.bbva.kyop.component.ApplicationLoader.runLoader()
    };
    this.runLoader = function() {
        logger.info("ApplicationLoader - runLoader()");
        var planParameter = com.bbva.kyop.controller.CoreController.getExecutionPlanParameter();
        var appGroupLoader = new com.bbva.kyop.component.TaskManagerGroup();
        appGroupLoader.init();
        var executionPlan = null;
        if (planParameter != undefined) {
            eval("executionPlan = com.bbva.kyop.controller.ExecutionPlanController.createPlan" + planParameter.toUpperCase() + "()")
        } else {
            executionPlan = com.bbva.kyop.controller.ExecutionPlanController.createPlanJ()
        }
        var taskListPlan = executionPlan.getTaskList();
        $.each(taskListPlan, function(i, task) {
            appGroupLoader.addGroupTask(task)
        });
        appGroupLoader.setFinishRunGroupFunction(function() {
            executionPlan.processDataPlan()
        });
        appGroupLoader.run()
    }
};
com.bbva.kyop.controller.ApplicationController = new function() {
    this.initApp = function() {
        com.bbva.kyop.component.ApplicationLoader.run()
    }
};
com.bbva.kyop.controller.SessionController = new function() {
    this.endSessions = function() {
        com.bbva.kyop.util.SessionUtil.endSessions(false)
    };
    this.endSessionsFromUserClick = function() {
        com.bbva.kyop.util.SessionUtil.endSessions(true)
    };
    this.initComponent = function() {
        com.bbva.kyop.util.SessionUtil.initComponent
    };
    this.initSession = function() {
        com.bbva.kyop.util.SessionUtil.initComponent;
        com.bbva.kyop.util.SessionUtil.initSession
    };
    this.getConfig = function() {
        logger.debug(com.bbva.kyop.util.SessionUtil.getConfiguration)
    };
    this.askEndSession = function() {
        com.bbva.kyop.util.SessionUtil.askEndSession
    };
    this.logout = function() {
        com.bbva.kyop.util.SessionUtil.logout
    }
};
com.bbva.kyop.controller.LanguageController = new function() {
    this.getCookiPaisFromCookieInicioAndCodIdiomiso = function(b, a) {
        var d = {
            ES: {
                es: "ES",
                en: "EN",
                pt: "PT",
                ca: "ES",
                fr: "FR",
                it: "IT"
            },
            EN: {
                es: "ES",
                en: "EN",
                pt: "PT",
                ca: "ES",
                fr: "FR",
                it: "IT"
            },
            PT: {
                es: "ES",
                en: "EN",
                pt: "PT",
                ca: "ES",
                fr: "FR",
                it: "IT"
            },
            CA: {
                es: "ES",
                en: "EN",
                pt: "PT",
                ca: "ES",
                fr: "FR",
                it: "IT"
            },
            FR: {
                es: "ES",
                en: "EN",
                pt: "PT",
                ca: "ES",
                fr: "FR",
                it: "IT"
            },
            IT: {
                es: "ES",
                en: "EN",
                pt: "PT",
                ca: "ES",
                fr: "FR",
                it: "IT"
            },
            COMPASS: {
                es: "ES",
                en: "US",
                pt: "PT",
                ca: "ES",
                fr: "FR",
                it: "IT"
            },
            DEFAULT: {
                es: "ES",
                en: "EN",
                pt: "PT",
                ca: "ES",
                fr: "FR",
                it: "IT"
            }
        };
        var f = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductId();
        logger.info("getCookiPaisFromCookieInicioAndCodIdiomiso se ha preguntado si es compass valor producto: " + f);
        if (f == "008") {
            var e = d.COMPASS[a];
            logger.info("Es compass se manejan los idiomas de compass: " + e);
            return e
        }
        logger.info("NO Es compass se manejan los idiomas de compass");
        if (b == null || typeof(b) == "undefined") {
            return a.toUpperCase()
        }
        if (typeof(d[b.toUpperCase()]) == "undefined") {
            return d.DEFAULT[a]
        }
        return d[b.toUpperCase()][a]
    };
    this.loadTranslations = function(a) {
        var d = "";
        var b = "";
        $.each(a, function(e, f) {
            d = f.key;
            b = f.description;
            com.bbva.kyop.util.I18nUtil.setText(d, b)
        })
    };
    this.renderTranslations = function() {
        var a = $(".doTranslate");
        $.each(a, function(b, d) {
            if (d.nodeName == "BUTTON") {
                $(d).attr("value", com.bbva.kyop.util.I18nUtil.getText($(d).attr("key")));
                $(d).attr("title", com.bbva.kyop.util.I18nUtil.getText($(d).attr("key")))
            } else {
                if (d.nodeName == "LABEL") {
                    $(d).html(com.bbva.kyop.util.I18nUtil.getText($(d).attr("key")))
                } else {
                    if (d.nodeName == "IMG") {
                        $(d).attr("alt", com.bbva.kyop.util.I18nUtil.getText($(d).attr("key")));
                        $(d).attr("title", com.bbva.kyop.util.I18nUtil.getText($(d).attr("key")))
                    } else {
                        if (d.nodeName == "A") {
                            $(d).html(com.bbva.kyop.util.I18nUtil.getText($(d).attr("key")))
                        } else {
                            if (d.nodeName == "OPTION") {
                                $(d).html(com.bbva.kyop.util.I18nUtil.getText($(d).attr("key")))
                            } else {
                                if (d.nodeName == "TH") {
                                    $(d).html(com.bbva.kyop.util.I18nUtil.getText($(d).attr("key")))
                                } else {
                                    if (d.nodeName == "SPAN") {
                                        $(d).html(com.bbva.kyop.util.I18nUtil.getText($(d).attr("key")))
                                    } else {
                                        if (d.nodeName == "P") {
                                            $(d).html(com.bbva.kyop.util.I18nUtil.getText($(d).attr("key")))
                                        } else {
                                            if (d.nodeName == "H1" || d.nodeName == "H2" || d.nodeName == "H3") {
                                                $(d).html(com.bbva.kyop.util.I18nUtil.getText($(d).attr("key")))
                                            } else {
                                                if (d.nodeName == "CAPTION") {
                                                    $(d).html(com.bbva.kyop.util.I18nUtil.getText($(d).attr("key")))
                                                } else {
                                                    if (d.nodeName == "INPUT") {
                                                        $(d).attr("placeholder", com.bbva.kyop.util.I18nUtil.getText($(d).attr("key")))
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })
    };
    this.getTranslations = function(a) {
        com.bbva.kyop.util.AjaxUtil.setMock(false);
        com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
            url: "language/getAllTranslations.json",
            urlMock: "mock/core/getI18n.json",
            method: "POST",
            typeRequest: "json",
            abortApp: true,
            callback: function(b) {
                if (a != null && a != "") {
                    a(b)
                }
            }
        })
    };
    this.changeLanguage = function(a) {
        com.bbva.kyop.util.AjaxUtil.setMock(false);
        com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
            url: "language/changeLanguage.json",
            urlMock: "mock/core/changeLanguage.json",
            method: "POST",
            typeRequest: "json",
            abortApp: false,
            params: {
                languageKey: a
            },
            callback: function(e) {
                com.bbva.kyop.controller.CoreController.setCookie("COD_IDIOMISO", a);
                if (com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductId() == "210") {
                    com.bbva.kyop.controller.CoreController.setCookie("CODIGO_PRODUCTO", 414)
                }
                var b = com.bbva.kyop.controller.CoreController.getCookie("INICIO");
                var d = com.bbva.kyop.controller.LanguageController.getCookiPaisFromCookieInicioAndCodIdiomiso(b, a);
                com.bbva.kyop.controller.CoreController.setCookie("PAIS", d);
                com.bbva.kyop.controller.CoreController.unbindBodyEvent();
                com.bbva.kyop.controller.CoreController.refreshPortal()
            }
        })
    };
    this.getHeaderLanguages = function(j) {
        var h = {
            languages: j
        };
        com.bbva.kyop.controller.MenuController.setMenuInPortal(h, "#kyop-tooltip-languages-tmpl", "#kyop-header-second-tooltip-languages-container");
        var g = com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.select.language");
        var b = com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.language");
        $("#textoIdioma").html(g);
        $("#textoUsuIdioma").html("<span class='darker'> " + b + " </span>");
        var d = h.languages;
        var f = d.length;
        for (i = 0; i < f; i++) {
            var a = d[i].languageDefault;
            if (!a) {
                var e = "<li class='marginBottom10' onclick='com.bbva.kyop.controller.LanguageController.changeLanguage(&quot;" + d[i].languageKey + "&quot;)' ><a id='kyop-language-rwd-" + i + "'>" + d[i].description + "</a></li>";
                $("#listadoIdiomas").append(e)
            }
        }
    }
};
com.bbva.kyop.controller.MenuController = new function() {
    var f = ["FR"];
    var e = "";
    this.setLastSecondHeaderIdLayer = function(m) {
        this.lastSecondHeaderIdLayer = m
    };
    this.getLastSecondHeaderIdLayer = function() {
        return this.lastSecondHeaderIdLayer
    };
    this.getLeftMenu = function(m) {
        com.bbva.kyop.util.AjaxUtil.setMock(false);
        com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
            url: "menus/getLeftMenus.json",
            urlMock: "mock/core/getLeftMenu.json",
            method: "POST",
            typeRequest: "json",
            abortApp: false,
            callback: function(n) {
                if (m != null && m != "") {
                    m(n)
                }
            }
        })
    };
    this.getFooterMenu = function(m) {
        com.bbva.kyop.util.AjaxUtil.setMock(false);
        com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
            url: "menus/getFooterMenus.json",
            urlMock: "mock/core/getFooterMenu.json",
            method: "POST",
            typeRequest: "json",
            abortApp: false,
            callback: function(n) {
                if (m != null && m != "") {
                    m(n)
                }
            }
        })
    };
    this.getFooterInfo = function() {
        var m = {
            infoFooter: [{}]
        };
        var n = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductId();
        if (n == "002") {
            com.bbva.kyop.controller.MenuController.setMenuInPortal(m, "#kyop-footer-info-bancomer-tmpl", "#kyop-footer-info-container")
        } else {
            com.bbva.kyop.controller.MenuController.setMenuInPortal(m, "#kyop-footer-info-tmpl", "#kyop-footer-info-container")
        }
    };
    this.getUserInfo = function() {
        var n = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getUserName();
        var m = com.bbva.kyop.util.SessionUtil.getUser().getCompanyInformation().getCompanyId();
        return {
            userName: n,
            companyId: m
        }
    };
    this.getCaracterHourFromLanguage = function(m) {
        if ($.inArray(m.toUpperCase(), f) != -1) {
            return ""
        }
        return "h"
    };
    this.getFooterInfoHtml = function() {
        var q = com.bbva.kyop.util.SessionUtil.getUser().getLastAccessInformation().getDateFormatted();
        var q = '<span class="normalWeight">' + q + "</span>";
        var s = com.bbva.kyop.util.SessionUtil.getUser().getLastAccessInformation().getTime();
        s = '<span class="normalWeight">' + s + this.getCaracterHourFromLanguage(com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getLanguage()) + "</span>";
        var n = com.bbva.kyop.util.SessionUtil.getUser().getLastAccessInformation().getIp();
        if (n != "" && n != null) {
            n = '<span class="normalWeight">' + n + "</span>"
        }
        var v = com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.footer.infokey_1");
        var u = com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.footer.infokey_2");
        var t = com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.footer.infokey_3");
        var p = v + u + t;
        var m = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().isNetCash();
        var o = com.bbva.kyop.util.SessionUtil.getConfiguration().getModeEurasia();
        if (!m || !o || n == "" || n == null) {
            p = v + u
        }
        var r = com.bbva.kyop.util.I18nUtil.stringFormat(p, q, s, n);
        return r
    };
    this.getHeaderLogo = function() {
        var o = com.bbva.kyop.util.SessionUtil.getConfiguration().getProductConfiguration().getUrlLogo();
        var m = com.bbva.kyop.util.SessionUtil.getConfiguration().getProductConfiguration().getAltLogo();
        var p = com.bbva.kyop.util.SessionUtil.getConfiguration().getProductConfiguration().getUrlIndex();
        var n = '<img class="logo" src="' + o + '" title="' + m + '" />';
        return n
    };
    this.getLogoInfo = function() {
        var m = {
            infoLogo: [{}]
        };
        com.bbva.kyop.controller.MenuController.setMenuInPortal(m, "#kyop-header-logo-tmpl", "#kyop-header-logo-container")
    };
    this.setMenuInPortal = function(o, n, m) {
        $(n).tmpl(o).appendTo(m)
    };
    this.controlPuller = function() {
        if ($(".menuLateral").is(":visible")) {
            this.hideLeftMenu()
        } else {
            this.showLeftMenu()
        }
        $("#kyop-body").css("minHeight", "none")
    };
    this.showLeftMenu = function() {
        $("#columnaMenu").addClass("columnaMenuVisible");
        $("#columnaMenu").removeClass("columnaMenuOculto")
    };
    this.hideLeftMenu = function() {
        $("#columnaMenu").addClass("columnaMenuOculto");
        $("#columnaMenu").removeClass("columnaMenuVisible")
    };
    this.resizeCentralAreaFromPuller = function() {
        com.bbva.kyop.controller.CoreController.resizePortal();
        com.bbva.kyop.controller.CoreController.resizeHomeContent();
        com.bbva.kyop.util.CalculatorSizeElementsUtil.calculateIFrameSizeFromPuller("kyop-central-load-area", "kyop-central-load-area-container");
        com.bbva.kyop.util.CalculatorSizeElementsUtil.calculateIFrameSizeFromPuller("kyop-central-defaultprocess-load-area", "kyop-central-defaultprocess-load-area-container");
        com.bbva.kyop.util.CalculatorSizeElementsUtil.calculateFooterHeight()
    };
    this.hideMenu = function() {
        $("[id^=kyop-opcionMenuHija_m_]").removeClass("kyop-li-child-selected");
        this.hideLeftMenu();
        this.resizeCentralAreaFromPuller()
    };
    this.showMenu = function() {
        this.showLeftMenu();
        this.resizeCentralAreaFromPuller()
    };
    var k = function(m) {
        var n = m;
        while (n != null && typeof(n) != "undefined") {
            $("#kyop-item-menu-hover-" + n).addClass("kyop-item-menu-hover-selected");
            n = com.bbva.kyop.util.MenuUtil.getMenu(n).idFather
        }
    };
    this.selectMenuHoverOption = function(m) {
        $(".seleccionadaDesplegada").removeClass("seleccionadaDesplegada");
        $(".kyop-option-selected").removeClass("kyop-option-selected");
        $(".kyop-item-menu-hover-selected").removeClass("kyop-item-menu-hover-selected");
        k(m);
        this.selectMenuOption(m, true)
    };
    this.goToHomeRwd = function() {
        com.bbva.kyop.controller.MenuController.selectMenuOption("kyop-li-menuOption-home-rwd", "kyop-div-children-container-home-rwd", false, "home", true);
        com.bbva.kyop.controller.MenuRwdController.showOrHiddeMenuRwd()
    };
    this.selectMenuOption = function() {
        if (arguments.length > 2) {
            var t = arguments[0];
            var r = arguments[1];
            var s = arguments[2];
            var n = arguments[3];
            var v = arguments[4];
            var w = "kyop-menuOption-flechaAbajoMenuAzul-" + n;
            if (s != undefined && s == true) {
                if (com.bbva.kyop.bean.ProcessBean.getActivityRegisterParams() == null) {
                    com.bbva.kyop.bean.ProcessBean.setActivityRegisterParams({
                        origin: "Menú"
                    })
                }
                com.bbva.kyop.controller.MenuController.executeProcess(n, v);
                com.bbva.kyop.util.CalculatorSizeElementsUtil.resetFooterOperations();
                var o = $("[id^=" + t + "]").hasClass("kyop-option-selected");
                if (!o) {
                    $("[id^=kyop-li-menuOption-]").removeClass("seleccionadaDesplegada kyop-option-selected");
                    $(".kyop-item-menu-hover-selected").removeClass("kyop-item-menu-hover-selected");
                    $("[id^=" + t + "]").addClass("seleccionadaDesplegada kyop-option-selected");
                    $("[id^=kyop-menuOption-flechaAbajoMenuAzul-]").removeClass("flechaArribaMenuGris flechaAbajoMenuGris");
                    $("[id^=" + w + "]").addClass("flechaArribaMenuGris")
                }
            } else {
                $("[id^=kyop-opcionMenuHija_m_]").removeClass("kyop-li-child-selected");
                var o = $("[id^=" + t + "]").hasClass("kyop-option-selected");
                if (o) {
                    $("[id^=kyop-div-children-container-]").slideUp();
                    $("[id^=kyop-li-menuOption-]").removeClass("kyop-option-selected");
                    $("[id^=kyop-menuOption-flechaAbajoMenuAzul-]").removeClass("flechaArribaMenuGris flechaAbajoMenuGris");
                    $("[id^=" + w + "]").addClass("flechaAbajoMenuGris")
                } else {
                    $("[id^=kyop-li-menuOption-]").removeClass("seleccionadaDesplegada kyop-option-selected");
                    $(".kyop-item-menu-hover-selected").removeClass("kyop-item-menu-hover-selected");
                    $("[id^=" + t + "]").addClass("seleccionadaDesplegada kyop-option-selected");
                    $("[id^=kyop-menuOption-flechaAbajoMenuAzul-]").removeClass("flechaArribaMenuGris flechaAbajoMenuGris");
                    $("[id^=" + w + "]").addClass("flechaArribaMenuGris");
                    $("[id^=kyop-div-children-container-]").slideUp();
                    $("[id^=" + r + "]").slideDown()
                }
                if (n == "home") {
                    if (v) {
                        com.bbva.kyop.controller.BreadcrumbController.updateBreadcrumb(n)
                    }
                    com.bbva.kyop.controller.MenuController.goHome();
                    com.bbva.kyop.util.CalculatorSizeElementsUtil.resetFooterOperations()
                } else {
                    if (n == "launchProcess") {
                        logger.info("Se ejecuta launchProcess para desarrolladores. Opción sólo disponible en desarrollo")
                    } else {
                        if (n == "reverseCaller") {
                            if (v) {
                                com.bbva.kyop.controller.BreadcrumbController.updateBreadcrumb("reverseCaller")
                            }
                            com.bbva.kyop.controller.MenuController.foldCentralArea();
                            $("#kyop-central-test").show();
                            com.bbva.kyop.util.CalculatorSizeElementsUtil.resetFooterOperations()
                        } else {
                            if (n == "selectCompany") {
                                if (v) {
                                    com.bbva.kyop.controller.BreadcrumbController.updateBreadcrumb("selectCompany")
                                }
                                com.bbva.kyop.controller.MenuController.foldCentralArea();
                                $("#kyop-central-select-company-container").show();
                                com.bbva.kyop.util.CalculatorSizeElementsUtil.resetFooterOperations()
                            } else {
                                if (n == "selectCompanyLatam") {
                                    if (v) {
                                        com.bbva.kyop.controller.BreadcrumbController.updateBreadcrumb("selectCompany")
                                    }
                                    com.bbva.kyop.controller.MenuController.foldCentralArea();
                                    com.bbva.kyop.controller.HelpDeskController.resetSelectCompanyFormLatam();
                                    com.bbva.kyop.controller.HelpDeskController.backToSearchCompanyLatam();
                                    com.bbva.kyop.controller.HelpDeskController.initProductInformation();
                                    $("#kyop-central-select-company-latam-container").show()
                                }
                            }
                        }
                    }
                }
            }
            this.fireEvent("menuOptionClicked", {
                idMenuLevel1: n,
                idMenuLevel2: null
            })
        } else {
            com.bbva.kyop.util.TimerUtil.resetTimer();
            var n = arguments[0];
            var v = arguments[1];
            logger.info("Se obtiene el objeto Menú a través de su id: " + n + " y se muestra el proceso o se muestran los niveles 3 y 4");
            var p = com.bbva.kyop.util.MenuUtil.getMenu(n);
            com.bbva.kyop.controller.MenuRwdController.hideRwdMenuIfISTerminalOrMoreThanSecondLevel(p);
            var u = p.childrenList;
            if (p.level < 3) {
                $("[id^=kyop-opcionMenuHija_m_]").removeClass("kyop-li-child-selected")
            }
            $("[id^=kyop-opcionMenuHija_m_" + n + "]").addClass("kyop-li-child-selected");
            if (u.length > 0) {
                if (v) {
                    com.bbva.kyop.controller.BreadcrumbController.updateBreadcrumb(n)
                }
                var q = null;
                if (p.relatedServicesList.length > 0) {
                    q = p.relatedServicesList
                }
                logger.info("Se muestran los menús de 3 y 4 nivel");
                com.bbva.kyop.controller.MenuController.loadOtherLevelMenus(p.codI18nShort, p.codI18nTextMenuInfo, u, q, n);
                com.bbva.kyop.util.CalculatorSizeElementsUtil.resetFooterOperations()
            } else {
                if (com.bbva.kyop.bean.ProcessBean.getActivityRegisterParams() == null) {
                    com.bbva.kyop.bean.ProcessBean.setActivityRegisterParams({
                        origin: "Menú"
                    })
                }
                com.bbva.kyop.controller.MenuController.executeProcess(n, v);
                com.bbva.kyop.util.CalculatorSizeElementsUtil.resetFooterOperations()
            }
            var m = null;
            if (p.idFather != null) {
                m = this.getFatherMenu(p).idMenu
            }
            this.fireEvent("menuOptionClicked", {
                idMenuLevel1: m,
                idMenuLevel2: n
            })
        }
        setTimeout(function() {
            com.bbva.kyop.util.CalculatorSizeElementsUtil.calculateFooterHeight()
        }, 300)
    };
    this.showOrHideBreadcrumbButtons = function(m) {
        com.bbva.kyop.controller.FavoriteController.actionFavoriteButton(m)
    };
    this.executeProcess = function(r, o, q) {
        if (o) {
            com.bbva.kyop.controller.BreadcrumbController.updateBreadcrumb(r)
        }
        com.bbva.kyop.controller.MenuController.foldTooltipsArrows();
        var s = com.bbva.kyop.util.MenuUtil.getMenu(r);
        var p = s.processes;
        if (p.length > 0) {
            var n = s.processes[0];
            if (q) {
                com.bbva.kyop.bean.ProcessBean.setUrlOverride(q)
            }
            var m = n.helpUrl;
            com.bbva.kyop.controller.MenuController.setHelpUrl(m);
            logger.info("Se ejecuta el proceso: " + n.idProcess);
            logger.debug("Proceso a ejecutar:");
            logger.debug(n);
            com.bbva.kyop.controller.MenuController.showOrHideBreadcrumbButtons(s);
            if (s.view != "03") {
                $("[id^=kyop-opcionMenuHija_m_]").removeClass("kyop-li-child-selected");
                com.bbva.kyop.controller.MenuController.hideMenu()
            }
            com.bbva.kyop.controller.ProcessController.proceedToLaunchProcess(n, r)
        } else {
            logger.info("Error en el menú, no existe proceso asociado")
        }
    };
    var j = function() {
        var p = "https://";
        var o = document.location.hostname;
        var m = "/" + com.bbva.kyop.util.SessionUtil.getConfiguration().getMessageAlertIntegrationBasePath();
        var n = true;
        com.bbva.kyop.util.UUAASessionManager.add(p + o + m, n)
    };
    this.loadActiveElements = function(m) {
        if (com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().getIntegrateAlerts() || com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().getIntegrateMessages()) {
            var n = "/" + com.bbva.kyop.util.SessionUtil.getConfiguration().getMessageAlertIntegrationJsPath();
            var o = "/" + com.bbva.kyop.util.SessionUtil.getConfiguration().getMessageAlertIntegrationCssPath();
            if (isLocalhost) {
                n = com.bbva.kyop.util.SessionUtil.getConfiguration().getMessageAlertIntegrationJsPath();
                o = com.bbva.kyop.util.SessionUtil.getConfiguration().getMessageAlertIntegrationCssPath()
            }
            j();
            com.bbva.kyop.controller.CoreController.getExternalResources(n, o, function() {
                if (m != null && m != "") {
                    m()
                }
            }, function(p) {
                logger.warn("No se ha encontrado el fichero .js en la ruta: " + n);
                logger.warn(p);
                if (m != null && m != "") {
                    m()
                }
            })
        } else {
            logger.debug("MenuController.loadActiveElements(): la integración de alertas y mensajes no esta activa");
            if (m != null && m != "") {
                m()
            }
        }
    };
    var d = function() {
        var p = "https://";
        var o = document.location.hostname;
        var m = "/" + com.bbva.kyop.util.SessionUtil.getConfiguration().getManagerIntegrationBasePath();
        var n = true;
        com.bbva.kyop.util.UUAASessionManager.add(p + o + m, n)
    };
    this.loadActiveElementsManager = function(m) {
        if (com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().getIntegrateManager()) {
            var n = "/" + com.bbva.kyop.util.SessionUtil.getConfiguration().getManagerIntegrationJsPath();
            var o = "/" + com.bbva.kyop.util.SessionUtil.getConfiguration().getManagerIntegrationCssPath();
            if (isLocalhost) {
                n = com.bbva.kyop.util.SessionUtil.getConfiguration().getManagerIntegrationJsPath();
                o = com.bbva.kyop.util.SessionUtil.getConfiguration().getManagerIntegrationCssPath()
            }
            d();
            com.bbva.kyop.controller.CoreController.getExternalResources(n, o, function() {
                if (m != null && m != "") {
                    m()
                }
            }, function(p) {
                logger.warn("No se ha encontrado el fichero .js en la ruta: " + n);
                logger.warn(p);
                if (m != null && m != "") {
                    m()
                }
            })
        } else {
            logger.debug("MenuController.loadActiveElements(): la integración de mi gestor no esta activa");
            if (m != null && m != "") {
                m()
            }
        }
    };
    this.loadActiveElementsOpenweb = function(m) {
        if (com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().getIntegrateOpenweb()) {
            var n = "/" + com.bbva.kyop.util.SessionUtil.getConfiguration().getOpenwebIntegrationJsPath();
            var o = "/" + com.bbva.kyop.util.SessionUtil.getConfiguration().getOpenwebIntegrationCssPath();
            if (isLocalhost) {
                n = com.bbva.kyop.util.SessionUtil.getConfiguration().getOpenwebIntegrationJsPath();
                o = com.bbva.kyop.util.SessionUtil.getConfiguration().getOpenwebIntegrationCssPath()
            }
            com.bbva.kyop.controller.CoreController.getExternalResources(n, o, function() {
                if (m != null && m != "") {
                    m()
                }
            }, function(p) {
                logger.warn("No se ha encontrado el fichero .js en la ruta: " + n);
                logger.warn(p);
                if (m != null && m != "") {
                    m()
                }
            })
        } else {
            logger.debug("MenuController.loadActiveElements(): la integración de openweb no esta activa");
            if (m != null && m != "") {
                m()
            }
        }
    };
    this.fillActiveElementsBean = function(m) {
        $.each(m, function(n, o) {
            com.bbva.kyop.util.ActiveElementsBean.put(o.type, o.enabled)
        })
    };
    this.getActiveElements = function(m) {
        com.bbva.kyop.util.AjaxUtil.setMock(false);
        com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
            url: "menus/getActiveElements.json",
            urlMock: "mock/core/getActiveElements.json",
            method: "POST",
            typeRequest: "json",
            abortApp: false,
            callback: function(n) {
                if (m != null && m != "") {
                    m(n)
                }
            }
        })
    };
    this.createIntegrationAlertsMessagesBean = function(p, z, m, A, r, u) {
        var x = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getLocale();
        var v = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getDateFormat();
        var y = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getPriceFormat();
        var C = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getTimeZone();
        var o = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductId();
        var n = com.bbva.kyop.util.SessionUtil.getUser().getCompanyInformation().getSegmentId();
        var s = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().getProductType();
        var w = com.bbva.kyop.util.SessionUtil.getUser().getCompanyInformation().getCompanyId();
        var q = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().getIdSessionAst();
        var D = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().getChannel();
        var t = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().getInternalBank();
        var B = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().getIvUser();
        var E = com.bbva.kyop.controller.CoreController.createIntegrationBean({
            callbackFn: function(F) {
                com.bbva.kyop.controller.CoreController.alertsMessagesCallbackFn(F)
            },
            idDivIntegration: {
                idAlertsContainer: p,
                idMessagesContainer: z,
                idAlertsContainerRwd: m,
                idMessagesContainerRwd: A,
                idContainerNumberRwd: r,
                idHtmlLinkContactManager: u
            },
            idProduct: o,
            productType: s,
            idService: null,
            idProcess: null,
            locale: x,
            dateFormat: v,
            priceFormat: y,
            timeZone: C,
            checkPrivileges: null,
            pubUrl: null,
            segment: n,
            idCompany: w,
            isPortalKyop: true,
            idSessionAst: q,
            codChannel: D,
            codInternalBank: t,
            ivUser: B
        });
        return E
    };
    this.createIntegrationManagerBean = function(r, x) {
        var w = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getLocale();
        var n = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getDateFormat();
        var z = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getPriceFormat();
        var A = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getTimeZone();
        var m = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductId();
        var t = com.bbva.kyop.util.SessionUtil.getUser().getCompanyInformation().getSegmentId();
        var s = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().getProductType();
        var u = com.bbva.kyop.util.SessionUtil.getUser().getCompanyInformation().getCompanyId();
        var q = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().getIdSessionAst();
        var y = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().getChannel();
        var p = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().getInternalBank();
        var v = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().getIvUser();
        var o = com.bbva.kyop.controller.CoreController.createIntegrationBean({
            callbackFn: function(B) {
                com.bbva.kyop.controller.CoreController.managerCallbackFn(B)
            },
            idDivIntegration: {
                idManagerContainer: r,
                idManagerContainerRwd: x
            },
            idProduct: m,
            productType: s,
            idService: null,
            idProcess: null,
            locale: w,
            dateFormat: n,
            priceFormat: z,
            timeZone: A,
            checkPrivileges: null,
            pubUrl: null,
            segment: t,
            idCompany: u,
            isPortalKyop: true,
            idSessionAst: q,
            codChannel: y,
            codInternalBank: p,
            ivUser: v
        });
        return o
    };
    this.getFirstHeaderMenu = function(m) {
        com.bbva.kyop.util.AjaxUtil.setMock(false);
        com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
            url: "menus/getHeaderFirstLevelMenus.json",
            urlMock: "mock/core/getFirstHeaderMenu.json",
            method: "POST",
            typeRequest: "json",
            abortApp: false,
            callback: function(n) {
                if (m != null && m != "") {
                    m(n)
                }
            }
        })
    };
    this.getCountryJump = function(m) {
        com.bbva.kyop.util.AjaxUtil.setMock(false);
        com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
            url: "countryReference/getCountries.json",
            urlMock: "mock/core/getCountryJump.json",
            method: "POST",
            typeRequest: "json",
            abortApp: false,
            fallbackFn: m,
            callback: function(n) {
                if (m != null && m != "") {
                    m(n)
                }
            }
        })
    };
    this.getSecondHeaderMenu = function(m) {
        com.bbva.kyop.util.AjaxUtil.setMock(false);
        com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
            url: "menus/getHeaderSecondLevelMenus.json",
            urlMock: "mock/core/getHeaderSecondLevelMenus.json",
            method: "POST",
            typeRequest: "json",
            abortApp: false,
            callback: function(n) {
                if (m != null && m != "") {
                    m(n)
                }
            }
        })
    };
    this.controlHeaderButton = function(m) {
        com.bbva.kyop.controller.MenuController.foldTooltipsArrows();
        if ($("#" + m).css("display") == "none") {
            $("#" + m).show();
            $("#" + m).show()
        } else {
            $("#" + m).hide()
        }
    };
    var h = function() {
        return $("#kyop-languages-button").hasClass("kyop-current-language-dragactive")
    };
    var l = function() {
        $("#kyop-languages-button").removeClass("kyop-current-language-dragactive")
    };
    var g = function() {
        $("#kyop-languages-button").addClass("kyop-current-language-dragactive")
    };
    var b = function() {
        if (h()) {
            l()
        } else {
            g()
        }
    };
    this.controlSecondHeaderButtonAndSetActiveMenuLanguages = function(o, n, m) {
        this.controlSecondHeaderButton(o, n, m);
        b()
    };
    this.controlSecondHeaderButtonAndRemoveActiveLanguageNode = function(o, n, m) {
        this.controlSecondHeaderButton(o, n, m);
        l()
    };
    this.controlSecondHeaderButton = function(p, o, n) {
        var m = com.bbva.kyop.controller.MenuController.getLastSecondHeaderIdLayer();
        if (m == "") {
            com.bbva.kyop.controller.MenuController.setLastSecondHeaderIdLayer(p)
        } else {
            if (m != p) {
                com.bbva.kyop.controller.MenuController.foldTooltipsArrows()
            } else {
                $("[id^=kyop-header-tooltip-]").hide();
                $("[id^=kyop-header-arrow-up-]").hide();
                $("[id^=kyop-header-arrow-down-]").show()
            }
        }
        if ($("#" + p).css("display") == "none") {
            $("#" + p).show();
            $("#" + o).show();
            $("#" + n).hide()
        } else {
            $("#" + p).hide();
            $("#" + o).hide();
            $("#" + n).show()
        }
        com.bbva.kyop.controller.MenuController.setLastSecondHeaderIdLayer(p)
    };
    this.foldTooltipsArrows = function() {
        $("[id^=kyop-header-tooltip-]").hide();
        $("[id^=kyop-header-second-tooltip-]").hide();
        $("[id^=kyop-header-arrow-up]").hide();
        $("[id^=kyop-header-arrow-down]").show();
        l()
    };
    this.foldCentralArea = function() {
        $("[id^=kyop-central-]").hide();
        $("[id^=kyop-strong-integration-area-]").remove()
    };
    this.closeTooltip = function(m) {
        $("#" + m).hide()
    };
    this.launchProcessFromHeaderButton = function(o, m, n) {
        com.bbva.kyop.controller.MenuController.foldTooltipsArrows();
        com.bbva.kyop.controller.MenuController.executeProcess(o, m, n)
    };
    this.loadMenus = function(p, m, o) {
        var n = "";
        var q = "";
        $.each(p, function(r, s) {
            s.view = m;
            s.idFather = o;
            n = s.idMenu;
            q = s;
            com.bbva.kyop.util.MenuUtil.setMenu(n, q);
            if (s.childrenList.length > 0) {
                com.bbva.kyop.controller.MenuController.loadMenus(s.childrenList, m, s.idMenu)
            }
        })
    };
    this.goHome = function() {
        logger.info("Recarga de la portada o secciones más vistas");
        com.bbva.kyop.controller.MenuController.foldCentralArea();
        var n = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().isNetCash();
        var p = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().isGlobalHelpDesk();
        var q = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().isLocalHelpDesk();
        var m = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().getDefaultProcess();
        var o = (m != "") && (m != undefined) && (m != null);
        if (o) {
            $("#kyop-central-defaultprocess-load-area-container").show();
            $("#kyop-central-defaultprocess-load-area").show()
        } else {
            if (n) {
                $("#kyop-central-home").show()
            } else {
                if (p) {
                    $("#kyop-central-global-helpdesk-home").show()
                } else {
                    if (q) {
                        $("#kyop-central-local-helpdesk-home").show()
                    }
                }
            }
        }
        com.bbva.kyop.controller.ProcessHelpController.showButtonHelpDirect();
        com.bbva.kyop.controller.MenuController.showMenu()
    };
    this.setHelpUrl = function(m) {};
    this.showPortalHelp = function() {
        var m = com.bbva.kyop.util.SessionUtil.getConfiguration().getHelpUrl();
        com.bbva.kyop.controller.ReverseCallerController.executeUrlFromReverseCaller(m);
        com.bbva.kyop.controller.BreadcrumbController.updateBreadcrumb("help")
    };
    var a = function(n) {
        var m = 0;
        if (n == null || typeof(n) == "undefined") {
            return true
        }
        while (m < n.length && n[m].hiddenInRwd) {
            m++
        }
        return m >= n.length
    };
    this.loadOtherLevelMenus = function(r, m, o, p, n) {
        $("#kyop-other-level-menus-container").empty();
        logger.info("*** 3, 4 y 5 Nivel de Menus ***");
        logger.info(o);
        var q = {
            otherLevelMenuOptions: o,
            titleArea: r,
            textInfoMenu: m,
            relatedServices: p,
            idMenuFather: n,
            hiddenInRwdAllRelatedServices: a(p),
            activityRegisterParams: '{"origin": "También le puede interesar"}'
        };
        com.bbva.kyop.controller.MenuController.setMenuInPortal(q, "#kyop-central-other-level-menus-tmpl", "#kyop-other-level-menus-container");
        com.bbva.kyop.controller.MenuController.foldCentralArea();
        $("#kyop-central-other-level-menus-total-container").show()
    };
    this.actionTestReverseCaller = function() {
        var r = $("#kyop-reverse-action").val();
        var t = $("#kyop-reverse-idService").val();
        var q = $("#kyop-reverse-idProcess").val();
        var m = $("#kyop-reverse-locale").val();
        var o = $("#kyop-reverse-updateMenu").val();
        var n = $("#kyop-reverse-updateBreadcrumb").val();
        var s = $("#kyop-reverse-extraParams").val();
        var p = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductId();
        if (s == "") {
            com.bbva.kyop.controller.ReverseCallerController.reverseCaller(r, t, q, m, o, n, p, null, null)
        } else {
            com.bbva.kyop.controller.ReverseCallerController.reverseCaller(r, t, q, m, o, n, p, null, s)
        }
    };
    this.actionTestReverseCallerByMenuInfo = function() {
        var s = $("#kyop-reverse-menuInfo-action").val();
        var m = $("#kyop-reverse-menuInfo-locale").val();
        var n = $("#kyop-reverse-menuInfo-view").val();
        var p = $("#kyop-reverse-menuInfo-menuOption").val();
        var r = m + "#" + n + "#" + p;
        var q = $("#kyop-reverse-menuInfo-updateMenu").val();
        var o = $("#kyop-reverse-menuInfo-updateBreadcrumb").val();
        com.bbva.kyop.controller.ReverseCallerController.reverseCallerByMenuInfo(s, r, q, o)
    };
    this.actionTestReverseCallerByUrl = function() {
        var m = $("#kyop-reverse-url").val();
        com.bbva.kyop.controller.ReverseCallerController.urlCaller(m, "")
    };
    this.setMenuOptionToField = function(o) {
        var m = o.split("#");
        var n = m[0];
        var p = m[1];
        $("#kyop-reverse-menuInfo-view").val(n);
        $("#kyop-reverse-menuInfo-menuOption").val(p)
    };
    this.createMenuOptionCombo = function() {
        var m = com.bbva.kyop.util.MenuUtil.getAll();
        var n = {
            menuList: m
        };
        com.bbva.kyop.controller.MenuController.setMenuInPortal(n, "#kyop-menu-terminal-options-combo-tmpl", "#kyop-menu-terminal-options-combo-container");
        com.bbva.kyop.controller.MenuController.setMenuInPortal(n, "#kyop-menu-noterminal-options-combo-tmpl", "#kyop-menu-noterminal-options-combo-container")
    };
    this.getFatherMenu = function(o) {
        var n = o.idFather;
        var m = com.bbva.kyop.util.MenuUtil.getMenu(n);
        return m
    };
    this.openProcessFromSection = function(n) {
        var o = com.bbva.kyop.util.MenuUtil.getMenu(n);
        var m = o.view;
        if (m == "01" || m == "02" || m == "04") {
            com.bbva.kyop.controller.ReverseCallerController.selectMenuOptionFromReverseCaller(n, m, "N", "S")
        } else {
            com.bbva.kyop.controller.ReverseCallerController.selectMenuOptionFromReverseCaller(n, m, "S", "S")
        }
    };
    this.subscriptors = [];
    this.subscribeEvent = function(m, n) {
        this.subscriptors.push(n)
    };
    this.unsubscribeEvent = function(m, n) {
        this.subscriptors.remove(n)
    };
    this.fireEvent = function(m, o) {
        logger.info("**DPP se ha pulsado menu " + o.idMenuLevel1 + "," + o.idMenuLevel2);
        var n;
        for (n = 0; n < this.subscriptors.length; n++) {
            if (o.idMenuLevel2 != null) {
                this.subscriptors[n].receiveEvent(m, o)
            }
        }
    };
    this.valueService = function() {
        var p = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getLanguage();
        var m = com.bbva.kyop.util.SessionUtil.getConfiguration().getOpinator().getOpinatorUrlDefault();
        if (p == "ca") {
            m = com.bbva.kyop.util.SessionUtil.getConfiguration().getOpinator().getOpinatorUrlCat()
        } else {
            if (p == "fr") {
                m = com.bbva.kyop.util.SessionUtil.getConfiguration().getOpinator().getOpinatorUrlFr()
            } else {
                if (p == "en") {
                    m = com.bbva.kyop.util.SessionUtil.getConfiguration().getOpinator().getOpinatorUrlGb()
                } else {
                    if (p == "it") {
                        m = com.bbva.kyop.util.SessionUtil.getConfiguration().getOpinator().getOpinatorUrlIt()
                    } else {
                        if (p == "pt") {
                            m = com.bbva.kyop.util.SessionUtil.getConfiguration().getOpinator().getOpinatorUrlPt()
                        }
                    }
                }
            }
        }
        var o = $(window).height();
        var n = 740;
        if (o < n) {
            n = o - 100
        }
        com.bbva.kyop.util.LightBoxUtil.loadLightBoxKyop("kyop-lightbox-container-div", "kyop-lightbox-iframe-div", "kyop-lightbox-form", {
            url: m,
            height: n,
            width: 465,
            innerWidth: 420,
            innerHeight: 100,
            registerActivity: true,
            title: "Opinator"
        }, "GET")
    };
    this.openContactLink = function() {
        var r = document.location.host;
        var q = com.bbva.kyop.util.SessionUtil.getUser().getCompanyInformation().getSegmentId();
        var p = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductId();
        var s = com.bbva.kyop.bean.UserBean.getRegionalInformation().getLanguage();
        var o = com.bbva.kyop.util.SessionUtil.getConfiguration().getRequestConfiguration().getContactUsRequestUrl();
        var m = com.bbva.kyop.util.SessionUtil.getUser().getCompanyInformation().isLatam;
        if (m) {
            var n = "https://" + r + o
        } else {
            var n = "https://" + r + o + s + "/" + p + "/" + q
        }
        if (r == "localhost") {
            n = "https://grupobbva.es.igrupobbva" + o + s + "/" + p + "/" + q
        }
        method = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductId() == "005" ? "GET" : null;
        com.bbva.kyop.util.LightBoxUtil.loadLightBoxKyop("kyop-lightbox-container-div", "kyop-lightbox-iframe-div", "kyop-lightbox-form", {
            url: n,
            height: 450,
            width: 680,
            innerWidth: 658,
            innerHeight: 250,
            registerActivity: true,
            title: "Contact link"
        }, method)
    }
};
com.bbva.kyop.controller.FavoriteController = new function() {
    this.getHeaderFavorites = function(b) {
        com.bbva.kyop.util.FavoriteUtil.removeAll();
        com.bbva.kyop.controller.FavoriteController.loadFavorites(b);
        logger.info("*** FAVORITOS ****");
        logger.info(com.bbva.kyop.util.FavoriteUtil.getAll());
        var d = {
            favorites: b
        };
        com.bbva.kyop.controller.MenuController.setMenuInPortal(d, "#kyop-tooltip-favorites-tmpl", "#kyop-header-second-tooltip-favorites-container")
    };
    this.loadFavorites = function(b) {
        var d = "";
        var e = "";
        $.each(b, function(f, g) {
            d = com.bbva.kyop.util.FavoriteUtil.getKey(g.idMenu, g.idProduct);
            e = g;
            com.bbva.kyop.util.FavoriteUtil.setFavorite(d, e)
        })
    };
    var a = function(b) {
        return b == com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductIdMigrated()
    };
    this.deleteFavoriteFromHeader = function(e, d, f, b) {
        com.bbva.kyop.controller.FavoriteController.deleteFavoriteMsg(e, d, f, b, function() {
            com.bbva.kyop.controller.MenuController.controlSecondHeaderButton("kyop-header-second-tooltip-favorites-container");
            var g = $("#kyop-cod-process").val();
            if (g == d && a(b)) {
                com.bbva.kyop.controller.FavoriteController.showAddFavoriteButton()
            }
            com.bbva.kyop.controller.FavoriteController.refreshFavorites(function(h) {
                com.bbva.kyop.controller.FavoriteController.refreshFavoritesAdmin(h)
            })
        })
    };
    this.deleteFavoriteFromBreadcrumb = function(d, f, e, b) {
        com.bbva.kyop.controller.FavoriteController.deleteFavoriteMsg(e, d, f, b, function() {
            com.bbva.kyop.controller.FavoriteController.refreshFavorites(function(g) {
                com.bbva.kyop.controller.FavoriteController.refreshFavoritesAdmin(g);
                com.bbva.kyop.controller.FavoriteController.showAddFavoriteButton()
            })
        })
    };
    this.addFavoriteFromBreadcrumb = function(e, d, f, b) {
        com.bbva.kyop.controller.FavoriteController.addFavorite(e, d, f, b, function() {
            com.bbva.kyop.controller.FavoriteController.showDeleteFavoriteButton();
            com.bbva.kyop.controller.FavoriteController.refreshFavorites(function(g) {
                com.bbva.kyop.controller.FavoriteController.refreshFavoritesAdmin(g)
            })
        })
    };
    this.deleteFavoriteMsg = function(f, e, g, d, b) {
        com.bbva.kyop.controller.FavoriteController.deleteFavorite(f, e, g, d, b)
    };
    this.deleteFavorite = function(f, e, g, d, b) {
        com.bbva.kyop.util.AjaxUtil.setMock(false);
        com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
            url: "favorite/deleteFavorite.json",
            urlMock: "mock/core/deleteFavorite.json",
            method: "POST",
            typeRequest: "json",
            abortApp: false,
            params: {
                idProcess: e,
                idService: g,
                idProduct: d
            },
            callback: function(h) {
                com.bbva.kyop.util.FavoriteUtil.remove(com.bbva.kyop.util.FavoriteUtil.getKey(f, d));
                if (b != null && b != "") {
                    b(h)
                }
            }
        })
    };
    this.refreshFavorites = function(b) {
        com.bbva.kyop.util.AjaxUtil.setMock(false);
        com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
            url: "favorite/getFavorites.json",
            urlMock: "mock/core/getFavorites.json",
            method: "POST",
            typeRequest: "json",
            abortApp: false,
            callback: function(d) {
                com.bbva.kyop.controller.FavoriteController.removeFavoritesContent("kyop-header-second-tooltip-favorites-container");
                com.bbva.kyop.controller.FavoriteController.getHeaderFavorites(d);
                if (b != null && b != "") {
                    b(d)
                }
            }
        })
    };
    this.removeFavoritesContent = function(b) {
        $("#" + b).empty()
    };
    this.administrateFavorites = function() {
        com.bbva.kyop.controller.MenuController.foldTooltipsArrows();
        com.bbva.kyop.controller.MenuController.foldCentralArea();
        com.bbva.kyop.controller.BreadcrumbController.updateBreadcrumb("administrateFavorites");
        $("#kyop-central-favorites").show();
        com.bbva.kyop.util.CalculatorSizeElementsUtil.resetFooterOperations();
        com.bbva.kyop.util.CalculatorSizeElementsUtil.calculateFooterHeight();
        com.bbva.kyop.controller.MenuController.hideMenu()
    };
    this.actionFavoriteButton = function(j) {
        var h = j.idMenu;
        var g = j.processes[0];
        var e = g.idProcess;
        var k = "";
        var b = com.bbva.kyop.controller.ProcessController.getUserServiceFromProcess(g.services);
        var f = com.bbva.kyop.bean.UserBean.getUserInformation().getProductIdMigrated();
        if (b != null) {
            k = b.idService
        }
        com.bbva.kyop.controller.FavoriteController.setValuesToFavoriteButton(h, e, k, f);
        var d = false;
        d = com.bbva.kyop.util.FavoriteUtil.keyExists(com.bbva.kyop.util.FavoriteUtil.getKey(h, f));
        if (d) {
            com.bbva.kyop.controller.FavoriteController.showDeleteFavoriteButton()
        } else {
            com.bbva.kyop.controller.FavoriteController.showAddFavoriteButton()
        }
    };
    this.setValuesToFavoriteButton = function(e, d, f, b) {
        $("#kyop-add-favorites").attr("idMenu", e);
        $("#kyop-add-favorites").attr("idProcess", d);
        $("#kyop-add-favorites").attr("idService", f);
        $("#kyop-add-favorites").attr("idProduct", b);
        $("#kyop-delete-favorites").attr("idMenu", e);
        $("#kyop-delete-favorites").attr("idProcess", d);
        $("#kyop-delete-favorites").attr("idService", f);
        $("#kyop-delete-favorites").attr("idProduct", b)
    };
    this.showAddFavoriteButton = function() {
        $("#kyop-delete-favorites").hide();
        $("#kyop-add-favorites").show()
    };
    this.showDeleteFavoriteButton = function() {
        $("#kyop-delete-favorites").show();
        $("#kyop-add-favorites").hide()
    };
    this.hideDeleteAndAddFavoriteButtons = function() {
        $("#kyop-delete-favorites").hide();
        $("#kyop-add-favorites").hide()
    };
    this.addProcessToFavorite = function() {
        var e = $("#kyop-add-favorites").attr("idMenu");
        var d = $("#kyop-add-favorites").attr("idProcess");
        var g = $("#kyop-add-favorites").attr("idService");
        var f = com.bbva.kyop.util.MenuUtil.getMenu(e);
        var b = com.bbva.kyop.util.I18nUtil.getText(f.codI18nShort);
        com.bbva.kyop.controller.FavoriteController.addFavoriteFromBreadcrumb(e, d, g, b)
    };
    this.deleteProcessFromFavorite = function() {
        var e = $("#kyop-add-favorites").attr("idMenu");
        var d = $("#kyop-add-favorites").attr("idProcess");
        var f = $("#kyop-add-favorites").attr("idService");
        var b = $("#kyop-add-favorites").attr("idProduct");
        com.bbva.kyop.controller.FavoriteController.deleteFavoriteFromBreadcrumb(d, f, e, b)
    };
    this.addFavorite = function(f, e, g, b, d) {
        com.bbva.kyop.util.AjaxUtil.setMock(false);
        com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
            url: "favorite/addFavorite.json",
            urlMock: "mock/core/addFavorite.json",
            method: "POST",
            typeRequest: "json",
            abortApp: false,
            showMessageError: false,
            params: {
                menuOption: f,
                idProcess: e,
                idService: g,
                title: b,
                isHeaderProcess: false,
                breadcrumbText: "none"
            },
            callback: function(h) {
                if (d != null && d != "") {
                    d(h)
                }
            },
            fallbackFn: function(h) {
                if (h.errorInfo.errorCode != null && h.errorInfo.errorCode != undefined && h.errorInfo.errorCode == 100) {
                    if (d != null && d != "") {
                        d(h)
                    }
                } else {}
            }
        })
    };
    this.executeFavorite = function(f, e, g, d, b) {
        com.bbva.kyop.bean.ProcessBean.setActivityRegisterParams({
            origin: "Favoritos"
        });
        if (com.bbva.kyop.util.MenuUtil.keyExists(f)) {
            com.bbva.kyop.controller.MenuController.executeProcess(f, true)
        } else {
            com.bbva.kyop.controller.ProcessController.getProcessByIdFromFavorite(e, d, function(h) {
                com.bbva.kyop.controller.ProcessController.proceedToLaunchProcess(h);
                com.bbva.kyop.controller.MenuController.foldTooltipsArrows();
                com.bbva.kyop.controller.BreadcrumbController.updateBreadcrumbAuxReference(b)
            })
        }
    };
    this.getAdminFavorites = function(b) {
        var d = {
            favorites: b
        };
        com.bbva.kyop.controller.MenuController.setMenuInPortal(d, "#kyop-admin-favorites-list-tmpl", "#kyop-admin-favorites-list-container")
    };
    this.refreshFavoritesAdmin = function(d) {
        var b = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().isNetCash();
        if (b) {
            com.bbva.kyop.controller.FavoriteController.elementSelectDelete = [];
            com.bbva.kyop.controller.FavoriteController.removeFavoritesContent("kyop-admin-favorites-list-container");
            com.bbva.kyop.controller.FavoriteController.getAdminFavorites(d)
        }
    };
    this.updateFavoriteAdmin = function(b, d, f, e) {
        com.bbva.kyop.util.AjaxUtil.setMock(false);
        com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
            url: "favorite/updateFavorite.json",
            urlMock: "mock/core/updateFavorite.json",
            method: "POST",
            typeRequest: "json",
            abortApp: false,
            params: {
                idProduct: b,
                idProcess: d,
                idService: f,
                desTitfav: e
            },
            callback: function(g) {
                com.bbva.kyop.controller.FavoriteController.refreshFavorites()
            }
        })
    };
    this.updateOrderFavoritesAdmin = function(f, g, d, k, h, j, e, b) {
        com.bbva.kyop.util.AjaxUtil.setMock(false);
        com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
            url: "favorite/updateOrderFavorites.json",
            urlMock: "mock/core/updateOrderFavorites.json",
            method: "POST",
            typeRequest: "json",
            abortApp: false,
            params: {
                idProductPre: f,
                idProcessPre: g,
                idServicePre: d,
                orderPre: k,
                idProductPos: h,
                idProcessPos: j,
                idServicePos: e,
                orderPos: b
            },
            callback: function(l) {
                com.bbva.kyop.controller.FavoriteController.refreshFavorites(function(m) {
                    com.bbva.kyop.controller.FavoriteController.refreshFavoritesAdmin(m)
                })
            }
        })
    };
    this.deleteFavoritesAdmin = function(b) {
        com.bbva.kyop.util.AjaxUtil.setMock(false);
        com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
            url: "favorite/deleteFavoritesAdmin.json",
            urlMock: "mock/core/deleteFavoritesAdmin.json",
            method: "POST",
            typeRequest: "json",
            abortApp: false,
            params: {
                listFavorites: b,
                listFavorites2: b
            },
            callback: function(d) {
                com.bbva.kyop.controller.FavoriteController.refreshFavorites(function(e) {
                    com.bbva.kyop.controller.FavoriteController.refreshFavoritesAdmin(e)
                })
            }
        })
    };
    this.deleteFavoritesAdminMsg_old = function() {
        if (elementSelectDelete.length > 1) {
            com.bbva.kyop.util.MessageBoxUtil.showMessageBoxConfirm(com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.favorites.confirmdelete.title"), com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.favorites.confirmdelete"), function() {
                com.bbva.kyop.controller.FavoriteController.deleteFavoritesAdmin(elementSelectDelete)
            })
        } else {
            com.bbva.kyop.util.MessageBoxUtil.showMessageBoxConfirm(com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.favorites.confirmonedelete.title"), com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.favorites.confirmonedelete"), function() {
                com.bbva.kyop.controller.FavoriteController.deleteFavoritesAdmin(elementSelectDelete)
            })
        }
    };
    this.deleteFavoritesAdminMsg = function() {
        if (elementSelectDelete.length > 1) {
            $("#deleteOneFav").hide();
            $("#deleteMoreOneFav").show()
        } else {
            $("#deleteMoreOneFav").hide();
            $("#deleteOneFav").show()
        }
    }
};
this.elementSelectDelete = [];

function editFavorite(j, e, m) {
    var k = $("#" + e).text();
    var b = e.substring(e.indexOf("_fav_")).replace("_fav_", "");
    var g = b.split("_");
    var h = g[0];
    var l = g[1];
    var a = g[3];
    var d = "i_" + j;
    var f = "";
    f += '<div class="inputFila">';
    f += '<input type="text" class="" id="' + d + '" value="' + k.trim() + '" maxlength="80" onchange="updateDescriptionFavorite(\'' + k + "','" + d + "',this.value      ,'" + h + "','" + l + "','" + a + "' );\" onblur=\"closeEditionFavorite('" + d + "','" + j + "','" + e + "', this.value , '" + m + "',  '" + h + "','" + l + "','" + a + "');\">";
    f += '<div class="interior3"><img src="./resources/images/confirmacion.png"';
    f += ' class="imgRight"';
    f += ' style="cursor:pointer; cursor:hand">';
    f += "</img>";
    f += "</div></div>";
    $("[id^= " + d + "]").bind("keypress", function(p) {
        if (this.value.length <= 80) {
            p = p || window.event;
            var n = p.which || p.keyCode;
            var o = String.fromCharCode(n);
            if (/[A-Za-z0-9ñÑ\s\_áé�óú]/.test(o) || p.keyCode == 8 || p.keyCode == 37 || p.keyCode == 39 || p.keyCode == 46) {
                return true
            } else {
                p.preventDefault()
            }
        } else {
            p.preventDefault()
        }
    });
    $("[id^= " + d + "]").bind("paste", function(o) {
        var n = this;
        setTimeout(function() {
            $(n).val($(n).val().replace(/[^A-Za-z0-9ñÑ\s\_áé�óú]/g, ""))
        }, 0)
    });
    $("#" + j).html(f);
    window.setTimeout(function() {
        document.getElementById(d).focus()
    }, 0);
    $("#" + d).focus()
}

function replaceAll(d, b, a) {
    while (d.indexOf(b) != -1) {
        d = d.replace(b, a)
    }
    return d
}

function getStringAvoidingJavascriptInjection(a) {
    return $("<div/>").html(a).text()
}

function updateDescriptionFavorite(a, g, d, e, f, b) {
    if (d.trim() == "" || d == "undefined") {
        $("#" + g).val(a)
    } else {
        d = getStringAvoidingJavascriptInjection(d);
        com.bbva.kyop.controller.FavoriteController.updateFavoriteAdmin(b, e, f, d.trim())
    }
}

function closeEditionFavorite(a, e, f, g, k, d, j) {
    var b = "";
    var h = $("#" + a).val();
    if (h != null && h != "undefined") {
        b += '<div class="celdaEditable" id="' + f + '">' + getStringAvoidingJavascriptInjection(g);
        b += '<img id="' + k + '" src="./resources/images/common/lapizGris.png"';
        b += ' class="right" style="cursor:pointer; cursor:hand"';
        b += " onclick=\"editFavorite('" + e + "','" + f + "','" + f + "'   )\"/>";
        b += "</div>";
        $("#" + e).html(b)
    }
}

function actualizeOrderFavorites(b, g) {
    if (g != "" && g != "undefined") {
        var h = $("#" + b).attr("id");
        var a = h.substring(h.indexOf("_fav_")).replace("_fav_", "");
        var f = a.split("_");
        idProcess = f[0];
        idService = f[1];
        order = f[2];
        idProduct = f[3];
        if (g == "asc") {
            var e = $("#" + b).prev("tr").attr("id");
            var j = e.substring(e.indexOf("_fav_")).replace("_fav_", "");
            var f = j.split("_");
            idProcessPre = f[0];
            idServicePre = f[1];
            orderPre = f[2];
            idProductPre = f[3];
            com.bbva.kyop.controller.FavoriteController.updateOrderFavoritesAdmin(idProduct, idProcess, idService, orderPre, idProductPre, idProcessPre, idServicePre, order)
        } else {
            if (g == "desc") {
                var d = $("#" + b).next("tr").attr("id");
                var k = d.substring(d.indexOf("_fav_")).replace("_fav_", "");
                var f = k.split("_");
                idProcessPos = f[0];
                idServicePos = f[1];
                orderPos = f[2];
                idProductPos = f[3];
                com.bbva.kyop.controller.FavoriteController.updateOrderFavoritesAdmin(idProduct, idProcess, idService, orderPos, idProductPos, idProcessPos, idServicePos, order)
            }
        }
    }
}

function showDeleteButom(d) {
    $("#deleteOneFav").hide();
    $("#deleteMoreOneFav").hide();
    $("#btnDeleteFavorite").show();
    var b = $("#" + d).val();
    if (b != "undefined" && $("#" + d).is(":checked")) {
        d = d.substring(d.indexOf("_fav_")).replace("_fav_", "");
        elementSelectDelete.push(d)
    } else {
        d = d.substring(d.indexOf("_fav_")).replace("_fav_", "");
        var a = $.inArray(d, elementSelectDelete);
        elementSelectDelete.splice(a, 1);
        if (elementSelectDelete == null || elementSelectDelete == "") {
            $("#btnDeleteFavorite").hide();
            $("#capaEliminar").hide()
        }
    }
}

function showDeleteAllButom(b) {
    elementSelectDelete = [];
    $("#deleteOneFav").hide();
    $("#deleteMoreOneFav").hide();
    if ("checkall" === $("#chk_allfav").val()) {
        $("#chk_allfav").val("uncheckall");
        var a = false;
        $("[id^=chk_fav_]").each(function() {
            var d = this.id;
            $("#" + d).prop("checked", true);
            idFav = d.substring(d.indexOf("_fav_")).replace("_fav_", "");
            elementSelectDelete.push(idFav);
            a = true
        });
        if (a) {
            $("#btnDeleteFavorite").show()
        }
    } else {
        if ("uncheckall" === $("#chk_allfav").val()) {
            $("#chk_allfav").val("checkall");
            $("[id^=chk_fav_]").each(function() {
                var d = this.id;
                $("#" + d).prop("checked", false)
            });
            $("#btnDeleteFavorite").hide()
        }
    }
}

function remove_accent(e) {
    var d = {
        "À": "A",
        "�?": "A",
        "Â": "A",
        "Ã": "A",
        "Ä": "A",
        "Å": "A",
        "Æ": "AE",
        "Ç": "C",
        "È": "E",
        "É": "E",
        "Ê": "E",
        "Ë": "E",
        "Ì": "I",
        "�?": "I",
        "Î": "I",
        "�?": "I",
        "�?": "D",
        "Ñ": "N",
        "Ò": "O",
        "Ó": "O",
        "Ô": "O",
        "Õ": "O",
        "Ö": "O",
        "Ø": "O",
        "Ù": "U",
        "Ú": "U",
        "Û": "U",
        "Ü": "U",
        "�?": "Y",
        "ß": "s",
        "à": "a",
        "á": "a",
        "â": "a",
        "ã": "a",
        "ä": "a",
        "å": "a",
        "æ": "ae",
        "ç": "c",
        "è": "e",
        "é": "e",
        "ê": "e",
        "ë": "e",
        "ì": "i",
        "�": "i",
        "î": "i",
        "ï": "i",
        "ñ": "n",
        "ò": "o",
        "ó": "o",
        "ô": "o",
        "õ": "o",
        "ö": "o",
        "ø": "o",
        "ù": "u",
        "ú": "u",
        "û": "u",
        "ü": "u",
        "ý": "y",
        "ÿ": "y",
        "Ā": "A",
        "�?": "a",
        "Ă": "A",
        "ă": "a",
        "Ą": "A",
        "ą": "a",
        "Ć": "C",
        "ć": "c",
        "Ĉ": "C",
        "ĉ": "c",
        "Ċ": "C",
        "ċ": "c",
        "Č": "C",
        "�?": "c",
        "Ď": "D",
        "�?": "d",
        "�?": "D",
        "đ": "d",
        "Ē": "E",
        "ē": "e",
        "Ĕ": "E",
        "ĕ": "e",
        "Ė": "E",
        "ė": "e",
        "Ę": "E",
        "ę": "e",
        "Ě": "E",
        "ě": "e",
        "Ĝ": "G",
        "�?": "g",
        "Ğ": "G",
        "ğ": "g",
        "Ġ": "G",
        "ġ": "g",
        "Ģ": "G",
        "ģ": "g",
        "Ĥ": "H",
        "ĥ": "h",
        "Ħ": "H",
        "ħ": "h",
        "Ĩ": "I",
        "ĩ": "i",
        "Ī": "I",
        "ī": "i",
        "Ĭ": "I",
        "�": "i",
        "Į": "I",
        "į": "i",
        "İ": "I",
        "ı": "i",
        "Ĳ": "IJ",
        "ĳ": "ij",
        "Ĵ": "J",
        "ĵ": "j",
        "Ķ": "K",
        "ķ": "k",
        "Ĺ": "L",
        "ĺ": "l",
        "Ļ": "L",
        "ļ": "l",
        "Ľ": "L",
        "ľ": "l",
        "Ŀ": "L",
        "ŀ": "l",
        "�?": "L",
        "ł": "l",
        "Ń": "N",
        "ń": "n",
        "Ņ": "N",
        "ņ": "n",
        "Ň": "N",
        "ň": "n",
        "ŉ": "n",
        "Ō": "O",
        "�?": "o",
        "Ŏ": "O",
        "�?": "o",
        "�?": "O",
        "ő": "o",
        "Œ": "OE",
        "œ": "oe",
        "Ŕ": "R",
        "ŕ": "r",
        "Ŗ": "R",
        "ŗ": "r",
        "Ř": "R",
        "ř": "r",
        "Ś": "S",
        "ś": "s",
        "Ŝ": "S",
        "�?": "s",
        "Ş": "S",
        "ş": "s",
        "Š": "S",
        "š": "s",
        "Ţ": "T",
        "ţ": "t",
        "Ť": "T",
        "ť": "t",
        "Ŧ": "T",
        "ŧ": "t",
        "Ũ": "U",
        "ũ": "u",
        "Ū": "U",
        "ū": "u",
        "Ŭ": "U",
        "�": "u",
        "Ů": "U",
        "ů": "u",
        "Ű": "U",
        "ű": "u",
        "Ų": "U",
        "ų": "u",
        "Ŵ": "W",
        "ŵ": "w",
        "Ŷ": "Y",
        "ŷ": "y",
        "Ÿ": "Y",
        "Ź": "Z",
        "ź": "z",
        "Ż": "Z",
        "ż": "z",
        "Ž": "Z",
        "ž": "z",
        "ſ": "s",
        "ƒ": "f",
        "Ơ": "O",
        "ơ": "o",
        "Ư": "U",
        "ư": "u",
        "�?": "A",
        "ǎ": "a",
        "�?": "I",
        "�?": "i",
        "Ǒ": "O",
        "ǒ": "o",
        "Ǔ": "U",
        "ǔ": "u",
        "Ǖ": "U",
        "ǖ": "u",
        "Ǘ": "U",
        "ǘ": "u",
        "Ǚ": "U",
        "ǚ": "u",
        "Ǜ": "U",
        "ǜ": "u",
        "Ǻ": "A",
        "ǻ": "a",
        "Ǽ": "AE",
        "ǽ": "ae",
        "Ǿ": "O",
        "ǿ": "o"
    };
    var b = "";
    for (var a = 0; a < e.length; a++) {
        c = e.charAt(a);
        b += d[c] || c
    }
    return b
}
var existsFavorites = function() {
    return $("#kyop-admin-favorite-empty").length == 0
};
var showEmptyRow = function() {
    var a = "<tr id='kyop-empty-row-dinamyc'>";
    a += "<td headers='col1'>";
    a += "<span id='kyop-admin-favorite-empty'>" + com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.favorites.nofavorites") + "</span>";
    a += "</td>";
    a += "</tr>";
    if (existsFavorites()) {
        $("#kyop-table-favorites").append(a)
    }
};
var deleteEmptyRow = function() {
    $("#kyop-empty-row-dinamyc").remove()
};

function findFavorites(a) {
    $("#deleteOneFav").hide();
    $("#deleteMoreOneFav").hide();
    if (a == null || a == "undefined" || a.trim() == "") {
        showAllFavorites()
    } else {
        $("[id^=tr_fav_]").each(function() {
            if (!$(this).is(":visible")) {
                $(this).show()
            }
        });
        var b = 0;
        $("[id^=tr_fav_]").each(function() {
            var f = this.id;
            var g = "col1_" + this.id;
            var e = false;
            var d = $.trim($("#" + g).text().toLowerCase());
            d = remove_accent(d);
            a = $.trim(a.toLowerCase());
            a = remove_accent(a);
            if (d.match(a)) {
                e = true
            }
            if (!e) {
                $("#" + f).hide()
            } else {
                b++
            }
        });
        if (b == 0) {
            showEmptyRow()
        } else {
            deleteEmptyRow()
        }
        $("#t_showallfavorites").show()
    }
}

function showAllFavorites() {
    deleteEmptyRow();
    $("[id^=tr_fav_]").each(function() {
        if (!$(this).is(":visible")) {
            $(this).show()
        }
    });
    $("#t_showallfavorites").hide();
    $("#imputFind").val("")
}

function deleteFavoritesAdminConfirm() {
    $("#deleteOneFav").hide();
    $("#deleteMoreOneFav").hide();
    com.bbva.kyop.controller.FavoriteController.deleteFavoritesAdmin(elementSelectDelete);
    elementSelectDelete = []
}
com.bbva.kyop.controller.ProcessController = new function() {
    var d = "E";
    var j;
    var m = "kyopWindowProcessPopUp";
    var b = "";
    var l = undefined;
    this.setOpenedWindow = function(n) {
        this.openedWindow = n
    };
    this.getOpenedWindow = function() {
        return this.openedWindow
    };
    this.getIdWindowProcess = function() {
        return m
    };
    this.getLastProcessLoaded = function() {
        return this.lastProcessLoaded
    };
    this.setLastProcessLoaded = function(n) {
        this.lastProcessLoaded = n
    };
    this.loadRedirecciones = function(n) {
        this.redirecciones = n
    };
    this.getRedirecciones = function() {
        return this.redirecciones
    };
    this.isNewArchitecture = function(o) {
        var n = false;
        if (o == "S") {
            n = true
        }
        return n
    };
    var h = function(t, q, s, o, r, p) {
        var n = "";
        if (p == null) {
            if (com.bbva.kyop.controller.ProcessController.isNewArchitecture(t)) {
                n = "/" + s + "/" + o + "/" + q
            } else {
                n = "/" + s + "/" + o + "/servlet/PIBEE"
            }
            if (r != null) {
                n = n + "?" + r
            }
        } else {
            n = "/" + s + "/" + o + "/" + p
        }
        return n
    };
    var f = function(n, o) {
        com.bbva.kyop.util.UUAASessionManager.add(n, com.bbva.kyop.controller.ProcessController.isNewArchitecture(o))
    };
    var a = function(o, n) {
        var p = null;
        if (o.codArchitecture != null && typeof(o.codArchitecture) != "undefined" && o.codArchitecture != "") {
            p = o.codArchitecture
        } else {
            if (n != null) {
                p = n.idArchitecture
            }
        }
        return p
    };
    var e = function(n) {
        var o = false;
        if (n.serviceType == d) {
            o = true
        } else {
            o = $.inArray(n.idService, com.bbva.kyop.util.SessionUtil.getUser().getUserServices()) != -1
        }
        return o
    };
    this.getUserServiceFromProcess = function(n) {
        var o = null;
        if (n != null && n.length != 0) {
            var p = false;
            $.each(n, function(r, q) {
                if (!p) {
                    if (e(q)) {
                        o = q;
                        p = true
                    }
                }
            })
        }
        return o
    };
    var g = function(q, p) {
        if (typeof(p) == "undefined") {
            return q.processDescription
        }
        var o = com.bbva.kyop.util.MenuUtil.keyExists(p);
        if (!o) {
            return q.processDescription
        } else {
            var n = com.bbva.kyop.util.MenuUtil.getMenu(p);
            return com.bbva.kyop.util.I18nUtil.getText(n.codI18nLarge)
        }
    };
    var k = function() {
        var n = com.bbva.kyop.util.SessionUtil.getUser().getHelpDeskInformation().getProfile();
        com.bbva.kyop.util.ExtraParamsUtil.addParam("pb_perfil_usu_hd", n);
        com.bbva.kyop.controller.ProcessController.setExtraParamsToProcessForm()
    };
    this.launchProcess = function(Y, K) {
        var W = 0;
        var H = com.bbva.kyop.component.ActivityRegister.activityRegisterRequiredBean.company;
        var y = Y.openingMode;
        var x = Y.services;
        var L = Y.sentence;
        var J = null;
        var N = null;
        var E = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getLocale();
        var F = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getDateFormat();
        var C = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getPriceFormat();
        var q = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getTimeZone();
        var o = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getIdDateFormat();
        var T = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getIdPriceFormat();
        var aa = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getIdTimeZone();
        var w = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().getProductType();
        var P = com.bbva.kyop.bean.UserBean.getRegionalInformation().getCodIso();
        var t = com.bbva.kyop.util.SessionUtil.getUser().getCompanyInformation().getSegmentId();
        var O = com.bbva.kyop.util.SessionUtil.getUser().getCompanyInformation().getCompanyId();
        var I = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getUserId();
        if (K) {
            var X = com.bbva.kyop.util.MenuUtil.getMenu(K).idFather;
            var p;
            while (X) {
                p = X;
                X = com.bbva.kyop.util.MenuUtil.getMenu(p).idFather
            }
            var U = com.bbva.kyop.util.MenuUtil.getMenu(K).processes[0].desKeySMV;
            if (p) {
                var n = com.bbva.kyop.controller.ProcessController.menuFatherLiteral(p)
            }
        }
        var A = com.bbva.kyop.bean.UserBean.getUserInformation().getProductIdMigrated();
        var S = L + "?" + Y.param;
        var u = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductId();
        var v = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductMainId();
        var r = com.bbva.kyop.bean.ProcessBean.getExtraParams();
        var s = com.bbva.kyop.bean.ProcessBean.getUrlOverride();
        var Z = this.getUserServiceFromProcess(x);
        N = a(Y, Z);
        if (Z != null) {
            J = Z.idService
        } else {
            if (x.length > 0) {
                J = x[0].idService
            }
        }
        while (x[W]) {
            if (x[W].idService >= 8625 && x[W].idService <= 8635) {
                O = H;
                break
            }
            W++
        }
        var G = "";
        var z = document.location.hostname;
        if (z == "localhost") {
            if (w == "H") {
                G = "https://de-helpdeskpibee.igrupobbva" + h(N, L, Y.junction, Y.alias, Y.param, s)
            } else {
                G = "https://grupobbva.es.igrupobbva" + h(N, L, Y.junction, Y.alias, Y.param, s)
            }
        } else {
            if (z == "pibeehelpdesk.gss.bbvacompass.com") {
                var M = "10443";
                G = "https://" + z + ":" + M + h(N, L, Y.junction, Y.alias, Y.param, s)
            } else {
                z = window.location.host;
                G = "https://" + z + h(N, L, Y.junction, Y.alias, Y.param, s)
            }
        }
        if (r != null) {
            G = com.bbva.kyop.util.StringUtil.addParamsToUrl(G, r)
        }
        com.bbva.kyop.bean.ProcessBean.setExtraParams(null);
        com.bbva.kyop.bean.ProcessBean.setUrlOverride(null);
        if (y == "ROT") {
            if (z == "localhost") {
                G = "https://grupobbva.es.igrupobbva" + Y.param
            } else {
                G = "https://" + z + Y.param
            }
        }
        if ($("#isInformationalArchitecture").val() != null) {
            if (G.indexOf("?") == -1) {
                G = G.trim() + "?isInformationalArchitecture=" + $("#isInformationalArchitecture").val() + " "
            } else {
                if (G.trim().slice(-1) == "?") {
                    G = G.trim() + "isInformationalArchitecture=" + $("#isInformationalArchitecture").val() + " "
                } else {
                    G = G.trim() + "&isInformationalArchitecture=" + $("#isInformationalArchitecture").val() + " "
                }
            }
        }
        com.bbva.kyop.controller.ProcessController.setProcessValues({
            formAction: G,
            product: u,
            service: J,
            process: Y.idProcess,
            locale: E,
            dateFormat: F,
            priceFormat: C,
            timeZone: q,
            checkPermissions: Y.checkPrivileges,
            pubUrl: S,
            segment: t,
            productType: w,
            isPortalKyop: true,
            idCompany: O,
            descProcess: Y.processDescription,
            mainProduct: v
        });
        if (y == "F" || y == "ROT") {
            loadBox.show();
            com.bbva.kyop.controller.MenuController.foldCentralArea();
            var Q = (Y.defaultProcessHome != undefined) && (Y.defaultProcessHome);
            if (Q) {
                $("#kyop-process-form").attr("target", "kyop-central-defaultprocess-load-area")
            } else {
                logger.debug("[1244] -launchProcess: se resetea style width:100");
                $("#kyop-central-load-area").attr("style", "width:100%; height:100%");
                $("#kyop-process-form").attr("target", "kyop-central-load-area")
            }
            if ((Y.breadcrumbText != undefined) && (Y.breadcrumbText != "")) {
                com.bbva.kyop.controller.BreadcrumbController.updateBreadcrumbWithoutMenu(Y.breadcrumbText)
            }
            com.bbva.kyop.controller.CoreController.resetIFrameSize();
            var V = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().isGlobalNetCash();
            if (V) {
                com.bbva.kyop.controller.CountryJumpController.generateGlobalNetCashFormValues()
            }
            if (com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().isLocalHelpDesk()) {
                k()
            }
            $("#kyop-process-form").submit();
            com.bbva.kyop.controller.ProcessHelpController.showButtonAndPreloadHelpIfExistHelp(Y.idProcess, J, "", "", "", "");
            com.bbva.kyop.util.TimerUtil.initProcessTimer(Y.idProcess)
        } else {
            if (y == "Z") {
                if (z == "localhost") {
                    G = "https://grupobbva.es.igrupobbva" + Y.param
                } else {
                    G = "https://" + z + Y.param
                }
            }
            if (Y.param != "") {
                com.bbva.kyop.controller.ProcessController.setOpenedWindow(window.open("", com.bbva.kyop.controller.ProcessController.getIdWindowProcess()));
                $("#kyop-process-form").attr("target", com.bbva.kyop.controller.ProcessController.getIdWindowProcess());
                $("#kyop-process-form").attr("action", G);
                $("#kyop-process-form").submit()
            }
        }
        var D = com.bbva.kyop.bean.UserBean.getRegionalInformation().getLanguage();
        if (!com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().isHelpDesk()) {
            var R = g(Y, K);
            var B = com.bbva.kyop.bean.ProcessBean.getActivityRegisterParams();
            com.bbva.kyop.component.ActivityRegister.invocationRegister(P, D, u, Y.idProcess, J, R, G, B);
            com.bbva.kyop.bean.ProcessBean.setActivityRegisterParams(null);
            com.bbva.kyop.controller.ProcessController.updateMenuInvocation(D, A, Y.idProcess, J, I, O, K, p, U, n)
        }
        f(G, N);
        com.bbva.kyop.util.SessionUtil.maintainSessionBack();
        com.bbva.kyop.controller.CoreController.resetLoadAreaHeight();
        this.setLastProcessLoaded({
            idMenu: K,
            breadcrumbText: Y.breadcrumbText
        })
    };
    this.updateMenuInvocation = function(q, s, p, w, x, u, n, o, t, y) {
        var r = {
            language: q,
            idProduct: s,
            idProcess: p,
            idService: w,
            codUser: x,
            codLogonApl: u,
            codOpcMenu: n,
            codOpcMenuFather: o,
            literalMenu: t,
            literalMenuFather: y,
            audUusuario: "KYOPINVO",
        };
        var v = JSON.stringify(r);
        com.bbva.kyop.util.AjaxUtil.setMock(false);
        com.bbva.kyop.util.AjaxUtil.sendRequestJSONObject({
            url: "sectionsVisited/getTerminalMenuInvocation.json",
            urlMock: "mock/sectionsVisited/getTerminalMenuInvocation.json",
            method: "POST",
            typeRequest: "json",
            jsonData: v,
            callback: function(z) {
                if (callbackFn != null && callbackFn != "") {
                    callbackFn(z)
                }
            }
        })
    };
    this.menuFatherLiteral = function(n) {
        var r = com.bbva.kyop.util.MenuUtil.getMenu(n);
        var t = r.view;
        var u = null;
        if (t == "03" || t == "02" || t == "01") {
            var s = r.level;
            if (s == 1) {
                u = r.codI18nShort
            }
            if (s == 2) {
                q = com.bbva.kyop.controller.MenuController.getFatherMenu(r);
                u = q.codI18nShort
            }
            if (s == 3) {
                var p = com.bbva.kyop.controller.MenuController.getFatherMenu(r);
                var q = com.bbva.kyop.controller.MenuController.getFatherMenu(p);
                u = q.codI18nShort
            }
            if (s == 4) {
                var o = com.bbva.kyop.controller.MenuController.getFatherMenu(r);
                var p = com.bbva.kyop.controller.MenuController.getFatherMenu(o);
                var q = com.bbva.kyop.controller.MenuController.getFatherMenu(p);
                u = q.codI18nShort
            }
            if (s == 5) {
                var v = com.bbva.kyop.controller.MenuController.getFatherMenu(r);
                var o = com.bbva.kyop.controller.MenuController.getFatherMenu(v);
                var p = com.bbva.kyop.controller.MenuController.getFatherMenu(o);
                var q = com.bbva.kyop.controller.MenuController.getFatherMenu(p);
                u = q.codI18nShort
            }
        }
        return u
    };
    this.getProcessByIdForDevelopers = function(o, n) {
        com.bbva.kyop.util.AjaxUtil.setMock(false);
        com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
            url: "process/getProcessById.json",
            urlMock: "mock/core/getProcessById.json",
            method: "POST",
            typeRequest: "json",
            abortApp: false,
            params: {
                idProcess: o
            },
            callback: function(p) {
                if (n != null && n != "") {
                    n(p[0])
                }
            }
        })
    };
    this.getProcessByIdFromFavorite = function(p, o, n) {
        com.bbva.kyop.util.AjaxUtil.setMock(false);
        com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
            url: "process/getProcessByIdFromFavorite.json",
            urlMock: "mock/core/getProcessById.json",
            method: "POST",
            typeRequest: "json",
            abortApp: false,
            params: {
                idProcess: p,
                idProduct: o
            },
            callback: function(q) {
                if (n != null && n != "") {
                    n(q[0])
                }
            }
        })
    };
    this.getProcessById = function(p, o, n) {
        com.bbva.kyop.util.AjaxUtil.setMock(false);
        com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
            url: "process/getProcessByIdProfiled.json",
            urlMock: "mock/core/getProcessById.json",
            method: "POST",
            typeRequest: "json",
            abortApp: false,
            params: {
                idProcess: p
            },
            callback: function(q) {
                if (n != null && n != "") {
                    n(o, q[0])
                }
            }
        })
    };
    this.launchProcessForDevelopers = function(o, n) {
        loadBox.show();
        if (o == "pie") {
            com.bbva.kyop.controller.ReverseCallerController.executeUrlFromReverseCaller("external/pie.html")
        } else {
            if (o == "pieclear") {
                com.bbva.kyop.controller.ReverseCallerController.executeUrlFromReverseCaller("external/pie2.html")
            } else {
                if (o == "error") {
                    com.bbva.kyop.controller.ReverseCallerController.executeUrlFromReverseCaller("external/genericError.html")
                } else {
                    if (o == "demo") {
                        com.bbva.kyop.controller.ReverseCallerController.executeUrlFromReverseCaller("external/demoFrame.html")
                    } else {
                        if (o == "vass") {
                            com.bbva.kyop.controller.ReverseCallerController.executeUrlFromReverseCaller("external/aConcepto1.html")
                        } else {
                            if (isLocalhost) {
                                if (com.bbva.kyop.controller.ConnectionController.isConnected()) {
                                    com.bbva.kyop.controller.ProcessController.getProcessByIdForDevelopers(o, function(p) {
                                        com.bbva.kyop.controller.ProcessController.proceedToLaunchProcess(p)
                                    })
                                } else {
                                    loadBox.hide();
                                    alert("Necesita estar conectado en KDPO para poder ver el proceso")
                                }
                            } else {
                                com.bbva.kyop.controller.ProcessController.getProcessByIdForDevelopers(o, function(p) {
                                    com.bbva.kyop.controller.ProcessController.proceedToLaunchProcess(p)
                                })
                            }
                        }
                    }
                }
            }
        }
    };
    this.launchDefaultHomeProcess = function(n) {
        com.bbva.kyop.controller.ProcessController.getProcessByIdForDevelopers(n, function(o) {
            o.defaultProcessHome = true;
            com.bbva.kyop.controller.ProcessController.proceedToLaunchProcess(o)
        })
    };
    this.testGenerateValues = function() {
        com.bbva.kyop.util.ExtraParamsUtil.addParam("pb_ejemplo_1", "valor_1");
        com.bbva.kyop.util.ExtraParamsUtil.addParam("pb_ejemplo_2", "valor_2");
        com.bbva.kyop.util.ExtraParamsUtil.addParam("pb_ejemplo_3", "valor_3");
        com.bbva.kyop.util.ExtraParamsUtil.addParam("pb_ejemplo_4", "valor_4");
        com.bbva.kyop.util.ExtraParamsUtil.addParam("pb_ejemplo_5", "valor_5");
        com.bbva.kyop.controller.ProcessController.setExtraParamsToProcessForm()
    };
    this.setExtraParamsToProcessForm = function() {
        $("[id^=kyop-process-extraParam-]").each(function() {
            $("#" + this.id).remove()
        });
        var q = com.bbva.kyop.util.ExtraParamsUtil.getAll();
        var n = "";
        var p = "";
        for (var o = 0; o < com.bbva.kyop.util.ExtraParamsUtil.size(); o++) {
            n = com.bbva.kyop.util.ExtraParamsUtil.getKey(o);
            p = com.bbva.kyop.util.ExtraParamsUtil.getParam(n);
            $("<input>").attr({
                type: "hidden",
                id: "kyop-process-extraParam-" + n,
                name: n,
                value: p
            }).appendTo($("#kyop-process-form"))
        }
    };
    this.setProcessValues = function(n) {
        $("#kyop-process-form").attr("action", n.formAction);
        $("#kyop-cod-product").val(n.product);
        $("#kyop-cod-service").val(n.service);
        $("#kyop-cod-process").val(n.process);
        $("#kyop-cod-process").attr("description", n.descProcess);
        $("#kyop-locale").val(n.locale);
        $("#kyop-date-format").val(n.dateFormat);
        $("#kyop-price-format").val(n.priceFormat);
        $("#kyop-time-zone").val(n.timeZone);
        $("#kyop-check-permissions").val(n.checkPermissions);
        $("#kyop-pub-url").val(n.pubUrl);
        $("#kyop-segment").val(n.segment);
        $("#kyop-product-type").val(n.productType);
        $("#kyop-isPortalKyop").val(n.isPortalKyop);
        $("#kyop-cod-company").val(n.idCompany);
        $("#kyop-cod-main-product").val(n.mainProduct)
    };
    this.proceedToLaunchProcess = function(n, p) {
        com.bbva.kyop.controller.MenuRwdController.slideUpMenu();
        if (n.integration != undefined && n.integration != null) {
            var o = n.integration.strongIntegration;
            if (o) {
                com.bbva.kyop.controller.ProcessController.launchStrongIntegrationProcess(n.integration, n)
            } else {
                com.bbva.kyop.controller.ProcessController.launchProcess(n, p)
            }
        } else {
            com.bbva.kyop.controller.ProcessController.launchProcess(n, p)
        }
    };
    this.getMenuByService = function(p, o, n) {
        com.bbva.kyop.util.AjaxUtil.setMock(false);
        com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
            url: "menus/getMenuByProcessAndService.json",
            urlMock: "mock/core/getMenuByService.json",
            method: "POST",
            typeRequest: "json",
            abortApp: false,
            params: {
                idService: p,
                idProcess: o
            },
            callback: function(q) {
                if (n != null && n != "") {
                    n(q[0])
                }
            }
        })
    };
    this.launchStrongIntegrationProcess = function(u, w) {
        var v = '<div id="kyop-strong-integration-area-' + w.idProcess + '" class="kyop-slice-header"></div><div class="clearAll"></div>';
        var C = "kyop-strong-integration-area-" + w.idProcess;
        logger.debug("***********************************************************************");
        logger.debug(u);
        logger.debug("***********************************************************************");
        var A = com.bbva.kyop.controller.CoreController.checkIntegration(u, w.idProcess);
        if (A) {
            var o = w.services;
            var s = w.sentence;
            var G = null;
            var z = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getLocale();
            var x = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getDateFormat();
            var B = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getPriceFormat();
            var D = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getTimeZone();
            var E = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getIdDateFormat();
            var r = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getIdPriceFormat();
            var I = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getIdTimeZone();
            var t = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().getProductType();
            var p = com.bbva.kyop.util.SessionUtil.getUser().getCompanyInformation().getSegmentId();
            var y = com.bbva.kyop.util.SessionUtil.getUser().getCompanyInformation().getCompanyId();
            var n = s + "?" + w.param;
            var q = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductId();
            var H = this.getUserServiceFromProcess(o);
            if (H != null) {
                G = H.idService
            } else {
                if (o.length > 0) {
                    G = o[0].idService
                }
            }
            var F = com.bbva.kyop.controller.CoreController.createIntegrationBean({
                callbackFn: function(J) {
                    com.bbva.kyop.controller.CoreController.sliceCallbackFn(J)
                },
                idDivIntegration: C,
                idProduct: q,
                productType: t,
                idService: G,
                idProcess: w.idProcess,
                locale: z,
                dateFormat: x,
                priceFormat: B,
                timeZone: D,
                checkPrivileges: w.checkPrivileges,
                pubUrl: n,
                segment: p,
                idCompany: y,
                isPortalKyop: true
            });
            com.bbva.kyop.controller.MenuController.foldCentralArea();
            $("#kyop-central-strong-process-area").html(v);
            com.bbva.kyop.controller.CoreController.proceedToIntegrate(u, F);
            com.bbva.kyop.controller.ProcessHelpController.showButtonAndPreloadHelpIfExistHelp(w.idProcess, G, "", "", "", "");
            $("#kyop-central-strong-process-area").show()
        }
    }
};
com.bbva.kyop.controller.ConnectionController = new function() {
    this.connected = false;
    this.checkConnection = function() {
        var d = document.location.hostname;
        var a = "";
        if (d == KYOP_CONSTANTS.KYOP_DOMAIN_DES) {
            a = KYOP_CONSTANTS.KDPO_DOMAIN_DES
        } else {
            if (d == KYOP_CONSTANTS.KYOP_DOMAIN_DES_MAQUINA) {
                a = KYOP_CONSTANTS.KDPO_DOMAIN_DES
            } else {
                if (d == KYOP_CONSTANTS.KYOP_DOMAIN_INT) {
                    a = KYOP_CONSTANTS.KDPO_DOMAIN_INT
                } else {
                    if (d == KYOP_CONSTANTS.KYOP_DOMAIN_PRE) {
                        a = KYOP_CONSTANTS.KDPO_DOMAIN_PRE
                    } else {
                        if (d == KYOP_CONSTANTS.KYOP_DOMAIN_PRO) {
                            a = KYOP_CONSTANTS.KDPO_DOMAIN_PRO
                        } else {
                            if (d == "localhost") {
                                a = KYOP_CONSTANTS.KDPO_DOMAIN_DES
                            }
                        }
                    }
                }
            }
        }
        var b = "https://" + a + "/FWPIBEE/kdpo_mult_web_pub/img/desconexion_01_es.gif?dc=" + Date.now();
        var e = '<img  src="' + b + '" onerror="com.bbva.kyop.controller.ConnectionController.setConnected(false)" onload="com.bbva.kyop.controller.ConnectionController.setConnected(true)">';
        $("#kyop-check-connection").empty();
        $("#kyop-check-connection").html(e)
    };
    this.setConnected = function(a) {
        if (a) {
            $("#kyop-img-not-connected").hide();
            $("#kyop-img-connected").show()
        } else {
            $("#kyop-img-connected").hide();
            $("#kyop-img-not-connected").show()
        }
        this.connected = a
    };
    this.isConnected = function() {
        return this.connected
    };
    this.initTaskCheckConnection = function(a) {
        var b = setInterval(com.bbva.kyop.controller.ConnectionController.checkConnection, 2000);
        if (a != null && a != "") {
            a()
        }
    }
};
if (!Date.now) {
    Date.now = function() {
        return new Date().valueOf()
    }
}
if (typeof String.prototype.trim !== "function") {
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, "")
    }
}
com.bbva.kyop.controller.CoreController = new function() {
    var chromeNotification = null;
    var headerClick = false;
    var loadAreaHeight = 0;
    var OFFSETIFRAMEHELDESK = 50;
    var MINHEIGHTIFRAMEHELPDESK = 456;
    var isHtmlMalformed = function() {
        return (getHeightIframeOffset() == 0)
    };
    var getIframeBody = function() {
        return $("#kyop-central-load-area").contents().find("body")[0]
    };
    var getIframeHtml = function() {
        return $("#kyop-central-load-area").contents().find("html")[0]
    };
    this.isInformationalArchitecture = function() {
        var retorno = "false";
        if ($("#isInformationalArchitecture").val() == "true") {
            retorno = "true"
        }
        return retorno
    };
    var setLoadAreaHeight = function(loadAreaHeight) {
        this.loadAreaHeight = loadAreaHeight
    };
    var getLoadAreaHeight = function() {
        return this.loadAreaHeight
    };
    this.resetLoadAreaHeight = function() {
        setLoadAreaHeight(0)
    };
    var getHeightIframeOffset = function() {
        var offsetHtmlHeight = getIframeHtml().offsetHeight;
        var offsetBodyHeight = getIframeBody().offsetHeight;
        logger.debug("[1244] - getHeightIframeOffset: offsetHtmlHeight " + offsetHtmlHeight + ", offsetBodyHeight:" + offsetBodyHeight);
        return offsetHtmlHeight > offsetBodyHeight ? offsetHtmlHeight : offsetBodyHeight
    };
    var getHeightIframeScroll = function() {
        var scrollHtmlHeight = getIframeHtml().scrollHeight;
        var scrollBodyHeight = getIframeBody().scrollHeight;
        logger.debug("[1244] - getHeightIframeScroll: scrollHtmlHeight " + scrollHtmlHeight + ", scrollBodyHeight:" + scrollBodyHeight);
        return scrollHtmlHeight > scrollBodyHeight ? scrollHtmlHeight : scrollBodyHeight
    };
    this.forceNextHeightLoadArea = function(loadAreaHeight) {
        setLoadAreaHeight(loadAreaHeight)
    };
    var getIFrameHeight = function() {
        var iFrameOffsetHeight = 0;
        var iFrameScrollHeight = 0;
        var iFrameHeightReturn = 0;
        //var isNetCash = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().isNetCash();
        if (typeof($("#kyop-central-load-area").contents()) != "undefined") {
            if (typeof(getIframeBody()) != "undefined" && typeof(getIframeHtml()) != "undefined") {
                iFrameOffsetHeight = getHeightIframeOffset();
                iFrameScrollHeight = getHeightIframeScroll();
                logger.debug("[1244] - getIFrameHeight: getHeightIframeScroll() " + iFrameScrollHeight + ", getHeightIframeOffset():" + iFrameOffsetHeight);
                iFrameHeightReturn = (iFrameScrollHeight > iFrameOffsetHeight) ? iFrameScrollHeight : iFrameOffsetHeight;
              /*  if (com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().isHelpDesk()) {
                    iFrameHeightReturn += OFFSETIFRAMEHELDESK;
                    if (iFrameHeightReturn < MINHEIGHTIFRAMEHELPDESK) {
                        iFrameHeightReturn = MINHEIGHTIFRAMEHELPDESK
                    }
                }*/
            }
        }
        return iFrameHeightReturn
    };
    var showCentralIframe = function() {
        $("#kyop-central-load-area").show();
        $("#kyop-central-load-area-container").show()
    };
    var isIframeHrefBlank = function(objIframe) {
        try {
            return (objIframe.contentWindow.document.location.href == "about:blank")
        } catch (e) {
            return false
        }
    };
    this.setWidthIframe = function(width) {
        logger.debug("[1244] -setWidthIframe: iframe width=" + $("#kyop-central-load-area").css("width") + " new Width:" + width);
        $("#kyop-central-load-area").css("width", width)
    };
    var hideStrongDivsIntegrations = function() {
        $("#kyop-central-strong-process-area").hide();
        $("#kyop-central-home").hide()
    };
    this.iFrameOnLoad = function(objIframe) {
        $("#kyop-central-load-area").load(function() {
            if ($("#kyop-central-other-level-menus-total-container").is(":visible")) {
                $("#kyop-central-load-area").hide()
            } else {
                $("#kyop-central-load-area").show()
            }
        });
        if (isIframeHrefBlank(objIframe)) {
            logger.debug("[1244] -iFrameOnLoad: iframe=about:blank, no se hace nada")
        } else {
            logger.debug("[1244] -iFrameOnLoad: 1-show del iframe y contenedor kyop-central-load-area-container ,2-resizeMainContect, 3-loadbox.hide");
            hideStrongDivsIntegrations();
            if (com.bbva.kyop.controller.CoreController.getInternetExplorerVersion() == -1) {
                logger.debug("[1244] -iFrameOnLoad: iframe=", objIframe.contentWindow.document.location.href, objIframe)
            }
            if ($("#kyop-central-load-area").attr("style") != "width:100%") {
                logger.debug("[1244] -iFrameOnLoad: Alguien llamo a recalcular antes de cargarse el iframe, por eso actualizamos el style a '', style anterior:" + $("#kyop-central-load-area").attr("style"));
                $("#kyop-central-load-area").attr("style", "width:100%; height:100%")
            }
            showCentralIframe();
            var forceIFrameHeight = getLoadAreaHeight();
            if (forceIFrameHeight == 0 || forceIFrameHeight == undefined) {
                this.resizeMainContent()
            } else {
                this.resizeMainContent(undefined, forceIFrameHeight)
            }
            com.bbva.kyop.util.TimerUtil.setProcessLoaded(true);
            loadBox.hide();
            com.bbva.kyop.util.HistoryBackUtil.pushNewStateToHistory()
        }
        var iFrameHref = objIframe.contentWindow.document.location.href;
        if (iFrameHref.indexOf("tpvpc.sermepa.es") >= 0) {
            this.resizeMainContent(undefined, 3000)
        }
    };
    this.iFrameOnLoadHomeProcess = function() {
        loadBox.hide();
        $("#kyop-central-defaultprocess-load-area").attr("style", "display: block; position: absolute; width: 100%;");
        $("#kyop-central-defaultprocess-load-area").show();
        $("#kyop-central-defaultprocess-load-area-container").show();
        com.bbva.kyop.util.CalculatorSizeElementsUtil.calculateIFrameSize("kyop-central-defaultprocess-load-area", "kyop-central-defaultprocess-load-area-container");
        com.bbva.kyop.util.CalculatorSizeElementsUtil.calculateWidthDivBody();
        com.bbva.kyop.util.TimerUtil.setProcessLoaded(true)
    };
    this.getRandomNumber = function(min, max) {
        return (Math.floor(Math.random() * max) + min)
    };
    this.showDisconnectWindow = function(idLayer) {
        $("#" + idLayer).show()
    };
    this.resizePortal = function() {
        logger.debug("resizePortal: Metodo deprecado")
    };
    this.resizeIFrames = function() {
        logger.debug("resizeIFrames: Metodo deprecado")
    };
    this.getInternetExplorerVersion = function() {
        var rv = -1;
        if (navigator.appName == "Microsoft Internet Explorer") {
            var ua = navigator.userAgent;
            var re = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
            if (re.exec(ua) != null) {
                rv = parseFloat(RegExp.$1)
            }
        }
        return rv
    };
    this.isInternetExplorer = function() {
        var ie = false;
        if (navigator.appName == "Microsoft Internet Explorer") {
            ie = true
        }
        return ie
    };
    this.refreshPortal = function() {
        com.bbva.kyop.controller.CoreController.unbindBodyEvent();
        com.bbva.kyop.controller.CoreController.updateLanguageInBack(function() {
            location.reload()
        })
    };
    this.refreshPortalFromJump = function() {
        com.bbva.kyop.controller.CoreController.unbindBodyEvent();
        com.bbva.kyop.controller.CoreController.refreshPortalFromChangeReference(function() {
            location.reload()
        })
    };
    this.updateLanguageInBack = function(callbackFn) {
        com.bbva.kyop.util.AjaxUtil.setMock(false);
        com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
            url: "refresh/doRefresh.json",
            method: "POST",
            typeRequest: "json",
            abortApp: false,
            callback: function(data) {
                var languageKey = data[0].language;
                var idProducto = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductId();
                logger.info("updateLanguageInBack se ha preguntado si es compass valor producto: " + idProducto);
                if (idProducto == "008" && languageKey == "en") {
                    languageKey = "en_US";
                    logger.info("updateLanguageInBack se ha sobreescrito la cookie de idioma: " + languageKey)
                }
                com.bbva.kyop.controller.CoreController.setCookie("COD_IDIOMISO", languageKey);
                var cookieInicio = com.bbva.kyop.controller.CoreController.getCookie("INICIO");
                var cookiePais = com.bbva.kyop.controller.LanguageController.getCookiPaisFromCookieInicioAndCodIdiomiso(cookieInicio, languageKey);
                com.bbva.kyop.controller.CoreController.setCookie("PAIS", cookiePais);
                callbackFn()
            },
            fallbackFn: function() {
                callbackFn()
            }
        })
    };
    this.refreshPortalFromChangeReference = function(callbackFn) {
        com.bbva.kyop.util.AjaxUtil.setMock(false);
        com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
            url: "refresh/doRefreshChangeReference.json",
            method: "POST",
            typeRequest: "json",
            abortApp: false,
            callback: function(data) {
                var languageKey = data[0].language;
                var idProducto = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductId();
                logger.info("refreshPortalFromChangeReference se ha preguntado si es compass valor producto: " + idProducto);
                if (idProducto == "008" && languageKey == "en") {
                    languageKey = "en_US";
                    logger.info("refreshPortalFromChangeReference se ha sobreescrito la cookie de idioma: " + languageKey)
                }
                com.bbva.kyop.controller.CoreController.setCookie("COD_IDIOMISO", languageKey);
                var cookieInicio = com.bbva.kyop.controller.CoreController.getCookie("INICIO");
                var cookiePais = com.bbva.kyop.controller.LanguageController.getCookiPaisFromCookieInicioAndCodIdiomiso(cookieInicio, languageKey);
                com.bbva.kyop.controller.CoreController.setCookie("PAIS", cookiePais);
                callbackFn()
            },
            fallbackFn: function() {
                callbackFn()
            }
        })
    };
    this.refreshPortalKyop = function() {
        this.refreshPortal()
    };
    this.getCookie = function(cookieName) {
        var start = document.cookie.indexOf(cookieName + "=");
        var len = start + cookieName.length + 1;
        if ((!start) && (cookieName != document.cookie.substring(0, cookieName.length))) {
            return null
        }
        if (start == -1) {
            return null
        }
        var end = document.cookie.indexOf(";", len);
        if (end == -1) {
            end = document.cookie.length
        }
        return unescape(document.cookie.substring(len, end))
    };
    this.setCookie = function(cookieName, cookieValue) {
        var expdate = new Date();
        expdate.setTime(expdate.getTime() + (1000 * 60 * 60 * 24 * 1000));
        document.cookie = cookieName + "=" + escape(cookieValue) + "; expires=" + expdate.toGMTString() + "; path=/"
    };
    this.deleteCookie = function(cookieName) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = com.bbva.kyop.controller.CoreController.getCookie(cookieName);
        if (cval != null) {
            document.cookie = cookieName + "=" + cval + "; expires=" + exp.toGMTString()
        }
    };
    this.getSlice = function(slice, callBackFn) {
        this.getExternalScript(slice.jsPath, callBackFn, null);
        if (slice.cssPath != "") {
            this.getExternalStyleSheet(slice.cssPath, callBackFn, null)
        }
    };
    this.sliceCallbackFn = function(integrationBean) {
        logger.debug("sliceCallbackFn: Metodo deprecado. Se terminó de inyectar el recurso en el id: " + integrationBean.idDivIntegration)
    };
    this.calculateFooterPositionForHome = function() {
        logger.debug("calculateFooterPositionForHome: Metodo deprecado.")
    };
    this.alertsMessagesCallbackFn = function(integrationBean) {
        logger.info("Se terminó la integración del módulo de mensajes y alertas")
    };
    this.managerCallbackFn = function(integrationBean) {
        logger.info("Se terminó la integración del módulo de mi gestor")
    };
    this.sliceCaller = function(slice, integrationBean) {
        var strToEvaluate = slice.integrationClass + ".initIntegration(integrationBean);";
        var t = setTimeout(function() {
            try {
                eval(strToEvaluate)
            } catch (err) {
                logger.error("** Error al integrar el módulo: " + strToEvaluate + "**");
                logger.error(err);
                logger.error("** Fin de la traza **")
            }
        }, 5)
    };
    this.getExternalResources = function(jsPath, cssPath, callBackFn, fallBackFn) {
        $.get(jsPath, undefined, function(dataJs) {
            logger.debug("jsPath:" + jsPath);
            $.globalEval(dataJs);
            com.bbva.kyop.util.ResourcesLoaderUtil.addJStoArray(jsPath);
            com.bbva.kyop.util.ResourcesLoaderUtil.loadCSS(cssPath);
            if (callBackFn != null && callBackFn != "") {
                callBackFn()
            }
        }, "text").fail(function(err) {
            logger.warn("No existe el fichero .js en la ruta: " + jsPath);
            logger.warn(err);
            if (fallBackFn != null && fallBackFn != "") {
                fallBackFn(err)
            } else {
                com.bbva.kyop.controller.CoreController.showUnavailableServiceMsg()
            }
        })
    };
    this.getExternalScript = function(jsPath, callBackFn, fallBackFn) {
        $.get(jsPath, undefined, function() {
            com.bbva.kyop.util.ResourcesLoaderUtil.loadJS(jsPath, callBackFn)
        }, "text").fail(function(err) {
            logger.warn("No existe el fichero .js en la ruta: " + jsPath);
            logger.warn(err);
            if (fallBackFn != null && fallBackFn != "") {
                fallBackFn(err)
            } else {
                com.bbva.kyop.controller.CoreController.showUnavailableServiceMsg()
            }
        })
    };
    this.getExternalStyleSheet = function(cssPath, callBackFn, fallBackFn) {
        $.get(cssPath, undefined, function() {
            com.bbva.kyop.util.ResourcesLoaderUtil.loadCSS(cssPath)
        }, "text").fail(function(err) {
            logger.warn("No existe el fichero .css en la ruta: " + cssPath);
            logger.warn(err);
            if (fallBackFn != null && fallBackFn != "") {
                fallBackFn(err)
            } else {
                com.bbva.kyop.controller.CoreController.showUnavailableServiceMsg()
            }
        })
    };
    this.sliceIntegration = function(integrationBean, integrationFunction) {
        try {
            integrationFunction()
        } catch (err) {
            logger.error("** Error al integrar la pieza con id: " + integrationBean.idDivIntegration + "**");
            logger.error(err);
            logger.error("** Fin de la traza **")
        }
    };
    this.proceedToIntegrate = function(slice, integrationBean) {
        if (slice.jsPath == "kyop") {
            com.bbva.kyop.controller.CoreController.sliceIntegration(integrationBean, function() {
                com.bbva.kyop.controller.CoreController.sliceCaller(slice, integrationBean)
            })
        } else {
            this.getSlice(slice, function() {
                com.bbva.kyop.controller.CoreController.sliceIntegration(integrationBean, function() {
                    com.bbva.kyop.controller.CoreController.sliceCaller(slice, integrationBean)
                })
            })
        }
    };
    this.checkIntegration = function(slice, key) {
        var jsPath = slice.jsPath;
        var integrate = false;
        if (jsPath == "") {
            com.bbva.kyop.util.ActiveElementsBean.put(key, false)
        } else {
            com.bbva.kyop.util.ActiveElementsBean.put(key, true);
            integrate = true
        }
        return integrate
    };
    this.goToHome = function() {
        com.bbva.kyop.controller.ReverseCallerController.reverseCallerByMenuInfo("OPCION_RELACIONADA", "es_ES#03#home", "S", "S")
    };
    this.showUnavailableServiceMsg = function() {
        com.bbva.kyop.util.MessageBoxUtil.showMessageBoxError(com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.service.not.avaible.title"), com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.service.not.avaible.subtitle"), 88, function() {
            com.bbva.kyop.controller.CoreController.goToHome()
        })
    };
    this.resizeHomeContent = function() {
        logger.debug("resizeHomeContent: Metodo deprecado.")
    };
    var addParametersIfIsGlobalNetcash = function(integrationBean, params) {
        if (com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().isGlobalNetCash()) {
            integrationBean.id_sesion_ast = params.idSessionAst;
            integrationBean.cod_canal = params.codChannel;
            integrationBean.cod_ban_int = params.codInternalBank;
            integrationBean.iv_user = params.ivUser
        }
    };
    this.createIntegrationBean = function(params) {
        var integrationBean = {
            callbackFn: params.callbackFn,
            idDivIntegration: params.idDivIntegration,
            pb_cod_prod: params.idProduct,
            xtiTipoProd: params.productType,
            pb_cod_serv: params.idService,
            pb_cod_proc: params.idProcess,
            LOCALE: params.locale,
            pb_cod_ffecha: params.dateFormat,
            pb_cod_fimporte: params.priceFormat,
            pb_husohora: params.timeZone,
            pb_xti_comprper: params.checkPrivileges,
            pb_url: params.pubUrl,
            pb_segmento: params.segment,
            cod_emp: params.idCompany,
            pb_isPortalKyop: params.isPortalKyop
        };
        addParametersIfIsGlobalNetcash(integrationBean, params);
        return integrationBean
    };
    var resetIframeHeight = function() {
        $("#kyop-central-load-area").height(0)
    };
    this.resizeMainContent = function(offsetHeightIFrame, forceHeightIFrame, resetHeightIFrameBeforePriorTheCalculation) {
        if (typeof(resetHeightIFrameBeforePriorTheCalculation) != "undefined" && resetHeightIFrameBeforePriorTheCalculation) {
            resetIframeHeight()
        }
        var iFrameHeight = getIFrameHeight();
        var contenedor = $("#kyop-container-body").height() - $(".kyop-footer-info-container-wrapper").outerHeight(true) - $(".migas").outerHeight(true) - 10;
        if (iFrameHeight < contenedor) {
            iFrameHeight = contenedor
        }
        if (typeof(offsetHeightIFrame) != "undefined") {
            iFrameHeight = iFrameHeight + offsetHeightIFrame
        }
        if (typeof(forceHeightIFrame) != "undefined") {
            iFrameHeight = forceHeightIFrame;
            logger.debug("[1244] -resizeMainContent: forceHeightIframe=" + forceHeightIFrame)
        } else {
            com.bbva.kyop.controller.CoreController.resetLoadAreaHeight()
        }
        logger.debug("[1244] -resizeMainContent: iframe se establece el alto=" + iFrameHeight);
        $("#kyop-central-load-area").attr("style", "display: block; position: relative; height: " + iFrameHeight + "px; width: 100%;")
    };
    this.resetIFrameSize = function() {
        logger.debug("resetIFrameSize: Metodo deprecado")
    };
    this.unbindBodyEvent = function() {
        isSupported = false
    };
    this.changePortalTitle = function() {
        var titleText = "";
        var disconnectTitle = com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.window.title.disconnect");
        this.titleProcess = setInterval(function() {
            titleText = document.title;
            document.title = disconnectTitle;
            disconnectTitle = titleText
        }, 500)
    };
    this.launchPortalTitleProcess = function() {
        this.showChromeNotification();
        this.changePortalTitle()
    };
    this.stopPortalTitleProcess = function() {
        clearInterval(this.titleProcess);
        var idProduct = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductId();
        if (idProduct == "211") {
            document.title = "BBVA net advance"
        } else {
            if (idProduct == "210") {
                document.title = "BBVA Finet"
            } else {
                document.title = "BBVA net cash"
            }
        }
        com.bbva.kyop.controller.CoreController.closeChromeNotification()
    };
    this.showChromeNotification = function() {
        if (window.webkitNotifications != undefined) {
            var havePermission = window.webkitNotifications.checkPermission();
            if (havePermission == 0) {
                var idProduct = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductId();
                var tabTitle = "BBVA net cash";
                if (idProduct == "211") {
                    tabTitle = "BBVA net advance"
                } else {
                    if (idProduct == "210") {
                        tabTitle = "BBVA Finet"
                    }
                }
                this.chromeNotification = window.webkitNotifications.createNotification("./resources/images/logoBBVA1.png", tabTitle, com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.window.alert.disconnect"));
                this.chromeNotification.onclick = function() {
                    window.focus();
                    com.bbva.kyop.controller.CoreController.closeChromeNotification()
                };
                this.chromeNotification.show()
            }
        }
    };
    this.requestNotificationPermission = function() {
        if (window.webkitNotifications != undefined) {
            var havePermission = window.webkitNotifications.checkPermission();
            if (havePermission != 0) {
                window.webkitNotifications.requestPermission()
            }
        }
    };
    this.closeChromeNotification = function() {
        if (this.chromeNotification != undefined) {
            this.chromeNotification.cancel()
        }
    };
    this.setLastAccessIp = function() {
        com.bbva.kyop.util.AjaxUtil.setMock(false);
        com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
            url: "user/setLastAccess.json",
            urlMock: "mock/core/setLastAccessIp.json",
            method: "POST",
            typeRequest: "json",
            abortApp: false,
            callback: function(data) {
                logger.info("**** Establecimiento de IP del usuario ****")
            },
            fallbackFn: function(data) {
                logger.warn("**** Establecimiento de IP FALLIDO ****")
            }
        })
    };
    this.registerLogin = function() {
        var idProduct = com.bbva.kyop.bean.UserBean.getUserInformation().getProductId();
        var page = window.location.href;
        var language = com.bbva.kyop.bean.UserBean.getRegionalInformation().getLanguage();
        var country = com.bbva.kyop.bean.UserBean.getRegionalInformation().getCodIso();
        if (!com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().isHelpDesk()) {
            com.bbva.kyop.component.ActivityRegister.initLogin(idProduct, page, language, country)
        }
    };
    this.setHeaderClick = function(headerClick) {
        this.headerClick = headerClick
    };
    this.getHeaderClick = function() {
        return this.headerClick
    };
    this.controlTooltipsArrows = function() {
        if (!com.bbva.kyop.controller.CoreController.getHeaderClick()) {
            com.bbva.kyop.controller.MenuController.foldTooltipsArrows()
        }
        com.bbva.kyop.controller.CoreController.setHeaderClick(false)
    };
    this.getIntegrationParameter = function() {
        var queryStringParams = this.getQueryStringFromUrl();
        var integrationParam = queryStringParams.integration;
        return integrationParam
    };
    this.getHelpDeskLatamActivatedParameter = function() {
        var queryStringParams = this.getQueryStringFromUrl();
        var integrationParam = queryStringParams.latamhd;
        return integrationParam
    };
    this.getExecutionPlanParameter = function() {
        var queryStringParams = this.getQueryStringFromUrl();
        var planParam = queryStringParams.plan;
        return planParam
    };
    this.getQueryStringFromUrl = function() {
        var qsParm = new Array();
        var query = window.location.search.substring(1);
        var parms = query.split("&");
        for (var i = 0; i < parms.length; i++) {
            var pos = parms[i].indexOf("=");
            if (pos > 0) {
                var key = parms[i].substring(0, pos);
                var val = parms[i].substring(pos + 1);
                qsParm[key] = val
            }
        }
        return qsParm
    };
    this.getUrlWithoutDomain = function(url) {
        var domain = document.location.hostname;
        if (domain == "localhost") {
            domain = "grupobbva.es.igrupobbva"
        }
        var initPosition = domain.length + 8;
        var finalPosition = url.length;
        return url.substring(initPosition, finalPosition)
    };
    this.createPortalEvents = function() {
        $(window).resize(function() {
            com.bbva.kyop.controller.CoreController.resizePortal();
            com.bbva.kyop.controller.CoreController.resizeHomeContent();
            com.bbva.kyop.util.RwdUtil.addClassesRwdToBody();
            com.bbva.kyop.util.RwdUtil.setMarginTopToKyopBody();
            com.bbva.kyop.controller.ProcessHelpController.resizeHelpIfIsNotHidden();
            com.bbva.kyop.controller.CampaignController.resizeCampaignIfIsNotHidden();
            com.bbva.kyop.util.LightBoxUtil.resizeIfExistContainerLightBox();
            com.bbva.kyop.util.MessageBoxUtil.resizeIfExistContainerMessageBox()
        });
        this.getLastNodeHtmlClicked = function() {
            return this.lastNodeHtmlClicked
        };
        this.setLastNodeHtmlClicked = function(lastNodeHtmlClicked) {
            this.lastNodeHtmlClicked = lastNodeHtmlClicked
        };
        $("body").click(function() {
            com.bbva.kyop.controller.CoreController.requestNotificationPermission()
        });
        $(".kyop-control-click").click(function(e) {
            com.bbva.kyop.controller.CoreController.setHeaderClick(true)
        });
        $(".kyop-control-click-empty").click(function(e) {
            com.bbva.kyop.controller.CoreController.setHeaderClick(false)
        });
        $(window).bind("keypress keydown keyup", function(e) {
            if (e.which === 116) {
                isSupported = false
            }
            if (e.which === 82 && e.ctrlKey) {
                isSupported = false
            }
        })
    };
    this.isIndexLocal = function() {
        var isIndexLocal = false;
        var indexLocal = "index-local.html";
        var pathName = location.pathname;
        var pathNameSplitList = pathName.split("/");
        var indexType = pathNameSplitList[pathNameSplitList.length - 1];
        if (indexType == indexLocal) {
            isIndexLocal = true
        }
        return isIndexLocal
    };
    this.getPortalPath = function() {
        var domain = document.location.hostname;
        var utilResource = "external/utilPortalKyop.js";
        var pathName = location.pathname;
        var pathNameSplitList = pathName.split("/");
        var urlPath = "";
        $.each(pathNameSplitList, function(index, item) {
            if (index != (pathNameSplitList.length - 1)) {
                urlPath = urlPath + item + "/"
            }
        });
        var urlAction = "https://" + domain + urlPath + utilResource;
        if (domain == "localhost") {
            domain = document.location.host;
            urlAction = "http://" + domain + urlPath + utilResource
        }
        return urlAction
    };
    this.foldPortalFrames = function() {
        $("#kyop-central-defaultprocess-load-area").hide();
        $("#kyop-central-defaultprocess-load-area-container").hide()
    };
    this.buildSession = function(callbackFn) {
        com.bbva.kyop.util.AjaxUtil.setMock(false);
        com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
            url: "session/sessionPing.json",
            urlMock: "mock/core/changeLanguage.json",
            method: "POST",
            typeRequest: "json",
            abortApp: false,
            callback: function(data) {
                if (callbackFn != null && callbackFn != "") {
                    callbackFn(data)
                }
            }
        })
    };
    this.getCurrentProcess = function() {
        return $("#kyop-cod-process").val()
    };
    this.getCurrentDescriptionProcess = function() {
        return $("#kyop-cod-process").attr("description")
    };
    this.getCurrentService = function() {
        return $("#kyop-cod-service").val()
    };
    var cookieName = "CODIGO_PRODUCTO";
    var start = document.cookie.indexOf(cookieName + "=");
    var len = start + cookieName.length + 1;
    var end = document.cookie.indexOf(";", len);
    if (end == -1) {
        end = document.cookie.length
    }
    var producto = unescape(document.cookie.substring(len, end));
    if (producto == "405" || producto == "414" || producto == "211" || producto == "415" || producto == "201") {
        this.getMasterRequest = function(callbackFn) {
            com.bbva.kyop.util.AjaxUtil.setMock(false);
            com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
                url: "master/getMasterRequest.json",
                urlMock: "mock/core/error.json",
                method: "POST",
                typeRequest: "json",
                abortApp: true,
                loginRedirectOnError: true,
                callback: function(data) {
                    if (callbackFn != null && callbackFn != "") {
                        callbackFn(data)
                    }
                }
            })
        }
    } else {
        var descargados = 0;
        var datos = new Object();
        this.descarga = function(callbackFn) {
            descargados++;
            if (descargados == 4) {
                var getMasterRequest = new Array();
                getMasterRequest.push(datos);
                callbackFn(getMasterRequest)
            }
        };
        this.getMasterRequest = function(callbackFn) {
            com.bbva.kyop.util.AjaxUtil.setMock(false);
            var explorerMinor = false;
            if (navigator.appName.indexOf("Internet Explorer") != -1) {
                var badBrowser = (navigator.appVersion.indexOf("MSIE 9") == -1 && navigator.appVersion.indexOf("MSIE 1") == -1);
                if (badBrowser) {
                    explorerMinor = true
                }
            }
           /* com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
                url: "master/getUserInfo.json",
                urlMock: "mock/core/error.json",
                method: "POST",
                typeRequest: "json",
                abortApp: true,
                loginRedirectOnError: true,
                async: false,
                callback: function(data) {
                    datos.userDto = data[0].userDto;
                    com.bbva.kyop.controller.CoreController.descarga(callbackFn)
                }
            });*/
            var user = datos.userDto[0].userInformation.userId;
            var product = datos.userDto[0].userInformation.idProduct;
            var reference = datos.userDto[0].companyInformation.companyId;
            var language = datos.userDto[0].regionalInformation.language;
            var key = "_" + product + "_" + reference + "_" + user + "_" + language;
            com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
                url: "master/getMenusInfo.json",
                urlMock: "mock/core/error.json",
                method: "POST",
                typeRequest: "json",
                abortApp: true,
                loginRedirectOnError: true,
                callback: function(data) {
                    datos.leftMenus = data[0].leftMenus;
                    datos.headerFirstLevelMenus = data[0].headerFirstLevelMenus;
                    datos.headerSecondLevelMenus = data[0].headerSecondLevelMenus;
                    datos.activeFirstLevelButtons = data[0].activeFirstLevelButtons;
                    datos.footerMenus = data[0].footerMenus;
                    com.bbva.kyop.controller.CoreController.descarga(callbackFn)
                }
            });
            com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
                url: "master/getUserConfiguration.json",
                urlMock: "mock/core/error.json",
                method: "POST",
                typeRequest: "json",
                abortApp: true,
                loginRedirectOnError: true,
                callback: function(data) {
                    datos.activeCampaigns = data[0].activeCampaigns;
                    datos.frequentlySectionVisited = data[0].frequentlySectionVisited;
                    datos.unitedConfiguration = data[0].unitedConfiguration;
                    datos.countries = data[0].countries;
                    datos.productForHelpDesk = data[0].productForHelpDesk;
                    datos.processesReverseCaller = data[0].processesReverseCaller;
                    com.bbva.kyop.controller.CoreController.descarga(callbackFn)
                }
            });
            if (false && localStorage.getItem("getTranslations" + key)) {
                datos.translations = JSON.parse(localStorage.getItem("getTranslations" + key))[0].translations;
                com.bbva.kyop.controller.CoreController.descarga(callbackFn)
            } else {
                com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
                    url: "master/getTranslations.json",
                    urlMock: "mock/core/error.json",
                    method: "POST",
                    typeRequest: "json",
                    abortApp: true,
                    loginRedirectOnError: true,
                    callback: function(data) {
                        if (false) {
                            localStorage.setItem("getTranslations" + key, JSON.stringify(data))
                        }
                        datos.translations = data[0].translations;
                        com.bbva.kyop.controller.CoreController.descarga(callbackFn)
                    }
                })
            }
        }
    }
    this.loadPortalPictures = function() {
        var disconnectImg = $("#kyop-disconnect-button-img").attr("asrc");
        $("#kyop-disconnect-button-img").attr("src", disconnectImg);
        var homeImg = $("#kyop-home-img").attr("asrc");
        $("#kyop-home-img").attr("src", homeImg);
        var isNetCash = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().isNetCash();
        if (isNetCash) {
            var searchImg = $("#kyop-favorite-search-img").attr("asrc");
            $("#kyop-favorite-search-img").attr("src", searchImg)
        }
    };
    this.getVirtualHost = function() {
        var pathName = location.pathname;
        var pathNameSplitList = pathName.split("/");
        var domain = document.location.hostname;
        var virtualHost = "kyop_mult_web_kyoppresentation_01";
        var virtualStaticPath = pathNameSplitList[2];
        var virtualStaticPathSplitList = virtualStaticPath.split("_");
        if (domain != "localhost") {
            virtualHost = "";
            $.each(virtualStaticPathSplitList, function(index, item) {
                if (index != (virtualStaticPathSplitList.length - 1)) {
                    virtualHost = virtualHost + item + "_"
                }
            });
            virtualHost = virtualHost + "kyoppresentation_01"
        }
        return virtualHost
    };
    this.showRelocatedAccounts = function() {
        var idProduct = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductId();
        var locale = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getLocale();
        com.bbva.kyop.controller.ReverseCallerController.callByProcess("89990387", "BV000", "N", "N")
    };
    this.removeRelocateAccountsMessage = function() {
        $("#kyop-office-segment").remove()
    };
    this.testWhat = function() {
        if (window.opener) {
            alert("inside a pop-up window or target=_blank window")
        } else {
            if (window.top !== window.self) {
                alert("inside an iframe")
            } else {
                alert("this is a top level window")
            }
        }
    };
    this.testPopup = function() {
        alert(location.href);
        window.open(location.href, "", "toolbar=no,width=500")
    };
    this.redirectParent = function() {
        window.opener.location.href = location.href;
        self.close()
    };
    this.showGenericError = function() {
        com.bbva.kyop.controller.ReverseCallerController.executeUrlFromReverseCaller("external/genericError.html")
    }
};
com.bbva.kyop.controller.CampaignController = new function() {
    this.timeOutCampaign = 7000;
    var g = -1000;
    var a = [];
    var j = -1;
    var e = null;
    var l = false;
    var d = false;
    var k = false;
    var h = true;
    var b = "kyop-campaign-form";
    this.getActiveCampaigns = function(m) {
        com.bbva.kyop.util.AjaxUtil.setMock(false);
        com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
            url: "campaign/getActiveProductCampaigns.json",
            urlMock: "mock/core/getActiveProductCampaigns.json",
            method: "POST",
            typeRequest: "json",
            abortApp: false,
            showMessageError: false,
            callback: function(n) {
                if (m != null && m != "") {
                    m(n)
                }
            },
            fallbackFn: function(n) {
                logger.error("**No se han podido obtener las campañas.");
                if (m != null && m != "") {
                    m(n)
                }
            }
        })
    };
    this.loadActiveCampaigns = function(n) {
        var m = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
        if (!m.test(navigator.userAgent)) {
            a = n;
            if (a.length > 0) {
                $("#kyop-container-body").hide()
            }
            com.bbva.kyop.controller.CampaignController.showNextCampaign()
        } else {
            deletePositions = [];
            a = n;
            $(a).each(function(o) {
                if (a[o] != undefined) {
                    if (a[o].activeMovi == "S") {
                        a[o].url = a[o].movilidadUrl
                    } else {
                        deletePositions.push(o)
                    }
                }
            });
            for (i = 0; i < deletePositions.length; i++) {
                a.splice(deletePositions[i], 1)
            }
            $("#kyop-campaigns-lightbox-internal-container-body").css("overflow-y", "scroll");
            $("#kyop-campaigns-lightbox-internal-container-body").css("-webkit-overflow-scrolling", "touch");
            $("#kyop-campaigns-lightbox-internal-container-body").css("margin-top", "5px");
            $("#kyop-campaigns-lightbox-internal-container-footer-copyright").css("margin-top", "10px");
            $(".barraDegradadaCabecera").remove();
            $(".logo").css("top", "0px");
            $(".logo").css("left", "0px");
            $("#kyop-campaigns-lightbox-internal-container-header	").css("height", "35px");
            if (a.length > 0) {
                $("#kyop-container-body").hide()
            }
            com.bbva.kyop.controller.CampaignController.showNextCampaign()
        }
    };
    this.showNextCampaign = function() {
        logger.info("**DPPCAMPAIGN Voy a mostrar siguiente campania ");
        if (h == false) {
            return
        }
        var m = this.getNextCampaign();
        e = m;
        logger.info("**DPPCAMPAIGN La camapina es ");
        logger.info(e);
        if (m != null) {
            $("#kyop-campaigns-lightbox-counter-div").text((j + 1) + " " + com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.common.of") + " " + a.length);
            logger.info("**DPPCAMPAIGN Relleno el formulario ");
            this.setActualKyopPortalInfoIntoRequestForm();
            logger.info("**DPPCAMPAIGN Actualizo la url con  " + m.url);
            this.updateRequestActionUrlIntoForm(m.url);
            com.bbva.kyop.util.CampaignLightBoxUtil.loadCampaignLightBoxKyop("kyop-campaigns-lightbox-container-div", "kyop-campaigns-lightbox-iframe-div", {
                idRequestForm: b
            });
            h = true;
            k = true;
            if (g != -1000) {
                clearInterval(g)
            }
        } else {
            if (g != -1000) {
                clearInterval(g)
            }
            com.bbva.kyop.util.CampaignLightBoxUtil.closeCampaignLightBoxKyop("kyop-campaigns-lightbox-container-div");
            k = false;
            com.bbva.kyop.controller.DataProcessingController.showPortal()
        }
        if (k) {
            g = setInterval(function() {
                com.bbva.kyop.controller.CampaignController.showNextCampaign()
            }, com.bbva.kyop.controller.CampaignController.timeOutCampaign)
        }
    };
    this.getNextCampaign = function() {
        j++;
        return a[j]
    };
    this.notifyCampaignLoaded = function() {
        h = false;
        com.bbva.kyop.controller.CampaignController.registerUserCampaigns()
    };
    this.notifyCampaignFinished = function() {
        h = true;
        com.bbva.kyop.controller.CampaignController.showNextCampaign()
    };
    this.forceExitAllCampaigns = function(m) {
        h = false;
        k = false;
        clearInterval(g);
        com.bbva.kyop.util.CampaignLightBoxUtil.closeCampaignLightBoxKyop("kyop-campaigns-lightbox-container-div");
        if (m == true) {
            com.bbva.kyop.util.SessionUtil.portalLogout()
        } else {
            com.bbva.kyop.controller.DataProcessingController.showPortal()
        }
    };
    this.getActiveCampaignInfo = function() {
        return e
    };
    this.registerUserCampaigns = function() {
        if (typeof(this.getActiveCampaignInfo()) != "undefined") {
            var m = this.getActiveCampaignInfo().codCampaign;
            com.bbva.kyop.util.AjaxUtil.setMock(false);
            com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
                url: "campaign/registerUserCampaigns.json",
                urlMock: "mock/core/registerUserCampaigns.json",
                method: "POST",
                typeRequest: "json",
                abortApp: false,
                showMessageError: false,
                params: {
                    campaignCode: m
                },
                callback: function() {}
            })
        } else {
            logger.warn("No se ha podido recuperar this.getActiveCampaignInfo()")
        }
    };
    this.setActualKyopPortalInfoIntoRequestForm = function() {
        var x = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getLocale();
        $("#kyop-campaign-locale").val(x);
        var o = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getDateFormat();
        $("#kyop-campaign-date-format").val(o);
        var y = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getPriceFormat();
        $("#kyop-campaign-price-format").val(y);
        var z = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getTimeZone();
        $("#kyop-campaign-time-zone").val(z);
        var r = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().getProductType();
        $("#kyop-campaign-product-type").val(r);
        var s = com.bbva.kyop.util.SessionUtil.getUser().getCompanyInformation().getSegmentId();
        $("#kyop-campaign-segment").val(s);
        var n = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductId();
        $("#kyop-campaign-cod-product").val(n);
        var v = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getUserId();
        $("#kyop-campaign-id-user").val(v);
        var w = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getUserName();
        $("#kyop-campaign-name-user").val(w);
        var q = com.bbva.kyop.util.SessionUtil.getUser().getCompanyInformation().getCompanyId();
        $("#kyop-campaign-cod-reference").val(q);
        var p = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().isReferenciaMonousuario();
        $("#kyop-campaign-is-mono-reference").val(p);
        var u = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().isReferenciaLite();
        $("#kyop-campaign-is-lite-reference").val(u);
        var t = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().isReferenciaAvanzada();
        $("#kyop-campaign-is-advanced-reference").val(t);
        var A = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().isReferenciaMigradaDePibeeAPnm();
        $("#kyop-campaign-is-pnm-reference-migrated").val(A);
        var m = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().isReferenciaCreadaEnPnm();
        $("#kyop-campaign-is-pnm-reference-created").val(m)
    };
    this.updateRequestActionUrlIntoForm = function(m) {
        var n = m + "?locale=" + com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getLocale();
        if (m.indexOf("token-nativa") >= 0) {
            n += "&telefono=" + this.getTelefonoOfuscado(com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getTelefono())
        }
        $("#" + b).attr("action", n)
    };
    this.getTelefonoOfuscado = function(n) {
        var m = "";
        if (n != null) {
            var o = n.length;
            var p = n.substring(0, 4);
            var q = n.substring(o - 2);
            m = p;
            for (i = p.length; i < o - 2; i++) {
                m += "x"
            }
            m += q;
            logger.info("telefono =" + m)
        }
        return m
    };
    this.notifyResize = function(m) {
        com.bbva.kyop.util.CampaignLightBoxUtil.adjustToContentSize(m)
    };
    var f = function() {
        return $("#kyop-campaigns-lightbox-internal-container-div").length == 0 || $("#kyop-campaigns-lightbox-internal-container-div").is(":hidden")
    };
    this.resizeCampaignIfIsNotHidden = function() {
        if (!f()) {
            com.bbva.kyop.util.CampaignLightBoxUtil.setStylesToLightBox()
        }
    };
    this.notificarFinalizacionCampania = function(m) {
        com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
            url: "campaign/registerTitularCampaignResult.json",
            method: "POST",
            typeRequest: "json",
            abortApp: false,
            params: {
                aceptado: m,
                codCampania: this.getActiveCampaignInfo().codCampaign
            },
            callback: function(n) {
                com.bbva.kyop.controller.CampaignController.registerUserCampaigns();
                com.bbva.kyop.controller.CampaignController.notifyCampaignFinished()
            }
        })
    }
};
com.bbva.kyop.controller.ReverseCallerController = new function() {
    this.urlCaller = function(d, a) {
        var b = "";
        if (a == "") {
            b = "es_ES"
        }
        com.bbva.kyop.controller.ReverseCallerController.executeUrlFromReverseCaller(d)
    };
    this.reverseCaller = function(d, o, f, p, g, m, a, k, l, q, n) {
        var r = null;
        var h = false;
        if (m == "S") {
            h = true
        }
        if (l != null) {
            com.bbva.kyop.bean.ProcessBean.setExtraParams(l)
        }
        if (q != undefined) {
            try {
                var b = jQuery.parseJSON(q);
                com.bbva.kyop.bean.ProcessBean.setActivityRegisterParams(b)
            } catch (j) {
                com.bbva.kyop.bean.ProcessBean.setUrlOverride(q)
            }
        }
        if (n != undefined) {
            var b = jQuery.parseJSON(n);
            if (typeof(b) == "object" && b != null) {
                com.bbva.kyop.bean.ProcessBean.setActivityRegisterParams(b)
            }
        }
        if (!p || p == "") {
            p = "es_ES"
        }
        if (d == "INICIO" || d == "BIENVENIDA") {
            com.bbva.kyop.controller.MenuController.selectMenuOption("kyop-li-menuOption-home", "kyop-div-children-container-home", false, "home", h)
        }
        if (d == "SERVICIO_ESPECIFICO") {
            com.bbva.kyop.controller.ProcessController.getMenuByService(o, f, function(v) {
                if (v != undefined && v.idMenu != undefined && v.idMenu != "") {
                    var s = v.idMenu;
                    var t = com.bbva.kyop.util.MenuUtil.getMenu(s, false);
                    if (t == undefined) {
                        v.view = "01";
                        v.level = "1";
                        com.bbva.kyop.util.MenuUtil.setMenu(s, v);
                        t = com.bbva.kyop.util.MenuUtil.getMenu(s, false)
                    }
                    var x = t.view;
                    if (g == "S") {
                        com.bbva.kyop.controller.ReverseCallerController.selectMenuOptionFromReverseCaller(s, x, g, h)
                    } else {
                        com.bbva.kyop.controller.MenuController.selectMenuOption(s, h)
                    }
                } else {
                    var z = com.bbva.kyop.controller.ProcessController.getRedirecciones();
                    var u = null;
                    var e = null;
                    for (var w = 0; w < z.length; w++) {
                        var y = z[w];
                        if (y.oldProcess.service == o && y.oldProcess.process == f) {
                            u = y.newProcess.service;
                            e = y.newProcess.process
                        } else {
                            if (y.newProcess.service == o && y.newProcess.process == f) {
                                u = y.oldProcess.service;
                                e = y.oldProcess.process
                            }
                        }
                    }
                    if (u) {
                        com.bbva.kyop.controller.ProcessController.getMenuByService(u, e, function(B) {
                            if (B != undefined && B.idMenu != undefined && B.idMenu != "") {
                                var C = B.idMenu;
                                var D = com.bbva.kyop.util.MenuUtil.getMenu(C, false);
                                if (D == undefined) {
                                    B.view = "01";
                                    B.level = "1";
                                    com.bbva.kyop.util.MenuUtil.setMenu(C, B);
                                    D = com.bbva.kyop.util.MenuUtil.getMenu(C, false)
                                }
                                var A = D.view;
                                if (g == "S") {
                                    com.bbva.kyop.controller.ReverseCallerController.selectMenuOptionFromReverseCaller(C, A, g, h)
                                } else {
                                    com.bbva.kyop.controller.MenuController.selectMenuOption(C, h)
                                }
                            } else {
                                logger.warn("El usuario no tiene perfilado el servicio especificado");
                                com.bbva.kyop.util.MessageBoxUtil.showMessageBoxAlert(com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.i.rvsInvk.ntCsh.service"), com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.service.not.purchased.1") + " " + com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.service.not.purchased.2") + " " + com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.service.not.purchased.3") + " ", function() {})
                            }
                        })
                    } else {
                        logger.warn("El usuario no tiene perfilado el servicio especificado");
                        com.bbva.kyop.util.MessageBoxUtil.showMessageBoxAlert(com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.i.rvsInvk.ntCsh.service"), com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.service.not.purchased.1") + " " + com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.service.not.purchased.2") + " " + com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.service.not.purchased.3") + " ", function() {})
                    }
                }
            })
        }
    };
    this.reverseCallerByMenuInfo = function(e, d, f, h) {
        var g = false;
        if (h == "S") {
            g = true
        }
        var b = d.split("#");
        var k = b[0];
        var j = b[1];
        var a = b[2];
        if (e == "OPCION_RELACIONADA") {
            if (a == "home") {
                com.bbva.kyop.controller.MenuController.selectMenuOption("kyop-li-menuOption-home", "kyop-div-children-container-home", false, "home", h)
            } else {
                com.bbva.kyop.controller.ReverseCallerController.selectMenuOptionFromReverseCaller(a, j, f, g)
            }
        }
    };
    this.selectMenuOptionFromReverseCaller = function(g, b, f, e, d) {
        if (e != undefined) {
            var a = jQuery.parseJSON(e);
            if (typeof(a) == "object") {
                com.bbva.kyop.bean.ProcessBean.setActivityRegisterParams(a);
                var h = com.bbva.kyop.util.MenuUtil.getMenu(g);
                if (b == "01") {
                    com.bbva.kyop.controller.ReverseCallerController.selectFirstHeaderOptionFromReverseCaller(h, f)
                } else {
                    if (b == "02") {
                        com.bbva.kyop.controller.ReverseCallerController.selectSecondHeaderOptionFromReverseCaller(h, e)
                    } else {
                        if (b == "03") {
                            com.bbva.kyop.controller.ReverseCallerController.selectLeftMenuOptionFromReverseCaller(h, f)
                        } else {
                            if (b == "04") {
                                logger.debug("Pie no aplica")
                            }
                        }
                    }
                }
            } else {
                if (d != undefined) {
                    var a = jQuery.parseJSON(d);
                    if (typeof(a) == "object") {
                        com.bbva.kyop.bean.ProcessBean.setActivityRegisterParams(a)
                    }
                }
                var h = com.bbva.kyop.util.MenuUtil.getMenu(g);
                if (b == "01") {
                    com.bbva.kyop.controller.ReverseCallerController.selectFirstHeaderOptionFromReverseCaller(h, f, e)
                } else {
                    if (b == "02") {
                        com.bbva.kyop.controller.ReverseCallerController.selectSecondHeaderOptionFromReverseCaller(h, e, e)
                    } else {
                        if (b == "03") {
                            com.bbva.kyop.controller.ReverseCallerController.selectLeftMenuOptionFromReverseCaller(h, f, e)
                        } else {
                            if (b == "04") {
                                logger.debug("Pie no aplica")
                            }
                        }
                    }
                }
            }
        }
    };
    this.selectLeftMenuOptionFromReverseCaller = function(f, g, k) {
        var b = f.idMenu;
        var h = f.level;
        var j = f.terminal;
        if (j) {
            if (g == "N") {
                com.bbva.kyop.controller.MenuController.selectMenuOption(b, k)
            } else {
                var l = null;
                if (h == 2) {
                    e = com.bbva.kyop.controller.MenuController.getFatherMenu(f);
                    l = e.idMenu
                }
                if (h == 3) {
                    var d = com.bbva.kyop.controller.MenuController.getFatherMenu(f);
                    var e = com.bbva.kyop.controller.MenuController.getFatherMenu(d);
                    l = e.idMenu
                }
                if (h == 4) {
                    var a = com.bbva.kyop.controller.MenuController.getFatherMenu(f);
                    var d = com.bbva.kyop.controller.MenuController.getFatherMenu(a);
                    var e = com.bbva.kyop.controller.MenuController.getFatherMenu(d);
                    l = e.idMenu
                }
                if (h == 5) {
                    var m = com.bbva.kyop.controller.MenuController.getFatherMenu(f);
                    var a = com.bbva.kyop.controller.MenuController.getFatherMenu(m);
                    var d = com.bbva.kyop.controller.MenuController.getFatherMenu(a);
                    var e = com.bbva.kyop.controller.MenuController.getFatherMenu(d);
                    l = e.idMenu
                }
                if (h != 1) {
                    com.bbva.kyop.controller.MenuController.selectMenuOption("kyop-li-menuOption-" + l, "kyop-div-children-container-" + l, false, l, k)
                }
                com.bbva.kyop.controller.MenuController.selectMenuOption(b, k)
            }
        } else {
            if (h == 1) {
                if (g == "N") {
                    logger.debug("Ha seleccionado una opción NO TERMINAL y usted NO QUIERE ACTUALIZAR los menús \n Por lo tanto no se despliegan")
                } else {
                    com.bbva.kyop.controller.MenuController.selectMenuOption("kyop-li-menuOption-" + b, "kyop-div-children-container-" + b, j, b, k)
                }
            }
            if (h == 2) {
                e = com.bbva.kyop.controller.MenuController.getFatherMenu(f);
                var l = e.idMenu;
                if (g == "N") {
                    logger.debug("Ha seleccionado una opción NO TERMINAL y usted NO QUIERE ACTUALIZAR los menús \n Por lo tanto no se despliegan")
                } else {
                    com.bbva.kyop.controller.MenuController.selectMenuOption("kyop-li-menuOption-" + l, "kyop-div-children-container-" + l, false, l, k)
                }
                com.bbva.kyop.controller.MenuController.selectMenuOption(b, k)
            }
            if (h == 3) {
                var d = com.bbva.kyop.controller.MenuController.getFatherMenu(f);
                var e = com.bbva.kyop.controller.MenuController.getFatherMenu(d);
                var l = e.idMenu;
                if (g == "N") {
                    logger.debug("Ha seleccionado una opción NO TERMINAL y usted NO QUIERE ACTUALIZAR los menús \n Por lo tanto no se despliega el menú lateral")
                } else {
                    com.bbva.kyop.controller.MenuController.selectMenuOption("kyop-li-menuOption-" + l, "kyop-div-children-container-" + l, false, l, k)
                }
                com.bbva.kyop.controller.MenuController.selectMenuOption(d.idMenu, k)
            }
            if (h == 4) {
                var a = com.bbva.kyop.controller.MenuController.getFatherMenu(f);
                var d = com.bbva.kyop.controller.MenuController.getFatherMenu(a);
                var e = com.bbva.kyop.controller.MenuController.getFatherMenu(d);
                var l = e.idMenu;
                if (g == "N") {
                    logger.debug("Ha seleccionado una opción NO TERMINAL y usted NO QUIERE ACTUALIZAR los menús \n Por lo tanto no se despliega el menú lateral")
                } else {
                    com.bbva.kyop.controller.MenuController.selectMenuOption("kyop-li-menuOption-" + l, "kyop-div-children-container-" + l, false, l, k)
                }
                com.bbva.kyop.controller.MenuController.selectMenuOption(d.idMenu, k)
            }
        }
    };
    this.selectFirstHeaderOptionFromReverseCaller = function(f, e, d) {
        var b = f.terminal;
        var g = f.level;
        if (!b && e == "N") {
            logger.debug("Ha seleccionado una opción NO TERMINAL y usted NO QUIERE ACTUALIZAR los menús \n Por lo tanto no se despliegan")
        } else {
            if (b) {
                logger.debug("Ha seleccionado ACTUALIZAR MENÚ en una opción terminal de la cabecera.\nPor lo tanto no se despliega el tooltip");
                com.bbva.kyop.controller.MenuController.launchProcessFromHeaderButton(f.idMenu, d)
            } else {
                if (g == 1) {
                    com.bbva.kyop.controller.MenuController.controlHeaderButton("kyop-header-tooltip-" + f.idMenu)
                } else {
                    if (g == 2) {
                        com.bbva.kyop.controller.MenuController.controlHeaderButton("kyop-header-tooltip-" + f.idFather)
                    } else {
                        var a = com.bbva.kyop.util.MenuUtil.getMenu(f.idFather);
                        com.bbva.kyop.controller.MenuController.controlHeaderButton("kyop-header-tooltip-" + a.idFather)
                    }
                }
            }
        }
    };
    this.selectSecondHeaderOptionFromReverseCaller = function(d, b, a) {};
    this.executeProcessFromReverseCaller = function(e) {
        com.bbva.kyop.controller.MenuController.foldTooltipsArrows();
        var d = e.processes;
        if (d.length > 0) {
            var b = e.processes[0];
            var a = b.helpUrl;
            com.bbva.kyop.controller.MenuController.setHelpUrl(a);
            logger.info("Se ejecuta el proceso: " + b.idProcess);
            logger.debug("Proceso a ejecutar:");
            logger.debug(b);
            com.bbva.kyop.controller.ProcessController.proceedToLaunchProcess(b, e.idMenu)
        } else {
            logger.info("Error en el menú, no existe proceso asociado")
        }
    };
    this.executeUrlFromReverseCaller = function(a) {
        loadBox.show();
        if ($("#isInformationalArchitecture").val() != null) {
            if (a.indexOf("?") == -1) {
                a = a.trim() + "?isInformationalArchitecture=" + $("#isInformationalArchitecture").val() + " "
            } else {
                if (a.trim().slice(-1) == "?") {
                    a = a.trim() + "isInformationalArchitecture=" + $("#isInformationalArchitecture").val() + " "
                } else {
                    a = a.trim() + "&isInformationalArchitecture=" + $("#isInformationalArchitecture").val() + " "
                }
            }
        }
        $("#kyop-central-load-area").attr("src", a);
        com.bbva.kyop.controller.MenuController.foldTooltipsArrows();
        com.bbva.kyop.controller.MenuController.foldCentralArea();
        $("#kyop-central-load-area").show();
        $("#kyop-central-load-area-container").show()
    };
    this.launchProcessByIdFromReverseCaller = function(d, b, a) {
        com.bbva.kyop.controller.ProcessController.getProcessById(d, b, function(e, f) {
            f.breadcrumbText = e;
            if (a) {
                $("[id^=kyop-opcionMenuHija_m_]").removeClass("kyop-li-child-selected");
                com.bbva.kyop.controller.MenuController.hideMenu()
            }
            com.bbva.kyop.controller.ProcessController.proceedToLaunchProcess(f)
        })
    };
    this.getReverseCallerMap = function(a, b) {
        com.bbva.kyop.util.AjaxUtil.setMock(false);
        com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
            url: "process/getProcessesReverseCaller.json",
            urlMock: "mock/getReverseCallerMap." + a + ".json",
            method: "POST",
            typeRequest: "json",
            abortApp: false,
            callback: function(d) {
                if (b != null && b != "") {
                    b(d)
                }
            },
            fallbackFn: function(d) {
                if (b != null && b != "") {
                    b(d)
                }
            }
        })
    };
    this.loadReverseCallerMap = function(d) {
        var b = "";
        var a = "";
        $.each(d, function(e, f) {
            b = f.idReverseCaller;
            a = f;
            com.bbva.kyop.util.ReverseCallerMapUtil.set(b, a)
        })
    };
    this.callByProcess = function(d, e, b, a) {
        this.launchProcessByIdFromReverseCaller(d, b, a)
    };
    this.callByUrl = function(b, a) {
        com.bbva.kyop.controller.ReverseCallerController.urlCaller(b, a)
    };
    this.callByExtraParams = function(b, j, d, k, e, h, a, f, g) {
        com.bbva.kyop.controller.ReverseCallerController.reverseCaller(b, j, d, k, e, h, a, f, g)
    };
    this.callReverseCaller = function(b, h, d, j, e, g, a, f, k) {
        com.bbva.kyop.controller.ReverseCallerController.reverseCaller(b, h, d, j, e, g, a, f, null, k)
    };
    this.callByMenuInfo = function(e, d, b, a) {
        com.bbva.kyop.controller.ReverseCallerController.reverseCallerByMenuInfo(e, d, b, a)
    };
    this.callByIdReverseCaller = function(h, j, k, e, g, b, f, l) {
        var a = com.bbva.kyop.util.ReverseCallerMapUtil.get(j);
        if (a != null) {
            var d = a.idProcess;
            com.bbva.kyop.controller.ReverseCallerController.reverseCaller("SERVICIO_ESPECIFICO", h, d, k, e, g, b, f, null, l)
        } else {
            logger.warn("El id del invocador no existe")
        }
    }
};
com.bbva.kyop.controller.BreadcrumbController = new function() {
    var b = null;
    var a = function() {
        var g = "";
        var e = "";
        var d = "";
        var f = null;
        this.setText = function(h) {
            this.text = h
        };
        this.getText = function() {
            return this.text
        };
        this.setIdMenu = function(h) {
            this.idMenu = h
        };
        this.getIdMenu = function() {
            return this.idMenu
        };
        this.setMenuOption = function(h) {
            this.menuOption = h
        };
        this.getMenuOption = function() {
            return this.menuOption
        };
        this.setMenu = function(h) {
            this.menu = h
        };
        this.getMenu = function() {
            return this.menu
        }
    };
    this.initBreadcrumb = function() {
        var f = new Array();
        f.push(this.createBreadcrumbHomeItem());
        this.setBreadcrumb(f);
        var e = {
            breadcrumb: f
        };
        var d = {
            isNetCash: com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().isNetCash(),
            isAssessEnabled: com.bbva.kyop.util.SessionUtil.getConfiguration().getOpinator().getEnableOpinator(),
            isActiveHelpEnabled: com.bbva.kyop.util.SessionUtil.getConfiguration().getActiveHelpEnabled()
        };
        com.bbva.kyop.controller.MenuController.setMenuInPortal(e, "#kyop-breadcrumb-tmpl", "#kyop-breadcrumb-container");
        com.bbva.kyop.controller.MenuController.setMenuInPortal(d, "#kyop-breadcrumb-options-tmpl", "#kyop-breadcrumbs-options");
        this.disableAssessForm()
    };
    this.updateBreadcrumbWithoutMenu = function(d) {
        logger.debug("*** Se actualiza Rastro de Migas de un proceso sin menú***");
        var e = new Array();
        e.push(this.createBreadcrumbHomeItem());
        e.push(this.createBreadcrumbProcessItem(d));
        this.setBreadcrumb(e);
        this.setBreadcrumbTemplate(e);
        this.disableAssessForm()
    };
    this.updateBreadcrumb = function(e) {
        logger.debug("*** Se actualiza Rastro de Migas ***");
        var l = new Array();
        if (e == "home") {
            l.push(this.createBreadcrumbHomeItem())
        } else {
            if (e == "reverseCaller") {
                l.push(this.createBreadcrumbHomeItem());
                var j = new a();
                j.setText("Invocador Inverso");
                j.setIdMenu("reverseCaller");
                j.setMenu(null);
                l.push(j)
            } else {
                if (e == "selectCompany") {
                    l.push(this.createBreadcrumbHomeItem());
                    var j = new a();
                    j.setText(com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.helpdesk.select.company"));
                    j.setIdMenu("selectCompany");
                    j.setMenu(null);
                    l.push(j)
                } else {
                    if (e == "help") {
                        l.push(this.createBreadcrumbHomeItem());
                        var j = new a();
                        j.setText(com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.i.help"));
                        j.setIdMenu("help");
                        j.setMenu(null);
                        l.push(j)
                    } else {
                        if (e == "administrateFavorites") {
                            l.push(this.createBreadcrumbHomeItem());
                            var j = new a();
                            j.setText(com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.i.fav.administration"));
                            j.setIdMenu("administrateFavorites");
                            j.setMenu(null);
                            l.push(j)
                        } else {
                            var l = new Array();
                            l.push(this.createBreadcrumbHomeItem());
                            if (com.bbva.kyop.util.MenuUtil.keyExists(e)) {
                                var h = com.bbva.kyop.util.MenuUtil.getMenu(e);
                                var m = h.view;
                                if (m == "02") {
                                    var j = new a();
                                    l.push(this.createBreadcrumbItem(h));
                                    this.setBreadcrumb(l)
                                } else {
                                    if (m == "03" || m == "01") {
                                        var k = h.level;
                                        if (k == 1) {
                                            l.push(this.createBreadcrumbItem(h))
                                        } else {
                                            if (k == 2) {
                                                var g = com.bbva.kyop.controller.MenuController.getFatherMenu(h);
                                                l.push(this.createBreadcrumbItem(g));
                                                l.push(this.createBreadcrumbItem(h))
                                            } else {
                                                if (k == 3) {
                                                    var f = com.bbva.kyop.controller.MenuController.getFatherMenu(h);
                                                    var g = com.bbva.kyop.controller.MenuController.getFatherMenu(f);
                                                    l.push(this.createBreadcrumbItem(g));
                                                    l.push(this.createBreadcrumbItem(f));
                                                    l.push(this.createBreadcrumbItem(h))
                                                } else {
                                                    if (k == 4) {
                                                        var d = com.bbva.kyop.controller.MenuController.getFatherMenu(h);
                                                        var f = com.bbva.kyop.controller.MenuController.getFatherMenu(d);
                                                        var g = com.bbva.kyop.controller.MenuController.getFatherMenu(f);
                                                        l.push(this.createBreadcrumbItem(g));
                                                        l.push(this.createBreadcrumbItem(f));
                                                        l.push(this.createBreadcrumbItem(d));
                                                        l.push(this.createBreadcrumbItem(h))
                                                    } else {
                                                        if (k == 5) {
                                                            var n = com.bbva.kyop.controller.MenuController.getFatherMenu(h);
                                                            var d = com.bbva.kyop.controller.MenuController.getFatherMenu(n);
                                                            var f = com.bbva.kyop.controller.MenuController.getFatherMenu(d);
                                                            var g = com.bbva.kyop.controller.MenuController.getFatherMenu(f);
                                                            l.push(this.createBreadcrumbItem(g));
                                                            l.push(this.createBreadcrumbItem(f));
                                                            l.push(this.createBreadcrumbItem(d));
                                                            l.push(this.createBreadcrumbItem(n));
                                                            l.push(this.createBreadcrumbItem(h))
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            this.setBreadcrumb(l)
                        }
                    }
                }
            }
        }
        this.setBreadcrumbTemplate(l);
        com.bbva.kyop.util.RwdUtil.setMarginTopToKyopBody();
        this.disableAssessForm()
    };
    this.updateBreadcrumbAuxReference = function(e) {
        logger.debug("*** Se actualiza Rastro de Migas ***");
        var f = new Array();
        f.push(this.createBreadcrumbHomeItem());
        var d = new a();
        d.setText(e);
        d.setIdMenu("auxReferenceFavorite");
        d.setMenu(null);
        f.push(d);
        this.setBreadcrumbTemplate(f);
        com.bbva.kyop.util.RwdUtil.setMarginTopToKyopBody();
        this.disableAssessForm()
    };
    this.updatePersonalizedBreadcrumb = function(f) {
        var d = com.bbva.kyop.controller.BreadcrumbController.getBreadcrumb();
        if (d.length > 1 && d[1].menu != null && d[1].menu != undefined) {
            d[1].menu.personalizedBreadcrumb = true;
            var e = new a();
            e.setText(f);
            e.setIdMenu("PSB" + $.trim(f));
            e.setMenu(null);
            d.push(e);
            this.setBreadcrumb(d);
            this.setBreadcrumbTemplate(d)
        } else {
            logger.error("El tipo de rastro de migas no es posible personalizar")
        }
        this.disableAssessForm()
    };
    this.resetPersonalizedBreadcrumb = function() {
        var d = com.bbva.kyop.controller.BreadcrumbController.getBreadcrumb();
        if (d.length > 1 && d[1].menu != null && d[1].menu != undefined) {
            var e = new Array();
            d[1].menu.personalizedBreadcrumb = false;
            e.push(d[0]);
            e.push(d[1]);
            this.setBreadcrumb(e);
            this.setBreadcrumbTemplate(e)
        } else {
            logger.error("El tipo de rastro de migas no es posible resetear")
        }
        this.disableAssessForm()
    };
    this.setBreadcrumb = function(d) {
        this.breadcrumb = d
    };
    this.getBreadcrumb = function() {
        return this.breadcrumb
    };
    this.createBreadcrumbItem = function(e) {
        var d = new a();
        d.setText(com.bbva.kyop.util.I18nUtil.getText(e.codI18nShort));
        d.setIdMenu(e.idMenu);
        d.setMenuOption("es_ES#" + e.view + "#" + e.idMenu);
        d.setMenu(e);
        return d
    };
    this.createBreadcrumbHomeItem = function() {
        var d = new a();
        d.setText(com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.i.menu.front"));
        d.setIdMenu("home");
        d.setMenuOption("es_ES#03#home");
        d.setMenu(null);
        return d
    };
    this.createBreadcrumbProcessItem = function(e) {
        var d = new a();
        d.setText(e);
        d.setIdMenu(null);
        d.setMenuOption(null);
        d.setMenu(null);
        return d
    };
    this.setBreadcrumbTemplate = function(f) {
        $("#kyop-breadcrumb-container").empty();
        $("#kyop-breadcrumbs-options").empty();
        var e = {
            breadcrumb: f
        };
        var d = {
            isNetCash: com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().isNetCash(),
            isAssessEnabled: com.bbva.kyop.util.SessionUtil.getConfiguration().getOpinator().getEnableOpinator(),
            isActiveHelpEnabled: com.bbva.kyop.util.SessionUtil.getConfiguration().getActiveHelpEnabled()
        };
        com.bbva.kyop.controller.MenuController.setMenuInPortal(e, "#kyop-breadcrumb-tmpl", "#kyop-breadcrumb-container");
        com.bbva.kyop.controller.MenuController.setMenuInPortal(d, "#kyop-breadcrumb-options-tmpl", "#kyop-breadcrumbs-options")
    };
    this.disableAssessForm = function() {
        var d = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductMainId();
        if (d == "210" || d == "211") {
            $("#kyop-assess-netcash").hide()
        }
    }
};
com.bbva.kyop.controller.HelpDeskController = new function() {
    var b;
    this.onclickTextoGusano = function(p, o) {
        if (o == 1) {
            document.getElementById("paso0").style.display = "none";
            document.getElementById("paso1").style.display = "none";
            document.getElementById("paso2").style.display = "none";
            document.getElementById("paso3").style.display = "none";
            document.getElementById("paso4").style.display = "none";
            document.getElementById("paso5").style.display = "none"
        } else {
            document.getElementById("paso0").style.display = "none";
            document.getElementById("paso1").style.display = "none";
            document.getElementById("paso2").style.display = "none";
            document.getElementById("paso3").style.display = "none";
            document.getElementById("paso4").style.display = "none";
            document.getElementById("paso5").style.display = "none";
            document.getElementById("paso" + p).style.display = "Block"
        }
    };
    this.asignarEstadoGusano = function(p, o) {
        var q = "";
        var s = o;
        s++;
        var x = "";
        var t = "";
        var r = "";
        var v = "";
        var w = "";
        var u = "";
        if (p == 0 && o == 0) {
            x = "./resources/images/principalOk2.png";
            t = "completo"
        } else {
            if (o > 0 && p == 0 && o < 5) {
                x = "./resources/images/secundarioIncompleto.png";
                t = "incompleto"
            } else {
                if (o == 0 && p != 0) {
                    x = "./resources/images/principalOkVerde.png";
                    t = "completo"
                } else {
                    if (p > 0 && o < 5 && p == o) {
                        x = "./resources/images/secundarioOk2VerdeIzq.png";
                        t = "completo"
                    } else {
                        if (p > 0 && o < 5 && p > o) {
                            x = "./resources/images/secundario2_OkVerdeCompleto.png";
                            t = "completo"
                        } else {
                            if (p > 0 && o < 5 && p < o) {
                                x = "./resources/images/secundarioIncompleto.png";
                                t = "incompleto"
                            } else {
                                if (p == 5) {
                                    x = "./resources/images/finalOkVerde.png";
                                    t = "completo"
                                } else {
                                    if (p != 5 && o == 5) {
                                        x = "./resources/images/finalIncompleto.png";
                                        t = "incompleto"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (o == 0) {
            r = '<strong>1</strong> <a href="#">Pre-migración </a>';
            v = "<strong>1</strong> Pre-migración";
            w = '<spam style="float:left!important;text-align:left!important;">Se ha creado la referencia BBVA net cash,</br>pero la referencia no está preparada para iniciar el proceso de migración.</spam>';
            u = "izquierda";
            alineacion = "right"
        } else {
            if (o == 1) {
                r = '<strong>2</strong> <a href="#">Lista para migrar </a>';
                v = "<strong>2</strong> Lista para migrar";
                w = '<spam style="float:left!important;text-align:left!important;">La referencia net office está marcada para migrar,</br>pero no se ha iniciado el proceso de activación de la referencia.</spam>';
                u = "izquierda";
                alineacion = "center"
            } else {
                if (o == 2) {
                    r = '<strong>3</strong> <a href="#">Iniciada la activación</a>';
                    v = "<strong>3</strong> Iniciada la activación";
                    w = '<spam style="float:left!important;text-align:left!important;">El cliente ha realizado un login en net office,</br>ha entrado en el proceso de activación pero no ha finalizado dicho proceso.</spam>';
                    u = "centro";
                    alineacion = "center"
                } else {
                    if (o == 3) {
                        r = '<strong>4</strong> <a href="#">Finalizada la activación</a>';
                        v = "<strong>4</strong> Finalizada la activación";
                        w = '<spam style="float:left!important;text-align:left!important;">Se ha finalizado correctamente el proceso de activación,</br>pero no se ha realizado login en BBVA net cash.</spam>';
                        u = "centro";
                        alineacion = "center"
                    } else {
                        if (o == 4) {
                            r = '<strong>5</strong> <a href="#">Login BBVA net cash</a>';
                            v = "<strong>5</strong> Login BBVA net cash";
                            w = '<spam style="float:left!important;text-align:left!important;">Se ha realizado login en BBVA net cash.</spam>';
                            u = "derecha";
                            alineacion = "center"
                        } else {
                            if (o == 5) {
                                r = '<strong>6</strong> <a href="#">Realiza operaciones</a>';
                                v = "<strong>6</strong> Realiza operaciones";
                                w = '<spam style="float:left!important;text-align:left!important;">Se ha registrado una firma de una orden dentro de BBVA net cash.</spam>';
                                alineacion = "left"
                            }
                        }
                    }
                }
            }
        }
        q = '<div class="progreso secundario ' + t + '">';
        q += '	<li class="sinIcono">';
        q += '<div class=""><a href="#">';
        q += '<div class="doTranslate" align="center" onclick="com.bbva.kyop.controller.HelpDeskController.onclickTextoGusano(' + o + ',0);">' + r + "</div>";
        q += "</a></div>";
        q += '<img src="' + x + '" align="' + alineacion + '"></img>';
        if (o == 5 || o == 0) {
            q += '<div class="tooltipBoton bordeAzulArriba" id="paso' + o + '" style="display: none;"><div class="left"><h3 class="darker marginBottom5">' + v + '</h3></div><div class="right"><a class="jqAspaCerrarTooltipValidacion"><img alt="cerrar tooltip de validaciones" onclick="com.bbva.kyop.controller.HelpDeskController.onclickTextoGusano(0,1);" class="" id="" name="" onerror="" src="/SESKYGU/kygu_mult_web_pub/images/cerrarPequenia.png" style="cursor:pointer; cursor:hand"></a></div><div class="clearAll" id=""></div>' + w + '<div class="clearAll" id=""></div></div>'
        } else {
            q += '<div class="tooltipBoton bordeAzulArriba" id="paso' + o + '" style="display: none; margin-top: -190px !important;"><div class="left"><h3 class="darker marginBottom5">' + v + '</h3></div><div class="right"><a class="jqAspaCerrarTooltipValidacion"><img alt="cerrar tooltip de validaciones" onclick="com.bbva.kyop.controller.HelpDeskController.onclickTextoGusano(0,1);" class="" id="" name="" onerror="" src="/SESKYGU/kygu_mult_web_pub/images/cerrarPequenia.png" style="cursor:pointer; cursor:hand"></a></div><div class="clearAll" id=""></div>' + w + '<div class="clearAll" id=""></div></div>'
        }
        q += "</li>";
        q += "</div>";
        return q
    };
    this.funcionGusanoStepProgreso = function(o) {
        var q = "";
        var p = "";
        p += ' <div class="dropDown ">';
        p += ' <ul class="">';
        q = this.asignarEstadoGusano(o, 0);
        p += q;
        q = this.asignarEstadoGusano(o, 1);
        p += q;
        q = this.asignarEstadoGusano(o, 2);
        p += q;
        q = this.asignarEstadoGusano(o, 3);
        p += q;
        q = this.asignarEstadoGusano(o, 4);
        p += q;
        q = this.asignarEstadoGusano(o, 5);
        p += q;
        document.getElementById("containerGusano").innerHTML = p;
        p += "</ul>";
        p += "</div>"
    };
    this.getCompaniesLatamList = function() {
        return this.companiesLatamList
    };
    this.setCompaniesLatamList = function(o) {
        this.companiesLatamList = o
    };
    this.getCompanies = function() {};
    this.setReferenceCode = function(o) {
        $("#kyop-reference-code").html(com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.i.common.ref") + " " + o)
    };
    this.clearReferenceCode = function() {
        var o = com.bbva.kyop.bean.UserBean.getUserInformation().getProductId();
        if (o == "700") {
            $("#kyop-reference-code").html("")
        }
    };
    this.setProductInformation = function(p, v, q, o) {
        var u = p.companyStatus;
        if (v != "ERROR") {
            var t = com.bbva.kyop.util.SessionUtil.getUser().getCompanyInformation().getCompanyName();
            if (u == "PREBAJA" || u == "CIERRE_TEMPORAL" || u == "BAJA") {
                if (u == "BAJA") {
                    com.bbva.kyop.util.SessionUtil.getUser().getHelpDeskInformation().setCompanyDocumentType(p.companyDocumentType);
                    com.bbva.kyop.util.SessionUtil.getUser().getHelpDeskInformation().setCompanyDocumentNumber(p.companyDocumentNumber);
                    com.bbva.kyop.util.SessionUtil.getUser().getHelpDeskInformation().setCompanyLastAccessDate(p.companyLastAccessDate);
                    com.bbva.kyop.util.SessionUtil.getUser().getHelpDeskInformation().setCompanyClousureDate(p.companyClousureDate)
                }
                var r = document.getElementById("estado" + u).getAttribute("placeholder");
                document.getElementById("textoEstado").innerHTML = r;
                $("#alertaEstado").show();
                $("#mensajeEstadoOk").hide()
            }
            com.bbva.kyop.util.SessionUtil.getUser().getHelpDeskInformation().setIdProduct(p.idProduct);
            com.bbva.kyop.util.SessionUtil.getUser().getHelpDeskInformation().setInternalBank(p.internalBank);
            com.bbva.kyop.util.SessionUtil.getUser().getHelpDeskInformation().setProductBank(p.productBank);
            com.bbva.kyop.util.SessionUtil.getUser().getHelpDeskInformation().setChannel(p.channel);
            com.bbva.kyop.util.SessionUtil.getUser().getHelpDeskInformation().setServiceProduct(p.serviceProduct);
            com.bbva.kyop.util.SessionUtil.getUser().getHelpDeskInformation().setServiceSubProduct(p.serviceSubProduct);
            com.bbva.kyop.util.SessionUtil.getUser().getHelpDeskInformation().setIdCompany(v);
            com.bbva.kyop.util.SessionUtil.getUser().getHelpDeskInformation().setProductDescription(q);
            com.bbva.kyop.util.SessionUtil.getUser().getHelpDeskInformation().setCompanyName(p.companyName);
            com.bbva.kyop.util.SessionUtil.getUser().getHelpDeskInformation().setIdSessionAst(p.idSessionAst);
            com.bbva.kyop.util.SessionUtil.getUser().getHelpDeskInformation().setMigratedCompany(p.isMigratedCompany);
            com.bbva.kyop.util.SessionUtil.getUser().getHelpDeskInformation().setCompanyCif(p.companyIdentification);
            com.bbva.kyop.util.SessionUtil.getUser().getHelpDeskInformation().setCompanyStatus(u);
            com.bbva.kyop.util.SessionUtil.getUser().getHelpDeskInformation().setBossCompany(p.isBossCompany);
            logger.debug(com.bbva.kyop.util.SessionUtil.getUser().getHelpDeskInformation());
            if (o) {
                this.generateHelpDeskFormValues(com.bbva.kyop.util.SessionUtil.getUser().getHelpDeskInformation());
                this.setProductInformationToForm(com.bbva.kyop.util.SessionUtil.getUser().getHelpDeskInformation())
            } else {
                var s = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().getIdNetCashProduct();
                com.bbva.kyop.util.SessionUtil.getUser().getHelpDeskInformation().setIdProduct(s);
                this.generateHelpDeskFormValues(com.bbva.kyop.util.SessionUtil.getUser().getHelpDeskInformation())
            }
        } else {
            u = "ERROR";
            var r = document.getElementById("estado" + u).getAttribute("placeholder");
            document.getElementById("textoEstado").innerHTML = r;
            $("#alertaEstado").show();
            $("#mensajeEstadoOk").hide()
        }
    };
    this.checkReferenceCode = function() {
        var p = $("#kyop-helpdesk-select-company-input").val();
        p = p.replace(/[^0123456789]/g, "");
        var o = p.length;
        if (o.lenght != 8) {
            p = p.substring(0, 8)
        }
        $("#kyop-helpdesk-select-company-input").val(p)
    };
    this.selectHelpDeskCompany = function() {
        $("#mensajeEstadoOk").hide();
        var t = $("#kyop-helpdesk-select-company-input").val();
        if (t == "") {
            com.bbva.kyop.controller.HelpDeskController.clearReferenceCode();
            com.bbva.kyop.controller.HelpDeskController.resetProductInformationForm();
            var q = document.getElementById("estadoERROR").getAttribute("placeholder");
            document.getElementById("textoEstado").innerHTML = q;
            $("#mensajeEstadoOk").hide();
            $("#alertaEstado").show()
        } else {
            var p = $("#kyop-helpdesk-selectcompany-combo").val();
            var r = p.split("#");
            var s = r[0];
            var o = r[1];
            com.bbva.kyop.util.AjaxUtil.setMock(false);
            com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
                url: "helpDesk/setCompanyForHelpDesk.json",
                urlMock: "mock/core/setCompanyForHelpDesk.json",
                method: "POST",
                typeRequest: "json",
                abortApp: false,
                params: {
                    idProduct: s,
                    idCompany: t
                },
                callback: function(w) {
                    logger.debug("*** PRODUCT INFO HELP DESK ***");
                    logger.debug(w);
                    if (w != null) {
                        var u = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().isLatam();
                        if (u) {
                            if (null != w[0].companyStatus && !w[0].companyStatus.match("^ERROR")) {
                                if (w[0].companyStatus != "PENDIENTE_REACTIVACION" && w[0].companyStatus != "BAJA" && w[0].companyStatus != "PREBAJA" && w[0].companyStatus != "CIERRE_TEMPORAL") {
                                    com.bbva.kyop.controller.HelpDeskController.setProductInformation(w[0], t, o, true)
                                }
                                if (w[0].companyStatus != "BAJA" && w[0].companyStatus != "PREBAJA" && w[0].companyStatus != "CIERRE_TEMPORAL") {
                                    com.bbva.kyop.controller.HelpDeskController.setReferenceCode(t);
                                    $("#mensajeEstadoOk").show()
                                } else {
                                    if (w[0].companyStatus == "PENDIENTE_REACTIVACION") {
                                        var v = e(w[0]);
                                        document.getElementById("textoEstado").innerHTML = v;
                                        $("#mensajeEstadoOk").hide();
                                        $("#alertaEstado").show()
                                    }
                                    com.bbva.kyop.controller.HelpDeskController.clearReferenceCode()
                                }
                            } else {
                                com.bbva.kyop.controller.HelpDeskController.clearReferenceCode();
                                com.bbva.kyop.controller.HelpDeskController.resetProductInformationForm();
                                var v = e(w[0]);
                                document.getElementById("textoEstado").innerHTML = v;
                                $("#mensajeEstadoOk").hide();
                                $("#alertaEstado").show()
                            }
                        } else {
                            if (null != w[0].companyStatus && !w[0].companyStatus.match("^ERROR")) {
                                com.bbva.kyop.controller.HelpDeskController.setProductInformation(w[0], t, o, true);
                                if (w[0].numNivelDeReferencia != null && w[0].numNivelDeReferencia >= 0) {
                                    com.bbva.kyop.controller.HelpDeskController.funcionGusanoStepProgreso(w[0].numNivelDeReferencia);
                                    if (w[0].dispositivosAsignados != null && w[0].dispositivosAsignados > 0) {
                                        document.getElementById("tipoReferenciaTextoDatos").innerHTML = "<p><br><b>Migración BBVA net office </b></br></br><b>Tipo de empresa migrada: </b>Operativa</p> </br>"
                                    } else {
                                        if (w[0].dispositivosAsignados != null && w[0].dispositivosAsignados == 0) {
                                            document.getElementById("tipoReferenciaTextoDatos").innerHTML = "<p><br><b>Migración BBVA net office </b></br></br><b>Tipo de empresa migrada: </b>Consultiva</p> </br>"
                                        }
                                    }
                                } else {
                                    document.getElementById("containerGusano").innerHTML = "";
                                    document.getElementById("tipoReferenciaTextoDatos").innerHTML = ""
                                }
                                if (w[0].companyStatus != "BAJA" && w[0].companyStatus != "PREBAJA" && w[0].companyStatus != "CIERRE_TEMPORAL") {
                                    com.bbva.kyop.controller.HelpDeskController.setReferenceCode(t);
                                    $("#mensajeEstadoOk").show()
                                } else {
                                    com.bbva.kyop.controller.HelpDeskController.clearReferenceCode()
                                }
                            } else {
                                document.getElementById("containerGusano").innerHTML = "";
                                document.getElementById("tipoReferenciaTextoDatos").innerHTML = "";
                                com.bbva.kyop.controller.HelpDeskController.clearReferenceCode();
                                com.bbva.kyop.controller.HelpDeskController.resetProductInformationForm();
                                var v = e(w[0]);
                                document.getElementById("textoEstado").innerHTML = v;
                                $("#mensajeEstadoOk").hide();
                                $("#alertaEstado").show()
                            }
                        }
                    } else {
                        if (u) {
                            document.getElementById("containerGusano").innerHTML = "";
                            document.getElementById("tipoReferenciaTextoDatos").innerHTML = ""
                        }
                        com.bbva.kyop.controller.HelpDeskController.clearReferenceCode();
                        com.bbva.kyop.controller.HelpDeskController.resetProductInformationForm();
                        var v = document.getElementById("estadoERROR").getAttribute("placeholder");
                        document.getElementById("textoEstado").innerHTML = v;
                        $("#mensajeEstadoOk").hide();
                        $("#alertaEstado").show()
                    }
                }
            })
        }
    };
    var e = function(o) {
        var q = "estadoERROR";
        if (null != o && null != o.companyStatus && o.companyStatus.match("^ERROR")) {
            q = "estado" + o.companyStatus
        }
        if (null != o && null != o.companyStatus && o.companyStatus.match("REACTIVACION")) {
            q = "estado" + o.companyStatus
        }
        if ($("#" + q).size() == 0) {
            q = "estadoERROR"
        }
        var p = document.getElementById(q).getAttribute("placeholder");
        return p
    };
    this.getProductsForHelpDesk = function(o) {
        com.bbva.kyop.util.AjaxUtil.setMock(false);
        com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
            url: "helpDesk/getProductsForHelpDesk.json",
            urlMock: "mock/core/getProductsForHelpDesk.json",
            method: "POST",
            typeRequest: "json",
            abortApp: false,
            callback: function(p) {
                if (o != null && o != "") {
                    o(p)
                }
            }
        })
    };
    this.setProductInformationToForm = function(q) {
        $("#kyop-helpdesk-company-information-idproduct").val(q.getIdProduct());
        $("#kyop-helpdesk-company-information-idcompany").val(q.getIdCompany());
        $("#kyop-helpdesk-company-information-channel").val(q.getChannel());
        $("#kyop-helpdesk-company-information-product").val(q.getProductDescription());
        $("#kyop-helpdesk-company-information-company").val(q.getCompanyName());
        $("#kyop-helpdesk-company-information-internalbank").val(q.getInternalBank());
        var s = document.getElementById("traduEstado" + q.getCompanyStatus()).getAttribute("placeholder");
        $("#kyop-helpdesk-company-information-company-status").val(s);
        if (q.isMigratedCompany()) {
            var r = document.getElementById("migradaSI").getAttribute("placeholder")
        } else {
            var r = document.getElementById("migradaNO").getAttribute("placeholder")
        }
        $("#kyop-helpdesk-company-information-migrated").val(r);
        if (q.getCompanyStatus() == "BAJA") {
            $("#deletedCompanyData").show();
            $("#kyop-helpdesk-company-information-date-lastAccess").val(q.getCompanyLastAccessDate());
            $("#kyop-helpdesk-company-information-date-clousure").val(q.getCompanyClousureDate());
            var p = document.getElementById("traduDocumento" + q.getCompanyDocumentType()).getAttribute("placeholder");
            $("#kyop-helpdesk-company-information-document-type").val(p);
            $("#kyop-helpdesk-company-information-document").val(q.getCompanyDocumentNumber())
        }
        if (q.isBossCompany()) {
            var o = document.getElementById("bossSI").placeholder
        } else {
            var o = document.getElementById("bossNO").placeholder
        }
        $("#kyop-helpdesk-company-information-boss").val(o)
    };
    this.resetProductInformationForm = function() {
        $("#kyop-helpdesk-company-information-idproduct").val("");
        $("#kyop-helpdesk-company-information-idcompany").val("");
        $("#kyop-helpdesk-company-information-channel").val("");
        $("#kyop-helpdesk-company-information-product").val("");
        $("#kyop-helpdesk-company-information-company").val("");
        $("#kyop-helpdesk-company-information-internalbank").val("");
        $("#kyop-helpdesk-company-information-migrated").val("");
        $("#kyop-helpdesk-company-information-company-status").val("");
        $("#kyop-helpdesk-company-information-date-lastAccess").val("");
        $("#kyop-helpdesk-company-information-date-clousure").val("");
        $("#kyop-helpdesk-company-information-document-type").val("");
        $("#kyop-helpdesk-company-information-document").val("");
        $("#kyop-helpdesk-company-information-boss").val("");
        $("#deletedCompanyData").hide();
        $("#mensajeEstadoOk").show()
    };
    this.showInvalidCompanyMessage = function() {
        com.bbva.kyop.util.MessageBoxUtil.showMessageBoxAlert(com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.company.companyerror"), com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.company.companyerror2"), function() {
            com.bbva.kyop.controller.HelpDeskController.resetProductInformationForm()
        })
    };
    this.generateHelpDeskFormValues = function(o) {
        var p = com.bbva.kyop.util.SessionUtil.getUser().getCompanyInformation().getCompanyName();
        com.bbva.kyop.util.ExtraParamsUtil.addParam("pb_perfil_usu_hd", o.getProfile());
        com.bbva.kyop.util.ExtraParamsUtil.addParam("pb_cod_apliprod_hd", o.getIdProduct());
        com.bbva.kyop.util.ExtraParamsUtil.addParam("pb_des_apliprod_hd", o.getProductDescription());
        com.bbva.kyop.util.ExtraParamsUtil.addParam("pb_cod_emp", o.getIdCompany());
        com.bbva.kyop.util.ExtraParamsUtil.addParam("pb_des_empresa_hd", p);
        com.bbva.kyop.util.ExtraParamsUtil.addParam("pb_cod_canal", parseInt(o.getChannel(), "10"));
        com.bbva.kyop.util.ExtraParamsUtil.addParam("pb_cod_ban_int", parseInt(o.getInternalBank(), "10"));
        com.bbva.kyop.util.ExtraParamsUtil.addParam("pb_cod_ban_pro", parseInt(o.getProductBank(), "10"));
        com.bbva.kyop.util.ExtraParamsUtil.addParam("pb_prod_emp", o.getServiceProduct());
        com.bbva.kyop.util.ExtraParamsUtil.addParam("pb_cod_subprod", o.getServiceSubProduct());
        com.bbva.kyop.util.ExtraParamsUtil.addParam("iv-id_sesion_ast", o.getIdSessionAst());
        com.bbva.kyop.util.ExtraParamsUtil.addParam("pb_cod_est_emp_hd", "");
        com.bbva.kyop.util.ExtraParamsUtil.addParam("pb_des_est_emp_hd", "");
        com.bbva.kyop.util.ExtraParamsUtil.addParam("pb_id_sesion_ast", o.getIdSessionAst());
        com.bbva.kyop.controller.ProcessController.setExtraParamsToProcessForm()
    };
    var f = function() {
        $(".kyop-select-company-selector").change(function() {
            $("#kyop-select-company-latam").val($(this).attr("idcompany"));
            $("#kyop-select-company-name-latam").val($(this).attr("companyname"))
        })
    };
    var g = function(p) {
        var o = $.trim(p);
        var q = o.length;
        return (q == 0 || q >= 3)
    };
    var k = function(o) {
        com.bbva.kyop.controller.MenuController.setMenuInPortal(o, "#kyop-select-company-latam-table-tmpl", "#kyop-select-company-latam-table-container-wrapper");
        com.bbva.kyop.controller.MenuController.setMenuInPortal(o, "#kyop-select-company-latam-table-body-tmpl", "#kyop-select-company-latam-table-container-wrapper")
    };
    this.searchHelpDeskCompanyLatam = function() {
        com.bbva.kyop.controller.HelpDeskController.clearSelectCompanyFieldsError();
        var v = $("#kyop-helpdesk-company-latam-input-idcompany").val();
        var t = $("#kyop-helpdesk-company-latam-input-companyname").val();
        var u = $("#kyop-helpdesk-company-latam-input-cif").val();
        var o = $("#kyop-helpdesk-company-latam-input-accountservice").val();
        var p = $("#kyop-helpdesk-company-latam-input-cif").is(":visible");
        var r = "";
        if (p && v == "" && t == "" && u == "" && o == "") {
            r = "kyop.ntcsh.company.fielderror"
        } else {
            if (!p && v == "" && t == "") {
                r = "kyop.ntcsh.company.fielderror"
            }
        }
        if (!p && (g(v) == false || g(t) == false)) {
            r = "kyop.ntcsh.company.longitudTres"
        } else {
            if (p && (g(v) == false || g(t) == false || g(u) == false || g(o) == false)) {
                r = "kyop.ntcsh.company.longitudTres"
            }
        }
        if (r != "") {
            com.bbva.kyop.controller.HelpDeskController.showSelectCompanyFieldsError(com.bbva.kyop.util.I18nUtil.getText(r))
        } else {
            var q = "";
            var s = null;
            if (p) {
                q = "helpDesk/getCompaniesByAdvancedSearch.json";
                s = {
                    idCompany: v,
                    companyName: t,
                    companyCif: u,
                    serviceAccount: o
                }
            } else {
                q = "helpDesk/getCompaniesHelpDeskLatam.json";
                s = {
                    idCompany: v,
                    companyName: t
                }
            }
            loadBox.show();
            com.bbva.kyop.util.TimerUtil.initProcessTimer();
            com.bbva.kyop.util.AjaxUtil.setMock(false);
            com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
                url: q,
                urlMock: "mock/core/getCompanyHelpdeskLatam.json",
                method: "POST",
                typeRequest: "json",
                abortApp: false,
                params: s,
                showInternalMessageError: true,
                callback: function(z) {
                    if (z != null && z.length > 0) {
                        var w = z[0].totalResult;
                        var y = z[0].maxResultExceded;
                        var x = {
                            companies: z[0].resultList,
                            totalResult: z[0].totalResult,
                            filterText: ""
                        };
                        logger.debug("*** PRODUCT INFO HELP DESK LATAM ***");
                        logger.debug(z);
                        if (y) {
                            com.bbva.kyop.controller.HelpDeskController.showSelectCompanyFieldsError(com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.helpdesk.max.results.exceeded"))
                        } else {
                            if (w == 0) {
                                com.bbva.kyop.controller.HelpDeskController.showSelectCompanyFieldsError(com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.helpdesk.no.results.found"))
                            } else {
                                $("#btnSearchCompanyLatamViewDetails").hide();
                                $(".kyop-advance-search-button").hide();
                                $(".kyop-search-company-latam").show();
                                $("#kyop-select-company-latam-search-button").hide();
                                com.bbva.kyop.controller.HelpDeskController.clearSelectCompanyFieldsError();
                                $("#kyop-select-company-latam-table-container-wrapper").empty();
                                k(x);
                                f();
                                if (w == 1) {
                                    $("#kyop-select-company-selector-0").attr("checked", true);
                                    $("#kyop-select-company-latam").val($("#kyop-select-company-reference-raw-0").attr("val"));
                                    $("#kyop-select-company-name-latam").val($("#kyop-select-company-companyname-raw-0").attr("val"));
                                    $("#btnSearchCompanyLatamViewDetails").show()
                                }
                                com.bbva.kyop.controller.HelpDeskController.disableSelectCompanyFields();
                                com.bbva.kyop.controller.HelpDeskController.setCompaniesLatamList(z[0])
                            }
                        }
                        com.bbva.kyop.util.TimerUtil.setProcessLoaded(true)
                    }
                    loadBox.hide()
                },
                fallback: function(w) {
                    loadBox.hide()
                }
            })
        }
    };
    var l = function() {
        var o = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().getIdNetCashProduct();
        var p = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().getProductDescription();
        return $("<option value=" + o + ">" + o + " - " + p + "</option>")
    };
    this.initProductInformation = function() {
        var o = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().getIdNetCashProduct();
        var p = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().getProductDescription();
        $("#kyop-company-helpdesk-latam-input-idproduct").val(o);
        $("#kyop-company-helpdesk-latam-input-productname").val(p);
        $("#kyop-company-helpdesk-latam-detail-idproduct").val(o);
        $("#kyop-company-helpdesk-latam-detail-productname").val(p);
        $("#kyop-company-helpdesk-latam-select-product").html(l());
        $("#kyop-helpdesk-company-latam-input-idcompany").keypress(function(q) {
            n.NumericosHandled(q)
        })
    };
    this.disableSelectCompanyFields = function() {
        $("[id^=kyop-helpdesk-company-latam-input]").attr("disabled", true);
        $("[id^=kyop-company-helpdesk-latam-select]").attr("disabled", true)
    };
    this.enableSelectCompanyFields = function() {
        $("[id^=kyop-helpdesk-company-latam-input]").removeAttr("disabled");
        $("[id^=kyop-company-helpdesk-latam-select]").removeAttr("disabled")
    };
    this.resetSelectedCompanyHelpDeskLatam = function() {
        $("#kyop-select-company-latam").val("")
    };
    this.backToSearchCompanyLatam = function() {
        com.bbva.kyop.controller.HelpDeskController.enableSelectCompanyFields();
        com.bbva.kyop.controller.HelpDeskController.clearSelectCompanyFieldsError();
        $("#kyop-select-company-latam-table-container").empty();
        $("#kyop-select-company-latam-search-button").show();
        $(".kyop-advance-search-button").show();
        $(".kyop-search-company-latam").hide()
    };
    this.backToResultsCompanyLatam = function() {
        com.bbva.kyop.controller.HelpDeskController.clearSelectCompanyFieldsError();
        this.hideCompanyDetail();
        $("#kyop-helpdesk-select-company-latam-information").show()
    };
    this.showCompanyDetail = function() {
        $("#kyop-detail-company-latam-container").show()
    };
    this.hideCompanyDetail = function() {
        $("#kyop-detail-company-latam-container").hide()
    };
    this.resetSelectCompanyFormLatam = function() {
        com.bbva.kyop.controller.HelpDeskController.enableSelectCompanyFields();
        $("[id^=kyop-helpdesk-company-latam-input]").val("");
        com.bbva.kyop.controller.HelpDeskController.clearSelectCompanyFieldsError()
    };
    var j = function(r) {
        var o = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().getIdNetCashProduct();
        var q = $("#kyop-select-company-latam").val();
        var p = $("#kyop-select-company-name-latam").val();
        if (q == "") {
            com.bbva.kyop.controller.HelpDeskController.showSelectCompanyFieldsError(com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.company.refselect"))
        } else {
            com.bbva.kyop.util.AjaxUtil.setMock(false);
            com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
                url: "helpDesk/setCompanyForHelpDeskLatam.json",
                urlMock: "mock/core/setCompanyForHelpDesk.json",
                method: "POST",
                typeRequest: "json",
                abortApp: false,
                params: {
                    idProduct: o,
                    idCompany: q
                },
                callback: function(s) {
                    if (r) {
                        r(s, q, p)
                    }
                }
            })
        }
    };
    this.selectHelpDeskCompanyLatam = function() {
        j(function(q, r, p) {
            logger.debug("*** PRODUCT INFO HELP DESK ***");
            logger.debug(q);
            if (q != null && q.length > 0) {
                com.bbva.kyop.util.SessionUtil.getUser().getHelpDeskInformation().setCompanyName(p);
                var o = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().getProductDescription();
                com.bbva.kyop.controller.HelpDeskController.setProductInformation(q[0], r, o, false);
                com.bbva.kyop.controller.HelpDeskController.setCompanyDetailIntoForm();
                com.bbva.kyop.controller.HelpDeskController.showCompanyDetail();
                com.bbva.kyop.controller.HelpDeskController.setProductInformationDetails();
                com.bbva.kyop.controller.HelpDeskController.setReferenceCode(r);
                $("#kyop-helpdesk-select-company-latam-information").hide()
            } else {
                com.bbva.kyop.controller.HelpDeskController.showInvalidCompanyMessage()
            }
        })
    };
    this.setProductInformationDetails = function() {
        $("#kyop-company-helpdesk-latam-detail-select-product").html(l())
    };
    this.setCompanyDetailIntoForm = function() {
        var q = $("#kyop-select-company-latam").val();
        var o = $("#kyop-select-company-name-latam").val();
        var p = com.bbva.kyop.util.SessionUtil.getUser().getHelpDeskInformation().getCompanyCif();
        $("#kyop-helpdesk-company-latam-detail-input-idcompany").val(q);
        $("#kyop-helpdesk-company-latam-detail-input-companyname").val(o);
        $("#kyop-helpdesk-company-latam-detail-input-cif").val(p)
    };
    this.showSelectCompanyFieldsError = function(o) {
        $("#kyop-select-company-error-text").text(o);
        com.bbva.kyop.controller.MenuRwdController.changeAttrAsrcForSrc("#kyop-select-company-fields-error");
        $("#kyop-select-company-fields-error").show()
    };
    this.clearSelectCompanyFieldsError = function() {
        $("#kyop-select-company-fields-error").hide()
    };
    this.showAdvancedSearch = function() {
        $("#kyop-select-company-show-advance-search").hide();
        $("#kyop-select-company-hide-advance-search").show();
        $("[class^=kyop-advance-search]").show()
    };
    this.clearAdvancedSearch = function() {
        var o = "";
        $("#kyop-helpdesk-company-latam-input-idcompany").val(o);
        $("#kyop-helpdesk-company-latam-input-companyname").val(o);
        $("#kyop-helpdesk-company-latam-input-cif").val(o);
        $("#kyop-helpdesk-company-latam-input-accountservice").val(o)
    };
    this.hideAdvancedSearch = function() {
        $("#kyop-select-company-show-advance-search").show();
        $("#kyop-select-company-hide-advance-search").hide();
        $("[class^=kyop-advance-search]").hide()
    };
    this.showButtonViewDetails = function() {
        $("#btnSearchCompanyLatamViewDetails").show()
    };
    this.viewDetails = function() {
        j(function(o, p) {
            logger.debug("*** PRODUCT INFO HELP DESK ***");
            logger.debug(o);
            if (o != null && o.length > 0) {
                com.bbva.kyop.controller.HelpDeskController.setProductInformationDetails();
                com.bbva.kyop.controller.HelpDeskController.setCompanyDetailIntoForm();
                com.bbva.kyop.controller.HelpDeskController.showCompanyDetail();
                $("#kyop-helpdesk-select-company-latam-information").hide()
            } else {
                com.bbva.kyop.controller.HelpDeskController.showInvalidCompanyMessage()
            }
        })
    };
    var m = function() {
        return $("#kyop-search-latam-input").val()
    };
    var h = function(o, p) {
        return o.companyId.match(p) != null || o.companyName.match(p) != null
    };
    var a = function(q, p) {
        var o = [];
        $.each(p, function(s, r) {
            if (h(r, q)) {
                o.push(r)
            }
        });
        return o
    };
    var d = function() {
        if (!$("[name=kyop-company-table-latam]").is(":checked")) {
            $("#btnSearchCompanyLatamViewDetails").hide()
        }
    };
    this.filterCompaniesList = function() {
        var r = m();
        var o = this.getCompaniesLatamList();
        if (typeof(o) != "undefined") {
            var q = a(r, o.resultList);
            var p = {
                companies: q,
                totalResult: q.length,
                filterText: r
            };
            $("#kyop-select-company-latam-table-container-wrapper").empty();
            k(p);
            d();
            f()
        }
    };
    var n = {
        NumericosHandled: function(o) {
            key = 0;
            if (o.which) {
                key = o.which
            } else {
                key = o.keyCode
            }
            if ((!((key >= 48) && (key <= 57))) && (key != 8) && (key != 0) && (key != 9)) {
                if (o.preventDefault) {
                    o.preventDefault()
                } else {
                    o.returnValue = false
                }
            }
        },
        NumericosImporteHandled: function(p, o) {
            key = 0;
            if (p.which) {
                key = p.which
            } else {
                key = p.keyCode
            }
            condicion = (!((key >= 48) && (key <= 57))) && (key != 8) && (key != 0) && ((key != 44) || ((key == 44) && (o.indexOf(",") != -1)));
            if (condicion) {
                if (p.preventDefault) {
                    p.preventDefault()
                } else {
                    p.returnValue = false
                }
            }
        }
    }
};
com.bbva.kyop.controller.FrequentlyOperationsController = new function() {
    var g = null;
    this.initIntegration = function(h) {
        if (h.idDivIntegration != null && h.idDivIntegration != "") {
            logger.debug(h);
            this.setIntegration(h)
        }
    };
    this.setIntegration = function(h) {
        if (com.bbva.kyop.bean.FrequentlyOperationsBean.hasBeanFrequentlyOperationsSetted()) {
            var j = com.bbva.kyop.bean.FrequentlyOperationsBean.getFrequentlyOperations();
            this.processFrequentlyOperations(j, h)
        } else {
            this.getFrequentlyOperations(h)
        }
    };
    var d = function(h) {
        return com.bbva.kyop.util.I18nUtil.getText(h) != "Sin traducción"
    };
    var b = function(j) {
        for (var h = 0; h < j.frequentlyProcessInSection.length; h++) {
            if (d(j.frequentlyProcessInSection[h].codI18n)) {
                return true
            }
        }
        return false
    };
    var e = function(j) {
        var h = [];
        $.each(j, function(k, l) {
            if (b(l)) {
                h.push(l)
            }
        });
        return h
    };
    var f = function(j) {
        if (j.frequentlyProcessInSection.length > 0) {
            var h = 0;
            while (h < j.frequentlyProcessInSection.length && j.frequentlyProcessInSection[h].hiddenInRwd) {
                h++
            }
            if (!j.hiddenInRwd && h >= j.frequentlyProcessInSection.length) {
                j.hiddenInRwd = true
            }
        }
    };
    var a = function(h) {
        if (h != null && h.length > 0) {
            $.each(h, function(k, l) {
                if (com.bbva.kyop.util.MenuUtil.keyExists(l.menuOptionId)) {
                    var j = com.bbva.kyop.util.MenuUtil.getMenu(l.menuOptionId).hiddenInRwd;
                    l.hiddenInRwd = j;
                    a(l.frequentlyProcessInSection);
                    f(l)
                } else {
                    logger.warn("La operación frecuente con id " + l.menuOptionId + " no existe en el arbol de menús")
                }
            })
        }
    };
    this.processFrequentlyOperations = function(j, h) {
        g = e(j);
        $.each(g, function(l, m) {
            m.locale = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getLocale();
            m.idProduct = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductId()
        });
        a(g);
        var k = {
            frequentlySections: g,
            activityRegisterParams: '{"origin": "Operaciones frecuentes"}'
        };
        com.bbva.kyop.controller.FrequentlyOperationsController.setFrequentlyOperationsInView(k, "#kyop-frequentlyOperations-tpl", "#" + h.idDivIntegration)
    };
    this.getFrequentlyOperations = function(h) {
        com.bbva.kyop.util.AjaxUtil.setMock(false);
        com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
            url: "sectionsVisited/getFrequentlyVisitedSections.json",
            urlMock: "mock/core/getFrequentlyOperations.json",
            method: "POST",
            typeRequest: "json",
            abortApp: false,
            callback: function(j) {
                com.bbva.kyop.bean.FrequentlyOperationsBean.setFrequentlyOperations(j);
                com.bbva.kyop.controller.FrequentlyOperationsController.processFrequentlyOperations(j, h);
                h.callbackFn(h)
            }
        })
    };
    this.setFrequentlyOperationsInView = function(k, j, h) {
        $(j).tmpl(k).appendTo(h)
    };
    this.getTranslateFrequentlyOperation = function(h) {
        var j = com.bbva.kyop.util.I18nUtil.getText(h.codI18n);
        var k = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductMainIdMigrated();
        if (k != h.codApliprod) {
            j = h.countryIso + " - " + j
        }
        return j
    }
};
com.bbva.kyop.controller.HomeLocalServiceController = new function() {
    this.initIntegration = function(a) {
        if (a.idDivIntegration != null && a.idDivIntegration != "") {
            logger.debug(a);
            this.setIntegration(a)
        }
    };
    this.setIntegration = function(a) {
        this.processHomeLocalService("ES", a)
    };
    this.processHomeLocalService = function(d, b) {
        urlHomeLocalService = com.bbva.kyop.util.SessionUtil.getConfiguration().getHomeLocalServiceUrl();
        var a = {
            urlLocalService: urlHomeLocalService
        };
        com.bbva.kyop.controller.HomeLocalServiceController.setHomeLocalServiceInView(a, "#kyop-homeLocalService-tpl", "#" + b.idDivIntegration)
    };
    this.setHomeLocalServiceInView = function(d, b, a) {
        $(b).tmpl(d).appendTo(a)
    }
};
com.bbva.kyop.controller.HomeController = new function() {
    var d = function(f, e) {
        var h = "https://";
        var g = document.location.hostname;
        com.bbva.kyop.util.UUAASessionManager.add(h + g + f, e)
    };
    var a = function(e) {
        $.each(e, function(f, g) {
            if (g.urlBasePath != "" && typeof(g.urlBasePath) != "undefined") {
                if (typeof(g.newArchitecture) != "undefined") {
                    d(g.urlBasePath, g.newArchitecture)
                }
            }
        })
    };
    var b = function(e) {
        a(e.header);
        a(e.middleLeft);
        a(e.middleRight);
        a(e.footer)
    };
    this.manageHomeSlices = function(p) {
        b(p);
        var m = p.header[0];
        var s = p.middleLeft[0];
        var v = p.middleRight[0];
        var u = p.footer[0];
        var x = "kyop-slice-header";
        var f = "kyop-slice-middle-left";
        var t = "kyop-slice-middle-right";
        var o = "kyop-slice-footer";
        logger.debug("***********************************************************************");
        logger.debug(m);
        logger.debug(s);
        logger.debug(v);
        logger.debug(u);
        logger.debug("***********************************************************************");
        var l = this.createIntegrationHomeBean(x);
        var n = this.createIntegrationHomeBean(f);
        var q = this.createIntegrationHomeBean(t);
        var k = this.createIntegrationHomeBean(o);
        var e = com.bbva.kyop.controller.CoreController.checkIntegration(m, "headerSlice");
        var r = com.bbva.kyop.controller.CoreController.checkIntegration(v, "middleRightSlice");
        var w = com.bbva.kyop.controller.CoreController.checkIntegration(u, "footerSlice");
        var h = com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().getIntegrateFavoriteAccounts();
        var j = com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().getIntegrateBanners();
        var g = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductMainId();
        if (g == "210" || g == "211") {
            h = false;
            $("#kyop-assess-netcash").hide()
        }
        if (!h) {
            e = false
        }
        if (!j) {
            r = false;
            w = false
        } else {
            com.bbva.kyop.controller.AdsController.getAllAds()
        }
        if (e) {
            com.bbva.kyop.controller.CoreController.proceedToIntegrate(m, l)
        } else {
            $("#kyop-slice-header").remove()
        }
        com.bbva.kyop.controller.CoreController.proceedToIntegrate(s, n);
        if (r) {
            com.bbva.kyop.controller.CoreController.proceedToIntegrate(v, q)
        } else {
            $("#kyop-slice-middle-right").remove();
            $("#kyop-slice-middle-left").removeClass("kyop-slice-middle-left").addClass("kyop-slice-middle-left-total")
        }
        if (w) {
            com.bbva.kyop.controller.CoreController.proceedToIntegrate(u, k)
        } else {
            $("#kyop-slice-footer").remove()
        }
    };
    this.createIntegrationHomeBean = function(q) {
        var o = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getLocale();
        var f = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getDateFormat();
        var r = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getPriceFormat();
        var s = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getTimeZone();
        var e = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductId();
        var l = com.bbva.kyop.util.SessionUtil.getUser().getCompanyInformation().getSegmentId();
        var k = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().getProductType();
        var m = com.bbva.kyop.util.SessionUtil.getUser().getCompanyInformation().getCompanyId();
        var j = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().getIdSessionAst();
        var p = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().getChannel();
        var h = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().getInternalBank();
        var n = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().getIvUser();
        var g = com.bbva.kyop.controller.CoreController.createIntegrationBean({
            callbackFn: function(t) {
                com.bbva.kyop.controller.CoreController.sliceCallbackFn(t)
            },
            idDivIntegration: q,
            idProduct: e,
            productType: k,
            idService: null,
            idProcess: null,
            locale: o,
            dateFormat: f,
            priceFormat: r,
            timeZone: s,
            checkPrivileges: null,
            pubUrl: null,
            segment: m,
            idCompany: m,
            isPortalKyop: true,
            idSessionAst: j,
            codChannel: p,
            codInternalBank: h,
            ivUser: n
        });
        return g
    }
};
com.bbva.kyop.controller.AdsController = new function() {
    var e = "http://www.liferay-server.com/content";
    var a = "/listLoginContent.json";
    var f = "/listAdvertisingContent.json";
    var d = false;
    var b = false;
    this.setSent = function(h) {
        this.sent = h
    };
    this.isSent = function() {
        return this.sent
    };
    this.setLoaded = function(h) {
        this.loaded = h
    };
    this.isLoaded = function() {
        return this.loaded
    };
    this.ads = [];
    this.isLoading = false;
    this.callBackFunctionsData = [];
    var g = function(n, m) {
        var h = com.bbva.kyop.util.SessionUtil.getConfiguration().getRequestConfiguration().getBannerRequestUrl();
        var o = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getLanguage();
        var k = h.substr(0, h.lastIndexOf(".json"));
        var j = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().isLatam();
        var l = com.bbva.kyop.util.SessionUtil.getUser().getCompanyInformation().isCaixa();
        if (!j && n == "201") {
            return k + "_" + n + "_" + m + "_" + o + ".json"
        } else {
            return k + "_" + n + "_" + o + ".json"
        }
    };
    this.getAllAds = function(p) {
        if (com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().isHelpDesk()) {
            return
        }
        logger.info("**DPP OBTENIENDO INFORMACION SOBRE LOS ADS, realizando la llamada");
        this.isLoading = true;
        var h = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductMainId();
        var o = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getLanguage();
        var q = com.bbva.kyop.util.SessionUtil.getUser().getCompanyInformation().getSegmentId();
        if (q == "") {
            q = 0
        }
        var l = com.bbva.kyop.util.SessionUtil.getConfiguration().getRequestConfiguration().getBannerRequestUrl();
        var m = com.bbva.kyop.util.SessionUtil.getConfiguration().getRequestConfiguration().getBannerRequestPpId();
        var j = com.bbva.kyop.util.SessionUtil.getConfiguration().getRequestConfiguration().getBannerRequestPpLifeCycle();
        var n = document.location.host;
        var k = "https://" + n + g(h, q);
        com.bbva.kyop.util.AjaxUtil.setMock(false);
        if (n == "localhost") {
            k = "https://grupobbva.es.igrupobbva" + g(h, q);
            com.bbva.kyop.util.AjaxUtil.setMock(true)
        }
        com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
            externalUrl: k,
            url: "mock/core/getHomeAds.json",
            urlMock: "mock/core/getHomeAds.json",
            method: "POST",
            typeRequest: "json",
            abortApp: false,
            showMessageError: false,
            params: {
                codProduct: h,
                codLanguage: o,
                codSegment: q,
                codMenuLevel1: "",
                codMenuLevel2: "",
                p_p_id: m,
                p_p_lifecycle: j
            },
            callback: function(r) {
                com.bbva.kyop.controller.AdsController.ads = r;
                com.bbva.kyop.controller.AdsController.isLoading = false;
                logger.info("**DPP OBTENIENDO INFORMACION SOBRE LOS ADS, respuesta recibida");
                com.bbva.kyop.controller.AdsController.doCallBackFunctions();
                if (p != null && p != "") {
                    p(r)
                }
            },
            fallbackFn: function(r) {
                logger.error("**No se ha podido obtener los banner liferay.");
                $("#kyop-slice-middle-right").remove();
                $("#kyop-slice-footer").remove();
                if (p != null && p != "") {
                    p(r)
                }
            }
        })
    };
    this.getExplicitData = function(s) {
        var h = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductId();
        var q = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getLanguage();
        var r = com.bbva.kyop.util.SessionUtil.getUser().getCompanyInformation().getSegmentId();
        if (r == "") {
            r = 0
        }
        var l = s.codMenuLevel1;
        var k = s.codMenuLevel2;
        var n = com.bbva.kyop.util.SessionUtil.getConfiguration().getRequestConfiguration().getBannerRequestUrl();
        var p = com.bbva.kyop.util.SessionUtil.getConfiguration().getRequestConfiguration().getBannerRequestPpId();
        var j = com.bbva.kyop.util.SessionUtil.getConfiguration().getRequestConfiguration().getBannerRequestPpLifeCycle();
        var o = document.location.host;
        var m = "https://" + o + n;
        com.bbva.kyop.util.AjaxUtil.setMock(false);
        if (o == "localhost") {
            m = "https://grupobbva.es.igrupobbva" + n;
            com.bbva.kyop.util.AjaxUtil.setMock(true)
        }
        com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
            externalUrl: m,
            url: "mock/core/getHomeAds.json",
            urlMock: "mock/core/getHomeAds.json",
            method: "POST",
            typeRequest: "json",
            abortApp: false,
            params: {
                codProduct: h,
                codLanguage: q,
                codSegment: r,
                codMenuLevel1: l,
                codMenuLevel2: k,
                p_p_id: p,
                p_p_lifecycle: j
            },
            callback: function(t) {
                com.bbva.kyop.controller.AdsController.ads.push(t);
                com.bbva.kyop.controller.AdsController.doCallBackFunctions();
                if (t != null) {
                    com.bbva.kyop.controller.AdsController.renderComponent(s, t)
                }
            }
        })
    };
    this.renderAdsTo = function(j) {
        logger.info("**DPP ***********************************************************************");
        logger.info("**DPP renderAdsInMe-->Un componente ha solicitado informacion sobre sus ads");
        logger.info("**DPP (this.isLoading=" + this.isLoading + "), (this.ads.length=" + this.ads.length + ")");
        if (this.isLoading == false && this.ads.length > 0) {
            logger.info("**DPP renderAdsInMe-->Ya cargado llamo al callback directamente ");
            var h = this.getAd(j.sliceInfo.codMenuLevel1, j.sliceInfo.codMenuLevel2, j.sliceInfo.zone);
            if (h != null) {
                com.bbva.kyop.controller.AdsController.renderComponent(j, h)
            } else {
                com.bbva.kyop.controller.AdsController.getExplicitData(j)
            }
        } else {
            logger.info("**DPP renderAdsInMe-->Publicidad todavia no obtenida asi que se guarda como callback pendiente");
            this.callBackFunctionsData.push(j)
        }
        logger.info("**DPP ***********************************************************************")
    };
    this.starAd = function(j, m, l, k, h) {
        com.bbva.kyop.component.ActivityRegister.bannerRegister(m, l, h, "Home", "Tridion");
        if (j != null && j != "") {
            if (k) {
                com.bbva.kyop.util.LightBoxUtil.loadLightBoxKyop("kyop-lightbox-container-div", "kyop-lightbox-iframe-div", "kyop-lightbox-form", {
                    url: j,
                    height: 600,
                    width: 800,
                    innerWidth: 790,
                    innerHeight: 550,
                    registerActivity: false
                })
            } else {
                window.open(j, "_blank")
            }
        }
    };
    this.doCallBackFunctions = function() {
        logger.info("**DPP Haciendo callBack de las funciones pendientes");
        var h = this.callBackFunctionsData;
        if (h.length != 0) {
            $.each(h, function(k, j) {
                logger.info("**DPP he conseguido entrar en el bucle");
                var m = j;
                var l = com.bbva.kyop.controller.AdsController.getAd(m.sliceInfo.codMenuLevel1, m.sliceInfo.codMenuLevel2, m.sliceInfo.zone);
                com.bbva.kyop.controller.AdsController.renderComponent(m, l)
            })
        } else {
            logger.info("**DPP No hay callbacks pendientes de llamar")
        }
    };
    this.getAd = function(l, j, h) {
        logger.info("**DPP Ad " + this.ads);
        logger.info("**DPP Data" + this.ads[0]);
        logger.info("**DPP Criterios de busqueda codMenuLevel1=" + l + ",codMenuLevel2=" + j + ",zone=" + h);
        var m = null;
        var k = this.ads;
        $.each(k, function(n, o) {
            if (o != null) {
                if (o.codMenuLevel1 == l && o.codMenuLevel2 == j) {
                    logger.info("**DPP encontrado-----" + n);
                    if (h == "bannerHorizontal") {
                        m = o.bannerHorizontal
                    } else {
                        if (h == "bannerVertical") {
                            m = o.bannerVertical
                        } else {
                            m = o
                        }
                    }
                }
            }
        });
        return m
    };
    this.renderComponent = function(j, h) {
        j.render(h)
    }
};
com.bbva.kyop.controller.SearchController = new function() {
    this.getSearchMenuOptions = function(l, k, j, h) {
        if (l.childrenList.length > 0) {
            $.each(l.childrenList, function(o, p) {
                var n = k + " " + com.bbva.kyop.util.I18nUtil.getText(p.codI18nShort);
                var m = j + '<img src="./resources/images/separadorMigas.png" />' + com.bbva.kyop.util.I18nUtil.getText(p.codI18nShort);
                com.bbva.kyop.controller.SearchController.getSearchMenuOptions(p, n, m, h)
            })
        } else {
            var g = {
                label: k,
                labelRender: j,
                menu: l
            };
            h.push(g)
        }
        return h
    };
    this.createSearchMenuInfo = function(j) {
        var g = new Array();
        var h = "";
        $.each(j, function(k, l) {
            if (l.level == 1) {
                h = com.bbva.kyop.util.I18nUtil.getText(l.codI18nShort);
                g = com.bbva.kyop.controller.SearchController.getSearchMenuOptions(l, h, h, g)
            }
        });
        return g
    };
    var d = function(g) {
        return g.length == 0
    };
    var b = function(g) {
        return g.emptyResult
    };
    var f = function() {
        return {
            label: com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.i.common.no.data.found"),
            labelRender: com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.i.common.no.data.found"),
            menu: undefined,
            emptyResult: true
        }
    };
    var e = function(h, g) {
        return $('<li class="kyop-li-search">').append("<a>" + h.labelRender + "<br></a>").appendTo(g)
    };
    var a = function(h, g) {
        return $('<li class="kyop-li-search kyop-li-search-empty-result">').append("<a>" + h.labelRender + "</a>").appendTo(g)
    };
    this.loadSearchCombo = function(g) {
        $("#kyop-searchCombo").autocomplete({
            source: function(k, h) {
                var j = $.ui.autocomplete.filter(g, k.term);
                if (d(j)) {
                    h(new Array(f()))
                } else {
                    h(j.slice(0, 20))
                }
            },
            minLength: 2,
            select: com.bbva.kyop.controller.SearchController.selectedItem,
            focus: com.bbva.kyop.controller.SearchController.itemOnFocus
        }).data("ui-autocomplete")._renderItem = function(h, j) {
            j.labelRender = j.labelRender.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex(this.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
            h.addClass("kyop-ul-search");
            if (b(j)) {
                return a(j, h)
            } else {
                return e(j, h)
            }
        }
    };
    this.itemOnFocus = function(h, j) {
        if (!b(j.item)) {
            var g = j.item.value;
            var l = j.item.menu;
            var k = com.bbva.kyop.util.I18nUtil.getText(l.codI18nShort);
            $("#kyop-searchCombo").val(k)
        }
        h.preventDefault()
    };
    this.selectedItem = function(h, k) {
        if (!b(k.item)) {
            var j = k.item.value;
            $("#kyop-searchCombo").val(j.menu);
            h.preventDefault();
            var l = k.item.menu;
            var g = "es_ES#" + l.view + "#" + l.idMenu;
            com.bbva.kyop.bean.ProcessBean.setActivityRegisterParams({
                origin: "Buscador"
            });
            com.bbva.kyop.controller.ReverseCallerController.selectLeftMenuOptionFromReverseCaller(l, "S", "S")
        }
        return false
    };
    this.createSearchComboFromMenus = function(h) {
        var g = com.bbva.kyop.controller.SearchController.createSearchMenuInfo(h);
        com.bbva.kyop.controller.SearchController.loadSearchCombo(g)
    }
};
com.bbva.kyop.controller.ProcessHelpController = new function() {
    var d = "#kyop-link-process-help";
    var b = "#kyop-process-help-tmpl";
    var a = "#kyop-process-help-container";
    var l = "#kyop-process-help-body";
    var h = "#kyop-link-process-help-directy";
    var k = "#kyop-process-help-menu";
    var q = "#kyop-container-body";
    var f = "0000";
    var j = "0000";
    var g = null;
    this.setProcessHelpInfo = function(s) {
        this.processHelpInfo = s
    };
    this.getProcessHelpInfo = function() {
        return this.processHelpInfo
    };
    this.setValuesToProcessLinkHelp = function(v) {
        var u = v.processes[0];
        var t = u.idProcess;
        var w = "";
        var s = u.services;
        if (s.length > 0) {
            w = s[0].idService
        }
        setValuesToProcessLinkHelp(t, w)
    };
    this.setValuesToProcessLinkHelp = function(s, t) {
        $(d).attr("idProcess", s);
        $(d).attr("idService", t);
        $(d).attr("step", "");
        $(d).attr("url", "")
    };
    this.showProcessLinkHelp = function(s) {
        if (typeof(s) != "undefined") {
            this.setValuesToProcessLinkHelp(s)
        }
    };
    this.resizeHelpIfIsNotHidden = function() {
        if ($(a).length > 0 && !$(a).is(":hidden")) {
            $(a).width($(window).width());
            $(a).css("min-height", $(window).height());
            $(l).width($(window).width());
            $(l).css("min-height", $(window).height());
            $(k).width($(window).width());
            $(q).hide()
        }
    };
    var r = function() {
        return !com.bbva.kyop.util.SlideUtil.isCurrentItemTheFirst()
    };
    var o = function() {
        return !com.bbva.kyop.util.SlideUtil.isCurrentItemTheLast()
    };
    var n = function(t, u, s) {
        t.windowWidth = $(window).width();
        t.windowHeight = $(window).height();
        t.widthContainer = $("#kyop-central-load-area-container").width();
        t.buttonPrevActive = r();
        t.buttonNextActive = o();
        com.bbva.kyop.controller.ProcessHelpController.hideContainerProcessHelpAndHideBody();
        $(b).tmpl(t).appendTo("body")
    };
    this.nextItem = function() {
        n(com.bbva.kyop.util.SlideUtil.next())
    };
    this.showHelpLink = function(t) {
        var s = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductMainId();
        return (s == t)
    };
    this.prevItem = function() {
        n(com.bbva.kyop.util.SlideUtil.prev())
    };
    this.showContainerProcessHelp = function(s) {
        com.bbva.kyop.util.SlideUtil.init(s);
        n(com.bbva.kyop.util.SlideUtil.first())
    };
    this.hideContainerProcessHelpAndHideBody = function(s) {
        $(q).hide();
        $(a).remove()
    };
    this.hideContainerProcessHelp = function(s) {
        $(q).show();
        $(a).remove()
    };
    var m = function(w, t, s, u) {
        var v = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductMainId();
        if (v != "002") {
            com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
                externalUrl: w,
                url: "mock/core/getLiferayHelp.json",
                urlMock: "mock/core/getLiferayHelp.json",
                method: "POST",
                typeRequest: "json",
                abortApp: false,
                params: t,
                callback: function(x) {
                    if (s != null && s != "") {
                        s(x)
                    }
                },
                fallbackFn: function(x) {
                    if (u != null && u != "") {
                        u(x)
                    }
                }
            })
        }
    };
    var p = function() {
        var u = document.location.hostname;
        var t = com.bbva.kyop.util.SessionUtil.getConfiguration().getRequestConfiguration().getProcessHelpRequestUrl();
        var s = "https://" + u + t;
        com.bbva.kyop.util.AjaxUtil.setMock(false);
        if (u == "localhost") {
            s = "https://grupobbva.es.igrupobbva" + t;
            com.bbva.kyop.util.AjaxUtil.setMock(true)
        }
        return s
    };
    var e = function(s) {
        return s != null && s.length > 0
    };
    this.showButtonHelpDirect = function() {
        var s = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductMainId();
        if (s != "210" && s != "212" && s != "211") {
            $(h).show()
        } else {
            this.hideButtonHelpDirect()
        }
    };
    this.hideButtonHelpDirect = function() {
        $(h).hide()
    };
    this.showProcessHelpDirectly = function(x, C, v, t, A, D) {
        if (com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().isHelpDesk()) {
            return
        }
        var s = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductId();
        var z = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getLanguage();
        var B = com.bbva.kyop.util.SessionUtil.getUser().getCompanyInformation().getSegmentId();
        var w = p();
        var y = com.bbva.kyop.util.SessionUtil.getConfiguration().getRequestConfiguration().getProcessHelpRequestPpId();
        var u = com.bbva.kyop.util.SessionUtil.getConfiguration().getRequestConfiguration().getProcessHelpRequestPpLifeCycle();
        m(w, {
            codProcess: x,
            codService: C,
            codProduct: s,
            codLanguage: z,
            codSegment: B,
            step: v,
            url: t,
            p_p_id: y,
            p_p_lifecycle: u
        }, function(E) {
            if (e(E)) {
                $(q).hide();
                com.bbva.kyop.controller.ProcessHelpController.showContainerProcessHelp(E)
            } else {
                com.bbva.kyop.controller.ProcessHelpController.showHelpServiceUnavailable()
            }
            if (A != null && A != "") {
                A(E)
            }
        }, function(E) {
            logger.error("**No se ha podido obtener la Ayuda Contextual liferay");
            com.bbva.kyop.controller.ProcessHelpController.showHelpServiceUnavailable();
            if (D != null && D != "") {
                D(E)
            }
        })
    };
    this.showButtonAndPreloadHelpIfExistHelp = function(x, C, v, t, A, D) {
        if (com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().isHelpDesk()) {
            return
        }
        var s = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductId();
        var z = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getLanguage();
        var B = com.bbva.kyop.util.SessionUtil.getUser().getCompanyInformation().getSegmentId();
        var w = p();
        var y = com.bbva.kyop.util.SessionUtil.getConfiguration().getRequestConfiguration().getProcessHelpRequestPpId();
        var u = com.bbva.kyop.util.SessionUtil.getConfiguration().getRequestConfiguration().getProcessHelpRequestPpLifeCycle();
        m(w, {
            codProcess: x,
            codService: C,
            codProduct: s,
            codLanguage: z,
            codSegment: B,
            step: v,
            url: t,
            p_p_id: y,
            p_p_lifecycle: u
        }, function(E) {
            if (e(E)) {
                com.bbva.kyop.controller.ProcessHelpController.setProcessHelpInfo(E);
                $("#kyop-link-process-help").show()
            } else {
                $("#kyop-link-process-help").hide()
            }
            com.bbva.kyop.controller.ProcessHelpController.hideButtonHelpDirect();
            if (A != null && A != "") {
                A(E)
            }
        }, function(E) {
            logger.error("**No se ha podido obtener la Ayuda Contextual liferay");
            com.bbva.kyop.controller.ProcessHelpController.hideButtonHelpDirect();
            if (D != null && D != "") {
                D(E)
            }
        })
    };
    this.showProcessHelp = function() {
        com.bbva.kyop.component.ActivityRegister.helpContextRegister();
        var s = com.bbva.kyop.controller.ProcessHelpController.getProcessHelpInfo();
        com.bbva.kyop.controller.ProcessHelpController.showContainerProcessHelp(s);
        $(q).hide()
    };
    this.showHelpServiceUnavailable = function() {
        com.bbva.kyop.controller.ProcessHelpController.hideContainerProcessHelp();
        com.bbva.kyop.util.MessageBoxUtil.showMessageBoxError(com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.help.unavailable.title"), com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.help.unavailable.msg1_2") + com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.help.unavailable.msg2_2"), 102, function() {})
    };
    this.setStep = function(s) {
        $(d).attr("step", s)
    };
    this.setUrlToProcessLink = function(s) {
        $("#kyop-link-process-help").attr("url", com.bbva.kyop.controller.CoreController.getUrlWithoutDomain(s))
    };
    this.showProcessHelpHome = function() {
        com.bbva.kyop.component.ActivityRegister.helpContextRegister();
        this.showProcessHelpDirectly(f, j, "", "", "", "")
    }
};
com.bbva.kyop.controller.CountryJumpController = new function() {
    this.changeAuxReference = function(b) {
        com.bbva.kyop.util.AjaxUtil.setMock(false);
        com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
            url: "countryReference/changeAuxReference.json",
            urlMock: "mock/core/changeLanguage.json",
            method: "POST",
            typeRequest: "json",
            abortApp: false,
            params: {
                idProduct: b
            },
            callback: function(d) {
                var e = d[0];
                if (e) {
                    com.bbva.kyop.controller.CoreController.unbindBodyEvent();
                    logger.debug("******** SE EJECUTA EL CAMBIO DE REFERENCIA *********");
                    com.bbva.kyop.controller.CoreController.refreshPortalFromJump()
                }
            }
        })
    };
    this.changeReference = function(d, b) {
        com.bbva.kyop.util.AjaxUtil.setMock(false);
        com.bbva.kyop.util.AjaxUtil.sendRequestJSON({
            url: "countryReference/changeReference.json",
            urlMock: "mock/core/changeLanguage.json",
            method: "POST",
            typeRequest: "json",
            abortApp: false,
            params: {
                idProduct: d,
                companyCode: b
            },
            callback: function(e) {
                var f = e[0];
                if (f) {
                    com.bbva.kyop.controller.CoreController.unbindBodyEvent();
                    logger.debug("******** SE EJECUTA EL CAMBIO DE REFERENCIA *********");
                    com.bbva.kyop.controller.CoreController.refreshPortalFromJump()
                }
            }
        })
    };
    this.countryJump = function(e, A, k, u, y, q, f, t, g) {
        var d = e;
        var l = "";
        var e = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductId();
        var w = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getIdDateFormat();
        var j = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getIdPriceFormat();
        var x = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getIdTimeZone();
        var z = document.location.hostname;
        com.bbva.kyop.util.AjaxUtil.sendRequestContext({
            url: com.bbva.kyop.util.SessionUtil.getConfiguration().getUrlSessionLogout(),
            urlMock: "mock/core/getConfiguration.json",
            method: "POST",
            async: false,
            typeRequest: "json",
            abortApp: false,
            callback: function(B) {
                logger.debug("Se ha invalidado la sesión en el pais")
            },
            fallback: function(B) {
                logger.debug("Se ha producido un error al invalidar la sesión en el pa�s")
            }
        });
        if (A) {
            var t = t;
            var r = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getLanguage();
            var p = "kyop_mult_web_kyoppresentation_01/countryReference/jumpToMainReference.json";
            var b = "";
            if (z == "localhost") {
                l = "http://localhost:7102/" + p
            } else {
                l = "https://" + z + "/" + u + "/" + p
            }
            b = "kyop-countryjump-migrated-form";
            this.setCountryJumpMigratedValues({
                formAction: l,
                idProduct: d,
                locale: t,
                idDateFormat: w,
                idPriceFormat: j,
                idTimeZone: x,
                language: r,
                sessionAst: g,
                channel: y,
                bankInt: q,
                company: f
            });
            com.bbva.kyop.controller.CoreController.unbindBodyEvent();
            $("#" + b).submit()
        } else {
            if (u.indexOf("KDPO") >= 0) {
                var m = "INICIO_PORTAL";
                var s = "N";
                var v = "";
                var t = t;
                v = "&PAR_INICIO.COD_REFLOCAL=obtenerDato(4)&PAR_INICIO.COD_REFGLOBAL=refGlobal&PAR_INICIO.COD_CANAL=obtenerDato(2)&PAR_INICIO.COD_BANCOI=obtenerDato(3)";
                var o = "kdpo_mult_web";
                var h = "&PAR_INICIO.PROD_ORI=" + e + "&PAR_INICIO.ACCESO=" + s + "&PAR_INICIO.COD_F_FECHA=" + w + "&PAR_INICIO.COD_F_IMPORT=" + j + "&PAR_INICIO.COD_HUSOHORA=" + x;
                var n = "OPERACION=" + m + "&LOCALE=" + t + h;
                if (z == "localhost") {
                    l = "https://de-bbvaglobalnetcash.igrupobbva" + a(u, o, n, v)
                } else {
                    l = "https://" + z + a(u, o, n, v)
                }
                var r = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getLanguage();
                var p = "/kdpo_mult_web/servlet/PIBEE?OPERACION=" + m;
                var b = "";
                if (k == "gpibee") {
                    b = "kyop-globaljump-form";
                    t = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getLocaleCMP() + "_GL";
                    l = "https://" + z + "/SGLKYUE/kyue_mult_web/servlet/PIBEE?pb_url=portal&LOCALE=" + t;
                    $("#kyop-globaljump-form").attr("action", l)
                } else {
                    b = "kyop-countryjump-form";
                    this.setCountryJumpValues({
                        formAction: l,
                        locale: t,
                        destiny: p,
                        userParam: h,
                        language: r,
                        sessionAst: g,
                        channel: y,
                        bankInt: q,
                        company: f
                    })
                }
                com.bbva.kyop.controller.CoreController.unbindBodyEvent();
                $("#" + b).submit()
            } else {
                var t = t;
                var r = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getLanguage();
                var p = "kyop_mult_web_kyoppresentation_01/countryReference/jumpToExternalCountry.json";
                var b = "";
                if (z == "localhost") {
                    l = "https://de-bbvaglobalnetcash.igrupobbva/" + u + "/" + p
                } else {
                    l = "https://" + z + "/" + u + "/" + p
                }
                b = "kyop-countryjump-migrated-form";
                this.setCountryJumpMigratedValues({
                    formAction: l,
                    idProduct: d,
                    locale: t,
                    idDateFormat: w,
                    idPriceFormat: j,
                    idTimeZone: x,
                    language: r,
                    sessionAst: g,
                    channel: y,
                    bankInt: q,
                    company: f
                });
                com.bbva.kyop.controller.CoreController.unbindBodyEvent();
                $("#" + b).submit()
            }
        }
    };
    this.countryJumpTestMexicoLocal = function(e, A, k, u, y, r, f, t, g) {
        var d = e;
        if (e == "002") {
            A = false
        }
        if (A) {
            this.changeAuxReference(e)
        } else {
            var l = "";
            var e = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductId();
            var w = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getIdDateFormat();
            var j = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getIdPriceFormat();
            var x = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getIdTimeZone();
            var z = document.location.hostname;
            if (u.indexOf("KDPO") >= 0) {
                var m = "INICIO_PORTAL";
                var s = "N";
                var v = "";
                var t = t;
                v = "&PAR_INICIO.COD_REFLOCAL=obtenerDato(4)&PAR_INICIO.COD_REFGLOBAL=refGlobal&PAR_INICIO.COD_CANAL=obtenerDato(2)&PAR_INICIO.COD_BANCOI=obtenerDato(3)";
                var p = "kdpo_mult_web";
                var h = "&PAR_INICIO.PROD_ORI=" + e + "&PAR_INICIO.ACCESO=" + s + "&PAR_INICIO.COD_F_FECHA=" + w + "&PAR_INICIO.COD_F_IMPORT=" + j + "&PAR_INICIO.COD_HUSOHORA=" + x;
                var n = "OPERACION=" + m + "&LOCALE=" + t + h;
                if (z == "localhost") {
                    l = "https://de-bbvaglobalnetcash.igrupobbva" + a(u, p, n, v)
                } else {
                    l = "https://" + z + a(u, p, n, v)
                }
                var q = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getLanguage();
                var o = "/kdpo_mult_web/servlet/PIBEE?OPERACION=" + m;
                var b = "";
                if (k == "gpibee") {
                    b = "kyop-globaljump-form";
                    t = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getLocaleCMP() + "_GL";
                    l = "https://" + z + "/SGLKYUE/kyue_mult_web/servlet/PIBEE?pb_url=portal&LOCALE=" + t;
                    $("#kyop-globaljump-form").attr("action", l)
                } else {
                    b = "kyop-countryjump-form";
                    this.setCountryJumpValues({
                        formAction: l,
                        locale: t,
                        destiny: o,
                        userParam: h,
                        language: q,
                        sessionAst: g,
                        channel: y,
                        bankInt: r,
                        company: f
                    })
                }
                com.bbva.kyop.controller.CoreController.unbindBodyEvent();
                $("#" + b).submit()
            } else {
                var t = t;
                var q = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getLanguage();
                var o = "kyop_mx_web_kyoppresentation_01/countryReference/jumpToExternalCountry.json";
                if (d == "201") {
                    o = "kyop_mult_web_kyoppresentation_01/countryReference/jumpToExternalCountry.json"
                }
                var b = "";
                if (z == "localhost") {
                    l = "https://de-bbvaglobalnetcash.igrupobbva/" + u + "/" + o
                } else {
                    l = "https://" + z + "/" + u + "/" + o
                }
                b = "kyop-countryjump-migrated-form";
                this.setCountryJumpMigratedValues({
                    formAction: l,
                    idProduct: d,
                    locale: t,
                    idDateFormat: w,
                    idPriceFormat: j,
                    idTimeZone: x,
                    language: q,
                    sessionAst: g,
                    channel: y,
                    bankInt: r,
                    company: f
                });
                com.bbva.kyop.controller.CoreController.unbindBodyEvent();
                $("#" + b).submit()
            }
        }
    };
    this.countryJumpHelpDesk = function(e, A, k, u, y, r, f, t, g) {
        var d = e;
        if (A) {
            this.changeAuxReference(e)
        } else {
            var l = "";
            var e = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductId();
            var w = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getIdDateFormat();
            var j = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getIdPriceFormat();
            var x = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getIdTimeZone();
            var z = document.location.hostname;
            if (u.indexOf("KDPO") >= 0) {
                var m = "INICIO_PORTAL";
                var s = "N";
                var v = "";
                var t = t;
                v = "&PAR_INICIO.COD_REFLOCAL=obtenerDato(4)&PAR_INICIO.COD_REFGLOBAL=refGlobal&PAR_INICIO.COD_CANAL=obtenerDato(2)&PAR_INICIO.COD_BANCOI=obtenerDato(3)";
                var p = "kdpo_mult_web";
                var h = "&PAR_INICIO.PROD_ORI=" + e + "&PAR_INICIO.ACCESO=" + s + "&PAR_INICIO.COD_F_FECHA=" + w + "&PAR_INICIO.COD_F_IMPORT=" + j + "&PAR_INICIO.COD_HUSOHORA=" + x;
                var n = "OPERACION=" + m + "&LOCALE=" + t + h;
                if (z == "localhost") {
                    l = "https://de-hdglobalpibee.es.igrupobbva" + a(u, p, n, v)
                } else {
                    l = "https://" + z + a(u, p, n, v)
                }
                var q = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getLanguage();
                var o = "/kdpo_mult_web/servlet/PIBEE?OPERACION=" + m;
                var b = "";
                if (k == "hdgpibee") {
                    b = "kyop-globaljump-form";
                    t = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getLocaleCMP() + "_GL";
                    if (z == "localhost") {
                        l = "https://de-hdglobalpibee.es.igrupobbva/SGLKDPO/kdpo_mult_web/servlet/PIBEE?pb_url=portal&LOCALE=" + t
                    } else {
                        l = "https://" + z + "/SGLKDPO/kdpo_mult_web/servlet/PIBEE?OPERACION=INICIO_PORTAL&LOCALE=en_GL"
                    }
                    $("#kyop-globaljump-form").attr("action", l)
                } else {
                    b = "kyop-countryjump-form";
                    this.setCountryJumpValues({
                        formAction: l,
                        locale: t,
                        destiny: o,
                        userParam: h,
                        language: q,
                        sessionAst: g,
                        channel: y,
                        bankInt: r,
                        company: f
                    })
                }
                com.bbva.kyop.controller.CoreController.unbindBodyEvent();
                $("#" + b).submit()
            } else {}
        }
    };
    var a = function(f, d, e, g) {
        var b = "";
        b = "/" + f + "/" + d + "/servlet/PIBEE?" + e + g;
        return b
    };
    this.setCountryJumpValues = function(b) {
        $("#kyop-countryjump-form").attr("action", b.formAction);
        $("#kyop-countryjump-locale").val(b.locale);
        $("#kyop-countryjump-destiny").val(b.destiny);
        $("#kyop-countryjump-userparam").val(b.userParam);
        $("#kyop-countryjump-language").val(b.language);
        $("#kyop-countryjump-session-ast").val(b.sessionAst);
        $("#kyop-countryjump-channel").val(b.channel);
        $("#kyop-countryjump-bank").val(b.bankInt);
        $("#kyop-countryjump-company").val(b.company);
        $("#kyop-countryjump-flow").val(b.flow);
        $("#kyop-countryjump-window").val(b.window);
        $("#kyop-countryjump-event").val(b.event)
    };
    this.setCountryJumpMigratedValues = function(b) {
        $("#kyop-countryjump-migrated-form").attr("action", b.formAction);
        $("#kyop-countryjump-migrated-idProduct").val(b.idProduct);
        $("#kyop-countryjump-migrated-locale").val(b.locale);
        $("#kyop-countryjump-migrated-idDateFormat").val(b.idDateFormat);
        $("#kyop-countryjump-migrated-idPriceFormat").val(b.idPriceFormat);
        $("#kyop-countryjump-migrated-idTimeZone").val(b.idTimeZone);
        $("#kyop-countryjump-migrated-language").val(b.language);
        $("#kyop-countryjump-migrated-session-ast").val(b.sessionAst);
        $("#kyop-countryjump-migrated-channel").val(b.channel);
        $("#kyop-countryjump-migrated-bank").val(b.bankInt);
        $("#kyop-countryjump-migrated-company").val(b.company)
    };
    this.generateGlobalNetCashFormValues = function() {
        var e = com.bbva.kyop.util.SessionUtil.getUser().getCompanyInformation().getCompanyId();
        var g = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().getIdSessionAst();
        var d = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().getChannel();
        var b = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().getInternalBank();
        var f = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().getIvUser();
        com.bbva.kyop.util.ExtraParamsUtil.addParam("iv-cod_emp", e);
        com.bbva.kyop.util.ExtraParamsUtil.addParam("iv-id_sesion_ast", g);
        com.bbva.kyop.util.ExtraParamsUtil.addParam("iv-cod_canal", d);
        com.bbva.kyop.util.ExtraParamsUtil.addParam("iv-cod_ban_int", b);
        com.bbva.kyop.util.ExtraParamsUtil.addParam("iv-user", f);
        com.bbva.kyop.controller.ProcessController.setExtraParamsToProcessForm()
    }
};
com.bbva.kyop.controller.RightBannerController = new function() {
    this.integrationBean = null;
    this.sliceInfo = {
        zone: "bannerVertical",
        codMenuLevel1: 0,
        codMenuLevel2: 0
    };
    this.initIntegration = function(a) {
        logger.info("**DPP Entrando en initIntegration con integration bean = " + a + ", " + a.idDivIntegration);
        this.integrationBean = a;
        if (a.idDivIntegration != null && a.idDivIntegration != "") {
            com.bbva.kyop.controller.RightBannerController.renderLoadingStatus(a);
            com.bbva.kyop.controller.RightBannerController.setIntegration(a)
        }
    };
    this.setIntegration = function(a) {
        logger.info("**DPP entrando en SET INTEGRATION y soy: ");
        logger.info(this);
        com.bbva.kyop.controller.AdsController.renderAdsTo(this)
    };
    this.renderLoadingStatus = function(a) {
        logger.info("**DPP cargando imagenes loading Status  id =" + a.idDivIntegration);
        $("#" + a.idDivIntegration).html('<img alt="cargado Publicidad" class="marginTop15 marginLeft25 left" src="./resources/images/common/loadingNBbva.gif" height="20px" width="20px"/>')
    };
    this.render = function(b) {
        logger.info("**DPP llego a render y soy: " + this);
        logger.info(this);
        var a = '<div id="middle-right-slice" class="publicity-right">' + this.generateFromTemplate(b) + "</div>";
        $("#" + this.integrationBean.idDivIntegration).html(a);
        logger.info("Load was performed.");
        this.integrationBean.callbackFn(this.integrationBean)
    };
    this.generateFromTemplate = function(f) {
        var a = "";
        if (f != null && f != undefined) {
            var d = false;
            var b = "";
            var e = "";
            $.each(f, function(g, h) {
                d = false;
                b = h.bannerWindowUrl;
                e = 'style="width:100%;"';
                if ((h.bannerWindowUrl == "" || h.bannerWindowUrl == undefined || h.bannerWindowUrl == null) && (h.bannerIframeUrl != "" && h.bannerIframeUrl != undefined && h.bannerIframeUrl != null)) {
                    d = true;
                    b = h.bannerIframeUrl
                }
                if ((h.bannerWindowUrl == "" || h.bannerWindowUrl == undefined || h.bannerWindowUrl == null) && (h.bannerIframeUrl == "" || h.bannerIframeUrl == undefined || h.bannerIframeUrl == null)) {
                    e = 'style="width:100%; cursor:default;"'
                }
                a = a + "<a onclick='com.bbva.kyop.controller.AdsController.starAd(\"" + b + '","' + h.bannerRegistroActividad + '","' + h.bannerImageAlt + '",' + d + ',"' + com.bbva.kyop.controller.RightBannerController.sliceInfo.zone + '");\'  ><img alt="' + h.bannerImageAlt + '" src="' + h.bannerImageUrl + '" title="' + h.bannerImageAlt + '" class="noiphone noipad" ' + e + " />";
                if (com.bbva.kyop.util.RwdUtil.isRwdEnabled()) {
                    a = a + '<img alt="' + h.bannerImageAlt + '" src="' + h.bannerImageRwdUrl + '" title="' + h.bannerImageAlt + '" class="noweb"  ' + e + " />"
                }
                a = a + "</a>"
            })
        }
        return a
    }
};
com.bbva.kyop.controller.FooterBannerController = new function() {
    this.integrationBean = null;
    this.sliceInfo = {
        zone: "bannerHorizontal",
        codMenuLevel1: 0,
        codMenuLevel2: 0
    };
    this.initIntegration = function(a) {
        logger.info("**DPP Entrando en initIntegration con integration bean = " + a + ", " + a.idDivIntegration);
        this.integrationBean = a;
        if (a.idDivIntegration != null && a.idDivIntegration != "") {
            this.renderLoadingStatus(a);
            this.setIntegration(a)
        }
    };
    this.setIntegration = function(a) {
        com.bbva.kyop.controller.AdsController.renderAdsTo(this)
    };
    this.renderLoadingStatus = function(a) {
        logger.info("**DPP cargando imagenes loading Status  id =" + a.idDivIntegration);
        $("#" + a.idDivIntegration).html('<img alt="cargado Publicidad" class="center" src="./resources/images/common/loadingNBbva.gif" height="20px" width="20px"/>');
        a.callbackFn(a)
    };
    this.render = function(b) {
        logger.info("**DPP llego a render y soy: " + this);
        logger.info(this);
        var a = '<div id="footer-center-slice"><div class="row">' + this.generateFromTemplate(b) + "</div></div>";
        $("#" + this.integrationBean.idDivIntegration).html(a);
        logger.info("Load was performed.");
        this.integrationBean.callbackFn(this.integrationBean)
    };
    this.generateFromTemplate = function(f) {
        var a = "";
        if (f != null && f != undefined) {
            var d = false;
            var b = "";
            var e = "";
            $.each(f, function(g, h) {
                d = false;
                b = h.bannerWindowUrl;
                if ((h.bannerWindowUrl == "" || h.bannerWindowUrl == undefined || h.bannerWindowUrl == null) && (h.bannerIframeUrl != "" && h.bannerIframeUrl != undefined && h.bannerIframeUrl != null)) {
                    d = true;
                    b = h.bannerIframeUrl
                }
                if ((h.bannerWindowUrl == "" || h.bannerWindowUrl == undefined || h.bannerWindowUrl == null) && (h.bannerIframeUrl == "" || h.bannerIframeUrl == undefined || h.bannerIframeUrl == null)) {
                    e = 'style="cursor:default;"'
                }
                a = a + "<a onclick='com.bbva.kyop.controller.AdsController.starAd(\"" + b + '","' + h.bannerRegistroActividad + '","' + h.bannerImageAlt + '",' + d + ',"' + com.bbva.kyop.controller.FooterBannerController.sliceInfo.zone + '");\'  ><img alt="' + h.bannerImageAlt + '" src="' + h.bannerImageUrl + '" title="' + h.bannerImageAlt + '" class="noiphone noipad" ' + e + " />";
                if (com.bbva.kyop.util.RwdUtil.isRwdEnabled()) {
                    a = a + '<img alt="' + h.bannerImageAlt + '" src="' + h.bannerImageRwdUrl + '" title="' + h.bannerImageAlt + '" class="noweb" ' + e + "/>"
                }
                a = a + "</a>"
            })
        }
        return a
    }
};
com.bbva.kyop.controller.DataProcessingController = new function() {
    this.processTranslations = function(v) {
        com.bbva.kyop.controller.LanguageController.loadTranslations(v)
    };
    this.processRedirecciones = function(v) {
        com.bbva.kyop.controller.ProcessController.loadRedirecciones(v)
    };
    var e = function() {
        var y = "https://";
        var x = document.location.hostname;
        var v = "/SGLKYUE/kyue_mult_web/servlet/";
        var w = false;
        com.bbva.kyop.util.UUAASessionManager.add(y + x + v, w)
    };
    this.processUserInfo = function(v) {
        var v = v[0];
        com.bbva.kyop.util.SessionUtil.setUser(com.bbva.kyop.bean.UserBean);
        com.bbva.kyop.util.SessionUtil.getUser().getCompanyInformation().setCompanyId(v.companyInformation.companyId);
        com.bbva.kyop.util.SessionUtil.getUser().getCompanyInformation().setCompanyName(v.companyInformation.companyName);
        com.bbva.kyop.util.SessionUtil.getUser().getCompanyInformation().setCompanyPic(v.companyInformation.companyPic);
        com.bbva.kyop.util.SessionUtil.getUser().getCompanyInformation().setSegmentId(v.companyInformation.segment.code);
        com.bbva.kyop.util.SessionUtil.getUser().getCompanyInformation().setTypeDay(v.companyInformation.typeDay);
        com.bbva.kyop.util.SessionUtil.getUser().getCompanyInformation().setCaixa(v.companyInformation.isCaixa);
        com.bbva.kyop.util.SessionUtil.getUser().getCompanyInformation().setIsLatam(v.companyInformation.isLatam);
        com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().setUserId(v.userInformation.userId);
        com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().setUserName(v.userInformation.userName);
        com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().setUserPic(v.userInformation.userPic);
        com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().setAdmin(v.userInformation.isAdmin);
        com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().setProductList(v.userInformation.productList);
        com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().setProductId(v.userInformation.idProduct);
        com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().setProductIdMigrated(v.userInformation.idProductMigrated);
        com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().setProductMainId(v.userInformation.idMainProduct);
        com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().setProductMainIdMigrated(v.userInformation.idMainProductMigrated);
        com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().setFromLogin(v.userInformation.fromLogin);
        com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().setMultiUser(v.multiUser);
        com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().setReferenciaMonousuario(v.userInformation.referenciaMonousuario);
        com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().setReferenciaLite(v.userInformation.referenciaLite);
        com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().setReferenciaAvanzada(v.userInformation.referenciaAvanzada);
        com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().setReferenciaCreadaEnPnm(v.userInformation.referencePnmCreatedPnm);
        com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().setReferenciaMigradaDePibeeAPnm(v.userInformation.referencePnmMigratedFromPibee);
        com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().setTelefono(v.userInformation.telefono);
        com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().setLatam(v.userInformation.isLatam);
        com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().setGlobalHelpDesk(v.productInformation.isGlobalHelpDesk);
        com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().setLocalHelpDesk(v.productInformation.isLocalHelpDesk);
        com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().setNetCash(v.productInformation.isNetCash);
        com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().setDefaultProcess(v.productInformation.defaultProcess);
        com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().setDefaultService(v.productInformation.defaultService);
        com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().setInternalBank(v.productInformation.internalBank);
        com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().setChannel(v.productInformation.channel);
        com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().setIdSessionAst(v.productInformation.idSessionAst);
        com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().setIdNetCashProduct(v.productInformation.netCashProductId);
        com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().setProductDescription(v.productInformation.productDescription);
        if (com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().isNetCash()) {
            com.bbva.kyop.util.SessionUtil.getUser().getLastAccessInformation().setDay(v.lastAccessInformation.day);
            com.bbva.kyop.util.SessionUtil.getUser().getLastAccessInformation().setMonth(v.lastAccessInformation.month);
            com.bbva.kyop.util.SessionUtil.getUser().getLastAccessInformation().setYear(v.lastAccessInformation.year);
            com.bbva.kyop.util.SessionUtil.getUser().getLastAccessInformation().setTime(v.lastAccessInformation.time);
            com.bbva.kyop.util.SessionUtil.getUser().getLastAccessInformation().setIp(v.lastAccessInformation.ip);
            com.bbva.kyop.util.SessionUtil.getUser().getLastAccessInformation().setDevice(v.lastAccessInformation.device);
            com.bbva.kyop.util.SessionUtil.getUser().getLastAccessInformation().setFooterInfoKey(v.lastAccessInformation.footerInfoKey);
            com.bbva.kyop.util.SessionUtil.getUser().getLastAccessInformation().setDateFormatted(v.lastAccessInformation.date)
        }
        com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().setLanguage(v.regionalInformation.language);
        com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().setDateFormat(v.regionalInformation.dateFormat);
        com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().setPriceFormat(v.regionalInformation.priceFormat);
        com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().setTimeZone(v.regionalInformation.timeZone);
        com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().setIdDateFormat(v.regionalInformation.idTimeZone);
        com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().setIdPriceFormat(v.regionalInformation.idPriceFormat);
        com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().setIdTimeZone(v.regionalInformation.idTimeZone);
        com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().setLocale(v.regionalInformation.language + "_" + v.regionalInformation.codIso);
        com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().setCodIso(v.regionalInformation.codIso);
        com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().setLocaleCMP(v.regionalInformation.localeCMP);
        com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().setIdionaOriginalVacio(v.regionalInformation.idiomaOriginalVacio);
        com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().setHabilitarOpinator(v.regionalInformation.habilitarOpinator);
        com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().setUrlOpinator(v.regionalInformation.urlOpinator);
        com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().setDinamicOpinatorUrl(v.regionalInformation.dinamicOpinatorUrl);
        var w = v.productInformation.channel + v.productInformation.internalBank + v.companyInformation.companyId + v.userInformation.userId;
        com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().setIvUser(w);
        var w = v.productInformation.channel + v.productInformation.internalBank + v.companyInformation.companyId + v.userInformation.userId;
        com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().setIvUser(w);
        com.bbva.kyop.util.SessionUtil.getUser().setUserServices(v.userServices);
        if (v.productInformation.isGlobalHelpDesk) {
            com.bbva.kyop.util.SessionUtil.getUser().getHelpDeskInformation().setGlobal(true)
        }
        if (v.productInformation.isNetCash) {
            com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().setProductType("C")
        } else {
            com.bbva.kyop.util.SessionUtil.getUser().getHelpDeskInformation().setProfile(v.userInformation.profile);
            com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().setProductType("H")
        }
        if (v.productInformation.isGlobalNetCash) {
            com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().setGlobalNetCash(true);
            e()
        } else {
            com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().setGlobalNetCash(false)
        }
        logger.info("SessionUtil.initUser() -");
        logger.info(com.bbva.kyop.util.SessionUtil.getUser())
    };
    this.processConfiguration = function(w) {
        com.bbva.kyop.util.SessionUtil.setConfiguration(com.bbva.kyop.bean.ConfigurationBean);
        com.bbva.kyop.util.SessionUtil.getConfiguration().setDefaultErrorMessageTitleKey(w.defaultErrorMessageTitleKey);
        com.bbva.kyop.util.SessionUtil.getConfiguration().setDefaultErrorMessageTextKey(w.defaultErrorMessageTextKey);
        com.bbva.kyop.util.SessionUtil.getConfiguration().setPathPublicPortal(w.pathPublicPortal);
        com.bbva.kyop.util.SessionUtil.getConfiguration().setUrlSessionLogout(w.urlSessionLogout);
        com.bbva.kyop.util.SessionUtil.getConfiguration().setSessionTimeOut(w.sessionTimeOut);
        com.bbva.kyop.util.SessionUtil.getConfiguration().setPingTimeRequest(w.pingTimeRequest);
        com.bbva.kyop.util.SessionUtil.getConfiguration().setPathWebseal(w.pathWebseal);
        com.bbva.kyop.util.SessionUtil.getConfiguration().setWindowCountDown(w.windowCountDown);
        com.bbva.kyop.util.SessionUtil.getConfiguration().setLoadCampaignOnStart(w.loadCampaignOnStart);
        com.bbva.kyop.util.SessionUtil.getConfiguration().setCampaignTimeout(w.campaignTimeout);
        com.bbva.kyop.util.SessionUtil.getConfiguration().setHelpUrl(w.helpUrl);
        com.bbva.kyop.util.SessionUtil.getConfiguration().setMaxSectionsVisitedShownOnInit(w.maxSectionsVisitedShownOnInit);
        com.bbva.kyop.util.SessionUtil.getConfiguration().setMaxProcessInMainSections(w.maxProcessInMainSections);
        com.bbva.kyop.util.SessionUtil.getConfiguration().setMessageAlertIntegrationJsPath(w.messageAlertIntegrationJsPath);
        com.bbva.kyop.util.SessionUtil.getConfiguration().setMessageAlertIntegrationCssPath(w.messageAlertIntegrationCssPath);
        com.bbva.kyop.util.SessionUtil.getConfiguration().setMessageAlertIntegrationBasePath(w.messageAlertIntegrationBasePath);
        com.bbva.kyop.util.SessionUtil.getConfiguration().setManagerIntegrationJsPath(w.managerIntegrationJsPath);
        com.bbva.kyop.util.SessionUtil.getConfiguration().setManagerIntegrationCssPath(w.managerIntegrationCssPath);
        com.bbva.kyop.util.SessionUtil.getConfiguration().setManagerIntegrationBasePath(w.managerIntegrationBasePath);
        com.bbva.kyop.util.SessionUtil.getConfiguration().setOpenwebIntegrationJsPath(w.openwebIntegrationJsPath);
        com.bbva.kyop.util.SessionUtil.getConfiguration().setOpenwebIntegrationCssPath(w.openwebIntegrationCssPath);
        com.bbva.kyop.util.SessionUtil.getConfiguration().setOpenwebIntegrationBasePath(w.openwebIntegrationBasePath);
        com.bbva.kyop.util.SessionUtil.getConfiguration().setMenuModeHover(w.menuModeHover);
        com.bbva.kyop.util.SessionUtil.getConfiguration().getSessionEndAutomatic().setIdProduct(w.sessionEndAutomaticDto.idProduct);
        com.bbva.kyop.util.SessionUtil.getConfiguration().getSessionEndAutomatic().setEnabled(w.sessionEndAutomaticDto.enabled);
        com.bbva.kyop.util.SessionUtil.getConfiguration().getSessionEndAutomatic().setInitTime(w.sessionEndAutomaticDto.initTime);
        com.bbva.kyop.util.SessionUtil.getConfiguration().getSessionEndAutomatic().setTimeToShowMessage(w.sessionEndAutomaticDto.timeToShowMessage);
        com.bbva.kyop.util.SessionUtil.getConfiguration().getSessionEndAutomatic().setLoginTime(new Date().getTime());
        com.bbva.kyop.util.SessionUtil.getConfiguration().setModeEurasia(w.modeEurasia);
        com.bbva.kyop.util.SessionUtil.getConfiguration().getTelephoneDto().setCodProduct(w.telephoneDto.codProduct);
        com.bbva.kyop.util.SessionUtil.getConfiguration().getTelephoneDto().setEnabled(w.telephoneDto.enabled);
        com.bbva.kyop.util.SessionUtil.getConfiguration().getTelephoneDto().setTelephone(w.telephoneDto.telephone);
        com.bbva.kyop.util.SessionUtil.getConfiguration().setFooterEnabled(w.footerEnabled);
        com.bbva.kyop.util.SessionUtil.getConfiguration().setHomeLocalServiceUrl(w.homeLocalServiceUrl);
        com.bbva.kyop.util.SessionUtil.getConfiguration().setRwdEnabled(w.rwdEnabled);
        com.bbva.kyop.util.SessionUtil.getConfiguration().setMultiSessionEnabled(w.multiSessionEnabled);
        com.bbva.kyop.util.SessionUtil.getConfiguration().setAstSessionPingEnabled(w.astSessionPingEnabled);
        com.bbva.kyop.util.SessionUtil.getConfiguration().setAstSessionPingTime(w.astSessionPingTime);
        com.bbva.kyop.util.SessionUtil.getConfiguration().getRequestConfiguration().setBannerRequestUrl(w.bannerRequestUrl);
        com.bbva.kyop.util.SessionUtil.getConfiguration().getRequestConfiguration().setBannerRequestPpId(w.bannerRequestPpId);
        com.bbva.kyop.util.SessionUtil.getConfiguration().getRequestConfiguration().setBannerRequestPpLifeCycle(w.bannerRequestPpLifeCycle);
        com.bbva.kyop.util.SessionUtil.getConfiguration().getRequestConfiguration().setProcessHelpRequestUrl(w.processHelpRequestUrl);
        com.bbva.kyop.util.SessionUtil.getConfiguration().getRequestConfiguration().setProcessHelpRequestPpId(w.processHelpRequestPpId);
        com.bbva.kyop.util.SessionUtil.getConfiguration().getRequestConfiguration().setProcessHelpRequestPpLifeCycle(w.processHelpRequestPpLifeCycle);
        com.bbva.kyop.util.SessionUtil.getConfiguration().getRequestConfiguration().setContactUsRequestUrl(w.contactUsRequestUrl);
        com.bbva.kyop.util.SessionUtil.getConfiguration().getOpinator().setOpinatorUrlDefault(w.opinatorUrlDefault);
        com.bbva.kyop.util.SessionUtil.getConfiguration().getOpinator().setOpinatorUrlCat(w.opinatorUrlCat);
        com.bbva.kyop.util.SessionUtil.getConfiguration().getOpinator().setOpinatorUrlFr(w.opinatorUrlFr);
        com.bbva.kyop.util.SessionUtil.getConfiguration().getOpinator().setOpinatorUrlGb(w.opinatorUrlGb);
        com.bbva.kyop.util.SessionUtil.getConfiguration().getOpinator().setOpinatorUrlIt(w.opinatorUrlIt);
        com.bbva.kyop.util.SessionUtil.getConfiguration().getOpinator().setOpinatorUrlPt(w.opinatorUrlPt);
        com.bbva.kyop.util.SessionUtil.getConfiguration().getOpinator().setEnableOpinator(w.enableOpinator);
        com.bbva.kyop.util.SessionUtil.getConfiguration().getProductConfiguration().setUrlLogo(w.productConfiguration.urlLogo);
        com.bbva.kyop.util.SessionUtil.getConfiguration().getProductConfiguration().setAltLogo(com.bbva.kyop.util.I18nUtil.getText(w.productConfiguration.altLogo));
        com.bbva.kyop.util.SessionUtil.getConfiguration().getProductConfiguration().setUrlIndex(w.productConfiguration.urlIndex);
        com.bbva.kyop.util.SessionUtil.getConfiguration().setActiveHelpEnabled(w.activeHelpEnabled);
        var v = com.bbva.kyop.controller.CoreController.getIntegrationParameter();
        if (v == 0) {
            com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateAlerts(false);
            com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateMessages(false);
            com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateFavoriteAccounts(false);
            com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateBanners(false);
            com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateManager(false);
            com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateOpenweb(false)
        } else {
            if (v == 1) {
                com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateAlerts(true);
                com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateMessages(false);
                com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateFavoriteAccounts(false);
                com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateBanners(false);
                com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateManager(false);
                com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateOpenweb(false)
            } else {
                if (v == 2) {
                    com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateAlerts(true);
                    com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateMessages(true);
                    com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateFavoriteAccounts(false);
                    com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateBanners(false);
                    com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateManager(false);
                    com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateOpenweb(false)
                } else {
                    if (v == 3) {
                        com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateAlerts(true);
                        com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateMessages(true);
                        com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateFavoriteAccounts(true);
                        com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateBanners(false);
                        com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateManager(false);
                        com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateOpenweb(false)
                    } else {
                        if (v == 4) {
                            com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateAlerts(true);
                            com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateMessages(true);
                            com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateFavoriteAccounts(true);
                            com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateBanners(true);
                            com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateManager(false);
                            com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateOpenweb(false)
                        } else {
                            if (v == 5) {
                                com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateAlerts(true);
                                com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateMessages(true);
                                com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateFavoriteAccounts(true);
                                com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateBanners(true);
                                com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateManager(true);
                                com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateOpenweb(false)
                            } else {
                                com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateAlerts(true);
                                com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateMessages(true);
                                com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateFavoriteAccounts(true);
                                com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateBanners(true);
                                com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateManager(true);
                                com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().setIntegrateOpenweb(true)
                            }
                        }
                    }
                }
            }
        }
        logger.info("SessionUtil.initConfiguration() -");
        logger.info(com.bbva.kyop.util.SessionUtil.getConfiguration())
    };
    this.processHomeSlices = function(w) {
        var v = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().isNetCash();
        if (v) {
            com.bbva.kyop.controller.HomeController.manageHomeSlices(w)
        }
    };
    this.processPortalLanguage = function(A) {
        var v = com.bbva.kyop.controller.CoreController.getCookie("COD_IDIOMISO");
        var w = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getLanguage();
        var y = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().isGlobalNetCash();
        var B = com.bbva.kyop.controller.DataProcessingController.userServicesIsEmptyAndIsMainProduct();
        var C = v;
        if (C != null && C.length > 1) {
            C = C.substring(0, 2)
        }
        var D = com.bbva.kyop.util.SessionUtil.getUser().getCompanyInformation().getIsLatam();
        var z = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getIdionaOriginalVacio();
        var x = D && (z == "S");
        logger.info("Latam / idiomaOriginalVacio / idiomaVacio: " + D + " / " + z + " / " + x);
        if (x) {
            logger.info("Latam / Primer Acceso: Se cambia el lenguage a: " + v);
            if (v == null || $.trim(v) == "") {
                v = w;
                logger.info("Latam / Primer Acceso: Se sobreescribe el lenguage a: " + v)
            }
            logger.info("Latam / Primer Acceso: Se cambia el lenguage");
            com.bbva.kyop.controller.LanguageController.changeLanguage(v)
        } else {
            if (!x && v == null || $.trim(v) == "" || C == w || y || B) {
                if (A != null && A != "") {
                    A()
                }
            } else {
                $("#kyop-contentholder").hide();
                com.bbva.kyop.controller.CoreController.createPortalEvents();
                com.bbva.kyop.util.MessageBoxUtil.showMessageBoxConfirm(com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.lang.change"), com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.lang.question.1") + com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.lang.question.2"), function() {
                    logger.info("Se cambia el lenguage a: " + v);
                    if (v == null || $.trim(v) == "") {
                        v = w;
                        logger.info("Se sobreescribe el lenguage a: " + v)
                    }
                    logger.info("Se cambia el lenguage");
                    com.bbva.kyop.controller.LanguageController.changeLanguage(v)
                }, function() {
                    logger.info("Se deja el que está");
                    var G = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductId();
                    logger.info("processPortalLanguage se ha preguntado si es compass valor producto: " + G);
                    if (G == "008" && w == "en") {
                        languageKey = "en_US";
                        logger.info("processPortalLanguage se ha sobreescrito la cookie de idioma: " + w)
                    }
                    com.bbva.kyop.controller.CoreController.setCookie("COD_IDIOMISO", w);
                    var E = com.bbva.kyop.controller.CoreController.getCookie("INICIO");
                    var F = com.bbva.kyop.controller.LanguageController.getCookiPaisFromCookieInicioAndCodIdiomiso(E, w);
                    com.bbva.kyop.controller.CoreController.setCookie("PAIS", F);
                    if (A != null && A != "") {
                        A()
                    }
                })
            }
        }
    };
    this.processActiveElements = function(v) {
        com.bbva.kyop.controller.DataProcessingController.processElements(v)
    };
    this.processElements = function(A) {
        com.bbva.kyop.controller.MenuController.fillActiveElementsBean(A);
        var J = "";
        var C = "";
        var E = "";
        var x = "";
        var I = "";
        var F = A[2].enabled;
        var D = A[3].enabled;
        var z = A[6].enabled;
        if (!com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().getIntegrateMessages()) {
            F = false
        }
        if (!com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().getIntegrateAlerts()) {
            D = false
        }
        if (!com.bbva.kyop.util.SessionUtil.getConfiguration().getPortalIntegration().getIntegrateManager()) {
            z = false
        }
        var w = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductMainId();
        if (w == "210" || w == "212" || w == "211") {
            F = false;
            D = false
        }
        var y = {
            messagesButtonEnabled: F,
            alertsButtonEnabled: D,
            managerButtonEnabled: z
        };
        com.bbva.kyop.controller.MenuController.setMenuInPortal(y, "#kyop-active-header-buttons-tmpl", "#kyop-active-header-buttons-container");
        if (y.messagesButtonEnabled) {
            J = "kyop-integration-messages";
            E = "kyop-integration-messages-rwd"
        }
        if (y.alertsButtonEnabled) {
            C = "kyop-integration-alerts";
            x = "kyop-integration-alerts-rwd"
        }
        if (y.messagesButtonEnabled || y.alertsButtonEnabled) {
            I = "kyop-integration-number-rwd";
            logger.debug("Antes y fuera del hilo createIntegrationAlertsMessagesBean" + new Date());
            var H = setTimeout(function() {
                try {
                    var K = com.bbva.kyop.controller.MenuController.createIntegrationAlertsMessagesBean(C, J, x, E, I, "");
                    com.bbva.kyop.controller.MenuController.loadActiveElements(function() {
                        logger.debug("Antes y dentro del hilo kynfInitIntegration" + new Date());
                        com.bbva.kynf.component.Integration.kynfInitIntegration(K);
                        logger.debug("Despues y dentro del hilo kynfInitIntegration" + new Date())
                    })
                } catch (L) {
                    logger.error("** Error al integrar el módulo de alertas y mensajes con el portal **");
                    logger.error(L);
                    logger.error("** Fin de la traza **")
                }
            }, 5);
            logger.debug("Despues y fuera del hilo createIntegrationAlertsMessagesBean" + new Date())
        }
        if (com.bbva.kyop.util.SessionUtil.getConfiguration().getManagerIntegrationJsPath() == null) {
            y.managerButtonEnabled = false;
            $("#kyop-integration-manager").remove()
        }
        if (y.managerButtonEnabled) {
            strDivIntegrationManager = "kyop-integration-manager";
            strDivIntegrationManagerRwd = "kyop-integration-manager-rwd"
        }
        if (y.managerButtonEnabled) {
            logger.debug("Antes y fuera del hilo createIntegrationManagerBean" + new Date());
            var H = setTimeout(function() {
                try {
                    var K = com.bbva.kyop.controller.MenuController.createIntegrationManagerBean(strDivIntegrationManager, strDivIntegrationManagerRwd, "");
                    com.bbva.kyop.controller.MenuController.loadActiveElementsManager(function() {
                        logger.debug("Antes y dentro del hilo managerInitIntegration" + new Date());
                        com.bbva.ergs.component.Integration.ergsInitIntegration(K);
                        logger.debug("Despues y dentro del hilo managerInitIntegration" + new Date())
                    })
                } catch (L) {
                    logger.error("** Error al integrar el módulo de mi gestor con el portal **");
                    logger.error(L);
                    logger.error("** Fin de la traza **")
                }
            }, 5);
            logger.debug("Despues y fuera del hilo createIntegrationManagerBean" + new Date())
        }
        if (com.bbva.kyop.util.SessionUtil.getConfiguration().getOpenwebIntegrationJsPath() != null) {
            logger.debug("Antes y fuera del hilo createIntegrationOpenwebBean" + new Date());
            var H = setTimeout(function() {
                try {
                    com.bbva.kyop.controller.MenuController.loadActiveElementsOpenweb()
                } catch (K) {
                    logger.error("** Error al integrar el módulo de openweb con el portal **");
                    logger.error(K);
                    logger.error("** Fin de la traza **")
                }
            }, 5);
            logger.debug("Despues y fuera del hilo createIntegrationOpenwebBean" + new Date())
        }
        var G = A[4].enabled;
        var B = A[5].enabled;
        if (com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().isHelpDesk()) {
            G = A[7].enabled;
            B = A[8].enabled
        }
        var v = {
            launchProcessMenuOptionEnabled: G,
            reverseCallerMenuOptionEnabled: B
        };
        com.bbva.kyop.controller.MenuController.setMenuInPortal(v, "#kyop-active-launchProcess-reverseCaller-tmpl", "#kyop-active-launchProcess-reverseCaller-container")
    };
    this.processActiveCampaigns = function(v) {
        com.bbva.kyop.controller.CampaignController.loadActiveCampaigns(v)
    };
    this.postProcessActiveElements = function() {
        if (!com.bbva.kyop.util.ActiveElementsBean.get("favorites")) {
            $("#kyop-favorite-button").hide()
        }
        if (!com.bbva.kyop.util.ActiveElementsBean.get("help")) {
            $("#kyop-help-button").hide()
        }
    };
    var f = function() {
        if (com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().isHelpDesk()) {
            return 'scrolling = "auto"'
        } else {
            return 'scrolling = "no"'
        }
    };
    this.postProcessNetCashElements = function() {
        var D = com.bbva.kyop.controller.CoreController.getHelpDeskLatamActivatedParameter();
        var y = com.bbva.kyop.util.SessionUtil.getConfiguration().getModeEurasia();
        var v = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().isNetCash();
        var x = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().isGlobalHelpDesk();
        var E = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().isLocalHelpDesk();
        var G = x || E;
        var I = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().isLatam();
        if (G) {
            $("#kyop-central-home").remove();
            $("#kyop-campaigns-lightbox-container-div").remove();
            $("#kyop-central-favorites").remove();
            if (y) {
                $("#kyop-li-menuOption-selectCompany").show()
            } else {
                $("#kyop-li-menuOption-latam-selectCompany").show()
            }
            if (I) {
                $("#empresaBoss").remove()
            }
        }
        if (D == 1) {
            $("#kyop-li-menuOption-latam-selectCompany").show()
        }
        var A = '<iframe id="kyop-central-load-area" name="kyop-central-load-area"  onload="com.bbva.kyop.controller.CoreController.iFrameOnLoad(this);window.scrollTo(0,0);" style="display: none; position: absolute; width: 100%; height:100%" frameborder="0" hspace="0" marginheight="0" marginwidth="0" ' + f() + ' src="" style="border: 0px;overflow-x: auto" vspace="0" title="Invocacion de Posición Global"></iframe>';
        logger.debug("[1244] - postProcessNetCashElements: se crea el iframe inyectandolo en el contenedor." + A);
        $("#kyop-central-load-area-container").html(A);
        var z = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().getDefaultProcess();
        var w = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().getDefaultService();
        var J = (z != "") && (z != undefined) && (z != null);
        if (J) {
            var C = '<iframe id="kyop-central-defaultprocess-load-area" onload="com.bbva.kyop.controller.CoreController.iFrameOnLoadHomeProcess()" style="display: none; height:100%; position: absolute; width: 100%;" frameborder="0" hspace="0" marginheight="0" marginwidth="0" name="kyop-central-defaultprocess-load-area" scrolling="no" src="" style="border: 0px" vspace="0"></iframe>';
            $("#kyop-central-defaultprocess-load-area-container").html(C);
            com.bbva.kyop.controller.ProcessController.launchDefaultHomeProcess(z)
        } else {
            if (x) {
                var B = $("#kyop-global-helpdesk-img").attr("asrc");
                $("#kyop-global-helpdesk-img").attr("src", B);
                var H = $("#kyop-select-company-search-img").attr("asrc");
                $("#kyop-select-company-search-img").attr("src", H);
                $("#kyop-central-global-helpdesk-home").show();
                $("#kyop-central-local-helpdesk-home").remove()
            }
            if (E) {
                var F = $("#kyop-local-helpdesk-img").attr("asrc");
                $("#kyop-local-helpdesk-img").attr("src", F);
                var H = $("#kyop-select-company-search-img").attr("asrc");
                $("#kyop-select-company-search-img").attr("src", H);
                $("#kyop-central-global-helpdesk-home").remove();
                $("#kyop-central-local-helpdesk-home").show()
            }
        }
    };
    var o = function(w) {
        if (w == null || typeof(w) == "undefined") {
            return w
        }
        if (w.lastIndexOf(".") == -1) {
            return w
        }
        var x = w.substr(w.lastIndexOf("."));
        var v = w.substr(0, w.lastIndexOf("."));
        return v + "_hover" + x
    };
    var q = function(x, w, v) {
        var y = $.map(x, function(A, z) {
            return {
                idMenu: A.idMenu,
                level: A.level,
                order: A.order,
                newMenu: A.newMenu,
                childrenList: A.childrenList,
                terminal: A.terminal,
                codI18n: A.codI18nShort,
                suffixId: w,
                desImgMenu: A.desImgMenu,
                desImgMenuHover: o(A.desImgMenu),
                hiddenInRwd: A.hiddenInRwd,
                tipoIcono: A.tipoIcono,
                tipoIconoPropio: A.tipoIconoPropio
            }
        });
        com.bbva.kyop.controller.MenuController.setMenuInPortal(y, "#kyop-menuOptions", v)
    };
    var m = function(v) {
        if (v.terminal) {
            var w = 'com.bbva.kyop.controller.MenuController.selectMenuHoverOption("{0}", true)';
            return com.bbva.kyop.util.I18nUtil.stringFormat(w, v.idMenu)
        } else {
            return ""
        }
    };
    var p = function(v) {
        if (v.level == 1 && !v.terminal) {
            return "<span class='flechaAbajoMenuGris'></span>"
        }
        return ""
    };
    var r = function(v) {
        if (v.terminal) {
            return "terminal"
        }
        return ""
    };
    var d = function(v) {
        var w = com.bbva.kyop.util.SessionUtil.getUser().getRegionalInformation().getLanguage();
        if (v.newMenu) {
            if (w == "en") {
                return '<img  class="kyop-icon-connection" src="./resources/images/common/nuevo_en.png"/>'
            } else {
                if (w == "es") {
                    return '<img  class="kyop-icon-connection" src="./resources/images/common/nuevo.png"/>'
                } else {
                    if (w == "it") {
                        return '<img  class="kyop-icon-connection" src="./resources/images/common/nuevo_it.png"/>'
                    } else {
                        if (w == "ca") {
                            return '<img  class="kyop-icon-connection" src="./resources/images/common/nuevo_ca.png"/>'
                        } else {
                            if (w == "pt") {
                                return '<img  class="kyop-icon-connection" src="./resources/images/common/nuevo_pt.png"/>'
                            } else {
                                if (w == "fr") {
                                    return '<img  class="kyop-icon-connection" src="./resources/images/common/nuevo_fr.png"/>'
                                } else {
                                    return '<img  class="kyop-icon-connection" src="./resources/images/common/nuevo.png"/>'
                                }
                            }
                        }
                    }
                }
            }
        }
        return ""
    };
    var l = function(v) {
        return "kyop-item-menu-hover-" + v.idMenu
    };
    var k = function(v) {
        var w = "<li id='" + l(v) + "' class='" + r(v) + "'><a href='#' onclick='" + m(v) + "'>";
        w += com.bbva.kyop.util.I18nUtil.getText(v.codI18nShort);
        w += d(v);
        w += "</a>" + p(v);
        return w
    };
    var j = function() {
        return "</li>"
    };
    var u = function(w) {
        if (w == null || typeof(w) == "undefined" || w.length == 0) {
            return ""
        }
        var v = "<ul>";
        $.each(w, function(x, y) {
            v += k(y);
            v += u(y.childrenList);
            v += j()
        });
        v += "</ul>";
        return v
    };
    var s = function(w) {
        var v = u(w);
        $("#kyop-menuLateral").append($("<div class='menuModeHover'></div>").html(v))
    };
    var t = function(v) {
        com.bbva.kyop.controller.MenuController.loadMenus(v, "03", null);
        logger.info("*** MENUS PRIMER NIVEL ****");
        logger.info("*** MENUS ****");
        logger.info(com.bbva.kyop.util.MenuUtil.getAll())
    };
    this.processLeftMenu = function(v) {
        t(v);
        if (com.bbva.kyop.util.SessionUtil.getConfiguration().isMenuModeHover()) {
            s(v)
        } else {
            q(v, "-menuLeft", "#kyop-menuLateral")
        }
    };
    var a = function(z, w, x, y) {
        var v = {
            functionText: w,
            text: z,
            desImgMenu: y,
            desImgMenuHover: y
        };
        com.bbva.kyop.controller.MenuController.setMenuInPortal(v, "#kyop-menuBasicItem", x)
    };
    var g = function(x, w) {
        var v = {
            idItemLi: x
        };
        com.bbva.kyop.controller.MenuController.setMenuInPortal(v, "#kyop-menuBasicContainerItem", w)
    };
    var h = function() {
        if (isLocalhost) {
            a("Alertas", 'alert("Integración de alertas en local")', "#kyop-menu-rwd-ul", "ico_alertas.png");
            a("Mensajes", 'alert("Integración de mensajes en local")', "#kyop-menu-rwd-ul", "ico_mensajes.png")
        } else {
            g("kyop-integration-alerts-rwd", "#kyop-menu-rwd-ul");
            g("kyop-integration-messages-rwd", "#kyop-menu-rwd-ul");
            g("kyop-integration-manager-rwd", "#kyop-menu-rwd-ul")
        }
    };
    var b = function() {
        return $("#kyop-menu-rwd-ul").length > 0
    };
    this.processRwdMenus = function(v, w) {
        if (b()) {
            q(v, "-rwd", "#kyop-menu-rwd-ul");
            q(w, "-rwd", "#kyop-menu-rwd-ul");
            h();
            a(com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.exit"), "com.bbva.kyop.util.SessionUtil.portalLogout()", "#kyop-menu-rwd-ul", "ico_cerrar.png")
        }
    };
    this.processFirstHeaderMenu = function(N) {
        var I = N[0].menus;
        var w = N[0].profile;
        com.bbva.kyop.controller.MenuController.loadMenus(I, "01", null);
        com.bbva.kyop.controller.MenuController.loadMenus(w, "01", null);
        logger.info("*** MENUS ****");
        logger.info(com.bbva.kyop.util.MenuUtil.getAll());
        var F = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getUserName();
        com.bbva.kyop.controller.CoreController.setCookie("UNAME", F);
        var O = com.bbva.kyop.util.SessionUtil.getUser().getCompanyInformation().getCompanyName();
        com.bbva.kyop.controller.CoreController.setCookie("CNAME", O);
        var L = com.bbva.kyop.util.SessionUtil.getUser().getCompanyInformation().getCompanyId();
        var H = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().isMultiUser();
        var J = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().isAdmin();
        var D = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().isGlobalNetCash();
        var G = {
            firstHeaderMenuOptions: I,
            isMultiUser: H,
            isAdmin: J
        };
        var y = {
            infoUserOptions: w,
            userName: F,
            companyId: L,
            isGlobalNetCash: D
        };
        com.bbva.kyop.controller.MenuController.setMenuInPortal(y, "#kyop-user-info-tmpl", "#kyop-user-info-container");
        com.bbva.kyop.controller.MenuController.setMenuInPortal(G, "#kyop-header-first-menu-tmpl", "#kyop-header-first-menu-container");
        var M = y.userName;
        var P = M.split(" ");
        var C = 1;
        var v = "";
        while (C < P.length) {
            v += P[C];
            if (C != P.length - 1) {
                v += " "
            }
            C++
        }
        $("#nombreUsuarioResp").html("<span class='darker'> " + P[0] + " </span>");
        $("#ApellidosUsuarioResp").html("<span style = 'text-overflow: ellipsis; overflow: hidden; white-space: nowrap; display: block; ' class='darker'> " + v + " </span>");
        $("#referenciaUsuarioResp").html("<span> " + y.companyId + " </span>");
        var E = com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.i.common.ref");
        $("#nombreDeReferenResp").html("<span> " + E + " </span>");
        var A = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductId();
      /*  if (A != "002") {
            var B = "";
            var x = "";
            var z = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getUserId();
            if (window.location.hostname != "localhost") {
                var K = window.location.pathname.split("/")[1].substring(0, 3) + "KYGU"; + new Date().getTime();
                x = "/" + K + "/kygu_mult_web_pub/frontusuario/" + y.companyId + z + ".jpg?" + new Date().getTime();
                B = "/" + K + "/kygu_mult_web_pub/images/perfilVacio.jpg?" + new Date().getTime()
            } else {
                x = "./resources/images/users/a.jpg";
                B = "./resources/images/perfilVacio.jpg"
            }
            $.ajax({
                url: x,
                type: "HEAD",
                error: function() {
                    $("#imgPerfil").attr("src", B)
                },
                success: function() {
                    $("#imgPerfil").attr("src", x)
                }
            })
        }*/
    };
    this.getClassNoCursorIfIsHelpDesk = function() {
        if (com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().isHelpDesk()) {
            return "kyop-cursor-auto"
        }
        return ""
    };
    this.processCountryJump = function(L) {
        var x = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductId();
        var H = "";
        $.each(L, function(O, P) {
            if (P.productPibee == x) {
                H = com.bbva.kyop.util.I18nUtil.getText(P.key);
                P.currentProduct = true
            } else {
                P.currentProduct = false
            }
        });
        var D = {
            countries: L,
            currentProductText: H
        };
        com.bbva.kyop.controller.MenuController.setMenuInPortal(D, "#kyop-tooltip-countryjump-tmpl", "#kyop-tooltip-countryjump-container");
        $("#paisResp").html("<span> " + H + " </span>");
        $("#paisSeleccionado").html(H);
        var v = com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.select.country");
        var B = com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.country");
        $("#textoPais").html(v);
        $("#textoUsuPais").html("<span class='darker'> " + B + " </span>");
        var C = D.countries;
        var z = C.length;
        for (i = 0; i < z; i++) {
            var K = com.bbva.kyop.util.I18nUtil.getText(C[i].key);
            var F = C[i].junction;
            var J = C[i].productPibee;
            var N = C[i].sameInstallation;
            var A = C[i].remote;
            var M = C[i].channel;
            var E = C[i].bankInt;
            var w = C[i].codCompany;
            var I = C[i].locale;
            var y = C[i].idSessionAst;
            if (K != H) {
                if (com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().isHelpDesk()) {
                    var G = "<li class='marginBottom10' onclick='com.bbva.kyop.controller.CountryJumpController.countryJumpHelpDesk(&quot;" + J + "&quot; ,&quot;" + N + "&quot; ,&quot;" + A + "&quot; ,&quot;" + F + "&quot; ,&quot;" + M + "&quot; ,&quot;" + E + "&quot; ,&quot;" + w + "&quot; ,&quot;" + I + "&quot; ,&quot;" + y + "&quot;)'><a id='kyop-pais-rwd-" + i + "'>" + K + "</a></li>";
                    $("#listadoPais").append(G)
                } else {
                    if (F == "") {
                        var G = "<li class='marginBottom10' onclick='com.bbva.kyop.controller.CountryJumpController.changeAuxReference(&quot;" + J + "&quot;)'><a id='kyop-pais-rwd-" + i + "'>" + K + "</a></li>";
                        $("#listadoPais").append(G)
                    } else {
                        var G = "<li class='marginBottom10' onclick='com.bbva.kyop.controller.CountryJumpController.countryJump(&quot;" + J + "&quot; ,&quot;" + N + "&quot; ,&quot;" + A + "&quot; ,&quot;" + F + "&quot; ,&quot;" + M + "&quot; ,&quot;" + E + "&quot; ,&quot;" + w + "&quot; ,&quot;" + I + "&quot; ,&quot;" + y + "&quot;)'><a id='kyop-pais-rwd-" + i + "'>" + K + "</a></li>";
                        $("#listadoPais").append(G)
                    }
                }
            }
        }
    };
    this.processSecondHeaderMenu = function(z) {
        var B = z[0].menus;
        var C = z[0].favorites;
        var x = z[0].languages;
        var D = "No definido";
        $.each(x, function(F, G) {
            if (G.defaultLanguage == true) {
                D = com.bbva.kyop.util.I18nUtil.getText(G.codI18n)
            }
        });
        com.bbva.kyop.controller.MenuController.loadMenus(B, "02", null);
        logger.info("*** MENUS ****");
        logger.info(com.bbva.kyop.util.MenuUtil.getAll());
        var A = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().isGlobalNetCash();
        var v = com.bbva.kyop.util.SessionUtil.getConfiguration().getTelephoneDto();
        var y = {
            secondHeaderMenuOptions: B,
            defaultLanguage: D,
            isGlobalNetCash: A,
            telephone: v.toJson()
        };
        var w = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductId();
        if (w == "002") {
            y.telephone.telephone = com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.header.contact")
        }
        com.bbva.kyop.controller.MenuController.setMenuInPortal(y, "#kyop-header-second-menu-tmpl", "#kyop-header-second-menu-container");
        $("#idiomaResp").html("<span> " + y.defaultLanguage + " </span>");
        $("#idiomaSeleccionado").html(y.defaultLanguage);
        com.bbva.kyop.util.CalculatorSizeElementsUtil.calculateWidthContainerLanguages();
        com.bbva.kyop.controller.FavoriteController.getHeaderFavorites(C);
        if (!A) {
            com.bbva.kyop.controller.LanguageController.getHeaderLanguages(x)
        }
        var E = x.length;
        if (E <= 1) {
            $("#kyop-languages-button").hide()
        }
    };
    this.processFooterMenu = function(v) {
        var w = {
            footerMenuOptions: v
        };
        com.bbva.kyop.controller.MenuController.setMenuInPortal(w, "#kyop-footer-menu-tmpl", "#kyop-footer-menu-container")
    };
    this.processActivityRegisterInfo = function(w) {
        var v = com.bbva.kyop.bean.ActivityRegisterRequiredBean;
        v.setAjaxRequest(false);
        v.setTestConnection(false);
        v.setMethod("POST");
        v.setUrlWebTrends(w[0].urlWebtrends);
        v.setDomain(w[0].domain);
        v.setFpcDom(w[0].fpcDom);
        v.setDcsid(w[0].dcsid);
        v.setIpClient(w[0].ip);
        v.setUser(w[0].user);
        v.setCompany(w[0].company);
        v.setSession(w[0].session);
        v.setLoginProcess(w[0].loginProcess);
        v.setLogoutProcess(w[0].logoutProcess);
        com.bbva.kyop.component.ActivityRegister.setActivityRegisterRequiredBean(v);
        com.bbva.kyop.component.ActivityRegister.setIFrameCount(0)
    };
    this.processFavoriteAdmin = function(v) {
        com.bbva.kyop.controller.FavoriteController.refreshFavoritesAdmin(v)
    };
    this.processLoadCallerMap = function(w) {
        var v = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().isNetCash();
        if (v) {
            com.bbva.kyop.controller.ReverseCallerController.loadReverseCallerMap(w);
            logger.debug("**** MAPEO INVOCADOR ****");
            logger.debug(com.bbva.kyop.util.ReverseCallerMapUtil.getAll())
        }
    };
    this.processProductsForHelpDesk = function(x) {
        var w = com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().isNetCash();
        if (!w) {
            var v = {
                companies: x
            };
            com.bbva.kyop.controller.MenuController.setMenuInPortal(v, "#kyop-helpdesk-select-company-combo-tmpl", "#kyop-helpdesk-select-company-combo-container")
        }
    };
    this.processOfficeSegment = function() {
        var y = com.bbva.kyop.util.SessionUtil.getUser().getCompanyInformation().getTypeDay();
        if (y == "P") {
            var A = com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.office.dayn.alertkey_1");
            var z = com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.office.dayn.alertkey_2");
            var x = com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.office.dayn.alertkey_3");
            var w = "<span>" + A + z + x + "</span>";
            $("#kyop-office-segment-day").html(w);
            com.bbva.kyop.controller.MenuRwdController.changeAttrAsrcForSrc("#kyop-office-segment");
            $("#kyop-office-segment").show()
        } else {
            if (y == "D") {
                var A = com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.office.dayd.alertkey_1");
                var z = com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.office.dayd.alertkey_2");
                var x = com.bbva.kyop.util.I18nUtil.getText("kyop.ntcsh.office.dayd.alertkey_3");
                var v = "<span>" + A + '<a href="#" onclick="com.bbva.kyop.controller.CoreController.showRelocatedAccounts()">' + z + "</a>" + x + "</span>";
                $("#kyop-office-segment-day").html(v);
                com.bbva.kyop.controller.MenuRwdController.changeAttrAsrcForSrc("#kyop-office-segment");
                $("#kyop-office-segment").show()
            }
        }
    };
    this.showPortal = function() {
        $("#kyop-container-body").hide().fadeIn(100);
        com.bbva.kyop.util.RwdUtil.setMarginTopToKyopBody()
    };
    this.processPortal = function() {
        if (isLocalhost) {
            com.bbva.kyop.controller.ConnectionController.initTaskCheckConnection()
        }
        if (com.bbva.kyop.util.SessionUtil.getUser().getProductInformation().isHelpDesk()) {
            com.bbva.kyop.util.RwdUtil.setRwdEnabled(false)
        } else {
            com.bbva.kyop.util.RwdUtil.setRwdEnabled(com.bbva.kyop.util.SessionUtil.getConfiguration().isRwdEnabled());
            com.bbva.kyop.util.RwdUtil.addClassesRwdToBody()
        }
        com.bbva.kyop.util.StoreJSUtil.set("min/kyop-all.js", "min/kyop-all.js");
        com.bbva.kyop.controller.MenuController.createMenuOptionCombo();
        com.bbva.kyop.controller.MenuController.getLogoInfo();
        com.bbva.kyop.controller.DataProcessingController.processOfficeSegment();
        com.bbva.kyop.controller.BreadcrumbController.initBreadcrumb();
        com.bbva.kyop.controller.MenuController.getFooterInfo();
        com.bbva.kyop.controller.MenuController.getUserInfo();
        com.bbva.kyop.controller.SearchController.createSearchComboFromMenus(com.bbva.kyop.util.MenuUtil.getAll());
        logger.info("App Loader - Mostrando portal...");
        $("#kyop-contentholder").hide();
        com.bbva.kyop.controller.LanguageController.renderTranslations();
        com.bbva.kyop.util.AdBoxVerticalUtil.init();
        com.bbva.kyop.util.AdBoxHorizontalUtil.init();
        com.bbva.kyop.controller.DataProcessingController.postProcessActiveElements();
        com.bbva.kyop.controller.DataProcessingController.postProcessNetCashElements();
        com.bbva.kyop.controller.CoreController.loadPortalPictures();
        com.bbva.kyop.controller.CoreController.foldPortalFrames();
        com.bbva.kyop.controller.CoreController.resizePortal();
        com.bbva.kyop.controller.CoreController.resizeHomeContent();
        var v = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().isFromLogin();
        if (v) {
            setTimeout(function() {
                com.bbva.kyop.controller.CoreController.setLastAccessIp();
                com.bbva.kyop.controller.CoreController.registerLogin()
            }, 100)
        }
        com.bbva.kyop.controller.CoreController.createPortalEvents();
        if (!com.bbva.kyop.util.SessionUtil.getConfiguration().isFooterEnabled()) {
            $(".kyop-footer-info-container-wrapper").remove()
        } else {
            com.bbva.kyop.controller.ProcessHelpController.showButtonHelpDirect()
        }
        var w = com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductId();
        if (w == "211") {
            document.title = "BBVA net advance"
        }
        if (w == "210") {
            $("#kyop-footer-link-1").remove();
            document.title = "BBVA Finet"
        }
        com.bbva.kyop.util.SessionUtil.startTimer();
        com.bbva.kyop.util.HistoryBackUtil.disableBackAndForwardBrowserButtons();
        com.bbva.kyop.util.RwdUtil.setMarginTopToKyopBody()
    };
    this.processFrequentlyOperations = function(v) {
        com.bbva.kyop.bean.FrequentlyOperationsBean.setFrequentlyOperations(v)
    };
    var n = function() {
        return com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductId() == com.bbva.kyop.util.SessionUtil.getUser().getUserInformation().getProductMainId()
    };
    this.redirectToLoginIfUserServicesIsEmpty = function() {
        var v = this.userServicesIsEmptyAndIsMainProduct();
        if (v) {
            com.bbva.kyop.controller.CoreController.setCookie("CODIGO_ERROR", "NO_SERVICES");
            com.bbva.kyop.util.SessionUtil.endSessions(true)
        }
        return v
    };
    this.userServicesIsEmptyAndIsMainProduct = function() {
        var w = com.bbva.kyop.util.SessionUtil.getUser().getUserServices();
        var v = w == null || typeof(w) == "undefined" || w.length == 0;
        return v && n()
    }
};
com.bbva.kyop.controller.ExecutionPlanController = new function() {
    var p = new com.bbva.kyop.component.Task();
    var l = new com.bbva.kyop.component.Task();
    var o = new com.bbva.kyop.component.Task();
    var f = new com.bbva.kyop.component.Task();
    var j = new com.bbva.kyop.component.Task();
    var n = new com.bbva.kyop.component.Task();
    var g = new com.bbva.kyop.component.Task();
    var k = new com.bbva.kyop.component.Task();
    var e = new com.bbva.kyop.component.Task();
    var m = new com.bbva.kyop.component.Task();
    var b = new com.bbva.kyop.component.Task();
    var a = new com.bbva.kyop.component.Task();
    var d = new com.bbva.kyop.component.Task();
    var h = new com.bbva.kyop.component.Task();
    this.initTasksList = function() {
        p.setName("Traducciones");
        p.setRunFunction(function() {
            logger.info("App Loader - Cargando traducciones...");
            com.bbva.kyop.controller.LanguageController.getTranslations(function(q) {
                p.setData(q);
                p.callbackFn(q)
            })
        });
        l.setName("Datos usuario");
        l.setRunFunction(function() {
            logger.info("App Loader - Cargando datos del usuario...");
            com.bbva.kyop.util.SessionUtil.getUserInfo(function(q) {
                l.setData(q);
                l.callbackFn(q)
            })
        });
        o.setName("Configuración");
        o.setRunFunction(function() {
            logger.info("App Loader - Cargando configuración...");
            com.bbva.kyop.util.SessionUtil.getUnitedConfigurationInfo(function(q) {
                o.setData(q);
                o.callbackFn(q)
            })
        });
        f.setName("Campañas");
        f.setRunFunction(function() {
            logger.info("App Loader - Cargando campañas...");
            com.bbva.kyop.controller.CampaignController.getActiveCampaigns(function(q) {
                f.setData(q);
                f.callbackFn(q)
            })
        });
        j.setName("Session Ping");
        j.setRunFunction(function() {
            logger.info("App Loader - Session ping...");
            com.bbva.kyop.controller.CoreController.buildSession(function(q) {
                j.setData(q);
                j.callbackFn(q)
            })
        });
        n.setName("Menú Vertical");
        n.setRunFunction(function() {
            logger.info("App Loader - Cargando menú vertical...");
            com.bbva.kyop.controller.MenuController.getLeftMenu(function(q) {
                n.setData(q);
                n.callbackFn(q)
            })
        });
        g.setName("Menú Cabecera 1");
        g.setRunFunction(function() {
            logger.info("App Loader - Cargando menú cabecera 1...");
            com.bbva.kyop.controller.MenuController.getFirstHeaderMenu(function(q) {
                g.setData(q);
                g.callbackFn(q)
            })
        });
        k.setName("Salto multipa�s");
        k.setRunFunction(function() {
            logger.info("Application Loader  - Cargando salto multipa�s...");
            com.bbva.kyop.controller.MenuController.getCountryJump(function(q) {
                k.setData(q);
                k.callbackFn(q)
            })
        });
        e.setName("Menú Cabecera 2");
        e.setRunFunction(function() {
            logger.info("App Loader - Cargando menú cabecera 2...");
            com.bbva.kyop.controller.MenuController.getSecondHeaderMenu(function(q) {
                e.setData(q);
                e.callbackFn(q)
            })
        });
        m.setName("Menú Pie");
        m.setRunFunction(function() {
            logger.info("App Loader - Cargando menú pie...");
            com.bbva.kyop.controller.MenuController.getFooterMenu(function(q) {
                m.setData(q);
                m.callbackFn(q)
            })
        });
        b.setName("Recursos externos Alertas y Mensajes");
        b.setRunFunction(function() {
            logger.info("App Loader - Cargando recursos externos Alertas y Mensajes...");
            com.bbva.kyop.controller.MenuController.loadActiveElements(function(q) {
                b.callbackFn(q)
            })
        });
        a.setName("Publicidad");
        a.setRunFunction(function() {
            logger.info("App Loader - Recuperando Publicidad...");
            com.bbva.kyop.controller.AdsController.getAllAds(function(q) {
                a.callbackFn(q)
            }, function() {
                a.callbackFn()
            })
        });
        d.setName("Combo selección de empresa");
        d.setRunFunction(function() {
            logger.info("App Loader - Cargando combo selección de empresa...");
            com.bbva.kyop.controller.HelpDeskController.getProductsForHelpDesk(function(q) {
                d.setData(q);
                d.callbackFn(q)
            })
        });
        h.setName("Mapping Códigos Invocador Inverso y Procesos");
        h.setRunFunction(function() {
            logger.info("App Loader - Cargando el mapeo de Ids de Procesos e Invocador Inverso...");
            var q = document.location.hostname;
            com.bbva.kyop.controller.ReverseCallerController.getReverseCallerMap(q, function(r) {
                h.setData(r);
                h.callbackFn(r)
            })
        })
    };
    this.createPlanA = function() {
        this.initTasksList();
        var t = new com.bbva.kyop.component.ExecutionPlanManager();
        var q = new Array();
        q.push(p);
        q.push(l);
        q.push(o);
        q.push(f);
        q.push(n);
        q.push(g);
        q.push(k);
        q.push(e);
        q.push(m);
        q.push(h);
        q.push(d);
        var s = new com.bbva.kyop.component.TaskGroup();
        s.setTaskList(q);
        s.setSequential(true);
        var r = new Array();
        r.push(s);
        t.setTaskList(r);
        t.setProcessPlanFunction(function() {
            logger.info("App FinishRun - Procesado de datos...");
            com.bbva.kyop.controller.DataProcessingController.processTranslations(p.getData());
            com.bbva.kyop.controller.DataProcessingController.processUserInfo(l.getData());
            com.bbva.kyop.controller.DataProcessingController.processPortalLanguage(function() {
                com.bbva.kyop.controller.DataProcessingController.processConfiguration(o.getData()[0].core);
                com.bbva.kyop.controller.DataProcessingController.processHomeSlices(o.getData()[0].homeSlices);
                com.bbva.kyop.controller.DataProcessingController.processActiveElements(o.getData()[0].activeElements);
                com.bbva.kyop.controller.DataProcessingController.processActiveCampaigns(f.getData());
                com.bbva.kyop.controller.DataProcessingController.processLeftMenu(n.getData());
                com.bbva.kyop.controller.DataProcessingController.processFirstHeaderMenu(g.getData());
                com.bbva.kyop.controller.DataProcessingController.processRwdMenus(n.getData(), g.getData()[0].menus);
                com.bbva.kyop.controller.DataProcessingController.processCountryJump(k.getData());
                com.bbva.kyop.controller.DataProcessingController.processSecondHeaderMenu(e.getData());
                com.bbva.kyop.controller.DataProcessingController.processFooterMenu(m.getData());
                com.bbva.kyop.controller.DataProcessingController.processActivityRegisterInfo(o.getData()[0].activityRegister);
                com.bbva.kyop.controller.DataProcessingController.processFavoriteAdmin(e.getData()[0].favorites);
                com.bbva.kyop.controller.DataProcessingController.processLoadCallerMap(h.getData());
                com.bbva.kyop.controller.DataProcessingController.processProductsForHelpDesk(d.getData());
                com.bbva.kyop.controller.DataProcessingController.processPortal()
            })
        });
        return t
    };
    this.createPlanB = function() {
        this.initTasksList();
        var v = new com.bbva.kyop.component.ExecutionPlanManager();
        var r = new Array();
        r.push(j);
        var q = new Array();
        q.push(p);
        q.push(l);
        q.push(o);
        q.push(f);
        q.push(n);
        q.push(g);
        q.push(k);
        q.push(e);
        q.push(m);
        q.push(h);
        q.push(d);
        var t = new com.bbva.kyop.component.TaskGroup();
        t.setTaskList(r);
        t.setSequential(false);
        var u = new com.bbva.kyop.component.TaskGroup();
        u.setTaskList(q);
        u.setSequential(false);
        var s = new Array();
        s.push(t);
        s.push(u);
        v.setTaskList(s);
        v.setProcessPlanFunction(function() {
            logger.info("App FinishRun - Procesado de datos...");
            com.bbva.kyop.controller.DataProcessingController.processTranslations(p.getData());
            com.bbva.kyop.controller.DataProcessingController.processUserInfo(l.getData());
            com.bbva.kyop.controller.DataProcessingController.processPortalLanguage(function() {
                com.bbva.kyop.controller.DataProcessingController.processConfiguration(o.getData()[0].core);
                com.bbva.kyop.controller.DataProcessingController.processHomeSlices(o.getData()[0].homeSlices);
                com.bbva.kyop.controller.DataProcessingController.processActiveElements(o.getData()[0].activeElements);
                com.bbva.kyop.controller.DataProcessingController.processActiveCampaigns(f.getData());
                com.bbva.kyop.controller.DataProcessingController.processLeftMenu(n.getData());
                com.bbva.kyop.controller.DataProcessingController.processFirstHeaderMenu(g.getData());
                com.bbva.kyop.controller.DataProcessingController.processRwdMenus(n.getData(), g.getData()[0].menus);
                com.bbva.kyop.controller.DataProcessingController.processCountryJump(k.getData());
                com.bbva.kyop.controller.DataProcessingController.processSecondHeaderMenu(e.getData());
                com.bbva.kyop.controller.DataProcessingController.processFooterMenu(m.getData());
                com.bbva.kyop.controller.DataProcessingController.processActivityRegisterInfo(o.getData()[0].activityRegister);
                com.bbva.kyop.controller.DataProcessingController.processFavoriteAdmin(e.getData()[0].favorites);
                com.bbva.kyop.controller.DataProcessingController.processLoadCallerMap(h.getData());
                com.bbva.kyop.controller.DataProcessingController.processProductsForHelpDesk(d.getData());
                com.bbva.kyop.controller.DataProcessingController.processPortal()
            })
        });
        return v
    };
    this.createPlanC = function() {
        this.initTasksList();
        var x = new com.bbva.kyop.component.ExecutionPlanManager();
        var r = new Array();
        r.push(j);
        var q = new Array();
        q.push(p);
        q.push(l);
        q.push(o);
        q.push(f);
        q.push(n);
        var w = new Array();
        w.push(g);
        w.push(k);
        w.push(e);
        w.push(m);
        w.push(h);
        w.push(d);
        var u = new com.bbva.kyop.component.TaskGroup();
        u.setTaskList(r);
        u.setSequential(false);
        var v = new com.bbva.kyop.component.TaskGroup();
        v.setTaskList(q);
        v.setSequential(false);
        var t = new com.bbva.kyop.component.TaskGroup();
        t.setTaskList(w);
        t.setSequential(false);
        var s = new Array();
        s.push(u);
        s.push(v);
        s.push(t);
        x.setTaskList(s);
        x.setProcessPlanFunction(function() {
            logger.info("App FinishRun - Procesado de datos...");
            com.bbva.kyop.controller.DataProcessingController.processTranslations(p.getData());
            com.bbva.kyop.controller.DataProcessingController.processUserInfo(l.getData());
            com.bbva.kyop.controller.DataProcessingController.processPortalLanguage(function() {
                com.bbva.kyop.controller.DataProcessingController.processConfiguration(o.getData()[0].core);
                com.bbva.kyop.controller.DataProcessingController.processHomeSlices(o.getData()[0].homeSlices);
                com.bbva.kyop.controller.DataProcessingController.processActiveElements(o.getData()[0].activeElements);
                com.bbva.kyop.controller.DataProcessingController.processActiveCampaigns(f.getData());
                com.bbva.kyop.controller.DataProcessingController.processLeftMenu(n.getData());
                com.bbva.kyop.controller.DataProcessingController.processFirstHeaderMenu(g.getData());
                com.bbva.kyop.controller.DataProcessingController.processRwdMenus(n.getData(), g.getData()[0].menus);
                com.bbva.kyop.controller.DataProcessingController.processCountryJump(k.getData());
                com.bbva.kyop.controller.DataProcessingController.processSecondHeaderMenu(e.getData());
                com.bbva.kyop.controller.DataProcessingController.processFooterMenu(m.getData());
                com.bbva.kyop.controller.DataProcessingController.processActivityRegisterInfo(o.getData()[0].activityRegister);
                com.bbva.kyop.controller.DataProcessingController.processFavoriteAdmin(e.getData()[0].favorites);
                com.bbva.kyop.controller.DataProcessingController.processLoadCallerMap(h.getData());
                com.bbva.kyop.controller.DataProcessingController.processProductsForHelpDesk(d.getData());
                com.bbva.kyop.controller.DataProcessingController.processPortal()
            })
        });
        return x
    };
    this.createPlanD = function() {
        this.initTasksList();
        var x = new com.bbva.kyop.component.ExecutionPlanManager();
        var s = new com.bbva.kyop.component.Task();
        s.setName("Master Request");
        s.setRunFunction(function() {
            logger.info("App Loader - Master request...");
            com.bbva.kyop.controller.CoreController.getMasterRequest(function(y) {
                s.setData(y);
                s.callbackFn(y)
            })
        });
        var u = new com.bbva.kyop.component.Task();
        u.setName("Recursos externos Alertas y Mensajes");
        u.setRunFunction(function() {
            logger.info("App Loader - Cargando recursos externos Alertas y Mensajes...");
            com.bbva.kyop.controller.MenuController.loadActiveElements(function(y) {
                u.callbackFn(y)
            })
        });
        var r = new Array();
        r.push(s);
        var q = new Array();
        q.push(u);
        var v = new com.bbva.kyop.component.TaskGroup();
        v.setTaskList(r);
        v.setSequential(true);
        var w = new com.bbva.kyop.component.TaskGroup();
        w.setTaskList(q);
        w.setSequential(false);
        var t = new Array();
        t.push(v);
        x.setTaskList(t);
        x.setProcessPlanFunction(function() {
            logger.info("App FinishRun - Procesado de datos...");
            com.bbva.kyop.controller.DataProcessingController.processTranslations(s.getData()[0].translations);
            com.bbva.kyop.controller.DataProcessingController.processUserInfo(s.getData()[0].userDto);
            com.bbva.kyop.controller.DataProcessingController.processPortalLanguage(function() {
                com.bbva.kyop.controller.DataProcessingController.processConfiguration(s.getData()[0].unitedConfiguration[0].core);
                com.bbva.kyop.controller.DataProcessingController.processHomeSlices(s.getData()[0].unitedConfiguration[0].homeSlices);
                com.bbva.kyop.controller.DataProcessingController.processActiveElements(s.getData()[0].unitedConfiguration[0].activeElements);
                com.bbva.kyop.controller.DataProcessingController.processActiveCampaigns(s.getData()[0].activeCampaigns);
                com.bbva.kyop.controller.DataProcessingController.processLeftMenu(s.getData()[0].leftMenus);
                com.bbva.kyop.controller.DataProcessingController.processFirstHeaderMenu(s.getData()[0].headerFirstLevelMenus);
                com.bbva.kyop.controller.DataProcessingController.processCountryJump(s.getData()[0].countries);
                com.bbva.kyop.controller.DataProcessingController.processSecondHeaderMenu(s.getData()[0].headerSecondLevelMenus);
                com.bbva.kyop.controller.DataProcessingController.processFooterMenu(s.getData()[0].footerMenus);
                com.bbva.kyop.controller.DataProcessingController.processActivityRegisterInfo(s.getData()[0].unitedConfiguration[0].activityRegister);
                com.bbva.kyop.controller.DataProcessingController.processFavoriteAdmin(s.getData()[0].headerSecondLevelMenus[0].favorites);
                com.bbva.kyop.controller.DataProcessingController.processLoadCallerMap(s.getData()[0].processesReverseCaller);
                com.bbva.kyop.controller.DataProcessingController.processProductsForHelpDesk(s.getData()[0].productForHelpDesk);
                com.bbva.kyop.controller.DataProcessingController.processPortal()
            })
        });
        return x
    };
    this.createPlanJ = function() {
        this.initTasksList();
        var u = new com.bbva.kyop.component.ExecutionPlanManager();
        var r = new com.bbva.kyop.component.Task();
        r.setName("Master Request");
        r.setRunFunction(function() {
            logger.info("App Loader - Master request...");
            com.bbva.kyop.controller.CoreController.getMasterRequest(function(v) {
                r.setData(v);
                r.callbackFn(v)
            })
        });
        var q = new Array();
        q.push(r);
        var t = new com.bbva.kyop.component.TaskGroup();
        t.setTaskList(q);
        t.setSequential(true);
        var s = new Array();
        s.push(t);
        u.setTaskList(s);
        u.setProcessPlanFunction(function() {
            logger.info("App FinishRun - Procesado de datos...");
            com.bbva.kyop.controller.DataProcessingController.processTranslations(r.getData()[0].translations);
            com.bbva.kyop.controller.DataProcessingController.processUserInfo(r.getData()[0].userDto);
            com.bbva.kyop.controller.DataProcessingController.processPortalLanguage(function() {
                com.bbva.kyop.controller.DataProcessingController.processConfiguration(r.getData()[0].unitedConfiguration[0].core);
                com.bbva.kyop.controller.DataProcessingController.processActivityRegisterInfo(r.getData()[0].unitedConfiguration[0].activityRegister);
                if (!com.bbva.kyop.controller.DataProcessingController.redirectToLoginIfUserServicesIsEmpty()) {
                    com.bbva.kyop.controller.DataProcessingController.processActiveCampaigns(r.getData()[0].activeCampaigns);
                    com.bbva.kyop.controller.DataProcessingController.processHomeSlices(r.getData()[0].unitedConfiguration[0].homeSlices);
                    com.bbva.kyop.controller.DataProcessingController.processLeftMenu(r.getData()[0].leftMenus);
                    com.bbva.kyop.controller.DataProcessingController.processFirstHeaderMenu(r.getData()[0].headerFirstLevelMenus);
                    com.bbva.kyop.controller.DataProcessingController.processRwdMenus(r.getData()[0].leftMenus, r.getData()[0].headerFirstLevelMenus[0].menus);
                    com.bbva.kyop.controller.DataProcessingController.processCountryJump(r.getData()[0].countries);
                    com.bbva.kyop.controller.DataProcessingController.processSecondHeaderMenu(r.getData()[0].headerSecondLevelMenus);
                    com.bbva.kyop.controller.DataProcessingController.processFooterMenu(r.getData()[0].footerMenus);
                    com.bbva.kyop.controller.DataProcessingController.processFavoriteAdmin(r.getData()[0].headerSecondLevelMenus[0].favorites);
                    com.bbva.kyop.controller.DataProcessingController.processLoadCallerMap(r.getData()[0].processesReverseCaller);
                    com.bbva.kyop.controller.DataProcessingController.processProductsForHelpDesk(r.getData()[0].productForHelpDesk);
                    com.bbva.kyop.controller.DataProcessingController.processFrequentlyOperations(r.getData()[0].frequentlySectionVisited);
                    com.bbva.kyop.controller.DataProcessingController.processActiveElements(r.getData()[0].unitedConfiguration[0].activeElements);
                    com.bbva.kyop.controller.DataProcessingController.processRedirecciones(r.getData()[0].redirectionOptions);
                    com.bbva.kyop.controller.DataProcessingController.processPortal()
                }
            })
        });
        return u
    }
};
com.bbva.kyop.controller.PrintController = new function() {
    var a = "#kyop-body-table-td";
    var b = function(e) {
        if (typeof(e) == "undefined") {
            return $(a)
        }
        return $(e)
    };
    var d = function(f) {
        var e = window.open();
        e.document.write(f.html());
        e.print();
        e.close()
    };
    this.print = function(f) {
        var e = b(f);
        if (typeof(e) != "undefined") {
            d(e)
        }
    };
    this.windowPrint = function() {
        if ($("#kyop-central-load-area").is(":hidden")) {
            window.print()
        } else {
            $("#kyop-central-load-area")[0].contentWindow.focus();
            if (com.bbva.kyop.controller.CoreController.isInternetExplorer()) {
                var g = $("#kyop-central-load-area")[0];
                try {
                    g.contentWindow.document.execCommand("print", false, null)
                } catch (f) {
                    g.contentWindow.print()
                }
            } else {
                $("#kyop-central-load-area")[0].contentWindow.print()
            }
        }
    }
};
com.bbva.kyop.controller.MenuRwdController = new function() {
    var b = "#kyop-menu-rwd";
    this.showOrHiddeMenuRwd = function() {
        $(window.top).scrollTop(0);
        var d = $(b);
        if (a()) {
            this.changeAttrAsrcForSrc(b);
            this.slideDownMenu()
        } else {
            this.slideUpMenu()
        }
    };
    this.hideRwdMenuIfISTerminalOrMoreThanSecondLevel = function(d) {
        if (!a()) {
            if (d.terminal || d.level >= 2) {
                this.slideUpMenu()
            }
        }
    };
    this.changeAttrAsrcForSrc = function(d) {
        $(d + " [asrc]").each(function() {
            $(this).attr("src", $(this).attr("asrc"));
            $(this).removeAttr("asrc")
        })
    };
    var a = function() {
        return $(b).length == 0 || $(b).is(":hidden")
    };
    this.slideDownMenu = function() {
        $(b).slideDown()
    };
    this.slideUpMenu = function() {
        $(b).slideUp()
    }
};
$(document).ready(function() {
    logger.info("app.js - Aplicación preparada para el inicio");
    com.bbva.kyop.util.AjaxUtil.setPortableVersion(false);
    com.bbva.kyop.controller.ApplicationController.initApp()
});