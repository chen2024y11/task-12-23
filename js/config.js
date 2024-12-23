(function(window) {
    function setSizeConfig(max, unit) {
        var config = {};
        for(var i = 0; i < max; i++) {
            config[i] = `${i}px`;
        }
        return config;
    }
    window.tailwind.config = {
        // 开启暗黑模式
        darkMode: 'selector',
        // 扩展样式主题
        theme: {
          extend: {
            zIndex: {
              "999": "999"
            },
            backgroundImage: {
                'topBackground': "linear-gradient(90deg, #934BFF, #5F3AFC)",
                "top-1": "linear-gradient(-67deg, #934BFF, #5F3AFC)",
                "top-2": "linear-gradient(90deg, #934BFF, #5F3AFC)",
                "banner": "linear-gradient(90deg, rgba(147,75,255,0.75), rgba(95,58,252,0.75))"
            },
            backgroundColor: {
              "nav": "#663CFC",
            },
            boxShadow: {
              "custom": "0px 6px 24px 0px rgba(116,65,253,0.5)",
              "custom1": "0px 15px 24px 0px rgba(23,3,79,0.1)",
              "custom2": "0px 15px 24px 0px rgba(23,3,79,0.1)",
            },
            colors: {
              primary: "#000000",
              fontColor: "#7E44FE",
              fontColor1: "#673DFC",
              color2: "#191919",
              color3: "#663CFC",
              color4: "#FEFEFE",
              color5: "#E6E6E6",
            },
            width: setSizeConfig(10800, "px"),
            height: setSizeConfig(10800, "px"),
            fontSize: setSizeConfig(200, "px"),
            margin: setSizeConfig(1000, "px"),
            padding: setSizeConfig(1000, "px"),
            borderRadius: setSizeConfig(1000, "px"),
            lineHeight: setSizeConfig(1000, "px"),
            top: setSizeConfig(1000, "px"),
            borderWidth: setSizeConfig(1000, "px")
          },
        },
      };
})(window)