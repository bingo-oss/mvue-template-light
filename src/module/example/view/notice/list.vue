<template>
  <div class="layout">
    <Table :columns="columns" :data="dataNew"></Table>
  </div>
</template>
<script>

export default {
  data: function () {
    return {
      columns: [
        {
          title: '标题',
          key: 'title',
          render: (h, params) => {
            const row = params.row;
            const name = row.name;
            const title = row.title;

            return h('div', {
              style: {
                padding: '2px',
                cursor: 'pointer'
              },
              domProps: {
                innerHTML: title
              },
              on: {
                click: () => {
                  this.show(params.index);
                }
              }
            });
          }
        },
        {
          title: '状态',
          key: 'static'
        },
        {
          title: '时间',
          key: 'updateAt'
        },
        {
          title: '操作',
          key: 'action',
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.edit(params.index)
                  }
                }
              }, '编辑后再发送'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.toTop(params.index)
                  }
                }
              }, '设为置顶')
            ]);
          }
        }
      ],
      data: [
        {
          name: '李悦青',
          title: '欢迎加入',
          static: '共1人',
          updateAt: '2018-05-08 14：54',
          content: '欢迎加入'
        },
        {
          name: '李悦青1',
          title: 'Jim Green',
          static: '共0人',
          updateAt: '2018-05-08 14：54',
          content: '欢迎加入2'
        },
        {
          name: '李悦青2',
          title: 'Joe Black',
          static: '共0人',
          updateAt: '2018-05-08 14：54',
          content: '欢迎加入3'
        },
        {
          name: '李悦青3',
          title: 'Jon Snow',
          static: '共0人',
          updateAt: '2018-05-08 14：54',
          content: '欢迎加入4'
        }
      ],
      dataNew: []
    };
  },
  methods: {
    edit (index) {
      this.$router.push({name: 'notice-edit', params: {id: index}});
    },
    toTop (index) {
      this.$Modal.confirm({
        title: '提示',
        content: '<p class="fs14">置顶后，该公告会出现在工作页面顶部，确认置顶该条公告吗？</p>',
        onOk : () => {
          setTimeout( ()=>{
            this.data.unshift(this.data[index]);
            this.data.splice(index+1, 1);
          });
        }
      });

    },
    show (index){
      this.$router.push({name: 'notice-detail', params: {id: index}});
    },
    getData (){
      this.dataNew =  this.data;
    }
  },
  mounted: function () {
    this.getData();


  },
  watch: {
    '$route' (to, from){
      this.getData();
    }
  },
  components: {

  }
}
</script>
<style lang="scss">
</style>

