<script lang="ts">
export default {
  data() {
    return {
      activeTab: 0,
      tabs: [
        {
          name: "iO Digital",
          rolePrefix: "Intern Front End Development",
          companyName: "iO Digital",
          companyUrl: "https://www.iodigital.com",
          period: "Feb. 2024 – July 2024",
          tasks: [
            "Developed the front end of a webapp using React.js,",
            "Integrated the webapp with a RESTful API,",
            "Changed the legacy code to newer standards"
          ]
        },
        {
          name: "Ahold Delhaize",
          roles: [
            {
              role: "Senior B",
              period: "Nov. 2023 – present",
              tasks: [
                "Leading a team in the bakery department,",
                "Overseeing the production of breads and pastries,",
                "Ensuring the quality of products meets the company's standards"
              ]
            },
            {
              role: "Bakery",
              period: "May 2022 – Oct. 2023",
              tasks: []
            },
            {
              role: "Cashier and Stock Clerk",
              period: "Mar. 2017 – Jan. 2020",
              tasks: []
            }
          ],
          companyName: "Ahold Delhaize",
          companyUrl: "https://www.ah.nl"
        },
        {
          name: "AMW Veranda",
          rolePrefix: "Freelance Web Development",
          companyName: "AMW Veranda",
          companyUrl: "https://www.amwveranda.nl",
          period: "Dec. 2022 – Mar. 2023",
          tasks: [
            "Responsible for creating the backend;",
            "Contributed to the Digital of the user interface and its research."
          ]
        },
        {
          name: "McDonald's",
          rolePrefix: "All-rounder",
          companyName: "McDonald's",
          companyUrl: "https://www.mcdonalds.com",
          period: "Jan. 2020 – May 2022",
          tasks: ["preparing food,", "serving customers,", "operating the cash register"]
        }
      ]
    };
  },
  computed: {
    indicatorStyle() {
      if (window.innerWidth <= 768) {
        const activeTabElement = document.querySelectorAll(".tab-title")[this.activeTab];
        const tabWidth = activeTabElement ? (activeTabElement as HTMLElement).offsetWidth : 0;
        const tabLeft = activeTabElement ? (activeTabElement as HTMLElement).offsetLeft : 0;
        return {
          left: `${tabLeft}px`,
          width: `${tabWidth}px`
        };
      } else {
        return {
          top: `${this.activeTab * 45}px`
        };
      }
    }
  }
};
</script>

<template>
  <div class="vertical-tabs">
    <div class="tab-titles">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ active: activeTab === index }"
        @click="activeTab = index"
        class="tab-title"
      >
        {{ tab.name }}
      </div>
      <div class="active-indicator" :style="indicatorStyle"></div>
    </div>
    <div class="tab-content">
      <div v-for="(tab, index) in tabs" :key="index" v-show="activeTab === index">
        <div v-if="tab.roles">
          <div v-for="(role, roleIndex) in tab.roles" :key="roleIndex">
            <h3 style="padding-top: 0.5em">
              {{ role.role }}
              <span style="color: #796bce">
                @ {{ " " }}
                <a :href="tab.companyUrl" target="_blank" class="link">
                  {{ tab.companyName }}
                </a></span
              >
            </h3>
            <p class="tab-period">{{ role.period }}</p>
            <ul>
              <li v-for="(task, i) in role.tasks" :key="i">- {{ task }}</li>
            </ul>
          </div>
        </div>

        <div v-else>
          <h3>
            {{ tab.rolePrefix }}
            <span style="color: #796bce">
              @ {{ " " }}
              <a :href="tab.companyUrl" target="_blank" class="link">
                {{ tab.companyName }}
              </a>
            </span>
          </h3>
          <p class="tab-period">{{ tab.period }}</p>
          <ul>
            <li v-for="(task, i) in tab.tasks" :key="i">- {{ task }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.vertical-tabs {
  display: flex;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  flex-direction: row;
}

.tab-period {
  color: rgb(128, 125, 149);
  padding-top: 0.25em;
  padding-bottom: 0.5em;
}

.tab-titles {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  border-left: 2px solid rgb(142, 139, 158);
}

.tab-title {
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  height: 40px;
  line-height: 40px;
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
}

.tab-title:hover {
  color: #6853f1;
}

.tab-title.active {
  color: #6853f1;
}

.active-indicator {
  position: absolute;
  width: 2.6px;
  height: 40px;
  background-color: #6853f1;
  left: -2.4px;
  top: 0;
  transition: top 0.3s ease;
  z-index: 2;
}

.tab-content {
  flex: 1;
  padding: 10px 20px;
}

@media (max-width: 768px) {
  .vertical-tabs {
    flex-direction: column;
  }

  .tab-titles {
    flex-direction: row;
    margin-left: 0;
    overflow-y: scroll;
    border-left: none;
    border-bottom: 2px solid rgb(142, 139, 158);
  }

  .tab-title {
    flex: 1;
    padding: 10px;
    height: auto;
    line-height: normal;
    text-align: center;
  }

  .active-indicator {
    height: 2px;
    width: 100%;
    left: 0;
    bottom: -1.8px;
    top: auto;
    transition:
      left 0.3s ease,
      width 0.3s ease;
  }
}
</style>
